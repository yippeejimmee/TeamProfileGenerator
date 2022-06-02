//brings in the employee class structure to allow the Intern class to inherit everything in it.
const Employee = require('./Employee')

//creating Intern while extending from Employee to utilizes the properties and methods inside of it
class Intern extends Employee {
    constructor(name, id, email, school) {

        //allows to Intern to access the data within Employee
        super(name, id, email);

        //takes the officenumber argument and assigns it to objects officenumber
        this.school = school;
    }

    //function that returns school of the object
    getSchool() {
        return this.school
    }

    //returns role of Intern
    getRole() {
        return 'Intern'
    }
}

//exports the Intern class to be used in different files
module.exports = Intern;