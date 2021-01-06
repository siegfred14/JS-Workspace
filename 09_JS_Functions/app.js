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

//Using multiple parameters
function printNumbers(startNumber, endNumber, increment) {
    result = '';
    for (i = startNumber; i <= endNumber; i += increment) {
        result += `${i} `;
    }
    console.log(result);
}

printNumbers(4, 15, 2);

//Function without parameter (no input no output)

function greet() {
    console.log('Good Morning');
}

greet();

//Function Expression
let greetMe = function () {
    console.log('Good Morning');
};
console.log(greetMe);
greetMe();


