//import employee 
const Employee = require ('./Employee');

//new class named manager extends/adds on previous employee class
class Manager extends Employee {
    constructor ( name, id, email, office){
        //calls employee
        super (name, id, email);
        this.office = office;
    }
    officeNumber(){
        return this.office
    }
    //overwrite employee getrole
    getRole(){
        return 'Manager'
    }

}
//exporting
module.exports = Manager