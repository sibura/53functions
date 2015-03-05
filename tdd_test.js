TestMyCode.run("testing hello_world function", function(assert){
      var result = hello();
      // is the result as we expected?
      assert.equals("hello world", result , "testing hello function");
});

TestMyCode.run("testing hello_uppercase function", function(assert){
	var result = hello_uppercase("sibura");
	assert.equals("hello, sibura", result , "testing hello_uppercas function");
});


TestMyCode.run("testing hello_joe function", function(assert){
	var result = hello_joe("bob");
	assert.equals("Hello",result , "testing hello_joe function");
});

TestMyCode.run("testing number_list function", function(assert) {
  var nArr = [1,2,3,4,5,6,7,8,9,10];
  var results = number_list(10);
  assert.equals(nArr.toString(), results.toString(), "testing number_list function");

});

TestMyCode.run("testin sum_numbers function", function(assert) {
  var results= sum_numbers(10);
  assert.equals(55, results,"testing sum_numbers function");

});
 results();
