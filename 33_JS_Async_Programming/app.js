//Synchronous Programming
console.log('car 1');
console.log('car 2');
console.log('car 3');
console.log('car 4');
console.log('car 5');
//it logs on console as it is declared

//Asynchronous Programming
//Imaging car 3 breaks down

console.log('car 1');
console.log('car 2');
setTimeout(() => {
    console.log('car 3');
}, 3000)
console.log('car 4');
console.log('car 5');

//In this case, cars 1, 2, 4, 5 are logged immediately, car 3 comes in 3 seconds later
//so you can write your codes randomly, then reorder their execution using async programming

//Asynchronous Programming involves altering the flow of execution in lines of code