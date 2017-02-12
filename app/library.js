'use strict'
const dataTypes = function(data) {
	//Check if input data is a string!
	if(typeof(data) === "string") {
		const output = data.length;
		return output;
	} 
	//Check if input data is a boolean
	else if(typeof(data) === "boolean") {
		const output = "boolean";
		return output;
	}
	//Check if input data is a function
};