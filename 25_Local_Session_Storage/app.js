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

//Local storage with an array
let colors = [{ id: 1, name: 'white' },
{ id: 2, name: 'black' },
{ id: 3, name: 'blue' },
{ id: 4, name: 'yellow' }];

localStorage.setItem("colorStore", JSON.stringify(colors)); //objects must be converted to string before storage

let theColors = JSON.parse(localStorage.getItem('colorStore'));
console.log(theColors);

localStorage.removeItem('colorStore');

//Session storage with simple string
let studentName = 'Rajan';

//set
sessionStorage.setItem('name', studentName);
