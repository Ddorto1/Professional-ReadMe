// TODO: Include packages needed for this application
var inquirer= require('inquirer')
// TODO: Create an array of questions for user input
console.log ("Hello Node")
const questions = [
    inquirer
    .prompt([{
        type:'input',
        name:'project',
        message:'What is the title of your project?'
    },
    {
        type:'input',
        name:'description',
        message:'Please input a description of your project.'
    },
    {    
        type:'input',
        name:'table of contents',
        message: 'Please include a table of contents for your project.',
    },
    {
        type: 'input',
        name:'installation',
        message: 'What are the steps required to install your project?',
    },
    {
        type:'input',
        name:'usage',
        message: 'Please provide instructions and examples for use of project.', 
    },
    {
        type:'input',
        name:'license',
        message: 'Please provide licensing for your project. This lets other developers know what can and cannot be done with your project.', 
    },
    {
        type:'input',
        name:'contributing',
        message: 'Please provide guidelines on how other developers can contribute to your project.', 
    },
    {
        type:'input',
        name:'tests',
        message: 'Provide examples on how to run tests for your application.'
    }
    ]),
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();