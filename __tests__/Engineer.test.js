const { expect } = require("expect");
const Engineer = require("../lib/Engineer");

//name, id, email, github
test('Engineer class and methods', () => {
    const name = 'Byron';
    const id = 1;
    const email = 'byronstephenson1@gmail.com';
    const github = 'byron4455';
    const engineer = new Engineer(name, id, email, github);
    //getName, getId, getEmail, getRole
    expect(engineer.getName()).toBe(name);
    expect(engineer.getId()).toBe(id);
    expect(engineer.getEmail()).toBe(email);
    expect(engineer.getRole()).toBe("Engineer");
    expect(engineer.getGithub()).toBe(github);
    expect(engineer.github).toBe(github);
    expect(engineer.name).toBe(name);
    expect(engineer.id).toBe(id);
    expect(engineer.email).toBe(email);
  });