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

