// document.cookie="fName=learn"
// document.cookie="lName=coding"

// console.log(document.cookie);

const nameEle=document.querySelector(".name");
const valueEle=document.querySelector(".value")    

document.querySelector(".btn").addEventListener("click",()=>{
    let name=nameEle.value
    let value=valueEle.value

    
    document.cookie=`${name}=${value}`

})

document.querySelector(".btn1").addEventListener("click",()=>{
    alert(document.cookie)
})


