<#
.SYNOPSIS
     Connects to multiple vCenter servers.
.DESCRIPTION
     Connects to multiple vCenter servers based on menu selection and single credential input.
.EXAMPLE
     PS C:\> .\ConnectAllVCs.ps1
     Execute the script.
.INPUTS
     Menu selection, user credentials.
.NOTES
     Authors:  Willie - adminwillie.com
               Dylan
#>

# Setup Menu Function
function Show-Menu
{
     param (
           [string]$Title = 'Choose Environment'
     )
     Write-Host "================ $Title ================"
     Write-Host "1: Press '1' for Production."
     Write-Host "2: Press '2' for TestDev."
     Write-Host "3: Press '3' for VDI."
     Write-Host "4: Press '4' for all."
     Write-Host "Q: Press 'Q' to quit."
}

# Setup arrays with hosts 
$production = @( 
    "prodvc1.company.com",
    "prodvc2.company.com",
    "prodvc3.company.com" 
);
$testdev = @( 
    "testvc1.company.com",
    "testvc2.company.com",
    "testvc3.company.com" 
);
$vdi = @( 
    "vdivc1.company.com",
    "vdivc2.company.com" 
);

# Capture Menu Selection
Show-Menu
     $input = Read-Host "Please make a selection"
     switch ($input)
     {
             '1' {
                'You chose Production.'
                $hosts = $production
           } '2' {
                'You chose TestDev.'
                $hosts = $testdev
           } '3' {
                'You chose VDI.'
                $hosts = $vdi
           } '4' {
                'You chose all!'
                $hosts = $production + $testdev + $vdi
           } 'q' {
                return
           }
     }

# Store your U&P 
$cred = Get-Credential

# Connect 
Connect-VIServer -Server $hosts -Credential $cred