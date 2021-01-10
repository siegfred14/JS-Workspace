// find the number of 'o' in the given string
let msg = 'Good Morning';
let cart = 'flourish strong for aproko domsdaddy';

let findZeros = function (string) {
    let count = 0;
    for (let i = 0; i <= string.length - 1; i++) {
        let char = string.charAt(i);
        if (char === 'o' || char === 'O') {
            count++;
        }
    }
    return count;

};

console.log(`The 'o's in the string is : ${findZeros(msg)}`);
console.log(`The 'o's in the string is : ${findZeros(cart)}`);

