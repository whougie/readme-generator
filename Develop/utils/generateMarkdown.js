// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "NONE")
    return "";
  else 
  return `![Static Badge](https://img.shields.io/badge/License-${license}-orange)`

}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'NONE')
    return "N/A";
  else if (license === 'MIT')
    return "https://opensource.org/license/mit";
  else if (license === 'Apache2.0')
    return "https://www.apache.org/licenses/LICENSE-2.0";
  else if (license === 'GNU')
    return "https://www.gnu.org/licenses/gpl-3.0.en.html";
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = "Not licensed under any."

  if (license !== "NONE") 
  licenseSection = `Licensed under the [${license}](${renderLicenseLink(license)}) license.`
  
  return licenseSection;
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}
  ${renderLicenseBadge(data.projectLicense)}
  
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)
  
  ## Description
  ${data.projectDescription}
  
  ## Installation
  ${data.projectInstallation}
  
  ## Usage
  ${data.projectUsage}
  
  ## Contributing
  ${data.projectContributing}
  
  ## Tests
  ${data.projectTests}
  
  ## License
  ${renderLicenseSection(data.projectLicense)}
  
  ## Questions
  - GitHub User Profile URL: https://github.com/${data.projectGitHubUsername}
  - If you have any questions please contact ${data.projectEmail}
  `;

}

module.exports = generateMarkdown;
