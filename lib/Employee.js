//class with value employee is creaded
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email
    }
    //value for name that will be returned
    getName() {
        return this.name;
    }
    //value for id that will be returned
    getId() {
        return this.id;
    }
    //value for email that will be returned
    getEmail () {
        return this.email;
    }
    //
    getRole() {
        return 'Employee'
    }
}
const employee = new Employee('javi', 12345, 'javitoto-00@hotmail.com');
console.log(employee)
console.log(employee.getId())
module.exports = Employee;
