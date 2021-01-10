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

//find the reverse string of he given string
msg = 'Good Morning';

let reverseString = (str) => {
    let tempString = '';
    for (i = str.length - 1; i >= 0; i--) {
        let char = str.charAt(i);
        tempString += char;
    }
    return tempString;
};
console.log(`${msg} => ${reverseString(msg)}`);
console.log(`${msg} => ${reverseString(cart)}`);

// 3. check if the given string is palindrome or not (i.e string is same as reverse string)

msg = 'level';
let isPalindrome = (str) => {
    if (str === reverseString(str)) {
        return true;
    }
    else {
        return false;
    }
};

/* 
or simply...
let isPalindrome = (str) => {
    return (str === reverseString(str));
};
*/
console.log(`is ${msg} Pallindrome? ${isPalindrome(msg)}`);


