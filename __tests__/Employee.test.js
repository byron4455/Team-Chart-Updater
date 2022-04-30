const Employee = require("../lib/Employee");

//name, id, email
test('adds 1 + 2 to equal 3', () => {
    const name = 'Byron';
    const id = 1;
    const email = 'byronstephenson1@gmail.com';
    const employee = new Employee(name, id, email);
    //getName, getId, getEmail, getRole
    expect(employee.getName()).toBe(name);
    expect(employee.getId()).toBe(id);
    expect(employee.getEmail()).toBe(email);
    expect(employee.getRole()).toBe("Employee");
    expect(employee.name).toBe(name);
    expect(employee.id).toBe(id);
    expect(employee.email).toBe(email);
  });
