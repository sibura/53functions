function longest_word(name){  
	return name.reduce(function(lname, word){  
		return name.length > name.length ? lname : word;  
	},   
	"");  
};