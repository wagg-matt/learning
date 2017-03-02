// how the different variables work (let, const, var)

// ES5
var message = "Hey";

{
  var message = "You";
}

console.log(message);
// renders 'You'

var message = "Hey";

function greet(){
  var message = "You";
}

console.log(message);
// renders 'Hey' due to function scoping

// let: allows block scoping
let message = "Hey";

{
  let message = "You";
}

console.log(message);
// renders 'Hey'

var fs = [];

for(var i = 0; i < 10; i++) {
  fs.push(function () {
    console.log(i);
  })
}

fs.forEach(function (f) {
  f();
})
// logs 10 ten times

var fs = [];

for(let i = 0; i < 10; i++) {
  fs.push(function () {
    console.log(i);
  })
}

fs.forEach(function (f) {
  f();
})
// logs 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
// the let variable creates a new 'i' each time going through the for loop
