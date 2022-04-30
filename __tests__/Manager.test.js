const { expect } = require("expect");
const Manager = require("../lib/Manager");

//name, id, email, officeNumber
test('Manager class and methods', () => {
    const name = 'Byron';
    const id = 1;
    const email = 'byronstephenson1@gmail.com';
    const officeNumber = 239;
    const manager = new Manager(name, id, email, officeNumber);
    //getName, getId, getEmail, getRole
    expect(manager.getName()).toBe(name);
    expect(manager.getId()).toBe(id);
    expect(manager.getEmail()).toBe(email);
    expect(manager.getRole()).toBe("Manager");
    expect(manager.officeNumber).toBe(officeNumber);
    expect(manager.name).toBe(name);
    expect(manager.id).toBe(id);
    expect(manager.email).toBe(email);
  });