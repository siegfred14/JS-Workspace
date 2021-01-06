// print from 0 to 10 diff 1

let result = '';
for (let i = 0; i <= 10; i++) {
    result += `${i} `;
}
console.log(result);

//using function for reusability of the above

function printNumbers() {
    result = '';
    for (i = 0; i <= 10; i++) {
        result += `${i} `;
    }
    console.log(result);
}

printNumbers(); //function call/execution

//using parameters

function printNumbers(endNumber) {
    result = '';
    for (i = 0; i <= endNumber; i++) {
        result += `${i} `;
    }
    console.log(result);
}

printNumbers(15);

//Using multiple parameters
function printNumbers(startNumber, endNumber, increment) {
    result = '';
    for (i = startNumber; i <= endNumber; i += increment) {
        result += `${i} `;
    }
    console.log(result);
}

printNumbers(4, 15, 2);

//Function without parameter (no input no output)

function greet() {
    console.log('Good Morning');
}

greet();

//Function Expression
let greetMe = function () {
    console.log('Good Morning');
};
console.log(greetMe);
greetMe();


//funcion with parameter

let wishMe = function (name, age) {
    let message = `Hello Mr ${name}, You are ${age} years old`;
    console.log(message);
}

wishMe('John', 17);

//function without return type
let sum = function (a, b) {
    let result = 2 * (a + b);
    return result;
}
let output = sum(10, 20);
console.log(output);

//function with object as parameter
let printObject = function (obj) {
    console.log(obj);
}

printObject({ name: "Sam", age: 20 });

//or you can declare a function outside and pass it

let mobile = {
    brand: 'Apple',
    color: 'Silver',
    price: 35000
};
printObject(mobile);

//function with an array as parameter
let printArray = function (array) {
    let result = '';
    for (let index in array) {
        result += `INDEX: ${index} => VALUE: ${array[index]} \n`;
    }
    console.log(result);
}

printArray([10, 20, 30, 40, 50]);

//or pass an existing array
let colors = ['White', 'Black', 'Orange', 'Purple'];

printArray(colors);

