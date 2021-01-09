//Numbers (operations on numbers)

//max Number in JS
console.log(Number.MAX_SAFE_INTEGER);

//min Number in JS
console.log(Number.MIN_SAFE_INTEGER);

//Positive Infinity
console.log(Number.POSITIVE_INFINITY);

//Negative Ininity
console.log(Number.NEGATIVE_INFINITY);

// Parse Int (to convert string to integer)
let str1 = '100';
let num1 = Number.parseInt(str1);
console.log(`${typeof str1} => ${typeof num1} `);

// Parse Float (to convert string to float)
let str2 = '100.145';
let num2 = Number.parseFloat(str2);
console.log(`${typeof str2} => ${typeof num2} `);

// toString

let num3 = 100;
let numString = num3.toString();
console.log(`${typeof num3} => ${typeof numString}`);

//to fixed
let amount = 520;
console.log(amount.toFixed(2)); //this fixes amount to two fractional positions

//STRING RELATED OPERATIONS
let msg = String('Good Morning');

//to get String length
console.log(msg.length);

//to convert to lowercase
console.log(msg.toLowerCase());

//to convert to uppercase
console.log(msg.toUpperCase());

//Substring - substr(start index, no of chars)
console.log(msg.substr(0, 4));

console.log(msg.substr(5, 7));

console.log(msg.substr(5));

//charAt - to get the character at a given index 
console.log(msg.charAt(5));

//charCodeAt - to get the char ASCII code at a given Number
console.log(msg.charCodeAt(5));


//JSON - used to convert an object to srtring and string to object format
/* 
String to Object - parse()
Object to String - stringify()
*/

let student = {
    name: 'Rajan',
    age: 20,
    course: 'CSE',
    college: 'IIT mumbai'
};
console.log(student);

//to convert Object to string
let studentstr = JSON.stringify(student);
console.log(studentstr);

//String to Object
let newStudent = JSON.parse(studentstr);
console.log(newStudent);
