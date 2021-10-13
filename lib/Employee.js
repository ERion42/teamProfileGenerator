// this showed up here? Auto-complete?
const { ignoreElements } = require("rxjs");

// establish class for global employees
class Employee{
    constructor(name,id,email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee";
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return this.role;
    }
}

// allows this to be used by other modules
module.exports = Employee;