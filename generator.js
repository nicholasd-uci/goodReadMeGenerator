const { fstat } = require("fs");


//  I want put the generator function in here to know what it does with the inqured information //

// function to generate markdown for README
function generateMarkdown(answer) {
    return `
    #   ${answer.name}
    **  ${answer.location}
    #   ${answer.bio}
    #   ${answer.linkedIn}
    #   ${github}

  `;
  }
  
  module.exports = generateMarkdown;
  