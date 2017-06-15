// Array.prototype.every();

// method returns true or false based on a condition
// applied to the source
// function is run per each item in array till it fails

const items = [1, 2, 3, 4, 5];
const result = items.every(x => x < 10);

console.log(result);
// logs true

const items = [1, 2, 3, 4, 5];
const result = items.every(x => x < 5);

console.log(result);
// logs false as 5 is not less than 5

// every runs for every item in the array till it gets
// to 5. If the array is changed to [5, 1, 2, 3, 4]
// then every will only run once and return false

// practical example, is form valid

const fields = [
  {
    field: 'email',
    value: 'shane@example.com',
    errors: []
  },
  {
    field: 'name',
    value: '',
    errors: ['No name provided']
  }
];

const isValid = fields.every(x => x.errors.length === 0);
// if there are no errors form is valid

console.log(isValid);
// logs false

// practical example, is the course complete

const videos = [
  {
    title: 'Array methods in depth: concat',
    length: 310,
    viewed: 310
  },
  {
    title: 'Array methods in depth: join',
    length: 420,
    viewed: 360
  }
];

const isComplete = videos.every(x => x.viewed === x.length);

console.log(isComplete);
// logs false as there is a minute left in join.
