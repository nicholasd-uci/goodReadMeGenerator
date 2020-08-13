const { fstat } = require("fs");


//  I want put the generator function in here to know what it does with the inqured information //

// function to generate markdown for README
function generateMarkdown(data) {
    return `
    #   ${data.name}
    **  ${data.location}
    #   ${data.bio}
    #   ${data.linkedIn}
    #   ${data.github}

  `;
  }
  
  module.exports = generateMarkdown;
  