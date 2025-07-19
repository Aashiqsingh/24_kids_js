const getOrder = ()=>{

    console.log("Order is going to be placed...");
    

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                orderId:1312,
                message:"Order placed successfully..",
                amount:459
            })
        },5000);
    })
}

const getPayment = (data)=>{
    
    console.log("Payment is going to be made...");

    return new Promise((success,failure)=>{
        setTimeout(()=>{
            success({
                paymentId:data.orderId,
                message:"Payment Successful..",
                amount:data.amount
            })
        },4000)
    })
}


getOrder().then((data)=>{
    console.log("food order details......",data);
    getPayment(data).then((data)=>{
        console.log("payment details......",data);
    }).catch((err)=>{
        console.log("payment can't be made..",err);
    })
}).catch((err)=>{
    console.log("food can't be ordered..",err);
})