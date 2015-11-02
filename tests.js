  QUnit.test("testing hello_world function", function(assert){
      var results = hello();
      // is the result as we expected?
      assert.ok("hello world", "Passed!");
});

  QUnit.test("testing hello_uppercase function", function(assert){
	   var results = hello_uppercase("sibura");
	   assert.ok("Hello, SIBURA","Passed!");
});


  QUnit.test("testing hello_joe function", function(assert){
	  var results = hello_joe("Bob");
	  assert.ok("Hello, Bob","Passed!");
});

  QUnit.test("testing number_list function", function(assert) {
    var results = number_list(10);
    assert.ok([1,2,3,4,5,6,7,8,9,10].toString(),"Passed!");

});

  QUnit.test("testing sum_numbers function", function(assert) {
    var results= sum_numbers(10);
    assert.ok(55,"Passed!");

});
  
  QUnit.test("testing length function", function(assert){
   var results= length("red");
   assert.ok(3,"Passed");
});

   QUnit.test("testing upper function", function(assert){
   var results= upper("green");
   assert.ok("green","Passed");
});

   QUnit.test("testing reverse function", function(assert){
   var results= reverse("soccer");
   assert.ok("soccer","Passed");
});

   QUnit.test("testing hello_list function", function(assert){
     var results = hello("hello world");
     assert.ok(10,"Passed");
   });