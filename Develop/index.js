// TODO: Include packages needed for this application
const inquirer= require('inquirer')
const fs= require('fs')
const generateMarkdown=require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
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
        type:'input',
        name:'image',
        message: 'Please provide the image of your project in the "assets/images" folder'
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


// const generatePage= (data)=>{
//     return`
//     #${data.project}

//     # Table of Contents
//     -#[Description](#description)
//     -#[Installation](#installation)
//     -#[Usage](#usage)
//     -#[Image](#image)
//     -#[License](#license)
//     -#[Contributions](#contributions)
//     -#[Tests](#tests)
    
//     ##Description: 
//     ${data.description}

//     ##Installation: 
//     ${data.installation}

//     ##Usage: 
//     ${data.usage}

//     ##Image
//     ${data.image}

//     ##License: 
//     ${data.license}

//     ##Contributing: 
//     ${data.contributing}

//     ##Tests: 
//     ${data.tests}`
// }

// TODO: Create a function to write README file
function write (data) {
    fs.writeFile("README.md", generateMarkdown(data), err=>{
    if (err) throw new Error(err);
    console.log('ReadMe complete! Reference README.md to see the results!')
});
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt (questions)
    .then (data=>{
        write(data)
    })
    // .then((inquirerResponse, data))
}
// Function call to initialize app
init();