// 1. Template Strings (`) back tick operator
//created to replace the string concantenation operator of Javascript

let mobile = {
    brand: 'Apple',
    color: 'Silver',
    price: 35000
};

// Console display using ES5
let msg = "BRAND: " + mobile.brand + " COLOR: " + mobile.color + " PRICE: " + mobile.price;
console.log(msg); //ES5

//Console display using ES6 templte strings
let msg1 = `BRAND: ${mobile.brand} COLOR: ${mobile.color} PRICE: ${mobile.price}`;
console.log(msg1); //ES6;

//Converting as HTML Template, using string concantenation of ES5
let template1 = "<ul>" +
    "<li>" + mobile.brand + "</li>" +
    "<li>" + mobile.color + "</li>" +
    "<li>" + mobile.price + "</li>" +
    "</ul>"                                     //ES5

//Converting as HTML Template, using Template strings
let template2 = `<ul>
                        <li>${mobile.brand}</li>
                        <li>${mobile.color}</li>
                        <li>${mobile.price}</li>
                </ul>`;                        //ES6

// 2. Optional Parameters
//simple function
let greet = function (name, age) {
    let msg = `Hello ${name}, you are ${age} years old`;
    console.log(msg);
};
greet('John', 40);

greet('John'); //if you pass only name without age, function will still work, but will treat age as undefined

//supposing the age is not passed, we want to get a default value
//in ES5, we can use...

greet = function (name, age) {
    if (age === undefined) {
        age = 35;
    }
    let msg = `Hello ${name}, you are ${age} years old`;
    console.log(msg);
};

greet('John'); //function called without age parameter, enforcing if statement
greet('John', 54); //function called with age parameter


//ES6 illustration with optional parameters
greet = function (name, age = 35) {  //age = 35 replaces if statement
    let msg = `Hello ${name}, you are ${age} years old`;
    console.log(msg);
};

greet('John'); //calling the function without age, enforcing the optional parameter
greet('John', 40); // calling the funtion with the age parameter

//Print Number Example Added
let printNumbers = function (start, end) {
    let result = '';
    for (let i = start; i <= end; i++) {
        result += `${i} `;
    }
    console.log(result);
}
printNumbers(1, 20);

printNumbers(5); //without specifying the end, there'll be no log on console

//Print Number function modified with optional parameter
printNumbers = function (start, end = 20) {
    let result = '';
    for (let i = start; i <= end; i++) {
        result += `${i} `;
    }
    console.log(result);
}
printNumbers(1, 20);

printNumbers(5);


/* 
Function Types
1. Normal Function
2. Function Expression
3. Arrow Function
 */

//Normal Function
let result = '';
function printNumbersNF() {
    let msg = '';
    for (let i = 0; i <= 10; i++) {
        msg += `${i} `;
    }
    return msg;
}
result = printNumbersNF();
console.log(result);

// Function Expression
let printNumbersFE = function () {
    let msg = '';
    for (let i = 0; i <= 10; i++) {
        msg += `${i} `;
    }
    return msg;
}
result = printNumbersFE();
console.log(result);

//Arrow
//Arrow function is same as functional expression. but instead of keyword 'function', you write an arrow.
let printNumbersAF = () => {
    let msg = '';
    for (let i = 0; i <= 10; i++) {
        msg += `${i} `;
    }
    return msg;
}
result = printNumbersAF();
console.log(result);

// Usage of Arrow Functions
let employees = [
    {
        id: 1,
        name: 'John Smith',
        age: 40,
        designation: 'Manager',
        isActive: true
    },
    {
        id: 2,
        name: 'Wilson Pea',
        age: 46,
        designation: 'Sr. Manager',
        isActive: false
    },
    {
        id: 3,
        name: 'Thomas Teper',
        age: 25,
        designation: 'Software Engineer',
        isActive: true
    },
    {
        id: 4,
        name: 'Laura Helding',
        age: 28,
        designation: 'Tech Lead',
        isActive: false
    },
    {
        id: 5,
        name: 'David Maheesh',
        age: 40,
        designation: 'Software Engineer',
        isActive: true
    }
];

//Junior Employees with filter function
let juniorEmployees = employees.filter(function (employ) {
    return employ.age <= 30;
});
console.log(juniorEmployees);

