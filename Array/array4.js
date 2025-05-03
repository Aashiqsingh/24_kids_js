var users = ["ranjha","jay","kishan","ram","seeta","geeta","sravan","mallika"];

// var flag = false;
// for(let i=0;i<users.length;i++)
// {
//     if(users[i].length > 3)
//     {
//         flag = true;
//     }
// }

// console.log(flag);
       

// var x = users.every((user)=>{
//     return user.length > 2
// })

// console.log(x);

var x = users.every((user)=>{
    return user.startsWith("r")
})

console.log(x);
