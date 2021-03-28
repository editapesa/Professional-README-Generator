// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
       type: 'input',
       message: 'What is the title of your project?',
       name: 'title',
    },
    {
        type: 'input',
        message: 'Please give a description explaining the project.',
        name: 'description',
     },
     {
        type: 'input',
        message: 'What are the steps required to install the project?',
        name: 'installation',
     },
     {
        type: 'input',
        message: 'Provide instructions, examples of use, or demo pics.',
        name: 'usage',
     },
     {
        type: 'confirm',
        message: 'Can other developers contribute to the project? (y/N)',
        name: 'contributing',
     },
     {
        type: 'confirm',
        message: 'Would you like to include any tests for the project? (y/N)',
        name: 'tests',
     },
     {
        type: 'list',
        message: 'Which licenses, if any, were used?',
        name: 'license',
     },
     {
        type: 'input',
        message: 'Please enter the GitHub username(s) to be contacted for any questions.',
        name: 'questions',
     },
     {
        type: 'input',
        message: 'Please enter the email address to be contacted for any additional questions.',
        name: 'questions',
     },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
