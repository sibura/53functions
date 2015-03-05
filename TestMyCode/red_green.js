function RedOrGreen(Id) {
	// body...
   this.makeGreen = function() {
   	// body...
   	document.getElementById(Id).style.backgroundColor = 'Green';
   }
   
   this.makeRed = function() {
   	// body...
   	document.getElementById(Id).style.backgroundColor = 'Red';
   }
}