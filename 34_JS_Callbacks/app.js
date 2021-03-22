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
