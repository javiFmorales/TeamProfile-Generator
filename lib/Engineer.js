//import employee 
const Employee = require ('./Employee');

//new class named manager extends/adds on previous employee class
class Engineer extends Employee {
    constructor ( name, id, email, github){
        //calls employee
        super(name, id, email);
        this.github = github;
    }
    getGithub(){
        return this.github;
    }
    //overwrite employee getrole
    getRole(){
        return 'Engineer'
    }

}

//exporting
module.exports = Engineer