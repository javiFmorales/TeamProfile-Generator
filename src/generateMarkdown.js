//manager card will be created
const createManager = (manager) => {
    return `
    
 <div class="col-4 mt-4">
    <div class="card-header">
        <h3>${manager.name}</h3>
        <p>Manager</p>
        <i class=""></i>
    </div>

    <div class="card-body">
        <p>ID: ${manager.id}</p>
        <p>EMAIL: <a href="mailto:${manager.email}">${manager.email}</a></p>
        <p>OFFICE NUMBER:${manager.office}</p>
    </div>
   
 </div>
    `;
};
//engineer card will be created
const createEngineer = (engineer) => {
    return `
    
 <div class="col-4 mt-4">
    <div class="card-header">
        <h3>${engineer.name}</h3>
        <p>Engineer</p>
        <i class=""></i>
    </div>

    <div class="card-body">
        <p>ID: ${engineer.id}</p>
        <p>EMAIL: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
        <p>Github:${engineer.github}</p>
    </div>
   
 </div>
    `;
};
//intern card will be created
const createIntern = (intern) => {
    return `
    
 <div class="col-4 mt-4">
    <div class="card-header">
        <h3>${intern.name}</h3>
        <p>Intern</p>
        <i class=""></i>
    </div>

    <div class="card-body">
        <p>ID: ${intern.id}</p>
        <p>EMAIL: <a href="mailto:${intern.email}">${intern.email}</a></p>
        <p>School:${intern.school}</p>
    </div>
   
 </div>
    `;
}

 generateMarkdown  = (data)  => {

    pageArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        //we call manager function
        if (role === 'Manager') {
            const managerCard = createManager(employee);
            pageArray.push(managerCard);
        }
        if (role === 'Engineer') {
            const engineerCard = createEngineer(employee);
            pageArray.push(engineerCard);
        }
        if (role === 'Intern') {
            const internCard = createIntern(employee);
            pageArray.push(internCard);
        }

    }
    const employeecards = pageArray.join('');
    const generateTeam = generateTeamPage(employeecards);
    return generateTeam;
}
const generateTeamPage = (employeeCards) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    
    <body>
    <header>
    <nav class="navbar" id="navbar">
        <span>Team Profile</span>
    </nav>
</header>

<main>
    <div class="container">
        <div class="row justify-content-center" id="team-cards">
        ${employeeCards}
        </div>
  </div>
    </body>
    <script>
    </script>
    `
}
module.exports= generateMarkdown;