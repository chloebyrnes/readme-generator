// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `# ${data.license}`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Table of Contents
  - [Description](#description)
  - [License](#license)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Contact Information](#contact-information)

  ## Description
  ${data.description}
  ## License
  ${data.license}
  ## Installation
  ${data.installion}
  ## Usage
  ${data.usage}
  ## Contribution
  ${data.contribution}
  ## Testing
  ${data.test}
  ## Contact Information
  - Github: [${data.github}](https://github.com/${data.github})
  - Email: [${data.email}]()
`;
}

module.exports = generateMarkdown;