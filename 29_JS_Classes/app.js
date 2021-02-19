//Default object in Javascript
/* let mobile ={
    brand : 'Apple',
    price: 35000,
    color: 'Silver'
}; 
console.log(mobile); */
//The problem with this above object is that after contruction, we can still add a property and still delete a property
//This does not represent a true life scenerio - you may alter the property value, but you cannot remove the vaue

class Mobile {
    constructor(brand, price, color) {
        this.brand = brand;
        this.price = price;
        this.color = color;
    }

    //to access properties, we use special properties called getters and setters
    