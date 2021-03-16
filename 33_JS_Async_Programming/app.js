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

