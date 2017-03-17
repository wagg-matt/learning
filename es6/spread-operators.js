// Allows you to take an array and spread out into its individual items.
// helps a lot when merging arrays or adding multiple style sources in React

console.log([1,2,3]);
// logs [1,2,3]

console.log(...[1,2,3]);
// logs 1 2 3

let first = [1, 2, 3];
let second = [4, 5, 6];

//ES5
first.push(second);
console.log(first);
// logs [1, 2, 3 [4, 5, 6]]

first.push(...second);
console.log(first);
// logs [1, 2, 3, 4, 5, 6]

// works whebn pushing in an array of parameters
//eg

let first = [1, 2, 3];
let second = [4, 5, 6];

function addThreeThings(a, b, c){
  let result = a + b + c;
  console.log(result);
}

addThreeThings(...first);
// logs 6

addThreeThings(...second);
// logs 15
