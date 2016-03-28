// Types and Operators

// Primitive Types

// - undefined = not set
// - NULL = does not exist or equal to nothing
// - boolean = true or false
// - number = floating point (will include decimal place)
// - string = sequence of characters
// - symbol = used in ES6, will cover this later

// Operator precedence

var a = 3 + 4 * 5;
console.log(a);

// Because there are two operators, the one with the higher
// precedence with run first. Var a will run 4 * 5 first and
// then + 3. Use grouping to fix this as grouping has a higher
// precedence

var b = (3 + 4) * 5;
console.log(b);

// Comparison Operators
// The first function will be equal as where the
// second one will not. This is due to JS coercing
// the values. Strict operators (===) will not allow
// coercion. Generally better to use strict operators

var c = 0;
var d = false;

if (c == d) {
	console.log('== They are equal');
} else {
	console.log('== Nope');
}

if (c === d) {
	console.log('=== They are equal');
} else {
	console.log('=== Nope');
}