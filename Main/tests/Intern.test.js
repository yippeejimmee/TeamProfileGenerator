const Intern = require('../lib/Intern')

//creates new object with the inputed variables using intern class 
const TestIntern = new Intern('Jason', '9488', 'Jasonfire@yahoo.com', 'CSULB')

//sets variables to comp[are the object property values with intended values
const InternName = 'Jason';
const InternId = '9488';
const InternEmail = 'Jasonfire@yahoo.com';
const InternSchool = 'CSULB';

//compares the values of the object properties with intended values
test('if constructor values are given to object properties', () => {
    expect(TestIntern.name).toBe(InternName);
    expect(TestIntern.id).toBe(InternId);
    expect(TestIntern.email).toBe(InternEmail);
    expect(TestIntern.school).toBe(InternSchool);
})

test('if return correct school from getSchool', () => {
    expect(TestIntern.getSchool()).toBe('CSULB');
})

test('if return correct role from getRole', () => {
    expect(TestIntern.getRole()).toBe("Intern");
})