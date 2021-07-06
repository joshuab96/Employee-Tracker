const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'list',
            message: 'Choose an option below',
            name: 'options',
            choices: [
                "Add Employee",
                "Add Department",
                "Add role",
                new inquirer.Separator(),
                "View Employee",
                "View Department",
                "View role",
                new inquirer.Separator(),
                "View All",
                new inquirer.Separator(),
            ],
            default: "View All",
        },
        // {
        //     // type: 'password',
        //     // message: 'What is your password?',
        //     // name: 'password',
        // },
        // {
        //     // type: 'password',
        //     // message: 'Re-enter password to confirm:',
        //     // name: 'confirm',
        // },
    ])

    .then((response) => {
        if (response.option === "Add Employee") {
            addEmployee();

        } else if (response.option === "Add Department") {
            addDepartment();

        }
    })

function addEmployee() {

    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is Employees first name',
                name: 'first_name',
            },
            {
                type: 'input',
                message: 'What is Employees last name',
                name: 'last_name',
            },
            {
                type: 'input',
                message: 'Please add a department ID',
                name: 'department_id'
            },
            {
                type: 'input',
                message: 'Please add a role ID',
                name: 'roll_id'
            }, {
                type: 'input',
                message: 'Please add a manager ID',
                name: 'manager_id'
            },

        ])

        .then((response) => {

            console.log(response);
        });
}

function addDepartment() {
    console.log("user selected Add department");
}

