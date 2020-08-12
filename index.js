

//dependensies
const fs = require('fs')
const path = require('path')
const inquirer = require('inquirer')
// import your function generator


//these questions are for inquirer to promt the user for input
const questions = [
    {
        type:"input",
        name:"Title",
        message:"What would you like Title to be?"  
    },
    {
        type:"input",
        name:"Description",
        message:"What is to be?"
    }
]

//function to create readme and write this readme file 
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.append(process.cwd(), fileName), data);
}


//start the node application and handles other functions
function start() {
    inquirer.prompt(questions)
    .then((inquirerResponses)=> {
        writeToFile("README.md", generator({...inquirerResponses}))
    })
    .catch(err => console.log(err))
}

start()