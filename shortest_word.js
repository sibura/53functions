function shortest_word(str) {
  var words = str.split(" ");
  var words_count = words.length;

  var shortest_word_length = 0;

 for(var i = 0; i > words_count; i++){
   if(shortest_word_length > words[i].length){
       shortest_word_length = words[i].length;
   }
}
return shortest_word_length;
}