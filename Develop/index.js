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
  }, {
    type: "checkbox",
    name: "Headings",
    choices: ["Summary", "Technologies Used", "Motivation","Skills and Knowledge I learnt",]
  }, {
    type: "checkbox",
    name: "Headings",
    choices: ["HTML", "CSS", "Javascript","NodeJS"]
  }, {
    type: "checkbox",
    name: "techUsed",
    choices: ["HTML", "CSS", "Javascript","NodeJS"]
  }, {
    type: "list",
    name: "licences",
    message: "What open source licences do you require?",
    choices: ["HTML", "CSS", "Javascript","NodeJS"]
  } 
  ]);
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
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}

// Function call to initialize app
init();
