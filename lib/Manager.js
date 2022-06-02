//brings in the employee class structure to allow the Manager class inherit everything in it.
const Employee = require('./Employee')

//creating Manager while extending from Employee to utilizes the data inside and functions inside of it
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {

        //allows to Manager to access the data within Employee
        super(name, id, email);

        //takes the officenumber argument and assigns it to objects officenumber
        this.officerNumber = officeNumber;
    }

    //returns role of manager
    getRole() {
        return 'Manager'
    }
}

//exports the Manager class to be used in different files
module.exports = Manager;