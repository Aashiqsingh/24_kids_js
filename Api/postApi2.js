const PostData = async(event)=>{
    event.preventDefault();

    let name = document.getElementById("name")
    let email = document.getElementById("email")
    let password = document.getElementById("password")
    let age = document.getElementById("age")
    let isActive = document.getElementById("isActive")

    const data = {
        name:name.value,
        email:email.value,
        password:password.value,
        age:age.value,
        isActive:isActive.value

    }
    console.log(data);

    const response = await fetch("https://node5.onrender.com/user/user",{
        method:"POST",
        headers:{
            "content-type": "application/json"
        },
        body:JSON.stringify(data)
    })
    const res = await response.json();
    console.log(res);
    // console.log(response);

    if(response.status == 201){
        getData()
    }
    
}

const getData = async()=>{
    const response = await fetch("https://node5.onrender.com/user/user",{
        method:"GET",
        headers:{
            "content-type": "application/json"
        }
    })
    const res = await response.json();
    console.log(res);

    let tbody = document.getElementById("tbody");

    res.data.map((user)=>{
        let tr = document.createElement("tr");
        let idTd = document.createElement("td");
        let nameTd = document.createElement("td");
        let emailTd = document.createElement("td");
        let passwordTd = document.createElement("td");
        let ageTd = document.createElement("td");
        let isActiveTd = document.createElement("td");

        idTd.innerText = user._id;
        nameTd.innerText = user.name;
        emailTd.innerText = user.email;
        passwordTd.innerText = user.password;
        ageTd.innerText = user.age;
        isActiveTd.innerText = user.isActive;

        tr.appendChild(idTd);
        tr.appendChild(nameTd);
        tr.appendChild(emailTd);
        tr.appendChild(passwordTd);
        tr.appendChild(ageTd);
        tr.appendChild(isActiveTd);
        tbody.appendChild(tr);
    })
}