// NOTE**       PLEASE BE AWARE!!! 
// I worked on this with a group in my class. -->  This is all my own questions and formatting of my own temp literal. //
// NOTE**       PLEASE BE AWARE

const { prompt } = require('inquirer')
const { writeFile } = require('fs')
// const answer = []

//these questions are for inquirer to promt the user for input
prompt([
    {
        type: 'input',
        name: 'Title',
        message: 'What is the Title of your prject?'
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Tell us about your project.'
    },
    {
        type: 'input',
        name: 'Contents',
        message: 'Place any Table of Content Here:'
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'What are the Install steps. Include npm links if need be.'
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'What is the usage for your app?'
    },
    {
        type: 'input',
        name: 'License',
        message: 'Which license will you need? "MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"'
    },
    {
        type: 'input',
        name: 'Contributing',
        message: 'Who is working on this file?'
    },
    {
        type: 'input',
        name: 'Test',
        message: 'What test have you ran?'
    },
    {
        type: 'input',
        name: 'Questions',
        message: 'What is a good email address for you?'
    },
    {
        type: 'input',
        name: 'linkedIn',
        message: 'What is your LinkedIn account URL just in case employers want to contact you?:'
    },
    {
        type: 'input',
        name: 'github',
        message: 'All coders use Github! Whats your URL for Github?:'
    },
])
    .then(({ Title, Description, Contents, Installation, Usage, License, Contributing, Test, Questions, github, linkedIn }) => {
        writeFile(`README.md`, `

        ${License} [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0) 

            Project Title: ${Title}

            Description
            ___________________________

            ${Description}

            Table of Contents
            ___________________________

            ${Contents}

            Installation Instructions
            ___________________________

            ${Installation}

            Usage - How to use
            ___________________________

            ${Usage}

            License used in application
            ___________________________

            ${License}

            Contributing work here
            ___________________________

            ${Contributing}

            Test File work here
            ___________________________

            ${Test}


            Please feel free to reach out to me via:
            ________________________________________
            Email: ${Questions}
            LinkedIn Account                         ${linkedIn}
            Github Account                           ${github}
            
    `, err => {
        if (err) { console.log(err) }
        console.log('Portfolio Page Created!')
        })
    })
    .catch(err => console.log(err))









//  This way was taught to me by my tutor. I could not figure it out however, I wanted to keep it to make sure that I could reference it one day // I have been recommended TO NOT USE THIS due to its difficulty. 

//function to create readme and write this readme file 
// function writeToFile(fileName, data) {
//     return fs.writeFileSync(path.append(process.cwd(), fileName), data);
// }


//start the node application and handles other functions
// function start() {
//     inquirer.prompt(questions)
//     .then((inquirerResponses)=> {
//         writeToFile("README.md", generator({...inquirerResponses}))
//     })
//     .catch(err => console.log(err))
// }

// start()