//importing the class we will be testing on
const Engineer = require('../lib/Engineer');
//creates employee object with properties of name, id and email
describe('EngineerProperties', () => {
    //it will get the github user name property depending on input
    it('should return a string based on the input', () => {
        const engineer = new Engineer('javi', 12345, 'javitoto-00@hotmail.com', 'javiFmorales');
        expect(engineer.getGithub()).toBe('javiFmorales');
    })
    it('should return the role of the employee', () => {
        const engineer = new Engineer('javi', 12345, 'javitoto-00@hotmail.com', 'javiFmorales');
        expect(engineer.getRole()).toBe('Engineer');
    })

})
