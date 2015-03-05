TestMyCode.run("testing hello_joe function using 'bob'", function(assert){
	var result = hello_joe("bob");
	assert.equals("Hello",result , "testing hello_joe function");
});

TestMyCode.run("testing hello_joe function using 'joe'", function(assert){
	var result = hello_joe("joe");
	assert.equals("Hello",result , "testing hello_joe function");
});

TestMyCode.run("testing hello_joe function using 'sibu'", function(assert){
	var result = hello_joe("sibu");
	assert.equals("Hello",result , "testing hello_joe function");
});
