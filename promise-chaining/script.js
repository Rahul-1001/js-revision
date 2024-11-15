//phle getuser ka details le lo uske baad get post hona chahiye agr grtuser me error aaye to post mujhe nhi 
//milni chahiye aur uske baad details vala data fetch hona chahiye  iske liye hum use karte hai promise chaining ka



function getUser(userId)
{
    return new Promise((resolve)=>{
        console.log("fetching user data")
        setTimeout(()=>{
            resolve({
                userId: userId,
                name: "John Doe",
                age: 30
            })
            
        },5000)

    })
}

  function getPosts(userId)
{
    return new Promise((resolve)=>{
        console.log("fetching user posts")
        setTimeout(()=>{
            resolve([{postId:1,content:"post 1"},
                    {postId:2,content:"post2"}
            ])
        },5000)
    })
}
function getDetails(posts)
{
    return new Promise(()=>{
        console.log("getting user details")
       setTimeout(()=>{
        resolve({userName:"kishan",followers:5000})

       })
    })
}


getUser(1).then((user)=>{
    console.log("user:",user);
    return getPosts(user.userId);
}).then((posts)=>{
    console.log("Posts",posts)
    return getDetails(posts);
}).then((details)=>{
    console.log("details:",details);

})