const Employee = require('../lib/Employee')

//creates new object with the inputed variables using employee class 
const Testemployee = new Employee('Mike', '3819', 'Mikeemail@yahoo.com');

//sets variables to comp[are the object property values with intended values
const employeename = 'Mike';
const employeeid = '3819';
const employeeemail = 'Mikeemail@yahoo.com'

//compares the values of the object properties with intended values
test('if constructor values are given to object properties', () => {
    expect(Testemployee.name).toBe(employeename);
    expect(Testemployee.id).toBe(employeeid);
    expect(Testemployee.email).toBe(employeeemail);
});

test('if return correct name from getName', () => {
    expect(Testemployee.getName()).toBe(employeename);
})

test('if return correct id from getId', () => {
    expect(Testemployee.getId()).toBe(employeeid);
})

test('if return correct email from getEmail', () => {
    expect(Testemployee.getEmail()).toBe(employeeemail);
})

test('if return employee from getRole', () => {
    expect(Testemployee.getRole()).toBe("Employee");
})