// shorthand properties allows you to easily push properties
// into an objects

let firstName = "Matt";
let lastName = "Wagg";

let person = {firstName, lastName};

console.log(person);

// logs { firstName: 'Matt', lastName: 'Wagg' }

let mascot = "Canary";

let team = {person, mascot};

console.log(team);

// logs { person: { firstName: 'Matt', lastName: 'Wagg' }, mascot: 'Canary' }
