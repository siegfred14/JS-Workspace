/*
    Print values from 0 to 12 per line
*/
for (i = 0; i <= 12; i++) {
    console.log(i);
}

/*
    Print values from 0 to 12 in a single line
*/

let result = '';
for (i = 0; i <= 12; i++) {
    if (i <= 11) {
        result += `${i}, `;
    }
    else {
        result = result + `${i}`;
    }
}
console.log(result);

/*
print Values from 20 to 0, Diff 2
*/
res = '';
for (i = 20; i >= 0; i -= 2) {
    if (i >= 2) {
        res += `${i}, `
    }
    else {
        res += `${i}`
    }
}
console.log(res);


/*
*
* *
* * *
* * * *
* * * * *
Nested Loops
*/
let number = 5;
result = '';
for (let i = 1; i <= number; i++) {
    for (let j = 1; j <= i; j++) {
        result += `* `;
    }
    result += `\n`;
}
console.log(result);

/*
1
12
123
1234
12345
*/
number = 5;
result = '';
for (i = 1; i <= number; i++) {
    for (j = 1; j <= i; j++) {
        result += `${j} `;
    }
    result += `\n`;
}
console.log(result);

/*
1
22
333
4444
55555
*/
number = 5;
result = '';
for (i = 1; i <= number; i++) {
    for (j = 1; j <= i; j++) {
        result += `${i} `;
    }
    result += `\n`;
}
console.log(result);

/*
12345
1234
123
12
1
*/

result = '';
for (i = 5; i >= 1; i--) {
    for (j = 1; j <= i; j++) {
        result += `${j} `;
    }
    result += `\n`;
}
console.log(result);

/*
55555
4444
333
22
1
*/

result = '';
for (i = 5; i >= 1; i--) {
    for (j = 1; j <= i; j++) {
        result += `${i} `;
    }
    result += `\n`;
}
console.log(result);

/*
54321
4321
321
21
1
*/

result = '';
for (i = 5; i >= 1; i--) {
    for (j = i; j >= 1; j--) {
        result += `${j} `;
    }
    result += `\n`;
}
console.log(result);

/*
54321
5432
543
54
5
*/

result = '';
for (i = 5; i >= 1; i--) {
    for (j = i; j >= 1; j--) {
        result += `${j} `;
    }
    result += `\n`;
}
console.log(result);