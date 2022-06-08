// TODO: Include packages needed for this application
const fs = require('fs');
// const generateHTML = require('./README-Generator/generateMarkdown.js');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern');
const generateHTML = require('./dist/template');
const engineerQuestions = require('./lib/engineerQuestions');
const managerQuestions = require('./lib/managerQuestions')
const internQuestions = require('./lib/internQuestions');
const { type } = require('os');
var everyone = [];
// TODO: Create an array of questions for user input
function mainMenu() {
    inquirer.prompt([
{
    type: 'list',
    message: 'What is the new employees position?',
    choices: ['Engineer', 'Intern', 'Manager'],
    name: 'role' 
}
])
.then((data) => {
    if (data.role === 'Engineer') {
        return newEngineer();
    } else if (data.role === 'Manager') {
        return newManager();
    } else return newIntern();
});
function newEngineer() {
    inquirer.prompt(engineerQuestions)
    .then(engineerInput => {
        const { name, id, email, github } = engineerInput;
        const engineer = new Engineer (name, id, email, github);

        everyone.push(engineer)
        if (engineerInput.anotherOne === true) {
            newEngineer();
        } else sideMenu();
    })
};
function newIntern() {
    inquirer.prompt(internQuestions)
    .then(internInput => {
        const { name, id, email, school } = internInput;
        const intern = new Intern (name, id, email, school);

        everyone.push(intern)
        if (internInput.anotherOne === true) {
            newIntern();
        } else sideMenu();
    })
};

function newManager() {
    inquirer.prompt(managerQuestions)
    .then(managerInput => {
        const { name, id, email, officeNumber } = managerInput;
        const manager = new Manager (name, id, email, officeNumber);

        everyone.push(manager)
        if (managerInput.anotherOne === true) {
            newIntern();
        } else sideMenu();
    })
};
function writeToFile(fileName, everyone) {
    
    fs.writeFile(fileName, everyone, function(err) {
        if (err) {
            return console.log(err)
        } else {
            console.log(everyone)
        }
    })
}
function sideMenu() {
    inquirer.prompt([
        {
            type: 'list',
    message: 'What would you like to do now?',
    choices: ['Add Employee', 'Exit'],
    name: 'sideMenuChoice' 
}
])
.then((data) => {
    // console.log(everyone)
    if (data.sideMenuChoice === 'Add Employee') {
        return mainMenu();
    } else console.log('uh oh')
    writeToFile("index.html", generateHTML(everyone));

});
};

};

    mainMenu()
