let a = 10;
let b = 20;
let sum = a + b;
console.log('The sum of a and b is ' + sum);

//Or usng ES6 format - Template String/Template literal (``) back tick

console.log(`the sum of ${a} and ${b} is ${sum}`); //ES6

// To redeclare a variable, take out the "let" keyword
let name = 'John';
name = 'paul';
console.log(name);