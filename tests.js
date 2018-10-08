  QUnit.test("testing hello_world function", function(assert){
    var results = hello();
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

QUnit.test("testing count_words function", function(assert){
 var results = count_words("I am those words");
 assert.equal(4, results);
});

QUnit.test("testing sum_word_len function", function(assert){
 var results = length("word are too long");
 assert.equal(17,results, "word are too long");
});

QUnit.test("testing longest_word function", function(assert){
 var results = longest_word("Web  Developer Coders");
 assert.equal(9, results, "Developer");
});

QUnit.test("testing shortest_word function", function(assert){
 var results = shortest_word("me", "holas", "Cake");
 assert.equal(0,results, "me");
});

QUnit.test("testing word_length function", function(assert){
  var results = word_length("testing all the word");
  assert.equal("4 or 4.25",results);
});


QUnit.test("testing avg function", function(assert){
  var results = avg("average testing mbers sosibalonger");
  assert.equal(8,results);
});


QUnit.test("testing start  function", function(assert){
 var results = start("Down by the river there tank");
 assert.equal(results);
});

QUnit.test("testing ends()  function", function(assert){
  var results = ends("Lots of super variable sized words I contain");
  var results2 = ends("Lots of super variable sized words I contain");
  assert.equal(results, "S");
  assert.equal(results2, "S");
});
//    test('ends()', function() {
//     var str = "Lots of super variable sized words I contain";
//     var str2 = "Lot of super variabled sized word I contained";   

//     equal(ends(str), "S");
//     equal(ends(str2), "D");

// })

QUnit.test("testing occurs_most function", function(assert){
  var results = occurs_most("abou aabbiy yytyt trte");
  assert.equal(results, "y");
});

QUnit.test("testing occurs_least function", function(assert){
  var results = occurs_least("super variable sized words I contain");
  assert.equal(results,"u");
});
