// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
//const questions = [
inquirer
    .prompt([
    {
        type: "input",
        message: "What is the title of your project?",
        name: "projTitle"
    },
    {
        type: "input",
        message: "Describe your project.",
        name: "projDescription"
    },
    {
        type: "input",
        message: "What is the title of the project?",
        name: "projTitle"
    },
    {
        type: "input",
        message: "Describe how users can install the application.",
        name: "projInstall"
    },
    {
        type: "input",
        message: "Once installed, describe how to use the application?",
        name: "projUsage"
    },
    {
        type: "input",
        message: "How can other developers contribute to this project?",
        name: "projContribute"
    },
    {
        type: "input",
        message: "How can you test this application?",
        name: "projTest"
    },
    {
        type: "input",
        message: "What is your Github profile name?",
        name: "projQuestions1"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "projQuestions2"
    },
    {
        type: "input",
        message: "What is the title of your project?",
        name: "projTitle"
    },
    {
        type: "checkbox",
        message: "Select a license for your project:",
        choices: ['MIT', 'Apache', 'BSD', 'GPL', 'Mozilla-Public', 'None'],
        name: "projLicense"
    },
]);

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {};

// TODO: Create a function to initialize app
//function init() => { 
   
// Function call to initialize app
//init();
