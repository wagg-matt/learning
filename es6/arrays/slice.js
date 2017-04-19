// Array.prototype.slice();
// creates a shallow copy of an array

var items = [1, 2, 3, 4, 5];
var copy = items.slice();

console.log(copy);
// logs [1, 2, 3, 4, 5]
// slice without params literally copies the array
// what happens to the copy, won't affect the original

copy.push(6);

console.log(items);
// logs [1, 2, 3, 4, 5]
console.log(copy);
// logs [1, 2, 3, 4, 5, 6]

// same applies for modifying exitsting items
copy[0] = 100;

console.log(copy);
// logs [100, 2, 3, 4, 5]
// deliberately ignoring the push above

// slice copies the value of an array
// with objects, if an array contains an object
// it will copy the object reference, not the actual object

var person = { name: 'Shane' };
var items = [1, person];
var copy = items.slice();

console.log(items);
// logs [ 1, { name: 'Shane' } ]
console.log(copy);
// logs [ 1, { name: 'Shane' } ]

// if you update the object reference, it will
// change both references to that object
// it is simply copying the reference to the object
// not the object itself

copy[1].name = 'Sally';

console.log(items);
// logs [ 1, { name: 'Sally' } ]
console.log(copy);
// logs [ 1, { name: 'Sally' } ]

// slice can be used to take a subsection of an array
// slice accepts two optional parameters, slice(start, end)
// start tells slice where to copy from in the array
// end tells slice where to stop, this does not
// include the reference you are stopping

var items = [1, 2, 3, 4, 5];
var copy = items.slice(0, 1);

console.log(copy);
// logs [ 1 ]

var copy = items.slice(1, 4);

console.log(copy);
// logs [ 2, 3, 4 ]

// if you specify a start without an end you get
// everything in te array from the start point

var copy = items.slice(2);

console.log(copy);
// logs [ 3, 4, 5 ]

// negative numbers can be used too. If you start
// with -1 it log from the end of the array

var copy = items.slice(-1);

console.log(copy);
// logs [ 5 ]

// this can even show mnegative numbers from the end

var copy = items.slice(1, -1);

console.log(copy);
// logs [ 2, 3, 4 ]

// a real world example
 var person = {
   name: 'shane-osbourne'
 };

 var filters = {
   'deslugify': x => x.replace('-', ' '), // replace all hyphens with a space
   'uppercase': x => x.toUpperCase() // make string uppercase
 };

 var input = 'name | deslugify | uppercase'; // SHANE Osbourne

 var sections = input.split('|').map(x => x.trim()); // [name, deslugify, uppercase]
 var ref = person[sections[0]];
 var output = sections
      .slice(1)
      .reduce((prev, next) => {
        if (filters[next]) {
          return filters[next].call(null, prev);
        }
        return prev;
      }, ref);

 console.log(sections);
 // logs [ 'name', 'deslugify', 'uppercase' ]

 console.log(ref);
 // logs shane-osbourne

 console.log(output);
 // logs SHANE OSBOURNE
