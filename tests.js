  QUnit.test("testing hello_world function", function(assert){
      var results = hello();
      // is the result as we expected?
      assert.equal(results, "hello world");
});

  QUnit.test("testing hello_uppercase function", function(assert){
	   var results = hello_uppercase("sibura");
	   assert.equal("HELLO, SIBURA", results);
});

  QUnit.test("testing hello_joe function", function(assert){
	  var results = hello_joe("Bob");
	  assert.equal("Hello,Bob", results);
});

  QUnit.test("testing number_list function", function(assert) {
    var results = number_list(10);
    assert.equal([1,2,3,4,5,6,7,8,9,10].toString(),results);

});

  QUnit.test("testing sum_numbers function", function(assert) {
    var results= sum_numbers(10);
    assert.equal(55,results, "Passed!");

});
  
  QUnit.test("testing length function", function(assert){
   var results= length("red");
   assert.equal(3, results);
});

   QUnit.test("testing upper function", function(assert){
   var results= upper("green");
   assert.equal(results, "GREEN");
});

   QUnit.test("testing reverse function", function(assert){
   var results= reverse("reccos");
   assert.equal(results, "reccos");
});

   QUnit.test("testing hello_list function", function(assert){
     var results = hello("hello world");
     assert.equal(results, "hello world");
   });

   QUnit.test("testing high_low function", function(assert){
     var results = high_low();
     assert.equal(results);
   });

// ///
   QUnit.test("testing count_words function", function(assert){
     var results = count_words("I am those words");
     assert.equal(4, results);
   });

   QUnit.test("testing sum_word_len function", function(assert){
     var results = sum_word_len("word are too long");
     assert.equal(results, "word are too long");
   });

   QUnit.test("testing longest_word  function", function(assert){
     var results = longestWord();
     assert.equal(3,results, "Web  Developer Coders");
   });

   QUnit.test("testing shortest_word function", function(assert){
     var results = shortest_word();
     assert.equal(results);
   });

    QUnit.test("testing avg function", function(assert){
      var results = avg();
      assert.equal(results, "");
    });


    QUnit.test("testing start  function", function(assert){
     var results = start();
      assert.equal(results, "");
    });

    QUnit.test("testing ends  function", function(assert){
      var results = ends();
      assert.equal(results, "");
   });

    QUnit.test("testing occurs_most function", function(assert){
      var results = occurs_most();
      assert.equal(results, "");
    });

    QUnit.test("testing occurs_least function", function(assert){
      var results = occurs_least();
      assert.equal(results);
   });
