// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const licenseObj = {
  none: {
    badge: "",
    link: "",
    section: "",
  },
  Apache: {
    badge:
      "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]",
    link: "https://opensource.org/licenses/Apache-2.0",
    section: "Apache License",
  },
  MIT: {
    badge:
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]",
    link: "https://opensource.org/licenses/MIT",
    section: "MIT License",
  },
  GNU: {
    badge:
      "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]",
    link: "https://www.gnu.org/licenses/gpl-3.0",
    section: "GNU License",
  },
  "BSD 2": {
    badge:
      "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)]",
    link: "https://opensource.org/licenses/BSD-2-Clause",
    section: "BSD-2 License",
  },
  "BSD 3": {
    badge:
      "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]",
    link: "https://opensource.org/licenses/BSD-3-Clause",
    section: "BSD-3 License",
  },
};

function renderLicenseBadge(license) {
  return licenseObj[license].badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return licenseObj[license].link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return licenseObj[license].section;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.descrip}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [Contribute](#how-to-contribute)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## How to Contribute

  ## Tests

  ## License
  This application is covered under a ${renderLicenseSection(
    data.license
  )}. For further clarification on licensing please follow link provided.
  ${renderLicenseLink(data.license)}

  ## Questions
  If you have further questions or want to checkout my other Repositories.
  Github: ${data.username}
  Email: ${data.email}
`;
}

module.exports = generateMarkdown;
