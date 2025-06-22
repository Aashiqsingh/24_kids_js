let box = document.getElementById("box")

function addPass(){
    let nameLable = document.createElement("lable")
    nameLable.innerText = "Name :"
    let nameInput = document.createElement("input")
    nameInput.type = "text"

    let ageLable = document.createElement("lable")
    ageLable.innerText = "Age :"
    let ageInput = document.createElement("input")
    ageInput.type = "text"


    let emailLable = document.createElement("lable")
    emailLable.innerText = "Email :"
    let emailInput = document.createElement("input")
    emailInput.type = "text"

    let btn = document.createElement("button")
    btn.innerText = "Submit"
    btn.addEventListener("click",()=>{
        console.log("Name --> ",nameInput.value);
        console.log("Age --> ",ageInput.value);
        console.log("Email --> ",emailInput.value);
        
    })



    box.appendChild(nameLable)
    box.appendChild(nameInput)
    box.appendChild(document.createElement("br"))
    box.appendChild(document.createElement("br"))
    box.appendChild(ageLable)
    box.appendChild(ageInput)
    box.appendChild(document.createElement("br"))
    box.appendChild(document.createElement("br"))
    box.appendChild(emailLable)
    box.appendChild(emailInput)
    box.appendChild(document.createElement("br"))
    box.appendChild(document.createElement("br"))
     box.appendChild(btn)
    box.appendChild(document.createElement("br"))
    box.appendChild(document.createElement("br"))




}
