const { prompt } = require('inquirer')
const { writeFile } = require('fs')

prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the Title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Tell us about your project...'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the Installation steps?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How would a user use your project?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose your License type.',
        choices: ['MIT', 'APACHE_2.0', 'GPL_3.0', 'BSD_3', 'None']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Who Contributed to this project?'
    },
    {
        type: 'input',
        name: 'testing',
        message: 'What Final or Beta Testing have you done?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Type your Email address:'
    },
    {
        type: 'input',
        name: 'github',
        message: 'All coders use Github! Whats your URL for Github?:'
    },
])
    .then(({ title, description, installation, usage, license, contributing, testing, email, github }) => {
        writeFile('sampleREADME.md', 
        ` 
            # ${title}
            ![badge](https://img.shields.io/badge/license-${license}-blue.svg) 
        
            - - - 

            # Table of Contents

            Project Title: ${title}

            - [Description](#description)
            - [Installation](#installation)
            - [Usage](#usage)
            - [License](#license)
            - [Contributing](#contributing)
            - [Testing](#testing)
            - [ContactUs](#contactus)


            ## Description:

            ${description}


            ## Installation:
            
            ${installation}

            ## Usage - Windows 10:
            
            ${usage}

            ## License:

            ${license}

            ## Contributing work here

            ${contributing}

            ## Test File work here

            ***Completed Testing***
            ${testing}

            ## Contact Us

            Via Email at: [${title}](mailto:${email})
            Via GitHub at: [${github}](https://github.com/${github})

            - - -
            © 2020 ${title}
            
        `, err => {
            if (err) { console.log(err) }
            console.log('README Sample Created!')
            })
    })
    .catch(err => console.log(err))

