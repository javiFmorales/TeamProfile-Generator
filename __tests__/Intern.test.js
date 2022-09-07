//importing the class we will be testing on
const Intern = require('../lib/Intern');
//creates employee object with properties of name, id and email
describe('InternProperties', () => {
//it will get the github user name property depending on input
it('should return a string based on the input', () => {
    const intern = new Intern('javi', 12345, 'javitoto-00@hotmail.com', 'UCLA');
    expect(intern.getSchool()).toBe('UCLA');
})
it('should return the role of the employee', () => {
    const intern = new Intern('javi', 12345, 'javitoto-00@hotmail.com', 'UCLA');
    expect(intern.getRole()).toBe('Intern');
})
 
})
