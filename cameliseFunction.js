function camelize(inputString, delimiter = "-"){
    
	var newInput = inputString.split(delimiter);
	

	let outPut = newInput.map(item => item.charAt(0).toUpperCase() + item.slice(1));

	

	let finalOutPut = outPut.join('');//

	 
	 /*if the first character of the input string is not a letter then the first character of the 
	 output must be uppercase */
	if (inputString.charAt(0).toUpperCase() == inputString.charAt(0).toLowerCase()) {
	
		return  finalOutPut.charAt(0).toUpperCase() + finalOutPut.slice(1);

	} else{
		
		return  finalOutPut.charAt(0).toLowerCase() + finalOutPut.slice(1);
	}
}
