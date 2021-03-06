// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')


// Array of questions for user input
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
        type: 'input',
        message: 'What are the guidelines for other developers if permitted to contribute to the project?',
        name: 'contributing',
     },
     {
        type: 'input',
        message: 'If tests were created for the project, provide examples on how to them.',
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
        message: 'Enter the GitHub profile username associated with this project.',
        name: 'question1',
     },
     {
        type: 'input',
        message: 'Enter the email address to be contacted for further questions.',
        name: 'question2',
     },
];

// Function to write README file
function writeToFile(fileName, data) {
   return fs.writeFileSync(fileName, data);
}

// Function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
       writeToFile('README.md', generateMarkdown({...answers}))
    })
}

// Function call to initialize app
init();


