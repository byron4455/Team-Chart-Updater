const { expect } = require("expect");
const Intern = require("../lib/Intern");

//name, id, email,school
test('Intern class and methods', () => {
    const name = 'Byron';
    const id = 1;
    const email = 'byronstephenson1@gmail.com';
    const school = 'Appalachian State';
    const intern = new Intern(name, id, email, school);
    //getName, getId, getEmail, getRole
    expect(intern.getName()).toBe(name);
    expect(intern.getId()).toBe(id);
    expect(intern.getEmail()).toBe(email);
    expect(intern.getRole()).toBe("Intern");
    expect(intern.getSchool()).toBe(school);
    expect(intern.school).toBe(school);
    expect(intern.name).toBe(name);
    expect(intern.id).toBe(id);
    expect(intern.email).toBe(email);
  });