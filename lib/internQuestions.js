const internQuestions = [{
    type: 'input',
    message: 'What is the name of the Intern?',
    name: 'internName'
},
{
    type: 'input',
    message: 'What is the interns ID?',
    name: 'internId'
},
{
    type: 'input',
    message: 'What is the interns email?',
    name: 'internEmail'
},
{
    type: 'input',
    message: 'Where did the intern graduate college?',
    name: 'internSchool'
},
{
    type: 'confirm',
    message: 'Would you like to add another intern?',
    name: 'anotherOne'
}];

module.exports = internQuestions;