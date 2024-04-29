// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// Create a function to write README file
function writeToFile(fileName, data) {

  const content = generateMarkdown(data);

  fs.writeFile(fileName, content, (error) =>
  error ? console.log("Unable to create to README.md") : console.log("Created README.md successfully"));
}

//Create a function to initialize app
function init() {
  
  //Create inquirer to ask for title, description, installation instructions, usage information, contribution guidelines, and test instructions
  inquirer.prompt([ 
    {
      type: 'input',
      message: 'What is the title of the project: ',
      name: "projectTitle"
    },
    {
      type: 'input',
      message: 'Please describe the project: ',
      name: "projectDescription"
    },
    {
      type: 'input',
      message: 'Please explain the installation instructions for the project: ',
      name: "projectInstallation"
    },
    {
      type: 'input',
      message: 'Please explain how to use the project: ',
      name: "projectUsage"
    },
    {
      type: 'input',
      message: "Please explain what the contribution guidelines are for the project: ",
      name: "projectContributing"
    },
    {
      type: 'input',
      message: 'Please explain the test instructions for the project: ',
      name: "projectTests"
    },
    {
      type: 'list',
      message: "Please select which license the project will be using: ",
      choices: ['NONE','MIT','Apache2.0', 'GNU'],
      name: "projectLicense"
    },
    {
      type: 'input',
      message: "Please enter the GitHub username for the project: ",
      name: "projectGitHubUsername"
    },
    {
      type: 'input',
      message: 'Please enter the email to contact if there are any questions: ',
      name: "projectEmail"
    }
  ])
  .then( result => {
    writeToFile('README.md', result);
  })
  
}

// Function call to initialize app
init();
