/*
Description
This is a vRO action that populates the vRA Custom Form's dropdown with valid maintenance windows based on user input.
Author
Brett - brettrath.dev
*/

//Pull in the Configuration Element
var category = Server.getConfigurationElementCategoryWithPath("Sheetz");
var elements = category.configurationElements;

//Pull in the OS and Environment from the form
var tempPatch = [];

//Loop through available Elements to Find the one we want
for (i = 0; i < elements.length; i++){
	
	if (elements[i].name == "kacePatchWindows"){
		if (os == "linux"){
			System.log("Linux");
			var attributeValue = elements[i].getAttributeWithKey("linuxArray").value;
		}else {
			System.log("Windows");
			var attributeValue = elements[i].getAttributeWithKey("windowArray").value;
		}
		//Assign the Configuration Element's Attribute value to a variable	
		//var attributeValue = elements[i].getAttributeWithKey("windowArray").value;
		//System.log(attributeValue);
		//Determine if the value is valid
		if (attributeValue != null) {
			//Loop through each array value and add it to an array variable for each type of system
			for(j = 0; j < attributeValue.length; j++){
				//System.log(attributeValue[j]);
				tempPatch.push(attributeValue[j]);
				
			}
		}
	}
}

tempPatch.sort();
var returnPatch = [];
//Extract only the applicable windows for the environment selected
switch(env){
	case "prd":
		for(q = 0; q < tempPatch.length;q++){
			var h = tempPatch[q].search(/Auto.*Patch\sGroup.*Week\s3.*/);
			if(h != -1){
				returnPatch.push(tempPatch[q]);
				//System.log(returnPatch[q]);
			}
		}
		break; 
	case "stg":
		for(q = 0; q < tempPatch.length;q++){
			var h = tempPatch[q].search(/Auto.*Patch\sGroup.*Week\s2.*/);
			if(h != -1){
				returnPatch.push(tempPatch[q]);
				//System.log(returnPatch[q]);
			}
		}
		break; 
	default:
		for(q = 0; q < tempPatch.length;q++){
			var h = tempPatch[q].search(/Auto.*Patch\sGroup.*Week\s1.*/);
			if(h != -1){
				returnPatch.push(tempPatch[q]);
				//System.log(returnPatch[q]);
			}
		}
		break; 
}

//System.log(returnPatch);
return returnPatch;