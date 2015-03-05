TestMyCode.run("testing hello_world function", function(assert){
      var result = hello();
      // is the result as we expected?
      assert.equals("hello world!", result , "testing hello function");
});