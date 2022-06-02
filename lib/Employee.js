class Employee {

    //constructor that takes in argument of name, id, and email and sets assigns it to the object
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    //function that returns the objects name
    getName() {
        return this.name;
    }

    //function that returns the objects id
    getId() {
        return this.id;
    }

    //function that returns the objects email
    getEmail() {
        return this.id;
    }

    //function that returns the 
    getRole() {
        return "Employee";
    }
}

//exports the employee class so that it can be used in order files
module.exports = Employee;