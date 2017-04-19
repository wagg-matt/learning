// Array.prototype.indexOf();

// Used to search an Array for a particular values
// when indexOf fails it returns '-1'
// if above -1 you know that element exists

var family = ['Shane', 'Sally', 'Isaac', 'Kittie'];
var family2 = ['Shane', 'Sally', 'Isaac'];

console.log(family.indexOf('Kittie'));
// logs 3

console.log(family2.indexOf('Kittie'));
// logs -1
// this means the search was unsuccessful

var KittieExists = family.indexOf('Kittie') > -1;
var KittieExists2 = family2.indexOf('Kittie') > -1;

console.log(KittieExists);
// logs true

console.log(KittieExists2);
// logs false

// using the flag you can performs actions

if (!KittieExists2) {
  family2.push('Kittie');
}

// will add Kittie to array

// indexOf has a second parameter being the position of the array

// you can also search for object references

var shane = {
  name: 'Shane'
}

var sally = {
  name: 'Sally'
}

var kittie = {
  name: 'Kittie'
}

var family = [shane, sally];

console.log(family.indexOf(kittie));
// logs -1

// add kittie to family

var family2 = [shane, sally, kittie];

console.log(family2.indexOf(kittie));
// logs 2

// using indexOf to create a filter

var whitelist = ['.css', '.js'];

var events = [
  {
    file: 'css/core.css'
  },
  {
    file: 'js/app.js'
  },
  {
    file: 'index.html'
  }
];

var filtered = events.filter(event => {
  var ext = require('path').extname(event.file);
  return whitelist.indexOf(ext) > -1;
});

console.log(filtered);
// logs [ { file: 'css/core' }, { file: 'js/app.js' }]
