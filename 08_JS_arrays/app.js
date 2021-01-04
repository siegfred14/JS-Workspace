//Creation of Arrays
let number = [10, 20, 30];
console.log(number);

// to access the elements of an array
console.log(number[0]); //10

//To access non-existing
console.log(number[3]); //undefined

//Iteration of Array Elements
let colors = ['white', 'black', 'Silver', 'Purple', 'Blue', 'yellow'];

//1. Normal for-loop
for (let i = 0; i <= colors.length - 1; i++) { // colors.length-1 because 0,1,2,3..
    console.log(colors[i]);
}

let result = '';
for (i = 0; i <= colors.length - 1; i++) { // colors.length-1 because 0,1,2,3..
    result += `${colors[i]} `;
}
console.log(result);


//2. for-in loop up to ES5
for (let index in colors) {
    console.log(colors[index]);
}


result = '';
for (let index in colors) {
    result += `${colors[index]} `
}
console.log(result);

//for-of from ES6
for (let a of colors) {
    console.log(a);
}


result = '';
for (let a of colors) {
    result += `${a} `
}
console.log(result);


//4. forEach function ES5
result = '';
colors.forEach(function (color) {
    result += `${color} `;
});
console.log(result);

// 5. forEach with Arrow function from ES6
result = '';
colors.forEach((color) => {
    result += `${color} `;
});
console.log(result);

//or 
result = '';
colors.forEach(color => result += `${color} `); console.log(result);


//Array of Objects

let employees = [
    {
        id: 1,
        name: 'John Smith',
        age: 40,
        designation: 'Manager',
        isActive: true
    },
    {
        id: 2,
        name: 'Wilson Pea',
        age: 46,
        designation: 'Sr. Manager',
        isActive: false
    },
    {
        id: 3,
        name: 'Thomas Teper',
        age: 25,
        designation: 'Software Engineer',
        isActive: true
    },
    {
        id: 4,
        name: 'Laura Helding',
        age: 28,
        designation: 'Tech Lead',
        isActive: false
    },
    {
        id: 5,
        name: 'David Maheesh',
        age: 40,
        designation: 'Software Engineer',
        isActive: true
    }
];
console.log(employees); //access all employees
console.log(employees[0]); //Access 1st employee
console.log(employees[0].name); //Access 1st employee's name

//iterate employees
for (employee of employees) {
    console.log(employee);
}

//To iterate only employee names
for (a of employees) {
    console.log(a.name);
}

//or
result = '';
for (a of employees) {
    result += `${a.name} `
}
console.log(result);

// filter the junior Employees : age < = 30
console.log(employees);
let juniorEmployees = [];
for (let employee of employees) {
    if (employee.age <= 30) {
        juniorEmployees.push(employee);
    }
}
console.log(juniorEmployees);

//filter active employees
let activeEmployees = [];
for (employee of employees) {
    if (employee.isActive == true) {
        activeEmployees.push(employee);
    }
}
console.log(activeEmployees);

//functions of arrays

//shift()
console.log('--------shift()---------');
let technologies = ['html', 'css', 'javascript', 'jquery', 'bootstrap'];
console.log(technologies);

technologies.shift(); //removes the first element
console.log(technologies);

//unshift()
console.log('--------unshift()---------');
technologies = ['html', 'css', 'javascript', 'jquery', 'bootstrap'];
console.log(technologies);

technologies.unshift('nodejs'); //adds as first element to the array
console.log(technologies);

//push()
console.log('--------push()---------');
technologies = ['html', 'css', 'javascript', 'jquery', 'bootstrap'];
console.log(technologies);

technologies.push('nodejs'); //adds as last element to the array
console.log(technologies);

//pop()
console.log('--------pop()---------');
technologies = ['html', 'css', 'javascript', 'jquery', 'bootstrap'];
console.log(technologies);

technologies.pop(); //removes last element of the array
console.log(technologies);

//sort()
console.log('--------sort()---------');
technologies = ['html', 'css', 'javascript', 'jquery', 'bootstrap'];
console.log(technologies);

technologies.sort(); //to sort elements ofan array in ascending/alphabetical order
console.log(technologies);

//reverse()
console.log('--------reverse()---------');
technologies = ['html', 'css', 'javascript', 'jquery', 'bootstrap'];
console.log(technologies);

technologies.reverse(); //to sort elements of an array in reverse order
console.log(technologies);

//reverse order of sorted elements
console.log('--------reverse ordered elements---------');
technologies = ['html', 'css', 'javascript', 'jquery', 'bootstrap'];
console.log(technologies);

technologies.sort().reverse();
console.log(technologies);

//splice() -> to remove/replace from the middle

//splice(index) -> removes element from the given index to the end
console.log('--------splice(index)---------');
technologies = ['html', 'css', 'javascript', 'jquery', 'bootstrap'];
console.log(technologies);

technologies.splice(2); //removes element from index 2 to the end
console.log(technologies);

//splice(index, 1, replace element) -> It replaces given elements at the given index 
console.log('--------splice(index, 1, replace element)---------');
technologies = ['html', 'css', 'javascript', 'jquery', 'bootstrap'];
console.log(technologies);

technologies.splice(4, 1, 'nodejs'); //replaces bootstrap with nodejs
console.log(technologies);

//join() -> to join the array elements to string
console.log('--------join()---------');
technologies = ['html', 'css', 'javascript', 'jquery', 'bootstrap'];
console.log(technologies);

let techString = technologies.join(' - '); //converts array elements to a string. Could be any separator, abc, space, etc
console.log(techString);

//split() -> to split(convert) a string into an array
console.log('--------split()---------');
console.log(techString);
let newtechs = techString.split('-');
console.log(newtechs);

// filter the junior Employees : age < = 30
console.log('--------filter()---------');
juniorEmployees = [];
for (let employee of employees) {
    if (employee.age <= 30) {
        juniorEmployees.push(employee);
    }
}
console.log(juniorEmployees);

let jrEmployees = employees.filter(function (employee) {
    return employee.age <= 30;
});
console.log(jrEmployees);


//filter active employees: isActive : true
activeEmployees = [];
for (employee of employees) {
    if (employee.isActive == true) {
        activeEmployees.push(employee);
    }
}
console.log(activeEmployees);

let actEmployees = employees.filter(function (employee) {
    return employee.isActive == true; //or just *return employee.isActive
});
console.log(actEmployees);

