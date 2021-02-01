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

