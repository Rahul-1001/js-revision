//jab kaam pura ho jayega tabhi us person ko call karenge

//a callback is a function that passed as an argument into another function

//like function print(callback)

// function ka reference pass kiya hai direct call nhi kiya hai

//function print(callback)
// phle print function complete hoga then callback execute hoga

//callback javascript ko asynchromous banate hai

setTimeout(printName,2000)

function printName() {
    console.log("Hello, my name is Rahul!");
}
//jab tak mere 1000milisec complete nhi honge mai tumhe execute nhi hone dunga  
//settimeout ek function hai aur printname callback function hai


document.querySelector(".btn").addEventListener("click", printName);  

function sum(a,b,callback)
{
    let result=a+b;
    callback(result);
}
function showResult(result)
{
    console.log(result);
}
sum(5,5,showResult);

// a reference le rha hai 5 se  b reference le rha hai 5 se and callback showResult se
