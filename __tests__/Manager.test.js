//importing the class we will be testing on
const Manager = require('../lib/Manager');
//creates employee object with properties of name, id and email
describe('ManagerProperties', () => {
    //it will get the github user name property depending on input
    it('should return a number based on the input', () => {
        const manager = new Manager('javi', 12345, 'javitoto-00@hotmail.com', 6);
        expect(manager.officeNumber()).toBe(6);
    })
    it('should return the role of the employee', () => {
        const manager = new Manager('javi', 12345, 'javitoto-00@hotmail.com', 6);
        expect(manager.getRole()).toBe('Manager');
    })

})