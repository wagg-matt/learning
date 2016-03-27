function b() {
	var myVar;
}

function a() {
	var myVar = 2;
	b();
}

var myVar = 1;
a();

// What's the vaule of myVar?

// myVar = 1
// function a is invoked
// myVar = 2
// function b is invoked
// myVar = undefined

function bb() {
	console.log(myVar);
}

function aa() {
	var myVar = 2;
	bb();
}

var myVar = 1;
aa();

// What's the vaule of myVar?

// myVar = 1
// function aa is invoked
// myVar = 2
// function bb is invoked
// myVar not declared within this execution context, 
// takes value from 'outer environment' (Global Execution Context)
// myVar = 1