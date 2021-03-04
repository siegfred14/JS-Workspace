import { Customer } from '../customers/Customers.js';
import { Person } from '../persons/Persons.js'  //this allow you to 'extend Person'

export class Employee extends Person {
    constructor(firstName, lastName, age, designation) {
        super(firstName, lastName);
        this.age = age;
        this.designation = designation;
    }
    getAge() {
        return this.age;
    }
    getDesignation() {
        return this.designation;
    }
    greet() {
        let msg = ` Hello Mr: ${this.getFirstName()} ${this.getLastName()}
                   AGE: ${this.getAge()}
                   DESIGNATION: ${this.getDesignation()}`;
        console.log(msg);
    }
}

let customer = new Customer('Laura', 'Wilson', 28, 'Abuja');
customer.greet();
//Employee.js completed