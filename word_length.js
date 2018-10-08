// function word_length(str){

//     var discount = 99.992.toFixed(2);
//     var discount2 = 99.999.toFixed(2);
// };

// function avg(str) {
// 		var wordSum = 0;
// 		var avg = 0;
		
//     	var splitStr = str.split(" ");
//     	for(var x = 0; x < splitStr.length; x++){
//     		wordSum += splitStr[x].length;
//     	}
//     	avg = wordSum/splitStr.length;
//     return avg.toFixed(0);
// }

function word_length(str) {
		var wordSum = 0;
		var avg = 0;
		
    	var splitStr = str.split(" ");
    	for(var x = 0; x < splitStr.length; x++){
    		wordSum += splitStr[x].length;
    	}
    	avg = wordSum/splitStr.length;
    return avg.toFixed(0)+" or " + avg.toFixed(2);
}