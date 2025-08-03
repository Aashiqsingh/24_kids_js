// API --> Application Programming Interface

const getData = async()=>{
    const response = await fetch("https://reqres.in/api/users?page=2",{
        method:"GET",
        headers:{
            "x-api-key": "reqres-free-v1"
        }
    })

    // console.log(response);
    const res = await response.json()
    console.log(res.data);
    
}