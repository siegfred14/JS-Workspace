let number = 23;

let msg = 'Good Morning';

let farmAnimals = ['Cow', 'Goat', 'Turtle', 'Geese', 'Chicken'];

let staff = {
    name: 'Siegfred',
    age: 34,
    dept: 'Backend',
    desc: 'Software Engineer'
};

//Array to string
let farmAni = farmAnimals.join('-');
console.log(farmAni);
console.log(typeof farmAni);

//String to Array
let farmAnim = farmAni.split('-');
console.log(farmAnim);

//slice
let farmSlice = farmAnimals.slice(1, 4);
console.log(farmSlice);

//splice
farmAni = farmAnimals.splice(2, 1, 'Dog');
console.log(farmAni);
console.log(farmAnimals);

console.log('******');

//Number to string
let numToString = number.toString();
console.log(typeof numToString);

//String to integer
let stringToNum = Number.parseInt(numToString);
console.log(stringToNum);
console.log(typeof stringToNum);

//String to Float
stringToNum = Number.parseFloat(numToString);
console.log(typeof stringToNum);

console.log('******');

//String
msg1 = msg.toUpperCase();
console.log(msg1);
msg2 = Number.parseInt(msg1);

console.log(msg2);
console.log(typeof msg2);



msg = 'Good Morning';

reverseString = (str) => {
    tempString = '';
    for (i = str.length; i >= 0; i--) {
        tempString += `${str.charAt(i)}`;
    }
    return tempString;
};

console.log(reverseString(msg));

//pallindrome

msg = 'kingnik';
isPalindrome = (str) => {
    if (str === reverseString(str)) {
        return true;

    }
    else
        return false;
};

console.log(isPalindrome(msg));


//Reverse an integer
newNum = 123645;

reverseStr = (int) => {
    newStr = int.toString();
    tempString = '';
    for (i = newStr.length; i >= 0; i--) {
        tempString += `${newStr.charAt(i)}`;
    }
    newInt = Number.parseInt(tempString);
    return newInt;
};

console.log(typeof reverseStr(newNum));

//approach2
newNum = 123645;

revStr = (num) => {
    newString = num.toString();
    newArray = newString.split(',');
    revArray = newArray.reverse();
    revString = revArray.join(',');
    revNum = Number.parseInt(revString);

    return revNum;
}

console.log(revStr(newNum));


//reverse

reverseString = (str) => {
    revStr = '';
    for (let x of str) {
        revStr = x + revStr;
    }
    return revStr;
}
console.log(reverseString('siegfred'));

//Find the chracter that appears the most and total number of times it appears
const maxChar = (str) => {
    let obj = {};
    for (let char of str) {
        !obj[char] ? obj[char] = 1 : obj[char]++; //if char in obj does not exist, set char of obj to 1. If it does, increment
    }
    let maxNum = 0;
    let maximumChar = '';
    for (let char in obj) {
        if (obj[char] >= maxNum) {
            maxNum = obj[char];
            maximumChar = char;
        }
    }
    console.log(`${maximumChar} appears most, and it appears ${maxNum} times`);
}
maxChar('heLLLoo$$3p'); //L appears most, and it appears 3 times

/* let newObject = { h: 3, l: 14, d: 3, p: 12, i: 4, v: 23 };
for (let char in newObject) {
    console.log(char);
};
 */

//To negate an array
let negate = (arr) => {
    newArray = [];
    for (let i of arr) {
        i *= -1;
        newArray.push(i);

    }
    return newArray;
}

newArr = [-1, 2, -3, 4];
console.log(negate(newArr));

/* //To check if 2 rooks can attack eachother
let canCapture = function ([yourRook, opponentsRook]) {
    let row = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    let column = [1, 2, 3, 4, 5, 6, 7, 8];
    for (let char of row) {
        for (let num of column) {
            let yourRook = [char(num)];
            let opponentsRook = [char(num)];
            if (yourRook[char] === opponentsRook[char] || yourRook[num] === opponentsRook[num]) {
                return true;
            }
            else
                return false;
        }
    }

}

console.log(canCapture[A8, B4]); */

/* //Switch for month
let month = (num) => {
    switch (num) {
        case 1:
            return 'January'
            break;
        case 2:
            return 'February'
            break;
        case 3:
            return 'March'
            break;
        case 4:
            return 'April'
            break;
        case 5:
            return 'May'
            break;
        case 6:
            return 'June'
            break;
        case 7:
            return 'July'
            break;
        case 8:
            return 'August'
            break;
        case 9:
            return 'September'
            break;
        case 10:
            return 'October'
            break;
        case 11:
            return 'November'
            break;
        case 12:
            return 'December'
            break;
        default:
            return 'This is NOT a valid entry !'
            break;
    }
}

console.log(month(13)); */

//Return the First and Last Elements in an Array
let firstLast = (arr) => {
    let newArray = [];
    let arr1 = arr[0];
    let revArray = arr.reverse();
    let arr2 = revArray[0];
    newArray.push(arr1, arr2);
    return newArray;
}
console.log(firstLast([undefined, 4, "6", "hello", null]));

//shorter

let firstAndLast = function (arr) {
    return [arr.shift(), arr.pop()];
}
console.log(firstAndLast([undefined, 4, "6", "hello", null]));

//3
let firstNlast = (arr) => {
    return [arr[0], arr[arr.length - 1]];
}
console.log(firstNlast([undefined, 4, "6", "hello", null]));

//String Compression

const stringComression = (str) => {
    const n = str.length;
    let count = 1, output = '', uniqueCount = 0;
    for (let i = 0; i < n; i++) {
        if (str[i] === str[i + 1])
            count++;
        else {
            output += str[i] + count;
            count = 1;
            uniqueCount++
        }
    }
    if (uniqueCount === n) return str;
    else return output;
}


/*
canCapture(["A8", "E8"]) ➞ true

canCapture(["A1", "B2"]) ➞ false

canCapture(["H4", "H3"]) ➞ true

canCapture(["F5", "C8"]) ➞ false
*/

/* let canCapture = function ([yourRook, opponentsRook]) {
    let row = ["A", "B", "C", "D", "E", "F", "G", "H"]
    let column = [1, 2, 3, 4, 5, 6, 7, 8];
    let newColumn = column.join(',');
    let yourMove = "";
    let opponentsMove = "";
    for (let i of row) {
        for (let j of newColumn) {
            yourMove += `${i}`;
            yourMove += `${j}`;
            opponentsMove += `${i}`;
            opponentsMove += `${j}`;
            if (yourMove[i] === opponentsMove[i] || yourMove[j] === opponentsMove[j]) {
                return true;
            }
            else
                return false;
        }
    }
}

console.log(canCapture["A8", "E8"]); */