// If there is no license, return an empty string
function renderLicense(data) {
  if(data === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (data === "GNU Public License (GPL)") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (data === "BSD 3-Clause") {
    return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
  } else if (data === "Apache 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  } else if (data === "Mozilla Public 2.0") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  } else if (data === "Eclipse Public License 1.0") {
    return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
  } else if (data = "") {
    return ""
  }

};


function validateInput(data) {
  if(data != "") {
    return true;
  } else {
    return "Please enter a response to the query"
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}

  ${renderLicense(licenseInput)}

  ## TABLE OF CONTENTS
  * [Description](#description)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Tests](#Tests)
  * [License](#License)
  * [Contributors](#Contributors)
  * [Credits](#Credits)
  * [Questions](#Questions)

  ## DESCRIPTION
  ${data.desciption}
  
  ## INSTALLATION
  ${data.installation}

  #### USAGE
  ${data.usage}

  ## TESTS
  * 
  *
  * 
  
  ## LICENSE
  ${data.license}

  ## CONTRIBUTORS
  * ${data.contributors}

  ## CREDITS
  * 
  *

  ## QUESTIONS
  _For any questions on this Project please contact me via the my Github or email below._
  ${data.github}
  ${data.email}
`;
}

module.exports = generateMarkdown;
