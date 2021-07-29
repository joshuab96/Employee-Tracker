const inquirer = require('inquirer');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: 'root',

    // Be sure to update with your own MySQL password!
    password: 'Root12345678',
    database: 'CMS_db',
});

//----------------------------------------------------------------------------------------------------------------------------

mainMenu();

function mainMenu() {
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
                    "View Employees",
                    "View Departments",
                    "View Roles",
                    new inquirer.Separator(),
                    "Update Employee Role",
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

            switch (response.options) {
                case "Add Employee":
                    addEmployee();
                    break;
                case "Add Department":
                    addDepartment();
                    break;
                case "Add Role":
                    addRole();
                    break;
                case "View Employees":
                    viewEmployees();
                    break;
                case "View Departments":
                    viewDepartments();
                    break;
                case "View Roles":
                    viewRoles();
                    break;
                case "Update Employee Role":
                    updateEmployeeRole();
                    break;

            }

            // if (response.options === "Add Employee") {
            //     addEmployee();

            // } else if (response.options === "Add Department") {
            //     addDepartment();

            // } else if (response.options === " Add Role") {
            //     addRole();

            // } else if (response.options === "View Employees") {
            //     viewEmployees();

            // } else if (response.options === "View Departments") {
            //     viewDepartments()


            // };
        })
}

//----------------------------------------------------------------------------------------------------------------------------

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
                message: 'Please add a role ID',
                name: 'role_id'
            }, {
                type: 'input',
                message: 'Please add a manager ID',
                name: 'manager_id'
            },

        ])

        .then((response) => {
            const query = connection.query(
                'INSERT INTO EMPLOYEE SET ?', {

                first_name: response.first_name,
                last_name: response.last_name,
                role_id: response.role_id,
                manager_id: response.manager_id,


            },
                (err, res) => {
                    if (err) throw err;
                    console.log(`\nEmployee Added!\n`);
                    mainMenu();
                }

            );

            console.log(response);
        });
}

//----------------------------------------------------------------------------------------------------------------------------

function addDepartment() {

    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Please input a department name ',
                name: 'department_name',
            },

        ])

        .then((response) => {
            const query = connection.query(
                'INSERT INTO DEPARTMENT SET ?', {

                name: response.department_name,

            },
                (err, res) => {
                    if (err) throw err;
                    console.log(`\nDepartment Added!\n`);
                    mainMenu();
                }

            );

            console.log(response);
        });
}

//----------------------------------------------------------------------------------------------------------------------------

function addRole() {

    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Please input a role name',
                name: 'department_name',
            },
            {
                type: 'input',
                message: 'Please input a department name ',
                name: 'department_name',
            },
            {
                type: 'input',
                message: 'Please input a department name ',
                name: 'department_name',
            },

        ])

        .then((response) => {
            const query = connection.query(
                'INSERT INTO DEPARTMENT SET ?', {

                name: response.department_name,

            },
                (err, res) => {
                    if (err) throw err;
                    console.log(`\nDepartment Added!\n`);
                    mainMenu();
                }

            );

            console.log(response);
        });
}

//----------------------------------------------------------------------------------------------------------------------------

function viewEmployees() {

    connection.query('SELECT * FROM EMPLOYEE',

        (err, res) => {
            if (err) throw err;
            console.log(res);
            mainMenu();
        }
    )


}

//----------------------------------------------------------------------------------------------------------------------------

function viewDepartments() {

    connection.query('SELECT * FROM DEPARTMENT',

        (err, res) => {
            if (err) throw err;
            console.log(res);
            mainMenu();
        }
    )

}

//----------------------------------------------------------------------------------------------------------------------------

function viewRoles() {

    connection.query('SELECT * FROM ROLE',

        (err, res) => {
            if (err) throw err;
            console.log(res);
            mainMenu();
        }
    )

}

//----------------------------------------------------------------------------------------------------------------------------

function updateEmployeeRole() {

    connection.query('SELECT * FROM ROLE',

        (err, res) => {
            if (err) throw err;
            // console.log(res);

            const choices = res.map(x => ({ name: x.title, value: x.id }))

            console.log(choices)

            connection.query('SELECT * FROM EMPLOYEE',

                (err, res2) => {
                    if (err) throw err;


                    // console.log(res2, "res2");

                    const employees = res2.map(x => ({ name: x.first_name + " " + x.last_name, value: x.id }))

                    console.log(employees);

                    inquirer
                        .prompt([
                            {
                                type: "list",
                                name: "update_employee_role",
                                message: "Please select a role to update",
                                choices: choices

                            },

                            {
                                type: "list",
                                name: "select_employee",
                                message: "Please select an employee",
                                choices: employees


                            }




                        ])

                        .then((response) => {
                            console.log(response);
                            connection.query(
                                'UPDATE EMPLOYEE SET ? WHERE ?', [

                                {
                                    role_id: response.update_employee_role
                                },
                                {
                                    id: response.select_employee

                                },
                            ]



                                ,
                                (err, res) => {
                                    if (err) throw err;
                                    console.log(`\nEmployee Role Updated!\n`);
                                    mainMenu();
                                }

                            );



                        }
                        )
                })
        })
}
