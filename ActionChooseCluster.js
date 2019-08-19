/*
Description
This is a vRO action that chooses the vSphere Compute Cluster for vRA to use based on user input.
Author
Brett - brettrath.dev
*/

var output = [];
var temp = location + usage + env + os + db;
var vcacHost = Server.findAllForType("VCACCAFE:VCACHost")[0];

//System.log(vcacHost);
var Reservation = vCACCAFEEntitiesFinder.findReservationPolicies(vcacHost);

switch(temp){
	case "dc1appprdlinux":
		var clust = "DC1Redhat";
		break;
	case "dc1appdevlinux":
		var clust = "DC1Redhat";
		break;
	case "dc1apptstlinux":
		var clust = "DC1Redhat";
		break;
	case "dc2appprdlinux":
		var clust = "DC2Redhat";
		break;
	case "dc2appdevlinux":
		var clust = "DC2Redhat";
		break;
	case "dc2apptstlinux":
		var clust = "DC2Redhat";
		break;
	case "dc2dbprdlinuxora":
		var clust = "DC2Oracle";
		break;
	case "dc2appprdwin":
		var clust = "DC2Windows";
		break;
	case "dc2appdevwin":
		var clust = "DC2Windows";
		break;
	case "dc2apptstwin":
		var clust = "DC2Windows";
		break;
	case "dc2dbprdwinsql":
		var clust = "DC2SQL";
		break;	
	case "dc2dbtstwinsql":
		var clust = "DC2SQLDev";
		break;
	case "dc2dbdevwinsql":
		var clust = "DC2SQLDev";
		break;	
	}
//System.log(clust);	
for each (var r in Reservation) {
	//System.log(r)	
	//System.log(reservationPolicyName);
	var reservationPolicyId = r.getId(vcacHost);
	var reservationPolicyName = r.getName(vcacHost);
	if(reservationPolicyName == clust){
	
		System.log(reservationPolicyName);
		System.log(reservationPolicyId);
		output.push(reservationPolicyId);
	}
}

return output;