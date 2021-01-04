/*
    print 0 - 10 diff 1
*/
let result = '';
let i = 0;
do {
    if (i <= 9) {
        result += `${i}, `;
    }
    else {
        result += `${i}`;
    }
    i++;
}
while (i <= 10);
console.log(result)

/* Print Values 20 - 0 diff 2 */

i = 20;
result = '';
do {
    if (i > 0) {
        result += `${i}, `;
    }
    else {
        result += `${i}`;
    }
    i -= 2
}
while (i >= 0);
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

do {
    let j = 1;
    while (j <= i) {
        result += `* `;
        j++;
    }
    result += `\n`;
    i++;
}
while (i <= 5);
console.log(result);

/* 
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
console.log(result); */

/*
1
12
123
1234
12345
*/

i = 1;
result = '';

do {
    let j = 1;
    while (j <= i) {
        result += `${j} `;
        j++;
    }
    result += `\n`;
    i++;
}
while (i <= 5)
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
do {
    let j = 1;
    while (j <= i) {
        result += `${i} `;
        j++;
    }
    result += `\n`;
    i++;
}
while (i <= 5);
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
do {
    let j = 1;
    while (j <= i) {
        result += `${j} `;
        j++;
    }
    result += `\n`;
    i--;
}
while (i >= 1);
console.log(result);

/*
55555
4444
333
22
1*/

i = 5;
result = '';

do {
    let j = 1;
    while (j <= i) {
        result += `${i} `;
        j++;
    }
    result += `\n`;
    i--;
}
while (i >= 1);
console.log(result);