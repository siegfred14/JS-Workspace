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

