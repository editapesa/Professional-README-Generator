// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (answers.license === 'MIT') {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  }else if (answers.license === 'ISC') {
    return `![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)`;
  }else if (answers.license === 'BSD 2-Clause') {
    return `![License: BSD 2-Clause](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)`;
  }else {
    return `[ ]`; 
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (answers.license === 'MIT') {
    return `[MIT License](https://opensource.org/licenses/MIT)`;
  }else if (answers.license === 'ISC') {
    return `[ISC License](https://opensource.org/licenses/ISC)`;
  }else if (answers.license === 'BSD 2-Clause') {
    return `[BSD 2-Clause License](https://opensource.org/licenses/BSD-2-Clause)`;
  }else {
    return `[ ]`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (answers.license === 'MIT') {
    return `[This project is licensed under the MIT license.]`;
  }else if (answers.license === 'ISC') {
    return `[This project is licensed under the ISC License.]`;
  }else if (answers.license === 'BSD 2-Clause') {
    return `[This project is licensed under the BSD 2-Clause License.]`;
  }else {
    return `[ ]`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  -[Installation](#installation)
  -[Usage](#usage)
  -[Contributing](#contributing)
  -[Tests](#tests)
  -[License](#license)
  -[Questions](#question)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## License
  ${data.license}

  ## Questions
  ${data.question}

`;
}

module.exports = generateMarkdown;
