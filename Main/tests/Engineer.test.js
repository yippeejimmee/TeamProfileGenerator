const Engineer = require('../lib/Engineer')
const Testengineer = new Engineer('John', '5921', 'Johnemail@yahoo.com', 'github.com/johngit')

const engineerName = 'John';
const engineerId = '5921';
const engineerEmail = 'Johnemail@yahoo.com';
const engineerGithub = 'github.com/johngit';

test('if constructor values are given to object properties', () => {
    expect(Testengineer.name).toBe(engineerName);
    expect(Testengineer.id).toBe(engineerId);
    expect(Testengineer.email).toBe(engineerEmail);
    expect(Testengineer.github).toBe(engineerGithub);
})

test('if return correct Github from getGithub', () => {
    expect(Testengineer.getGithub()).toBe(engineerGithub);
})

test('if return correct role from getRole', () => {
    expect(Testengineer.getRole()).toBe("Engineer");
})