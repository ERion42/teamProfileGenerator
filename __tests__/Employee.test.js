// Pulling employee class
const { test, expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

test("able to instantiate Employee", () => {
    // call constructor 
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
});

test("able to set name using constructor", () => {
    // check name
    const name = "some Name";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});

test("set ID by constructor ", () => {
    // check ID
    const id = 1234;
    const id = new Employee(id);
    expect(employee.id).toBe(id);
});

// Need to add tests for email,getrole,officenumber,gitHub

// test("", () => {
//     // check name
//     const  = ;
//     const  = new Employee();
//     expect(employee.).toBe();
// });