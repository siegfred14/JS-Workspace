//JS BLOCK SCOPE 
//using a statement scope/block
let a = 10;
{
    let a = 20;
}
console.log(a);

{
    let a = 20;
    console.log(a); //answer is 20
}

let b = 15; //global scope/Parent scope
{
    let c = 23; //local scope/Child scope
}
console.log(b); //Answer is 15

//NB you cannot redeclare the same variable in the same scope.
//In this case, just call the variable without using let/const/var. eg a=12;

//more on statement scopes
a = 10;
{
    let a = 20;
    {
        let a = 30;
        {
            let a = 40;
        }
    } console.log(a);
}
//if you move console.log to another scope, it will log the a value of that scope.
//if 'a' is not defined in that scope, it will move to the higher scope. see below.

a = 10;
{
    let a = 20;
    {
        let a = 30;
        {
            //let a = 40;
            console.log(a); // it goes to the next parent
        }
    }
}

//practical example of block scope
let course = 'Engineering';
if (course === 'Engineering') {
    let dept = 'Software';
}
console.log(course);
//console.log(dept); //this would flag an error because dept is in an inner scope


//function scope 
let greet = function name(params) {
    let msg = 'Good Morning';
    console.log(msg);
};
greet(); //This is a function scope

//Keeping the console.log outside the scope
greet = function name(params) {
    let msg = 'Good Morning';
};
greet();
//console.log(msg); //error message

//to access 'Good morning outside, use return
greet = function () {
    let msg = 'Good Morning';
    return msg;
};
console.log(greet());

//or simply
greet = function () {
    let msg = 'Good Morning';
    return msg;
};
let result = greet();
console.log(result);



