function avg(str) {
		var wordSum = 0;
		var avg = 0;
		
    	var splitStr = str.split(" ");
    	for(var x = 0; x < splitStr.length; x++){
    		wordSum += splitStr[x].length;
    	}
    	avg = wordSum/splitStr.length;
    return avg.toFixed(0);
}