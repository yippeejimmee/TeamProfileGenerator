const Manager = require('../lib/Manager')

//creates new object with the inputed variables using manager class 
const Testmanager = new Manager('Michelle', '2211', 'Michellemail@yahoo.com', '3910011')

//sets variables to comp[are the object property values with intended values
const managerName = 'Michelle';
const managerId = '2211';
const managerEmail = 'Michellemail@yahoo.com';
const managerNumber = '3910011';

//compares the values of the object properties with intended values
test('if constructor values are given to object properties', () => {
    expect(Testmanager.name).toBe(managerName);
    expect(Testmanager.id).toBe(managerId);
    expect(Testmanager.email).toBe(managerEmail);
    expect(Testmanager.officeNumber).toBe(managerNumber);
})

test('if return correct officer number from getOfficeNumber', () => {
    expect(Testmanager.getOfficeNumber()).toBe('3910011');
})

test('if return correct role from getRole', () => {
    expect(Testmanager.getRole()).toBe("Manager");
})