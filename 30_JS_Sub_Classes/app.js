class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFirstName() {
        return this.firstName;
    }
    getLastName() {
        return this.lastName;
    }
    greet() {
        let msg = `Welcome Mr: ${this.getFirstName()} ${this.getLastName()}`;
        console.log(msg);
    }
}
//create a new person object
let person = new Person('John', 'Doe');
person.greet();

// to create  new class which inherits from class Person aa the parent
class Employee extends Person {
    constructor(firstName, lastName, age, designation) {


    }
}

