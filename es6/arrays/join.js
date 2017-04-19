// Array.prototype.join();

// produces a string that is the result
// of adding together all items in an array

var names = ['Shane', 'Alan', 'Osbourne'];

// To output a name in a dynamic way without having
// to specifically log eash item with a space for example

// Join collects all items in the array and you provide
// the separator

console.log(names.join(' '));
// logs Shane Alan Osbourne

console.log(names.join(', '));
// logs Shane, Alan, Osbourne

console.log(names.join());
// logs Shane,Alan,Osbourne
// default is ',', comma separated

// If whole name is a string, it can be separated like so....
var name = 'shane osbourne';

var upper = name.split(' ') // creates array [shane, osbourne]
  .map(x => x.charAt(0).toUpperCase() + x.slice(1)) // produces another array [Shane, Osbourne]
  .join(' ');

console.log(upper);
// logs Shane Osbourne
