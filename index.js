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
        name: 'Github',
        message: 'All coders use Github! Whats your URL for Github?:'
    },
])
    .then(({ Title, Description, Installation, Usage, License, Contributing, Testing, Email, Github }) => {
        writeFile(`sampleREADME.md`, 
        ` 
            ![badge](https://img.shields.io/badge/license-${License}-blue.svg) 
        
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

            Via Email at:[${Title}](mailto:${Email})
            Via GitHub at:[${Github}](https://github.com/${Github})

            - - -
            © 2020 ${Title}
            
        `, err => {
            if (err) { console.log(err) }
            console.log('README Sample Created!')
            })
    })
    .catch(err => console.log(err))

