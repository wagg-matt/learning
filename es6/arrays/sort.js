// Array.prototype.sort();

// sorts the elements of an array in place
// and returns the same array

var items = ['Shane', 'Sally', 'Isaac'];

items.sort();

console.log(items);
// logs ['Isaac', 'Sally', 'Shane']

// working with numbers
// each number is converted into a string and each number
// is compared with their position in unicode
var numbers = [10, 30, 20];

numbers.sort();

console.log(numbers);
// logs [10, 20, 30]

var numbers = [10, 30, 20, 2];

numbers.sort();

console.log(numbers);
// logs [ 10, 2, 20, 30 ]

// to fix this will need to us a comparative function
// sort accepts two parameters being the left and right
// item of the sort algorithm sort(left, right)
// in the comparative function you get the raw values,
// numbers are not converted into strings

numbers.sort((a, b) => a - b);
// sorts in ascending order
// to sort in descending order sort((a, b) => b - a)

console.log(numbers);
// logs [ 2, 10, 20, 30 ]

// can also sort via length

var items = ['Shane', 'Kittie', 'Sally', 'Isaac'];

items.sort((a, b) => b.length - a.length);
// descending order

console.log(items);
// logs ['Kittie', 'Shane', 'Sally', 'Isaac']

// practical example

var lessons = [
  {
    title: 'Javascript Array methods in depth - concat',
    views: 1000
  },
  {
    title: 'Javascript Array methods in depth - slice',
    views: 1050
  },
  {
    title: 'Javascript Array methods in depth - join',
    views: 1025
  }
];

var list = lessons
    .sort((a, b) => b.views - a.views)
    .map(x => `  <li>${x.title} (${x.views})</li>`)
    .join('\n');

var output = `<ul>\n${list}\n</ul>`;

console.log(output);
// logs
// <ul>
//   <li>Javascript methods in depth - slice (1050)</li>
//   <li>Javascript methods in depth - join (1025)</li>
//   <li>Javascript methods in depth - concat (1000)</li>
// </ul>
