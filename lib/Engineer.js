// establish class for global employees
class Engineer{
    constructor(name,id,email,gitHub) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Engineer";
        this.miscAnswer = miscAnswer;
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

    miscAnswer() {
        return this.miscAnswer;
    }    
}

// allows this to be used by other modules
module.exports = Engineer;