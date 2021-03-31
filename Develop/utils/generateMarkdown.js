// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  }else if (license === 'ISC') {
    return `![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)`;
  }else if (license === 'BSD 2-Clause') {
    return `![License: BSD 2-Clause](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)`;
  }else {
    return ` `; 
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `[MIT License](https://opensource.org/licenses/MIT)`;
  }else if (license === 'ISC') {
    return `[ISC License](https://opensource.org/licenses/ISC)`;
  }else if (license === 'BSD 2-Clause') {
    return `[BSD 2-Clause License](https://opensource.org/licenses/BSD-2-Clause)`;
  }else {
    return ` `;
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'MIT') {
    return `This project is licensed under the MIT license.`;
  }else if (license === 'ISC') {
    return `This project is licensed under the ISC License.`;
  }else if (license === 'BSD 2-Clause') {
    return `This project is licensed under the BSD 2-Clause License.`;
  }else {
    return ` `;
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}

  ## Table of Contents
  [Installation](#installation)\n
  [Usage](#usage)\n
  [Contributing](#contributing)\n
  [Tests](#tests)\n
  [License](#license)\n
  [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## License
  ${renderLicenseLink(data.license)}\n
  ${renderLicenseSection(data.license)}

  ## Questions
  ${data.question1}\n
  If there are any additional questions please contact me at the email address below.\n
  ${data.question2}

`;
}

module.exports = generateMarkdown;
