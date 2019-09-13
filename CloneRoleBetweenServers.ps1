<#
.SYNOPSIS
    Clones a VI role from one vCenter server to another.
.DESCRIPTION
    This script will clone the role you specify from the vCenter you specify to all other connected vCenter instances.  It starts by telling you what vCenters you are connected to.  Then you can use that list to input which vCenter will be your source.  Once selecting the source, the script will set all other connected vCenters as destinations for the clone.  After giving verification that you entered everything correctly, it will proceed to display all roles on the source vCenter.  Then you will be prompted to pick the role you want to clone, and will display to you the properties of that role.  The script will populate a variable with the role's privileges and display to the user.
.EXAMPLE
    PS C:\> .\CloneRoleBetweenServers.ps1
    Executes the script.  No inputs required/accepted.
.NOTES
    Credit to Grzegorz at https://psvmware.wordpress.com/2012/07/19/clone-roles-between-two-virtual-center-servers/ for the cloning functionailty.  Willie at adminwillie.com added the source and destination variable construction, and the foreach loop to do multiple clones.
#>

# Show currently connected vCenter servers
Write-Host -ForegroundColor Green  'Currently connected vCenter servers:'
$global:DefaultVIServers | Out-Host

# Prompt for the source vCenter and repeat it back.
$sourcevc = Read-Host -Prompt 'Input the source vCenter server'
Write-Host -ForegroundColor Green  "Source vCenter server:"
$sourcevc | Out-Host

# Set the remaining vCenters as destinations and show the user
[System.Collections.ArrayList]$destvcs = $global:DefaultVIServers.Name
$destvcs.Remove("$sourcevc")
Write-Host -ForegroundColor Green  "Destination vCenter servers:"
$destvcs | Out-Host

# Prompt to continue
Write-Host "`n"
Read-Host -Prompt "Press Enter to continue or CTRL+C to quit" 

# Display all roles on the source vCenter
Write-Host "Roles on $sourcevc" 
Get-VIRole -Server $sourcevc

# Prompt for the role to be cloned and display its properties
Write-Host "`n"
$role = Read-Host -Prompt 'Input the role to clone'
Get-VIRole -Server $sourcevc -Name $role | fl

# Populate variable with role's privileges and display to user
[string[]]$privsforRoleFromSource=Get-VIPrivilege -Role (Get-VIRole -Name $role -server $sourcevc) |%{$_.id}
Write-Host "`n"
Write-Host -ForegroundColor Green  "Setting the following privileges in $role on $destvcs"
Write-Host "`n"
$privsforRoleFromSource | Out-Host

# Loop through destination vCenter servers, creating and populating the role to match source vCenter.
foreach ($destvc in $destvcs) {
    New-VIRole -Server $destvc -Name $role
    Set-VIRole -Role (Get-VIRole -Name $role -Server $destvc) -AddPrivilege (Get-VIPrivilege -id $privsforRoleFromSource -server $destvc)
}