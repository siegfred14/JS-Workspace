/* 
Storage
-------
-> localStorage -> saves only string -> JSON.stringify(), parse()
                    remains in the browser even after session ends and browser is restarted
    -> setItem('key', 'value'); //create/update
    ->getItem('key'); //read
    -> removeItem('key'); // to delete one key valued pair item
    -> clear(); to clear all items from storage

-> sessionStorage -> saves only string -> JSON.stringify(), parse()
                    clears data after session ends and browser is restarted
    -> setItem('key', 'value'); //create/update
    ->getItem('key'); //read
    -> removeItem('key'); //delete
    -> clear();
 */

//to see this, from inspect, goto applications the local/session

//Local storage for simple string
let empName = 'John';

//to set to local atorage
localStorage.setItem('name', empName);

//to get the item from local storage
console.log(localStorage.getItem('name'));

//delete the item from local storage
localStorage.removeItem('name');

//clear
localStorage.clear(); //this clears every key valued pair

//Local storage with an array
let colors = [{ id: 1, name: 'white' },
            { id: 2, name: 'black' },
            { id: 3, name: 'blue' },
            { id: 4, name: 'yellow' }];

localStorage.setItem("colorStore", JSON.stringify(colors)); //objects must be converted to string before storage
console.log("colorStore", JSON.stringify(colors)); // to get the items from storage as string

//to get the data back as type object
let theColors = JSON.parse(localStorage.getItem('colorStore'));
console.log(theColors);

//to delete the data
localStorage.removeItem('colorStore');


//SESSION STORAGE

//Session storage with simple string
let studentName = 'Rajan';

//set
sessionStorage.setItem('name', studentName);

//get
console.log(sessionStorage.getItem('name'));

//delete
sessionStorage.removeItem('name');

sessionStorage.clear(); //this deletes all data irrespective of name

//Session storage with an array
colors = [{ id: 1, name: 'white' },
            { id: 2, name: 'black' },
            { id: 3, name: 'blue' },
            { id: 4, name: 'yellow' }];

sessionStorage.setItem("colorStore", JSON.stringify(colors)); //objects must be converted to string before storage

theColors = JSON.parse(sessionStorage.getItem('colorStore'));
console.log(theColors);

sessionStorage.removeItem('colorStore'); 