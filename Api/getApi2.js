const getData = async()=>{
    const response = await fetch("https://node5.onrender.com/user/user",{
        method:"GET",
        headers:{
            "content-type": "application/json"
        }
    }) 
    const res = await response.json();
    console.log(res.data);


    let tbody = document.getElementById("tbody");
    res.data.forEach((user)=>{
        let tr = document.createElement("tr");
        let idTd = document.createElement("td");
        let nameTd = document.createElement("td");
        let emailTd = document.createElement("td");
        let ageTd = document.createElement("td");
        let passwordTd = document.createElement("td");
        let statusTd = document.createElement("td");
        let actionTd = document.createElement("td");
        let btn = document.createElement("button");
        btn.innerHTML = "DELETE";
        btn.className = "btn btn-danger";
        btn.addEventListener("click",async()=>{
            // console.log(user._id);

            const res2 = await fetch("https://node5.onrender.com/user/user/" + user._id,{
                method:"DELETE",
                headers:{
                    "content-type": "application/json"
                }
            })
            console.log(res2);
            tr.remove()

        })

        idTd.innerText = user._id;
        nameTd.innerText = user.name;
        emailTd.innerText = user.email;
        ageTd.innerText = user.age;
        passwordTd.innerText = user.password;
        statusTd.innerText = user.isActive;

        tr.appendChild(idTd);
        tr.appendChild(nameTd);
        tr.appendChild(emailTd);
        tr.appendChild(ageTd);
        tr.appendChild(passwordTd);
        tr.appendChild(statusTd);
        tr.appendChild(actionTd);
        actionTd.appendChild(btn);
        tbody.appendChild(tr);
    })
}

// getData()