// default variables for functions
// default variables allow the calling of a function
// without params where params are required by setting
// a default that can be overridden by params passed to it

//ES5
function greet(greeting, name) {
  console.log(greeting + ', ' + name);
}

greet();

// logs undefined, undefined

// adding defaults in ES6
function greet(greeting = 'Hi there', name = 'John') {
  console.log(greeting + ', ' + name);
}

greet();

// logs Hi there, John

function greet(greeting = 'Hi there', name = 'John') {
  console.log(greeting + ', ' + name);
}

greet('Hello');

// logs Hello John

// default functions
function receive(complete = () => console.log('complete')) {
  complete();
}

receive();

// logs complete
