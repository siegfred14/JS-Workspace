/* 
Storage
-------
-> localStorage -> saves only string -> JSON.stringify(), parse()
    -> setItem('key', 'value'); //create/update
    ->getItem('key'); //read
    -> removeItem('key'); //delete
    -> clear();

-> sessionStorage ->
    -> setItem('key', 'value'); //create/update
    ->getItem('key'); //read
    -> removeItem('key'); //delete
    -> clear();
 */

let empName = 'John';

//set
localStorage.setItem('name', empName);

//get
console.log(localStorage.getItem('name'));

//delete the key
localStorage.removeItem('name');

//clear
localStorage.clear(); //this clears every key valued pair
