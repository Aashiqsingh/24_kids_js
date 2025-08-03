const getData = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                message:"Data Fetched Successfully..",
                status:200,
            })
        },4000);
    })
}


const data = async()=>{

    console.log("Start Data.......");
    

    let ans = await getData()
    console.log(ans);


    console.log("End Data.............");
    
    
}

data()