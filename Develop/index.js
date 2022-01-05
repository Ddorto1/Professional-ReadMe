// Include packages needed for this application
const inquirer= require('inquirer')
const fs= require('fs')
const generateMarkdown=require('./utils/generateMarkdown')

// Created an array of questions for user input
const questions = [
    // inquirer
    {
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
        type:'list',
        name:'license',
        message: 'Please provide licensing for your project. This lets other developers know what can and cannot be done with your project.', 
        choices:[
            {name: 'MIT', value:'MIT'},
            {name: 'ISC'},
            {name: 'None'},
        ]
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
    },
    {
        type:'input',
        name: 'github',
        message: 'Please provide your github username'
    },
    {
        type:'input',
        name: 'email',
        message: 'Please provide a valid email address'
    }
];

// Created a function to write to the README file
function write (data) {
    fs.writeFile("README.md", generateMarkdown(data), err=>{
    if (err) throw new Error(err);
    console.log('ReadMe complete! Reference README.md to see the results!')
});
}

// Created a function to initialize the app
function init() {
    inquirer.prompt (questions)
    .then (data=>{
        write(data)
    })
    
}
// Function call to initialize app
init();