/*
Description
This is a vRO action that will choose the vSphere template to clone based on user input.
Author
Brett - brettrath.dev
*/

if (os == "windows"){
	var temp = os + winVer;
	}else {
		var temp = os + "7";
		}
var template = [];
switch (temp) {
	case "windowswin2016":
		template.push("windows16");
		break;
	case "windowswin2012":
		template.push("windows12r2");
		break;	
	case "linux7":
		template.push("redhat7");
		break;	
	case "":
		template.push("Please complete the form");	
}
						
return template;
var template = [""];