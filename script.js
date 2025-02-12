'use strict'

// дізнатись суму всіх зарплат користувачів
// обʼєкт може містити невідому кількість департаментів та співробітників

let company = {
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600}],
    development: {
        web: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800}],
        internals: [{name: 'Jack', salary: 1300}]
    }
};

function getAllSalary(department) {
    if (Array.isArray(department)) {
        return department.reduce((sum, employee) => sum + employee.salary, 0);
    }
    else {
        let sum = 0;
        for (let subDepartment of Object.values(department)) {
            sum += getAllSalary(subDepartment);
        }
        return sum;
    }
}

let total = getAllSalary(company);
console.log(total);