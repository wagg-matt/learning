// creates a new array based on truthy values from the
// original array, all falsey values will be discarded

var items = [1, 2, 3, 4, 5];
var filtrered = items.filter(x => > 3);

console.log(filtered);
// logs a new array of [4, 5]
// as 4 and 5 are greater than 3

var people = [
  {
    name: 'Shane',
    pets: ['cat', 'dog']
  },
  {
    name: 'Simon',
    pets: ['horse']
  },
  {
    name: 'Ben',
    pets: []
  },
];

var filtered = people.filter(x => x.pets.length);

console.log(filtered);
// logs
// [ { name: 'Shane', pets: [ 'cat', 'dog' ] },
// { name: 'Simon', pets: [ 'horse' ] } ]
// if pets array is not there x.pets can be used
// otherwise this will error

// Ben's pets are equal to zero and since this is
// a falsey statement, it's not included in the array

// finding lessons with a tag of array and view count
// over a thousand

var lessons = [
  {
    title: 'Javascript Arrays in Depth - join',
    views: 960,
    tags: ['array', 'join']
  },
  {
    title: 'Javascript Arrays in Depth - concat',
    views: 1050,
    tags: ['array', 'concat']
  },
  {
    title: 'Javascript Arrays in Depth - slice',
    views: 2503,
    tags: ['array', 'slice']
  },
  {
    title: 'Javascript Functions in Depth - bind',
    views: 2500,
    tags: ['functions', 'bind']
  }
];

var minViews = 1000;
var searchTerm = 'array';

var filtered = lessons
    .filter(x => x.tags.indexOf(searchTerm) > -1)
    .filter(x => x.views > minViews)
    .sort((a, b) => b.views - a.views)
    .map(x => `  <li>${x.title}</li>`)
    .join('\n');

console.log(`<ul>
  ${filtered}
  </ul>`);

// logs
// <ul>
//   <li>Javascript Arrays in Depth - slice</li>
//   <li>Javascript Arrays in Depth - concat</li>
// </ul>
