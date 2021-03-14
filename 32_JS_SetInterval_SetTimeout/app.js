/* let greet = () => {
    console.log('Hello Welcome to JS');
}
greet();
greet();
greet();
 */

//to do this a better way, we use the setInterval.
//The above becomes
/* let greet = () => {
    console.log('Hello Welcome to JS');
};
setInterval(greet, 1000); //this calls the greet function every 1000miliseconds MS
 */

 //to see the real value
 /* let count = 0;
 let greet = () => {
     count ++;
    console.log(`Hello Welcome to JS: ${count}`);
};
setInterval(greet, 1000);
 */


//Using SetTimeOut
let count = 0;
let greet = () => {
    count ++;
    console.log(`Hello Welcome to JS: ${count}`);
    console.log(new Date().toLocaleTimeString());
};
setInterval(greet, 1000);

console.log(new Date().toLocaleTimeString());
setTimeout(greet, 3000);

