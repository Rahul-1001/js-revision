function fetchData()
{
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const data={
            userName:"Rahul",
            userId:456,
            course:"js"
        }
        resolve(data)

    },2000)

    })
}
async function getUserData()
{
    try {
        console.log("fetching data.......")
        const data=await fetchData()
        console.log("fetched data",data) 
        
    } catch (error) {
        console.log(error);
        
    }
}
getUserData()