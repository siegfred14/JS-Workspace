// print from 0 to 10 diff 1

let result = '';
for (let i = 0; i <= 10; i++) {
    result += `${i} `;
}
console.log(result);

//using function for reusability of the above

function printNumbers() {
    result = '';
    for (i = 0; i <= 10; i++) {
        result += `${i} `;
    }
    console.log(result);
}

printNumbers(); //function call/execution

//using parameters

function printNumbers(endNumber) {
    result = '';
    for (i = 0; i <= endNumber; i++) {
        result += `${i} `;
    }
    console.log(result);
}

printNumbers(15);

