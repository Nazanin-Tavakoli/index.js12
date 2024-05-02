//? Question-4:Explain these things in the new EcmaScript standard with examples. (Explain in the form of an example.)
// todo:Using const, let instead of var
// todo:arrow function
// todo:template string instead of "" and ''
// todo:destructuring
// Using const, let instead of var
const PI = 3.14;
let radius = 5;
let area = PI * radius * radius;
console.log(area);

// Arrow function
const multiply = (a, b) => a * b;
console.log(multiply(3, 4));

// Template string instead of "" and ''

const name = 'Alice';
const age = 30;
console.log(My name is ${name} and I am ${age} years old.);

// Destructuring
const person = { firstName: 'John', lastName: 'Doe' };
const { firstName, lastName } = person;
console.log(First Name: ${firstName}, Last Name: ${lastName});