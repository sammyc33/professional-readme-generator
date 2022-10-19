// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
let licSelection = `$(data.license)`;
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

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
  Project details can be found at the following Github repository:
  - [${data.profile}](https://github.com/${data.profile})
  Contact me a this email address with any questions: 
  - ${data.email}
`;
}

module.exports = generateMarkdown;
