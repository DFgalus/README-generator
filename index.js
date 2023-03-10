// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README




// TODO: Include packages needed for this application
const  inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
function promptUser() {
   return inquirer.prompt([
      {
         type: 'input',
         name: 'title',
         message: 'What is the title of your project?',
      }, {
         type: 'input',
         name: 'description',
         message: 'Add a brief description of your project.',
      }, {
         type: 'input',
         name: 'usage',
         message: 'Add some usage instructions, if applicable.',
      } , {
         type: 'input',
         name: 'install',
         message: 'Add intructions for installtion',
      }, {
         type: 'input',
         name: 'contributions',
         message: 'Add contributions to collaborators and sources.',
      }, {
         type: 'input',
         name: 'github',
         message: 'What is your GitHub username?',
      }, {
         type: 'input',
         name: 'email',
         message: 'What is your email?',
      }, {
         type: 'list',
         name: 'license',
         message: 'Choose a license.',
         choices: ['MIT', 'Apache', 'GNU 3.0', 'MPL'],
      }, {
         type: 'input',
         name: 'fileName',
         message: 'What do you want to call this README?',
      },
   ])
   .then((answers) => {
      const markdown = generateMarkdown(answers);
      
      writeToFile((answers.fileName), (generateMarkdown(answers)));
   })};
   
   
   
   
   // TODO: Create a function to write README file
function writeToFile(fileName, data) {
   fs.writeFile(`${fileName}.md`, data, (err) => {
   err ? console.error(err) : console.log(`Successfully created ${fileName}.md`)
   })
};

// TODO: Create a function to initialize app
function init() {
   promptUser();
}

// Function call to initialize app
init();
