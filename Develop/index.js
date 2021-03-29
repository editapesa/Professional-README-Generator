// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
const questions = [
    {
       type: 'input',
       message: 'What is the title of your project?',
       name: 'title',
    },
    {
        type: 'input',
        message: 'Give a description explaining the project.',
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
        message: 'Can other developers contribute to the project?',
        name: 'contributing',
     },
     {
        type: 'confirm',
        message: 'Would you like to include any tests for the project?',
        name: 'tests',
     },
     {
        type: 'list',
        message: 'Which license, if any, was used?',
        name: 'license',
        choices: ['MIT', 'ISC', 'BSD 2-Clause', 'None'],
     },
     {
        type: 'input',
        message: 'Enter the GitHub username to be contacted for any questions.',
        name: 'questions',
     },
     {
        type: 'input',
        message: 'Enter the email address to be contacted for further questions.',
        name: 'questions',
     },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.md', data, generateMarkdown)
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
}

// Function call to initialize app
init();



//callback error function, if needed
// function(err) {
//     if (err) throw err;
//     console.log('whatever message, if successful.')
// }