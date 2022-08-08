// TODO: Include packages needed for this application
const inqurier = require('inquirer');
const fs = require('fs'); //file system
const generateMarkdown = require('./generateMarkdown')
console.log("Welcome to my README Generator!")
console.log("Answer the following questions to generate a high quality README for your project.")

// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    name: 'title',
    message: 'What is the title of the project?',
    validate: your_Input => {
        if (your_Input) {
            return true;
        } else {
            console.log('Enter a title to continue!');
            return false;
        }
    }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();