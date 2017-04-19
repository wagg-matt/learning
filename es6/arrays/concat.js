// Array.prototype.concat();

// method that you can on an existing array
// returns a new array with original params
// plus any you pass in via concat()

var items = [1, 2];
var newItems = items.concat(3);

console.log(newItems);
// logs [1, 2, 3]

// you can add as many as you like, not limited by type
// all appended to the original array

var newItems2 = items.concat(3, 4, 5, 'string', undefined);

console.log(newItems2);
// logs [1, 2, 3, 4, 5, 'string', undefined]

// concat can receive arrays too
var newItems3 = items.concat([3, 4]);

console.log(newItems3);
// logs [1, 2, 3, 4]

// multiple arrays
var newItems4 = items.concat([3, 4], [5, 6, 7]);

console.log(newItems4);
// logs [1, 2, 3, 4, 5, 6, 7]

// CANNOT take nested arrays
var newItems5 = items.concat([3, 4], [5, [6, 7]]);

// logs [1, 2, 3, 4, 5, [6, 7]]

// Dealing with an array of objects

var people = [
  {
    name: 'Shane'
  },
  {
    name: 'Sally'
  }
];

// to do something with each person...

people.forEach(function (person) {
  console.log(person.name);
})
// logs Shane Sally

// adding another array of people
var people2 = [
  {
    name: 'Simon'
  },
  {
    name: 'Ben'
  }
];

// concat would save duplicating the function
people
  .concat(people2)
  .forEach(function (person) {
    console.log(person.name);
  })

// logs Shane Sally Simon Ben
// using one function
