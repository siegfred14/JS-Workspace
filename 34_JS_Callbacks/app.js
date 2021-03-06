//Normal calculator
let calculate = (a, b, operation) => {
    let result = '';
    if (operation === 'sum') {
        result = a + b;
    }
    if (operation === 'mul') {
        result = a * b;
    }
    return result;
};

let output = calculate(10, 20, 'sum');
console.log(output);


//To Multiply
output = calculate(10, 20, 'mul');
console.log(output);


//using callback function

let sum = (a, b) => {
    return a + b;
};

let mul = (a, b) => {
    return a * b;
};

let calculate = (a, b, callback) => {
    return callback(a, b); 
};

let output = calculate(10, 20, sum);
console.log(output);

output = calculate(10, 20, mul);
console.log(output);

output = calculate(10, 20, (a, b) => {
    return a - b;
});

console.log(output);

let employees = [{ id: 1, name: 'John', age: 35 },
{ id: 2, name: 'Rajan', age: 25 }];

let createEmployee = (employee, callback) => {
    setTimeout(() => {
        employees.push(employee);
        callback();
    }, 2000);
};

let getEmployees = () => {
    setTimeout(() => {
        let employeeRows = '';
        employees.forEach((employee) => {
            employeeRows += `<tr>
                                <td>${employee.id}</td>
                                <td>${employee.name}</td>
                                <td>${employee.age}</td>
                            </tr>`;
        })
        document.querySelector('#table-body').innerHTML = employeeRows;
    }, 1000);
};

createEmployee({ id: 3, name: 'Wilson', age: 45 }, getEmployees);
//getEmployees();