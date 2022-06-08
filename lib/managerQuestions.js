const managerQuestions = [{
    type: 'input',
    message: 'What is the name of the Manager?',
    name: 'name'
},
{
    type: 'input',
    message: 'What is the ID number of the manager?',
    name: 'id'
},
{
    type: 'input',
    message: 'Please enter the email address of the manager.',
    name: 'email'
},
{
    type: 'input',
    message: 'Enter the office number of the manager.',
    name: 'officeNumber'
},
{
    type: 'confirm',
    message: 'Would you like to add another manager?',
    name: 'anotherOne'
}];

module.exports = managerQuestions;