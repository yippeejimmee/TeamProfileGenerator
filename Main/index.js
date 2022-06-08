const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown')
const employee = require('./lib/Employee')
const engineer = require('./lib/Engineer')
const manager = require('./lib/Manager')
const intern = require('./lib/Intern');
const membersList = [];

const promptManager = () => {
    inquirer
        //prompts user to get information regarding manager
        .prompt([{
                type: 'input',
                name: 'name',
                message: "What is the manager's name?",
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the manager's ID number?",
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the manager's email?",
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: "What is the manager's officer number?",
            }
        ])

        //takes answer from prompt and creates new manager object with relevant information
        .then((answers) => {
            console.log(answers);
            const inputManager = new manager(answers.name, answers.id, answers.email, answers.officeNumber);

            //pushes the new manager object into the membersList array
            membersList.push(inputManager)
            console.log(membersList);

            //calls the employee menu function 
            employeeMenu();
        })
}

const promptEngineer = () => {
    inquirer
        //prompts user to get information regarding engineer
        .prompt([{
                type: 'input',
                name: 'name',
                message: "What is the engineer's name?",
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the engineer's ID number?",
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the engineer's email?",
            },
            {
                type: 'input',
                name: 'gitHub',
                message: "What is the engineer's github username?",
            }
        ])

        //takes answer from prompt and creates new engineer object with relevant information
        .then((answers) => {
            console.log(answers);
            const inputEngineer = new engineer(answers.name, answers.id, answers.email, answers.gitHub);

            //pushes the new manager object into the membersList array
            membersList.push(inputEngineer)
            console.log(membersList);

            //calls the employee menu function 
            employeeMenu();
        })
}

const promptIntern = () => {
    inquirer
        //prompts user to get information regarding engineer
        .prompt([{
                type: 'input',
                name: 'name',
                message: "What is the intern's name?",
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the intern's ID number?",
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the intern's email?",
            },
            {
                type: 'input',
                name: 'school',
                message: "What school does the intern attend?",
            }
        ])

        //takes answer from prompt and creates new intern object with relevant information
        .then((answers) => {
            console.log(answers);
            const inputIntern = new intern(answers.name, answers.id, answers.email, answers.gitHub);

            //pushes the new intern object into the membersList array
            membersList.push(inputIntern)
            console.log(membersList);

            //calls the employee menu function 
            employeeMenu();
        })
}

const employeeMenu = () => {
    inquirer
        //prompts user to decide which type of employee to add next or to create team
        .prompt([{
            type: 'list',
            name: 'employee',
            message: 'What would you like to do next?',
            choices: ["Add an engineer", "Add an intern", "Create team"]
        }])

        //utilizes user selection to determine which function to run next
        .then(selection => {
            if (selection = "Add an engineer") {
                promptEngineer();
            } else if (selection = "Add an intern") {
                promptIntern();
            } else {
                createTeam();
            }

        })
}

promptManager();