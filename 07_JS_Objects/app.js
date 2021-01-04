//JavaScript Object
/* 
let cameraBrand = 'Canon';
let cameraPrice = 35000;
let cameraColor = 'black'; 

this can be put in object form below*/

let camera = {
    brand: 'Canon',
    price: 35000,
    color: 'black',
    mfg: 2019
};
console.log(camera);

//To access individual properties
console.log(camera.brand);

//To access non-existing property
console.log(camera.megaPixel); //undefined

//To access the properties using dot , [] notation
console.log(camera.price); //35000
console.log(camera['price']); //35000

//for dynamic properties using dot , [] notation
let prop = 'color';
console.log(camera.prop); //undefined
console.log(camera[prop]); //because prop is dynamic, do not put quotes.

//Nested Objects (Objects of an object)
let student = {
    name: 'Siegfred Samson',
    course: 'CSc',
    address: {
        street: 'C Edozie',
        City: 'Abuja',
        State: 'FCT'
    }
};
//To access the nested object
console.log(student.address);
console.log(student['address']);

//To access the properties of an object
console.log(student.address.street);
console.log(student.address['street']);

//CRUD Operations
// CREATE Operation ( to add properties to an object)

let mobile = {};
console.log(mobile);

mobile.brand = 'Apple';
mobile.color = 'Silver';
mobile.price = 35000;
mobile.isInsured = true;

console.log(mobile);

//READ Operation
console.log(mobile.brand);

//UPDATE Operation
console.log(mobile.price); //35000
mobile.price = 45000; //must use existing properties, else it will create another property
console.log(mobile);

//DELETE Operation
delete mobile.isInsured;
console.log(mobile);