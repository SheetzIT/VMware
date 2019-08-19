/*
Description
This is a vRO action that will build a hostname to our standard based on input and verify it is not already registered with our IPAM.
Author
Brett - brettrath.dev
*/

if (environment == 'prd') {
	environment = '';
}

if (type == 'db') {
    usage = dbType;
	}else{usage = type;
}

if (clusterNode == '' || clusterNode === null){
	var hostname = desc + usage + environment + iteration;
	}else{
 		var hostname = desc + usage + environment + iteration + clusterNode;
}

var exists = System.resolveHostName(hostname);

if (typeof exists === "string"){
	//return exists;
	return hostname + " already exists!";
	}else{
		return hostname;
}