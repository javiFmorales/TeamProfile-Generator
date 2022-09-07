const generateMarkdown = require('./src/generateMarkdown.js');

//teams profiles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//modules
const fs = require('fs');
const inquirer =require( 'inquirer');


//team array
const teamArray = [];

//manager prompts
const addManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please provide the name of the person managing this team',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please provide the id number of the manager in charge',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please provide an email address',
        },
        {
            type: 'input',
            name: 'office',
            message: 'Please provide the office number',
        },
    ])
    .then(managerInput =>{
        const {name, id, email, office}= managerInput;
        const manager = new Manager (name, id, email, office);
        teamArray.push(manager);
        console.log(manager)
    })
};


//employee prompt 
//also intern prompt 
const addEmployee = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'What is the employees role?',
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: 'Name of employee?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please provide the id number of employee',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please provide an email address',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please provide a github username for employee',
            //if the input from the choices is engineer then a github usename has to be provided otherwise if input is intern the the name of the school they attend to should be provided
            when: (input => input.role === 'Engineer')
        },
        {
            type: 'input',
            name: 'school',
            message: 'Please provide the name of school',
            //if the input from the choices is engineer then a github usename has to be provided otherwise if input is intern the the name of the school they attend to should be provided
            when: (input => input.role === 'Intern')
        },
        {
            type: 'confirm',
            name: 'confirmNewEmp',
            message: 'would you like to add more members to your team?',
        },
    ])

        .then(employeeData => {
         const   { name, id, email, role, github, school, confirmNewEmp }= employeeData ;
            let employee;

            if (role === 'Engineer') {
                employee = new Engineer(name, id, email, github)
            } else if (role === 'Intern') {
                employee = new Intern(name, id, email, school)
            }



            teamArray.push(employee);
            if (confirmNewEmp) {
                return addEmployee(teamArray)
            } else {
                return teamArray;
            }
        })

    
};

//An html file will be generated from this function

    const writeFile = (data)=> {
        fs.writeFile('./dist/index.html', data, err => {
            if (err){
                console.log(err)
            }else {
                console.log ( 'hurray!!!!!!, your team profile has been successfully created')
            }
        })
    };
addManager()
.then(addEmployee)
.then(teamArray => {
    return generateMarkdown(teamArray);
})
.then(pageHTML =>{
    return writeFile(pageHTML);
})
.catch(err => {
    console.log(err);
})
