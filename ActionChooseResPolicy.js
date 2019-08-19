/*
Description
This is a vRO action that chooses the reservation policy for vRA to use based on user input.
Author
Brett - brettrath.dev
*/

var output = [];
var temp = location + usage + env + os + db;
var vcacHost = Server.findAllForType("VCACCAFE:VCACHost")[0];

//System.log(vcacHost);
var Reservation = vCACCAFEEntitiesFinder.findReservationPolicies(vcacHost);
System.log(temp);
switch(temp){
	case "dc2appprdlinuxnull":
		var clust = "DC2Redhat";
		break;
	case "dc2appdevlinuxnull":
		var clust = "DC2Redhat";
		break;
	case "dc2apptstlinuxnull":
		var clust = "DC2Redhat";
		break;
	case "dc2dbprdlinuxora":
		var clust = "DC2Oracle";
		break;
	case "dc2dbprdlinuxing":
		var clust = "DC2Redhat";
		break;	
	case "dc2appprdwindowsnull":
		var clust = "DC2Windows";
		break;
	case "dc2appdevwindowsnull":
		var clust = "DC2Windows";
		break;
	case "dc2apptstwindowsnull":
		var clust = "DC2Windows";
		break;
	case "dc2dbprdwindowssql":
		var clust = "DC2SQL";
		break;	
	case "dc2dbtstwindowssql":
		var clust = "DC2SQL";
		break;
	case "dc2dbdevwindowssql":
		var clust = "DC2SQL";
		break;
	case "dc1appprdlinuxnull":
		var clust = "DC1Redhat";
		break;
	case "dc1appdevlinuxnull":
		var clust = "DC1Redhat";
		break;
	case "dc1apptstlinuxnull":
		var clust = "DC1Redhat";
		break;
	case "dc1appstglinuxnull":
		var clust = "DC1Redhat";
		break;
	case "dc1dbprdlinuxing":
		var clust = "DC1Redhat";
		break;	
	case "dc1dbtstlinuxing":
		var clust = "DC1Redhat";
		break;
	case "dc1dbdevlinuxing":
		var clust = "DC1Redhat";
		break;
	case "dc1appprdwindowsnull":
		var clust = "DC1Windows";
		break;
	case "dc1appdevwindowsnull":
		var clust = "DC1Windows";
		break;
	case "dc1webdevwindowsnull":
		var clust = "DC1Windows";
		break;
	case "dc1webtstwindowsnull":
		var clust = "DC1Windows";
		break;
	case "dc1webstgwindowsnull":
		var clust = "DC1Windows";
		break;
	case "dc1webprdwindowsnull":
		var clust = "DC1Windows";
		break;				
	case "dc1apptstwindowsnull":
		var clust = "DC1Windows";
		break;
	case "dc1appstgwindowsnull":
		var clust = "DC1Windows";
		break;
	case "dc1dbprdwindowssql":
		var clust = "DC1SQL";
		break;
	case "dc1dbdevwindowssql":
		var clust = "DC1SQLDev";
		break;
	case "dc1dbtstwindowssql":
		var clust = "DC1SQLDev";
		break;
	case "dc1dbstgwindowssql":
		var clust = "DC1SQLDev";
		break;
	case "dc1appprdlinuxnull":
		var clust = "DC1Redhat";
		break;
	case "dc2sbappdevlinuxnull":
		var clust = "DC2Sandbox";
		break;
	case "dc2sbapptstlinuxnull":
		var clust = "DC2Sandbox";
		break;
	case "dc2sbappstglinuxnull":
		var clust = "DC2Sandbox";
		break;
	case "dc2sbdbprdlinuxing":
		var clust = "DC2Sandbox";
		break;	
	case "dc2sbdbtstlinuxing":
		var clust = "DC2Sandbox";
		break;
	case "dc2sbdbdevlinuxing":
		var clust = "DC2Sandbox";
		break;
	case "dc2sbappprdwindowsnull":
		var clust = "DC2Sandbox";
		break;
	case "dc2sbappdevwindowsnull":
		var clust = "DC2Sandbox";
		break;
	case "dc2sbapptstwindowsnull":
		var clust = "DC2Sandbox";
		break;
	case "dc2sbappstgwindowsnull":
		var clust = "DC2Sandbox";
		break;
	case "dc2sbdbprdwindowssql":
		var clust = "DC2Sandbox";
		break;
	case "dc2sbdbdevwindowssql":
		var clust = "DC2Sandbox";
		break;
	case "dc2sbdbtstwindowssql":
		var clust = "DC2Sandbox";
		break;
	case "dc2sbdbstgwindowssql":
		var clust = "DC2Sandbox";
		break;								
	}
System.log(clust);	
for each (var reservationPolicy in Reservation) {
	//System.log(r)	
	var reservationPolicyId = reservationPolicy.getId();
	var reservationPolicyName = reservationPolicy.getName();
	var reservationPolicyProperties = new Properties();
	System.log(reservationPolicyName + " listed");
	//System.log(reservationPolicyId);
		
	if(reservationPolicyName == clust){
		System.log("matching...");
		reservationPolicyProperties.put(reservationPolicyId,reservationPolicyName);
		System.log(reservationPolicyName);
		System.log(reservationPolicyId);
		break;
	}
}
System.log(reservationPolicyProperties.keys);
return reservationPolicyProperties;