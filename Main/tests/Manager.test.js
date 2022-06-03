const Manager = require('../lib/Manager')
const Testmanager = new Manager('Michelle', '2211', 'Michellemail@yahoo.com', '3910011')

const managerName = 'Michelle';
const managerId = '2211';
const managerEmail = 'Michellemail@yahoo.com';
const managerNumber = '3910011';

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