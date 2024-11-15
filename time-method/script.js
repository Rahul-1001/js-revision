//the global setTimeout method sets a timer which execute a function or specified piece of code once the timer expires

//this method returns a timeout id which uniquely identifies the timeout so you can remove it later by calling clearTimeout



const btnEle=document.querySelector(".btn");
const stopBtn=document.querySelector(".btn1");

let timeoutId;
btnEle.addEventListener("click",()=>{
   timeoutId= setTimeout(()=>{
        console.log("you clicked on button") 
    },2000);

    console.log("rahul");
})

stopBtn.addEventListener("click",()=>{
    clearTimeout(timeoutId);
    console.log("rahul stop");
})


//setInterval sets a timer which execute a function or specified piece of code repeatedly at fixed time intervals

//this method returns an interval id which uniquely identifies the interval so you can remove it later by calling clearInterval

