// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "Describe your project.",
        name: "description"
    },
    {
        type: "input",
        message: "Describe how users can install the application.",
        name: "install"
    },
    {
        type: "input",
        message: "Once installed, describe how to use the application?",
        name: "usage"
    },
    {
        type: "input",
        message: "How can other developers contribute to this project?",
        name: "contribute"
    },
    {
        type: "input",
        message: "How can you test this application?",
        name: "test"
    },
    {
        type: "input",
        message: "What is your Github profile name?",
        name: "profile"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
    {
        type: "checkbox",
        message: "Select a license for your project:",
        choices: ['MIT', 'Apache', 'BSD', 'None'],
        name: "license",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`, generateMarkdown(data), function (err) {
        if (err) 
            return console.log(err);
        console.log("Success! Your shiny new README file is being generated. THis may take a few moments.");
    }
    )
};

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) =>
            writeToFile(response.title, response)
        )
};

// Function call to initialize app
init();
