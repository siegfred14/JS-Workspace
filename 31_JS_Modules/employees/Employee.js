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
    
}

