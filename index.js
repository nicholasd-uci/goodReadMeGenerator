

const { prompt } = require('inquirer')
const { writeFile } = require('fs')
const answer = []

//these questions are for inquirer to promt the user for input
prompt([
    {
        type: 'input',
        name: 'name',
        message: 'Tell us your name?'
    },
    {
        type: 'input',
        name: 'location',
        message: 'Where are you from?'
    },
    {
        type: 'input',
        name: 'bio',
        message: 'So, tell me a short bio about yourself!:'
    },
    {
        type: 'input',
        name: 'linkedIn',
        message: 'Everyone uses LinkedIn! Whats your URL for your LinkedIn Site?:'
    },
    {
        type: 'input',
        name: 'github',
        message: 'All coders use Github! Whats your URL for Github?:'
    },
])
    .then(({ name, location, bio, github, linkedIn }) => {
        writeFile(`README.md`, `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <h1>Awesome your name is ${name}!</h1>
            <h2>Cool, your are from ${location}!</h2>
            <p>Awesome, you will need this information later: ${bio}</p>
            <a href="${linkedIn}">Cool, we got your LinkedIn account!</a>
            <a href="${github}">Awesome, and we can add to the list, your Github account!</a>
            
        </body>
        </html>
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