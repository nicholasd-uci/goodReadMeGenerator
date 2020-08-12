

//dependensies
const fs = require('fs')
const path = require('path')
const inquirer = require('inquirer')
// import your function generator


//these questions are for inquirer to promt the user for input
const questions = [
    {
        type:"input",
        name:"github",
        message:"What is your github username?"
    },
    {
        type:"",
        name:"",
        message:""
    }
]

//function to create readme and write this readme file 
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}


//start the node application and handles other functions
function start() {
    inquirer.prompt(questions).then((inquirerResponses)=>{
        writeToFile("README.md", generator({...inquirerResponses}))
    })
}

start();