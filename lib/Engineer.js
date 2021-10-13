// establish class for global employees
class Engineer{
    constructor(name,id,email,gitHub) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Engineer";
        this.gitHub = gitHub;
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

    getGitHub() {
        return this.gitHub;
    }
}

// allows this to be used by other modules
module.exports = Engineer;