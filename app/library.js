'use strict'
const dataTypes = function(data) {
	//Checking if data is a string!
	if(typeof(data) === "string") {
		const output = data.length;
		return output;
	} 
	//Checking if data is a number
	else if(typeof(data) === "boolean") {
		const output = "boolean";
		return output;
	}
};