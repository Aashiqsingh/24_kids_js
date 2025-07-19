// const getData = ()=>{
//     var promise = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             // resolve({status:200,message:"Data fetched successfully.."})
//             reject({status:400,message:"Data fetched failed.."})
//         },4000);
//     })

//     promise.then((data)=>{
//         console.log(data);
//     })
//     promise.catch((err)=>{
//         console.log(err);
//     })




// }

// getData()



// const getData = ()=>{
//     var promise = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve({status:200,message:"Data fetched successfully.."})
//             // reject({status:400,message:"Data fetched failed.."})
//         },4000);
//     })

//     return promise;
// }

// let ans = getData()
// ans.then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })



// const getData = ()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve({status:200,message:"Data fetched successfully.."})
//             // reject({status:400,message:"Data fetched failed.."})
//         },4000);
//     })

    
// }

// let ans = getData()
// ans.then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })



const getData = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({status:200,message:"Data fetched successfully.."})
            // reject({status:400,message:"Data fetched failed.."})
        },4000);
    })

    
}

getData().then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})