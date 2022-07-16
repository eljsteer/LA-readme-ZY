// Function to call and display licenses, or return an empty string if license "none" is chosen
function renderLicense(data) {
  if (data === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (data === "GNU Public License (GPL)") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (data === "BSD 3-Clause") {
    return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  } else if (data === "Apache 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (data === "Mozilla Public 2.0") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  } else if (data === "Eclipse Public License 1.0") {
    return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
  } else if (data === "IBM Public License") {
    return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
  } else if (data === "none") {
    return "";
  };
};


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}

  ${renderLicense(data.license)}

  ## TABLE OF CONTENTS
  - [Description](#description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Tests](#Tests)
  - [License](#License)
  - [Contributors](#Contributors)
  - [Credits](#Credits)
  - [Questions](#Questions)

  ## DESCRIPTION
  ${data.description}
  
  ## INSTALLATION
  ${data.installation}

  ## USAGE
  ${data.usage}

  ## MEDIA


  ## TESTS
  *  ${data.tests}
  
  ## LICENSE
  Project developed ${data.year} by ${data.creator},<br />
  This application is licensed under the ${data.license} license.

  ## CONTRIBUTORS
  * ${data.contributors}

  ## CREDITS
  * 
  *

  ## QUESTIONS
  For any questions on this project please contact me via my Github link or email.<br />

  **Find me on GitHub - UserName:** [${data.github}](https://github.com/${data.github})<br />
  **Email me with any questions:** ${data.email}<br /><br />

  _This README was generated with ❤️ by [LA-README-ZY](https://github.com/eljsteer/LA-README-ZY)_
`;
}

module.exports = generateMarkdown;
