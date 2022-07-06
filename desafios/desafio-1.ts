// Como podemos rodar isso em um arquivo .ts sem causar erros? 

/* let employee = {};
employee.code = 10;
employee.name = "John"; */

let employee = {code: 10, name: "John"};

interface Employee {
    code: number,
    name: string
}

let employee1: Employee = {
    code: 10,
    name: "John"
}

let employee2: {code: number, name: string} = {
    code: 10,
    name: "John"
}