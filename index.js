const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'list',
            message: 'Choose sn option below',
            name: 'Option',
            choices: ["Add Employee", "Add Department", "Add role", "Add manager"],
        },
        {
            type: 'password',
            message: 'What is your password?',
            name: 'password',
        },
        {
            type: 'password',
            message: 'Re-enter password to confirm:',
            name: 'confirm',
        },
    ])
    .then((response) =>
        response.confirm === response.password
            ? console.log('Success!')
            : console.log('You forgot your password already?!')
    );


