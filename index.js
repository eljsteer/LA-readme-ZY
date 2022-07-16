// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
function readMeDetails() {
  return inquirer.prompt([
    {
    type: "input",
    name: "title",
    message: "What is the name of your Project or Repository?", 
    validate: validateInput,
  }, {
    type: "input",
    name: "description",
    message: "Please provide a summary to describe the Project or Application?",
    validate: validateInput,
  }, {
    type: "input",
    name: "installation",
    message: "Please provide instructions on how to install the software?",
    validate: validateInput,
  }, {
    type: "input",
    name: "usage",
    message: "Please provide instructions or tips on how to use the Software?",
    validate: validateInput,
  }, {
    type: "input",
    name: "tests",
    message: "Tests",
    validate: validateInput,
  }, {
    type: "list",
    name: "license",
    message: "What open source licences do you require?",
    choices: ["MIT", "GNU Public License (GPL)", "BSD 3-Clause","Apache 2.0", "Mozilla Public 2,0", "IBM Public License" ],
    validate: validateInput,
  }, {
  type: "input",
  name: "contributing",
  message: "Please provide the name of contributors",
  validate: validateInput,
  }, {
  type: "input",
  name: "github",
  message: "Please provide your GitHub username",
  validate: validateInput,
  }, {
    type: "input",
    name: "email",
    message: "Please provide your email",
    validate: validateInput,
  },
])
}
// TODO: Create a function to write README file
// function writeToFile(answers) {
  
// };
// TODO: Create a function to initialize app
function init() {
  readMeDetails()
    .then((answers) => {
      console.log(answers)
      fs.writeFileSync("README.md", generateMarkdown(answers))
    }) 
    .catch((error) => {
      if (error.isTtyError) {
        console.log("Prompts cannot be rendered in current environment")
        console.log(error)
      } else {
        console.log(error)
      }
    });
}

// Function call to initialize app
init();
