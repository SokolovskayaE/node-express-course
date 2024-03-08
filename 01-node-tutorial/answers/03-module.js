// Modules
const persons = require ('./04-names')
const sayHi = require('./05-utils');
const data = require('./06-alternative-flavor');
require('./07-mind-grenade')

// Print the names of each person
// console.log('Person 1:', person1);
// console.log('Person 2:', person2);

// Call the greet function with person1 and person2
sayHi(persons.person1);
sayHi(persons.person2);
console.log(data.items)
