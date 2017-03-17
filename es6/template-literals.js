// inserting varibales directly into strings, instead of concatenating them

var salutation = "Hello";
var greeting = salutation + ", World";

console.log(greeting);

//instead
var salutation = "Hellow";
var greeting = `${salutation}, World`;

console.log(greeting);

// key note: white space is respected across multiple lines
// tmeplate literals also allow to do expressions inside of the braces

var x = 1;
var y = 2;
var equation = `${x} + ${y} = ${x + y}`;

console.log(equation);
// 1 + 2 = 3

// taggin string templates
var message = `It's ${new Date().getHours()} I'm sleepy`;

console.log(message);
// logs It's 17 I'm sleepy

function tag(strings, ..values){
  console.log(strings);
  //logs ['It\'s ', 'I\'m sleepy' ]
  // undefined
  console.log(values);
  // logs [ 17 ]
  if(values[0] < 20) {
    values[1] = "awake";
  }

  return `${strings[0]}${values[0]}${strings[1]}${values[1]}`;
}
var message = tag`It's ${new Date().getHours()} I'm ${""}`;

console.log(message);
// It's 15 I'm awake
