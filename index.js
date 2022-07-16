// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

function validateInput(data) {
  if(data != "") {
    return true;
  } else {
    return "Please enter a response to the query"
  }
}

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
    name: "creator",
    message: "Please provide your name as Creator of this Project?", 
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
    choices: [
      "Apache 2.0",
      "BSD 3-Clause",
      "GNU Public License (GPL)",
      "IBM Public License",
      "MIT", 
      "Mozilla Public 2,0",
    ],
    validate: validateInput,
  }, {
    type: "input",
    name: "year",
    message: "What year did you obtain the license?", 
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
    validate: function(data) {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data)) {
          return true;
      } else {
          return 'Not a valid email address. Please enter your email again.';
      }
    },
  }
]);
};

function init(README) {
  readMeDetails()
    .then((data) => {
      console.log(data)
      if (!fs.existsSync(README)) {
          fs.mkdirSync(README);
          console.log('Directory created');
      } else {
          fs.writeFileSync('./README/README.md', generateMarkdown(data), function (error) {
              if (error) {
                  throw error;
              } else {
                  console.log('File created');
              }
          });
      }
    });
  }

init('README', 'readME.md');
