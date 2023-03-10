const licArr = ['MIT', 'GNU GPL 2.0', 'Apache License 2.0', 'Mozilla Public License 2.0'];


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === licArr[0]) {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if(license === licArr[1]) {
    return "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
  } else if(license === licArr[2]) {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  } else if(license === licArr[3]) {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  } else {
    return ""
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === licArr[0]) {
    return "https://opensource.org/licenses/MIT"
  } else if(license === licArr[1]) {
    return "https://opensource.org/licenses/gpl-2.0.php"
  } else if(license === licArr[2]) {
    return "https://opensource.org/licenses/Apache-2.0"
  } else if(license === licArr[3]) {
    return "https://opensource.org/licenses/MPL-2.0"
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === licArr[0]) {
    return `Learn more about ${licArr[0]} here: `
  } else if(license === licArr[1]) {
    return `Learn more about ${licArr[1]} here: `
  } else if(license === licArr[2]) {
    return `Learn more about ${licArr[2]} here: `
  } else if(license === licArr[3]) {
    return `Learn more about ${licArr[3]} here: `
  } else {
    return ""
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `## ${data.title}

  # Badges
   ${renderLicenseBadge(data.license)}
  
  # About
  
   ${data.description}
  
  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  # Usage
  
   ${data.usage}
  
  # Installation
  
   ${data.install}
  
  # Contributions
  
   ${data.contributions}
  
  # Questions
  
   Feel free to reach me with any further questions, my GitHub is: ${data.github} and my email is: ${data.email}
  
  
  # License
   ${renderLicenseSection(data.license)}
   ${renderLicenseLink(data.license)}`;
}

module.exports = generateMarkdown;
