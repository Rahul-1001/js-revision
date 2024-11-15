const promise=new Promise((res,rej)=>{

const name="rahul";


if(name==="rahul")
{                               
    res("promise is fulfilled");
}
else{     
    rej("promise failed");  
}

})
           

console.log(promise)

function fetchData()
{
    return new Promise((resolve,reject)=>{
               console.log("fetching data");
               setTimeout(()=>{
                  const num=Math.random()>0.3 
                  if(num===true)
                  {
                    const data={
                        id:1,
                        name:"rahul",
                        age:25
                    }
                    resolve(data);

                  }else{

                    reject("failed to fetch data",data); 

                  }
               },2000)
    })
}
fetchData().then(()=>{
    console.log("data fetched successfully")
}).catch((error)=>{
    console.log("error:",error);
})


