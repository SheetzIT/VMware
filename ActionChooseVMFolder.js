/*
Description
This is a vRO action that will choose the appropriate vSphere VM Folder based on user input.
Author
Brett - brettrath.dev
*/

var backupFolder = [];
var name = location + dbType
var bckFld;
switch(name){
	case "dc1sql":
		bckFld = "BackupDC1SQL";
		break;
	case "dc1ora":
		bckFld = "BackupDC1Oracle";
		break;
	case "dc1null":
		bckFld = "BackupDC1All";
		break;
    case "dc2sql":
        bckFld = "BackupDC2SQL";
        break;
    case "dc2ora":
        bckFld = "BackupDC2Oracle";
        break;
    case "dc2null":
        bckFld = "BackupDC2All";
        break;
}
backupFolder.push(bckFld);
return backupFolder;