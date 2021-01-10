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


//4.) 
console.log('Triangle One');
let myName = 'SIEGFRED';

let triangle = (str) => {
    let tempString = '';
    for (i = 1; i <= str.length; i++) {
        tempString += `${str.substr(0, i)} \n`;
    }
    return tempString;
}
console.log(triangle(myName));

//5.) Triangle two

console.log('Triangle Two')
myName = 'SIEGFRED';

let addSpace = (number) => {
    let space = '';
    for (let i = 0; i <= number; i++) {
        space += ' ';
    }
    return space;
};

let triangle2 = (str) => {
    let tempString = '';
    for (let i = 0; i <= str.length - 1; i++) {
        tempString += `${addSpace(i)}${str.substr(i)} \n`
    }
    return tempString
}
console.log(triangle2(myName));

//Triangle Three
console.log('Traingle Three')
myName = 'SIEGFRED';

let triangle3 = (str) => {
    tempString = '';
    for (let i = str.length; i >= 1; i--) {
        tempString += `${str.substr(0, i)} \n`
    }
    return tempString;
};
console.log(triangle3(myName));

//Triangle four
console.log('Triangle Four');
myName = 'SIEGFRED';

let triangle4 = (str) => {
    tempString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        tempString += `${addSpace(i)}${str.substr(i)} \n`
    }
    return tempString;
};
console.log(triangle4(myName));

//reverse integer

const reverseInt = (n) => {
    if (n < 0) {
        return -1 * parseInt(n.toString().split('').reverse().join(''))
    }
    return parseInt(n.toString().split('').reverse().join(''))
}

console.log({
    testcase1: reverseInt(51),
    testcase2: reverseInt(500),
    testcase3: reverseInt(-23),
    testcase4: reverseInt(-900)
});

/* 
find maximum character in a string and how many times it appears 
*/
let randomString = 'heLLLoo$$3p';

let maxChar = (str) => {
    let obj = {};
    for (let char of str) {
        (!obj[char]) ? obj[char] = 1 : obj[char]++;
    }
    let maxNum = 0;
    let maxChar = "";
    for (let char in obj) {
        if (obj[char] >= maxNum) {
            maxNum = obj[char];
            maxChar = char;
        }
    }
    console.log(`${maxChar} appears most, and it appears ${maxNum} times`);
}

maxChar('heLLLoo$$3p'); //L appears most, and it appears 3 times


//FizzBuzz
//if number is divisible by 3: Fizz, 5: Buzz, 5 and 3 :FizzBuzz 

console.log(' ');
console.log('FIZZBUZZ ');
let fizzBuzz = (n) => {
    for (let i = 1; i <= n; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log(`${i} FIZZBUZZ`);
        }
        else if (i % 3 == 0) {
            console.log(`${i} FIZZ`);
        }
        else if (i % 5 == 0) {
            console.log(`${i} BUZZ`);
        }
        else {
            console.log(i);
        }
    }
}
fizzBuzz(30);

// Or

console.log(' ');
console.log('FIZZBUZZ 2');
((num) => {
    for (let i = 1; i <= num; i++) {
        //check for 3 and 5
        if (i % 3 == 0 && i % 5 == 0) {
            console.log(`${i} FIZZBUZZ`);
            ++i;
        }
        //check for 3
        if (i % 3 == 0) {
            console.log(`${i} FIZZ`);
            ++i;
        }
        //check for 5
        if (i % 5 == 0) {
            console.log(`${i} BUZZ`);
            ++i;
        }
        //check for 3 again because after 5, ++i prints 6 and doesnt come back to reprocess it
        if (i % 3 == 0) {
            console.log(`${i} FIZZ`);
            ++i;
        }
        //else
        if (i > num) break;
        else console.log(i);
    }
}

)(25);
