/*
JavaScript Operators
--------------------
-> Assignment Operators :=
-> Arithmetic Operators : + - / * %
-> Shorthand Math Operators : +=, -=, /=, *=
-> Conditional Operators : < ,> , <= , >= , !==
-> Unary Operators : ++ , -- To increase or decrease by one
-> Logical Operators : && , || , ^
-> Tenary Operators : ?:
-> Equality Operators : == , ===
*/


//Assignment Operator
let test = 10;
console.log(test);

//Arithmetic Operators
let num1 = 50;
let num2 = 20;
console.log(`sum : ${num1 + num2}`);
console.log(`sub : ${num1 - num2}`);
console.log(`div : ${num1 / num2}`);
console.log(`mul : ${num1 * num2}`);
console.log(`mod : ${num1 % num2}`);

//find if number is even or odd
let number = 15;
if (number % 2 == 0) {
    console.log(`${number} is an even number`)
}
else {
    console.log(`${number} is an odd number`)
}

//Shorthand Math Operators : +=, -=, /=, *=

let a = 20;
let b = 30;
let add = 10;
//add = add + a + b;
add += (a + b);
console.log(add);

//add = add * (a + b);
add *= (a + b);
console.log(add);

//Conditional Operators : < ,> , <= , >= , !==
let marks = 75;
if (marks <= 35) {
    console.log('You failed The Exam');
}
else {
    console.log('You passed the Exam');
}


//Unary Operators : ++ , -- To increase or decrease by one

let x = 10;
x = x + 1;      //11
x += 1;         //12
x++;            //13
console.log(x);


//Logical Operators : && , || , ^
/*
    AND && => T && T -> T 
    OR || => F || F -> F
    XOR ^ = T ^ F , F ^ T -> T
 */

let inRelation = true;
let parentsAgree = false;
if (inRelation && parentsAgree) {
    console.log('Get married Soon');
}
else {
    console.log('Wait Until Parents Agree')
}

//Tenary Operators : ?:
/*
    syntax: (condition)? true : false
*/
/*let marks = 75;
if (marks <= 35) {
    console.log('You failed The Exam');
}
else {
    console.log('You passed the Exam');
}
*/

marks = 75;
let message = '';
(marks <= 35) ? message = 'You have failed exam' : message = 'You have cleared exam';
console.log(message);


// Equality Operators : == , ===

a = 10;
b = '10';
if (a === b) {              //Using == allows type converion so variables are compared as same type "Numbers".
    console.log('Both are equal');
}
else {
    console.log('Both are NOT equal')
}

