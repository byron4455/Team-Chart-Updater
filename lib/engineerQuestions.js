const engineerQuestions = [{
    type: 'input',
    message: 'What is the name of the Engineer?',
    name: 'engineerName'
},
{
    type: 'number',
    message: 'What is their ID number?',
    name: 'engineerId'
},
{
    type: 'input',
    message: 'What is their email address?',
    name: 'engineerEmail'
},
{
    type: 'input',
    message: 'What is their GitHub?',
    name: 'engineerGithub'
},
{
    type: 'confirm',
    message: 'Would you like to add another engineer?',
    name: 'anotherOne'
}];

module.exports = engineerQuestions;