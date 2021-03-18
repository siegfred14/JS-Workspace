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
