/* let greet = () => {
    console.log('Hello Welcome to JS');
}
greet();
greet();
greet();
 */

//to do this a better way, we use the setInterval.
//The above becomes
let greet = () => {
    console.log('Hello Welcome to JS');
};
setInterval(greet, 1000); //this calls the greet function every 1000miliseconds MS

