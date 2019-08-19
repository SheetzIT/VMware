/*
Description
This is a vRO action that chooses the network for vRA to use based on user input.
Author
Brett - brettrath.dev
*/

var network = [];
var temp = location + usage + env;

switch(temp){
	case "dc1appprd":
		var net = "App-DC1";
		break;
	case "dc1appdev":
		var net = "App-Dev-DC1";
		break;
	case "dc1apptst":
		var net = "App-Test-DC1";
		break;
	case "dc2appprd":
		var net = "App-DC2";
		break;
	case "dc2appdev":
		var net = "App-Dev-DC2";
		break;
	case "dc2apptst":
		var net = "App-Test-DC2";
		break;								
	}
network.push(net);
return network;