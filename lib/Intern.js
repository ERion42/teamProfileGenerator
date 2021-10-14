// establish class for global employees
class Intern{
    constructor(name,id,email,school) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Intern";
        this.school = school;
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

    getSchool() {
        return this.school;
    }

    miscAnswer() {
        return this.miscAnswer;
    }
}

// allows this to be used by other modules
module.exports = Intern;