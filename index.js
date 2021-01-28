const { prompt } = require('inquirer')
const { writeFile } = require('fs')

prompt([
    {
        type: 'input',
        name: 'Title',
        message: 'What is the Title of your project?'
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Tell us about your project...'
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'What are the Installation steps?'
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'How would a user use your project?'
    },
    {
        type: 'input',
        name: 'License',
        message: 'Which License will you need? "MIT"',
        choices: ['MIT', 'APACHE_2.0', 'GPL_3.0', 'BSD_3', 'None']
    },
    {
        type: 'input',
        name: 'Contributing',
        message: 'Who Contributed to this project?'
    },
    {
        type: 'input',
        name: 'Testing',
        message: 'What Final or Beta Testing have you done?'
    },
    {
        type: 'input',
        name: 'Email',
        message: 'Type your Email address:'
    },
    {
        type: 'input',
        name: 'LinkedIn',
        message: 'Type your LinkedIn account:'
    },
    {
        type: 'input',
        name: 'Github',
        message: 'All coders use Github! Whats your URL for Github?:'
    },
])
    .then(({ Title, Description, Installation, Usage, License, Contributing, Testing, Email, Github, LinkedIn }) => {
        writeFile(`sampleREADME.md`, ` # ${res.Title}
            ![badge](https://img.shields.io/badge/license-${res.License}-blue.svg) 
        
            - - - 

            # Table of Contents

            Project Title: ${Title}

            - [Description](#description)
            - [Installation](#installation)
            - [Usage](#usage)
            - [License](#license)
            - [Contributing](#contributing)
            - [Testing](#testing)
            - [ContactUs](#contactus)


            ## Description:

            ${Description}


            ## Installation:
            
            ${Installation}

            ## Usage - Windows 10:
            
            ${Usage}

            ## License:

            ${License}

            ## Contributing work here

            ${Contributing}

            ## Test File work here

            ***Completed Testing***
            ${Testing}

            ## Contact Us

            [Via Email at](mailto:${Email})
            [Via LinkedIn at] ${LinkedIn}
            [Via GitHub at]  ${Github}

            - - -
            © 2020 ${Title}
            
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