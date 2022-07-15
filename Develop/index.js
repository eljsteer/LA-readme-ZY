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
    name: "Headings1",
    message: "What optional headings would you like to include?",
    choices: ["REQUIREMENTS", "INSTALLATION", "FAQ"]
  }, {
    type: "checkbox",
    name: "Headings2",
    choices: ["HOW TO USE", "CODE SUMMUARY EXAMPLES", "HOW TO CONTRIBUTE"]
  }, {
    type: "checkbox",
    name: "techUsed",
    message: "What technology or Frameworks did you use?",
    choices: ["HTML", "CSS", "Javascript", "Bootstrap", "NodeJS"]
  }, {
    type: "list",
    name: "licences",
    message: "What open source licences do you require?",
    choices: ["MIT", "GNU", "BSD Simplified","Apache 2.0", "Mozilla Public 2,0", ]
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
        console.log("Prompts cannot be rendered in current environment")
        console.log(error)
      } else {
        console.log(error)
      }
    });
}

// Function call to initialize app
init();
