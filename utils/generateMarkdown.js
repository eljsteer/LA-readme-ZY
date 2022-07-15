// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === "MIT") {
    return "[![Licence: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## INTRODUCTION

  #### Techonologies Used in the Development of the Application
    * ${data.techUsed}

  ## ${data.Headings1} 

  ## MOTIVATION

  ## FUTURE DEVELOPMENTS
  * 
  *
  * 

  ## SKILLS AND KNOWLEDGE LEARNT

  ## FEATURES
  *
  *
  * 

  ## ${data.Headings2}
  ## CONTRIBUTORS
  ## ACKNOWLEDGEMENTS
  ## CREDTIS
  ## Licences
    ${data.license}
    ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
