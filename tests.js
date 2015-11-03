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
     assert.ok(10,"hello world");
   });

   // QUnit.test("testing high_low function", function(assert){
   //   var results = high_low(5,10,15,20);
   //   assert.ok(results, "20" +' '+"5");
   // });

///
   QUnit.test("testing count_words function", function(assert){
     var results = count_words("I am those words");
     assert.ok(13, results);
   });

   QUnit.test("testing sum_word_len function", function(assert){
     var results = sum_word_len("word are too long");
     assert.ok(4, results);
   });

   QUnit.test("testing longest_word  function", function(assert){
     var results = longest_word(["Web , Developer, Coders"]);
     assert.ok(results);
   });

   QUnit.test("testing shortest_word function", function(assert){
     var results = shortest_word();
     assert.ok(results, "");
   });

   QUnit.test("testing avg function", function(assert){
     var results = avg();
     assert.ok(results, "");
   });


   QUnit.test("testing start  function", function(assert){
     var results = start();
     assert.ok(results, "");
   });

   QUnit.test("testing ends  function", function(assert){
     var results = ends();
     assert.ok(results, "");
   });

   QUnit.test("testing occurs_most function", function(assert){
     var results = occurs_most();
     assert.ok(results, "");
   });

   QUnit.test("testing occurs_least function", function(assert){
     var results = occurs_least();
     assert.ok(results);
   });