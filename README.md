# Professional README Generator
---

  ## Table of Contents
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Description](#description)
  - [Demo](#demo)
  - [Usage](#usage)
  - [Licensing](#licensing)

---

## User Story
---

AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project

---

## Acceptance Criteria
---

GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README

---

## Description
---

A node.js / Inquirer powered application to generate professional README.md files based on information that you provide. 

---

## Demo
---

Click the player to start the demo video. 

[![Portfolio](https://github.com/sammyc33/professional-readme-generator/blob/main/Player.png)](https://drive.google.com/file/d/1_U4nlMMO7vYkjonaIRMdDwnRI41pK8bU/view?usp=sharing)

If you have trouble playing the vidoe, you can also find it here: (https://drive.google.com/file/d/1_U4nlMMO7vYkjonaIRMdDwnRI41pK8bU/view?usp=sharing)

---

## Usage
---

### Download and Launch the Application
- Fork the code from this repository and install a copy of the application to your local machine. 
- Launch the `README Generator` application using your local terminal. I use Git Bash. You will use `cd` and the file location on your local machine, then to launch the application (I use VS Code for this) type in `code .` and click enter. 

### Install Inquirer Package
- Once the application is open in VS Code, you will need to install Inquirer. You can do this either using your local terminal or the integrated terminal in VS Code. I prefer the latter, as it keeps everything in one place. 
- Right click on the file named `index.js`, then choose Open in Integrated Terminal. 
- To install Inquirer, run `npm i` in the integrated terminal. 
- Once the installation is complete, you're ready to initialize the application!

### Start Generating README.md Files
- In the integrated terminal, type `node index.js`. This will launch the application. If you're successful, you should see the first question. 
- Answer each question, clicking enter after each. The title of the project will be used as the file name. If you provide your Github username, a URL to your Github profile will be created. 
- Once you have completed all questions, the newly generated file will appear in your file tree to the left. You can move it to a new folder, copy it, rename it to README.md, etc. 

---

## Licensing
---

Please review licensing details in the repository. 

---
