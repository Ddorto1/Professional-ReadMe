// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// STILL NEED TO DO

// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under


// Created a function to generate markdown for README
function generateMarkdown(data) {
  return `    
#   ${data.project}
---
# Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Image](#image)
* [License](#license)
* [Contributions](#contributions)
* [Tests](#tests)

---

# Description: 
  ${data.description}

---

# Installation: 
  ${data.installation}

---  

# Usage: 
  ${data.usage}

--- 

# License: 
  ${data.license}

---

# Contributing: 
  ${data.contributing}

---

# Tests: 
  ${data.tests}

---

# Questions:
    https://github.com/${data.github}

For additional questions feel free to reach out at: 
    ${data.email}
    `
}



module.exports = generateMarkdown;