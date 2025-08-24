const postData = async()=>{

    const data = {
        name:"Aditya",
        email:"aditya@gmail.com",
        password:123456,
        age:15,
        isActive:true
    }

    const response =await fetch("https://node5.onrender.com/user/user",{
        method:"POST",
        headers:{
            "content-type": "application/json"
        },
        body:JSON.stringify(data)
    })

    const res = await response.json();
    console.log(res);
}