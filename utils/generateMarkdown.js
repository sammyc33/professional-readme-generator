// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
let license = `$(data.license)`;
let licenseBadge = "";
let licenseURL = "";

function renderLicenseBadge(license) {
  if (license === "MIT") {
    licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
    licenseURL = "https://opensource.org/licenses/MIT";
  };
  if (license === "Apache") {
    licenseBadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]";
    licenseURL = "https://opensource.org/licenses/Apache-2.0";
  };
  if (license === "BSD") {
    licenseBadge = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]";
    licenseURL = "https://opensource.org/licenses/BSD-3-Clause";
  };
  if (license === "None") {
    licenseBadge = "";
    licenseURL = "";
  };
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

// This function was consolidated in the above section.
//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}
renderLicenseBadge();

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}


  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribute](#contribute)
  - [Testing](#testing)
  - [Questions](#questions)

  ## Description

  ${data.description}

  ## Installation

  ${data.install}

  ## Usage

  ${data.usage}

  ## Contribute

  ${data.contribute}

  ## Testing

  ${data.test}

  ## Questions
  
  Project details can be found in the following Github repository:
  - [Github Repository] (https://github.com/${data.profile})
  
  Contact me a this email address with any questions: 
  - ${data.email}
`;
}

module.exports = generateMarkdown;