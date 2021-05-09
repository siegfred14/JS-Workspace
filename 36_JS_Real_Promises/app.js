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
            employeeRows += `<tr>
                                <td>${employee.id}</td>
                                <td>${employee.name}</td>
                                <td>${employee.age}</td>
                            </tr>`;
        })
        
    }, 1000);
};

