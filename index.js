// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter the title for your project?',
      },
      {
          type: 'input',
          name: 'description',
          message: 'Please enter a description of your project',
        },
        {
          type: 'input',
          name: 'installation',
          message: 'Please enter installation instructions for your project',
        },
        {
          type: 'input',
          name: 'usage',
          message: 'Please enter usage information for your project ',
        },
        {
          type: 'list',
          name: 'license',
          message: 'Please select the license used in your project ',
          choices: ["GNU 2", "GNU 3", "MIT", "Apache License 2","None"],
        },
        {
          type: "input",
          name: "contribution",
          message: "Please enter contribution guidelines for your project",
        },
        {
          type: "input",
          name: "tests",
          message: "Please enter any content of tests ",
        },
        {
          type: "input",
          name: "gitHub",
          message: "Please enter your Github username ",
        },
        {
          type: "input",
          name: "email",
          message: "Please enter your email address ",
        }
];

function badgeRender(data) { 
    let badge;
    if  (data.license === "None") {
        badge = "";
     return badge ;
   }
    if (data.license === "GNU 2") {
         badge = "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
     return badge ;
    }

    if (data.license === "GNU 3") {
         badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
     return badge;
    }

    if (data.license === "MIT") {
         badge =  "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
     return badge;
    }

    if (data.license === "Apache License 2") {
         badge =  "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
     return badge;
    }   
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const badge = badgeRender(data)
    const readMe = `# ${data.title}
${badge}
## Description
${data.description}
## Table of Contents
1. [Installation](#installation)
2. [Usage Information](#usage)
3. [License](#license)
4. [Contribution](#contribution)
5. [Tests](#tests)
6. [Contacts](#contacts)
## Installation
${data.installation}
## Usage
${data.usage}
## License
license for application: ${data.license} ${badge}
## Contribution
${data.contribution}
## Tests
${data.tests}
## Contacts
* Github: [https://github.com/${data.gitHub}](https://github.com/${data.gitHub})
* Email: ${data.email}
`
    fs.writeFile(fileName, readMe, (err) =>
        err ? console.log(err) : console.log('Success!'))
    
}

// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions)
.then (answers => {writeToFile('README.md',answers)})
}

// Function call to initialize app
init();
