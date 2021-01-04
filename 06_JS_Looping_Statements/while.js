//While

result = '';
let i = 0;
while (i <= 10) {
    if (i <= 9) {
        result += `${i}, `;
    }
    else {
        result += `${i}`;
    }
    i++;
}
console.log(result);

/*
 Print the vlues from 20 - 0, diff 2
 */

result = '';
i = 20;
while (i >= 0) {
    if (i > 0) {
        result += `${i}, `;
    }
    else {
        result += `${i}`
    }
    i -= 2;
}
console.log(result);

/*
*
**
***
****
*****
*/

i = 1;
result = '';
while (i <= 5) {
    let j = 1;
    while (j <= i) {
        result += `*`;
        j++;
    }
    result += `\n`;
    i++;
}
console.log(result);

/*
1
12
123
1234
12345
*/

i = 1;
result = '';
while (i <= 5) {
    let j = 1;
    while (j <= i) {
        result += `${j}`;
        j++;
    }
    result += `\n`;
    i++;
}
console.log(result);

/*
1
22
333
4444
55555
*/

i = 1;
result = '';
while (i <= 5) {
    let j = 1;
    while (j <= i) {
        result += `${i}`;
        j++;
    }
    result += `\n`;
    i++;
}
console.log(result);


/*
12345
1234
123
12
1
*/

i = 5;
result = '';
while (i >= 1) {
    let j = 1;
    while (j <= i) {
        result += `${j}`;
        j++;
    }
    result += `\n`;
    i--;
}
console.log(result);

/*
55555
4444
333
22
1*/

i = 5;
result = '';
while (i >= 1) {
    let j = 1;
    while (j <= i) {
        result += `${i} `;
        j++;
    }
    result += `\n`;
    i--;
}
console.log(result);

/*
54321
4321
321
21
1
*/

i = 5;
result = '';
while (i >= 1) {
    j = i;
    while (j >= 1) {
        result += `${j}`;
        j--;
    }
    result += `\n`;
    i--;
}
console.log(result);
