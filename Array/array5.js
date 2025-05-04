var users = ["ranjha","jay","kishan","ram","seeta","geeta","sravan","mallika"];



var x = users.filter((user)=>{
    return user != "sravan"
})

console.log(x);





// map : it will return new array with same length

// var x = users.map((user)=>{
//     return user.toUpperCase()
// })

// console.log(x);


// var x = users.map((user)=>{
//     return user.length > 5
// })

// console.log(x);



// filter : it will retunr new array with modified data

// var x = users.filter((user)=>{
//     return user.length > 5
// })

// console.log(x);














// users.forEach((user)=>{
//     console.log(user.toUpperCase());
    
// })

// users.forEach((user)=>{
//     if(user.length >= 5)
//     {
//         console.log(user);
        
//     }
// })

// users.forEach((user) => {
//     if (user.startsWith("s")) {
//         console.log(user.toUpperCase());
//     }
// });


// users.forEach((user) => {
//     if (user.includes("e")) {
//         console.log(user.toUpperCase());
//     }}
// )