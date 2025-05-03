var users = ["ranjha","jay","kishan","ram","seeta","geeta","sravan","mallika"];

// var flag = false;
// for(let i=0;i<users.length;i++)
// {
//     if(users[i].length < 4)
//     {
//         flag = true;
//     }
// }

// console.log(flag);


// var x = users.some((user)=>{
//     return user.length < 4
// })

// console.log(x);

var x = users.some((user)=>{
    return user.startsWith("g")
})

console.log(x);
