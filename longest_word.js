//function longest_word(web, Developers){  
	// return Developers.reduce(function(lname, word){  
	// 	return Developers.length > web.length ? lname : word;  
	// },
   // function longest_word(str) {
   //  var words = str.split(' ');
   //  return words.reduce(words);
   // }   

   // longest_word(' ') 

function longest_word(str) {
  var words = str.split(" ");
  var words_count = words.length;

  var longest_word_length = 0;

 for(var i = 0; i < words_count; i++){
   if(longest_word_length < words[i].length){
       longest_word_length = words[i].length;
   }
}
return longest_word_length;
}