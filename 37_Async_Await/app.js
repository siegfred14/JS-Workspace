let employees = [{ id: 1, name: 'John', age: 30 },
{ id: 2, name: 'Rajan', age: 25 }];

//create Employee
let createEmployee = (employee) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            employees.push(employee);
            let isDone = true;
            if (isDone) {
                resolve()
            }
            else {
                reject('Employee Creation is Failed')
            }
        }, 2000);
    })
};

//get Employee

let getEmployees = () => {
    setTimeout(() => {
        let employeeRows = '';
        employees.forEach((employee) => {
            
        })
        document.querySelector('#table-body').innerHTML = employeeRows;
    }, 1000);
};
