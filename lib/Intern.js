const Employee = require ('./Employee');

//new class named manager extends/adds on previous employee class
class Intern extends Employee {
    constructor( name, id, email, school){
        //calls employee
        super (name, id, email);
        this.school = school;
    }
    getSchool(){
        return this.school
    }
    //overwrite employee getrole
    getRole(){
        return 'Intern'
    }

}
//exporting
module.exports = Intern