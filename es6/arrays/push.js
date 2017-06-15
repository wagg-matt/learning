// Array.prototype.push

// used to add items to the end of an array
// modifies the array in place.....

const pets = ["Cat", "Dog"];

console.log(pets);
// logs ['Cat', 'Dog']

pets.push("Hamster");

console.log(pets);
// logs ["Cat", "Dog", "Hamster"]

// push accepts any number of arguments
pets.push("Hamster", "Snake");

console.log(pets);
// logs ["Cat", "Dog", "Hamster", "Snake"]

// merging two arrays together.....

const pets = ["Cat", "Dog"];
const wishlist = ["Hamster", "Horse", "Snake"];

pets.push.apply(pets, wishlist);

console.log(pets);
// logs ['Cat', 'Dog', 'Hamster', 'Horse', 'Snake']
// apply merges the two arrays together

// practical example
// add items to a todo list

const input = document.querySelector('#input');
const button = document.querySelector('#button');
const list = document.querySelector('#list');

const pets = [];

button.addEventListener("click", function(evt) {
  // check the input value has something in it
  // if yes, add to pets array
  // then reset value of input field
  // run render function to print results
  if(input.value.length > 0) {
    pets.push(input.value);
    input.value = '';
    render();
  }
});

function render() {
  list.innerHTML = pets.map(x => `<li>${x}</li>`).join('');
}
