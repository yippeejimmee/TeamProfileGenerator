const Intern = require('../lib/Intern')
const TestIntern = new Intern('Jason', '9488', 'Jasonfire@yahoo.com', 'CSULB')

const InternName = 'Jason';
const InternId = '9488';
const InternEmail = 'Jasonfire@yahoo.com';
const InternSchool = 'CSULB';

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