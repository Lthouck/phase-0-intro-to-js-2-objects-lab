// Write your solution in this file!
const employee = {
    name: "Sam",
    streetAddress: "11 Broadway"
}
function updateEmployeeWithKeyAndValue(employee, name, streetAddress) {
    const newEmployee = {...employee}
    newEmployee[name] = streetAddress
    return newEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, streetAddress) {
    employee[name] = streetAddress
    return employee
}

function deleteFromEmployeeByKey(employee, name) {
    return employee = [...name]
}

function destructivelyDeleteFromEmployeeByKey(employee, name) {
    delete employee.name
    return employee
}