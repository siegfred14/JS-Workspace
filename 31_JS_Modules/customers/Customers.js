import { Person } from '../persons/Persons.js'

class Customer extends Person {
    constructor(firstName, lastName, age, location) {
        super(firstName, lastName);
        this.age = age;
        this.location = location;
    }
    getAge() {
        return this.age;
    }
    getLocation() {
        return this.location;
    }
    
};
