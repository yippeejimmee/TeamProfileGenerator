const Engineer = require('../lib/Engineer')

//creates new object with the inputed variables using engineer class 
const Testengineer = new Engineer('John', '5921', 'Johnemail@yahoo.com', 'github.com/johngit')

//sets variables to comp[are the object property values with intended values
const engineerName = 'John';
const engineerId = '5921';
const engineerEmail = 'Johnemail@yahoo.com';
const engineerGithub = 'github.com/johngit';

//compares the values of the object properties with intended values
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