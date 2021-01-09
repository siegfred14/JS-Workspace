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

