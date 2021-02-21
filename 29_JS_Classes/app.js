//Default object in Javascript
/* let mobile ={
    brand : 'Apple',
    price: 35000,
    color: 'Silver'
}; 
console.log(mobile); */
//The problem with this above object is that after contruction, we can still add a property and still delete a property
//This does not represent a true life scenerio - you may alter the property value, but you cannot remove the vaue
/* 
class Mobile {
    constructor(brand, price, color) {
        this.brand = brand;
        this.price = price;
        this.color = color;
    }

//to access properties, we use special properties called getters and setters
    //To add getters
    getBrand() {
        return this.brand;
    }
    getPrice() {
        return this.price;
    }
    getColor() {
        return this.color;
    }
    //printSpecification added
    printSpecification(){
        let spec = `BRAND : ${this.getBrand()}
                    PRICE : ${this.getPrice()}
                    COLOR : ${this.getColor()}`;
        console.log(spec);
    }
}
let mobile = new Mobile('Apple', 35000, 'Silver');
mobile.printSpecification();
 */

//class Mobile with setters
class Mobile {
    constructor(brand, price, color) {
        this.brand = brand;
        this.price = price;
        this.color = color;
    }

    getBrand() {
        return this.brand;
    }
    setBrand(brand) {
        this.brand = brand
    }

    getPrice() {
        return this.price;
    }
    setPrice(price) {
        this.price = price;
    }

    getColor() {
        return this.color;
    }
    setColor() {
        this.color = color;
    }

    printSpecification() {
        let spec = `BRAND: ${this.getBrand()}
                    PRICE: ${this.getPrice()}
                    COLOR: ${this.getColor()}`;
        console.log(spec);
    }
}

//to create an object based on the specification
let mobile = new Mobile('Apple', 35000, 'Silver');
mobile.printSpecification();

//to set new price
mobile.setPrice(45000);

//To see the new price
mobile.printSpecification(); 

/* 
In a nutshell, A class is a design or a blueprint which contains a special method/function called constructor,
Which is responsible for initializing the values which you have assigned to create an object
It also containe getters and setters to access and change the values of the properties of the Class or object

You may have some instance methods to fetch data or do some other operation

You create an object using the 'new' keyword 

In classes, just as a real life object, 
- you can only access or change a property. 
- You cannot delete a property
- You cannot add a property
*/