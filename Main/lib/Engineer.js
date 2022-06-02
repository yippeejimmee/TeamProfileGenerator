//brings in the employee class structure to allow the Engineer class to inherit everything in it.
const Employee = require('./Employee')

//creating Engineer while extending from Employee to utilizes the properties and methods inside of it
class Engineer extends Employee {
    constructor(name, id, email, github) {

        //allows to Engineer to access the data within Employee
        super(name, id, email);

        //takes the officenumber argument and assigns it to objects officenumber
        this.github = github;
    }

    //function that returns github of the object
    getGithub() {
        return this.github
    }

    //returns role of Engineer
    getRole() {
        return 'Engineer'
    }
}

//exports the Engineer class to be used in different files
module.exports = Engineer;