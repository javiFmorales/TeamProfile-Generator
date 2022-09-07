
//importing the class we will be testing on
const Employee = require('../lib/Employee');
//creates employee object with properties of name, id and email
describe('employeeProperties', () => {
    //it will get the name property depending on input

    it('should return a string based on the input', () => {
        const employee = new Employee('javi', 12345, 'javitoto-00@hotmail.com');
        expect(employee.getName()).toBe('javi');
    })

  it('should return a number based on the input', () => {
        const employee = new Employee('javi', 12345, 'javitoto-00@hotmail.com');
       
        expect(employee.getId()).toBe(12345);
    })
  it('should return a string based on the input', () => {
        const employee = new Employee('javi', 12345, 'javitoto-00@hotmail.com');
        expect(employee.getEmail()).toBe('javitoto-00@hotmail.com');
    })
  it('should return the role of the employee', () => {
        const employee = new Employee('javi', 12345, 'javitoto-00@hotmail.com');
        expect(employee.getRole()).toBe('Employee');
    })

})
