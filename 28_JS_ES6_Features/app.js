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

//Junior Employeeswith arrow function
let jrEmployees = employees.filter((employee) => {
    return employee.age <= 30;
});
console.log(juniorEmployees);

//if you have one parameter, you can get rid of the braces and the return statement
jrEmployees = employees.filter((employee) => employee.age <= 30);
console.log(juniorEmployees);

//Limitations of arrow function: 
//Normal function with This keyword
let student = {
    firstName: 'Samantha',
    lastName: 'Siegfred',
    fullName: function name(params) {
        return `${this.firstName} ${this.lastName}`;
    }
};
console.log(student.fullName());


//the Arrow funcuion does not work with This Keyword
student = {
    firstName: 'Samantha',
    lastName: 'Siegfred',
    fullName: () => {
        return `${this.firstName} ${this.lastName}`;
    }
};
console.log(student.fullName()); //answer will be undefined undefined

//in a normal function, This keyword would look for the current object
//in an arrow function, This keyword would look for a global object

//how to resolve this
student = {
    firstName: 'Arjun',
    lastName: 'Reddy',
    fullName: () => {
        return `${student.firstName} ${student.lastName}`;
    }
};
console.log(student.fullName());

//FOR-OF LOOPS  - New method used to loop an Array in JavaScript
employees = [
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

//to print only employee Names inside an array
//Normal for-loop
result = '';
for (let i = 0; i <= employees.length - 1; i++) {
    let employee = employees[i];
    result += `${employee.name.toUpperCase()} `;
}
console.log(result);

//using For-in Loop (up to ES5)
result = '';
for (let index in employees) { //for every loop, it picks the index
    let employee = employees[index];
    result += `${employee.name.toUpperCase()} `;
}
console.log(result);

// For-Of Loops of ES6
result = '';
for (let employee of employees) {
    result += `${employee.name.toUpperCase()} `; //no need to iterate employees as for-of handles that directly 
}
console.log(result);

//forEach function- ES5
result = '';
employees.forEach(function (employee) {
    result += `${employee.name.toUpperCase()} `;
});
console.log(result);

//For Each with Arrow function - ES6
result = '';
employees.forEach(employee => {
    result += `${employee.name.toUpperCase()} `;
});
console.log(result);

//De-structuring ES6 (Using complex object)
student = {
    name: 'Arjun Reddy',
    age: 23,
    course: 'MBBS',
    address: {
        street: 'Hitech City',
        city: 'Hyderabad',
        state: 'TS'
    },
    hobbies: {
        regular: {
            id: 1,
            regHobbies: ['Reading Books', 'Playing Cricket']
        },
        occassional: {
            id: 1,
            occHobbies: ['Playing cards', 'Online games']
        }
    }
};

//De-structuring allows us to access nth item, stored far inside a complex object

//continue from here
//To access using De-structuring 
let { street, city, state } = student.address; //this allows you to access few/specific items from the object
console.log(`STREET:${street}
        CITY: ${city}
        STATE; ${state}`);

//To access regular hobbies
let { regHobbies } = student.hobbies.regular; //There must be space before and after regHobbies
console.log(regHobbies); 

// Spread Operator ...
let numbers = [10, 58, 98, 754, 1, 851, 91, 161, 6489];
let min = Math.min(10, 58, 98, 754, 1, 851, 91, 161, 6489);
console.log(min); //Normal sequence

min = Math.min(...numbers); //using spread operators
console.log(min);

//Combining two Arrays using spread operators
let array1 = ['white', 'black', 'blue', 'purple'];
let array2 = ['yellow', 'silver', 'orange',]

//to combine both arrays
let colors = [];
for (let color of array1) {
    colors.push(color)
}
for (let color of array2) {
    colors.push(color)
}
