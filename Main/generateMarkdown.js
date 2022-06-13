//create list array of employees that will hold the html of each employee 
let employeeList2 = [];

//function that will take data from index.js for employees
function generateMarkdown(employeeList) {
    console.log(employeeList)

    //looks through each employee and runs either manager, engineer, or intern function down below to create appropriate html
    employeeList.forEach((employee) => {

        //checks to see role of each employee and run appropriate function before adding it to employeeList2 array
        if (employee.getRole() == "Manager") {
            employeeList2 += createManager(employee)
        } else if (employee.getRole() == "Engineer") {
            employeeList2 += createEngineer(employee)
        } else if (employee.getRole() == "Intern") {
            employeeList2 += createIntern(employee)
        }
    });

    //returns html template of the webpage with each 
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Coding Office Team</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</head>

<div class="container-body min-vw-10">
    <div class="p-5 mb-5 bg-info text-dark text-center fs-1 fw-bolder">Office Team</div>
</div>

<div class="container-body container-fluid">
    <div class="row">
        ${employeeList2}
    </div>
</div>
    `
}

//function that creates the manager card based on the parameter set by the function generateMarkdown
function createManager(managerInput) {
    return `
<div class="col-md-4 col-sm-6 col-12 col-lg-3">
<div class="card mb-4 rounded-3 shadow-sm p-3">
    <div class="card-header py-3">
    <h1 class="my-0 fw-normal text-center">Manager</h4>
    </div>
    <div class="card-body">
    <ul class="list-unstyled mt-3 mb-4 text-center">
        <li>${managerInput.name}</li>
        <li>Manager ID: ${managerInput.id}</li>
        <li>Email: <a href="mailto:${managerInput.email}">${managerInput.email}</a></li>
        <li>Officer Number: ${managerInput.officeNumber}</li>
    </ul>
    </div>
</div>
</div>
`
}

//function that creates the engineer card based on the parameter set by the function generateMarkdown
function createEngineer(engineerInput) {
    return `
<div class="col-md-4 col-sm-6 col-12 col-lg-3">
<div class="card mb-4 rounded-3 shadow-sm p-3">
    <div class="card-header py-3">
    <h1 class="my-0 fw-normal text-center">Engineer</h4>
    </div>
    <div class="card-body">
    <ul class="list-unstyled mt-3 mb-4 text-center">
        <li>${engineerInput.name}</li>
        <li>Engineer ID: ${engineerInput.id}</li>
        <li>Email: <a href="mailto:${engineerInput.email}">${engineerInput.email}</a></li>
        <li>Github: github.com/${engineerInput.github}</li>
    </ul>
    </div>
</div>
</div>
`
}

//function that creates the intern card based on the parameter set by the function generateMarkdown
function createIntern(internInput) {
    return `
<div class="col-md-4 col-sm-6 col-12 col-lg-3">
<div class="card mb-4 rounded-3 shadow-sm p-3">
    <div class="card-header py-3">
    <h1 class="my-0 fw-normal text-center">Intern</h4>
    </div>
    <div class="card-body">
    <ul class="list-unstyled mt-3 mb-4 text-center">
        <li>${internInput.name}</li>
        <li>Intern ID: ${internInput.id}</li>
        <li>Email: <a href="mailto:${internInput.email}">${internInput.email}</a></li>
        <li>School: ${internInput.school}</li>
    </ul>
    </div>
</div>
</div>
`
}

//exports the generateMarkdown function 
module.exports = generateMarkdown;