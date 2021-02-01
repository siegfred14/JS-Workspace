//JS BLOCK SCOPE 
//using a statement scope/block
let a = 10; //global scope/Parent scope
{
    let a = 20; //local scope/Child scope
}
console.log(a); //Answer is 10


{
    let a = 20;
    console.log(a); //answer is 20
}

