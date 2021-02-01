//JS BLOCK SCOPE 
//using a statement scope/block
let a = 10;
{
    let a = 20;
}
console.log(a); //Answer is 10


{
    let a = 20;
    console.log(a); //answer is 20
}

