function inner()
{
    let counter=5;
    return function()
    {
        counter ++;
        return counter;
    }

    
}
let increment=inner();
console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());
