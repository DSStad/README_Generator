// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "Project Title:",
    name: "title",
  },
  {
    type: "input",
    message: "Description:",
    name: "descrip",
  },
  {
    type: "input",
    message: "Installation instructions:",
    name: "install",
  },
  {
    type: "input",
    message: "Usage information:",
    name: "usage",
  },
  {
    type: "input",
    message: "Contribution guidelines:",
    name: "contrib",
  },
  {
    type: "input",
    message: "Test instructions:",
    name: "test",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license?",
    choices: ["none", "Apache", "GNU", "MIT", "BSD 2", "BSD 3"],
    default: "none",
  },
  {
    type: "input",
    message: "Github username:",
    name: "username",
  },
  {
    type: "input",
    message: "Email:",
    name: "email",
  },
];
inquirer.prompt(questions).then((answers) => {
  const template = generateMarkdown(answers);
  writeToFile("./Output/README.md", template);
  console.log(template);
  console.log(JSON.stringify(answers, null, "  "));
});

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log("there was an error", err);
    }
  });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
