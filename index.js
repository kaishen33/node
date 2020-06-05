const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFile = util.promisify(fs.writeFile);

function projectQuestion() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Project Title"
        },
        {
            type: "input",
            name: "description",
            message: "The project is about"
        },
        {
            type: "input",
            name: "ToC",
            message: "Table of Contents"
        },
        {
            type: "input",
            name: "Installation",
            message: "Installation"
        },
        {
            type: "input",
            name: "Usage",
            message: "It is used by:"
        },
        {
            type: "input",
            name: "Liscense",
            message: "Liscense"
        },
        {
            type: "input",
            name: "Contributing",
            message: "Contributing"
        },
        {
            type: "input",
            name: "Installation",
            message: "Installation"
        },
        {
            type: "input",
            name: "Tests",
            message: "Tests"
        },
        {
            type: "input",
            name: "Questions",
            message: "Enter your LinkedIn URL."
        }
    ]);
}

function readMeGen(answers) {
    return `
  readme.MD

    #HW7#

      ##Project Title: ${answers.name}##
      The project is about: ${answers.description}
      ${answers.ToC}
      ${answers.Installation}
      It is used by: ${answers.Usage}
      ${answers.Liscense}
      ${answers.Contributing}
      ${answers.Installation}
   
   
   
      `;
}

projectQuestion()
    .then(function (answers) {
        const MD = readMeGen(answers);

        return writeFile("readme.MD", MD);
    })
    .then(function () {
        console.log("Successfully wrote to index.html");
    })
    .catch(function (err) {
        console.log(err);
    });