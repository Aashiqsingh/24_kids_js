const submitHandler = (event)=>{
    event.preventDefault();
    // alert("Form submitted...")

    let name = document.getElementById("name")
    let email = document.getElementById("email")
    let age = document.getElementById("age")

    let nameErr = document.getElementById("nameErr")
    let emailErr = document.getElementById("emailErr")
    let ageErr = document.getElementById("ageErr")


    if(name.value == ""){
        nameErr.innerHTML = "Name is required"
        nameErr.style.color = "red"
    }
    else if(name.value.length < 4){
        nameErr.innerHTML = "Name should be atleast 4 characters"
        nameErr.style.color = "red"
    }
    else{
        nameErr.innerHTML = name.value 
        nameErr.style.color = "green"
    }
    

    if(email.value == ""){
        emailErr.innerHTML = "Email is required"
        emailErr.style.color = "red"
    }
    else{
        emailErr.innerHTML = email.value 
        emailErr.style.color = "green"
    }
    

    if(age.value == ""){
        ageErr.innerHTML = "Age is required"
        ageErr.style.color = "red"
    }
    else if(age.value < 18){
        ageErr.innerHTML = "You are not eligible for vote"
        ageErr.style.color = "red"
    }
    else{
        ageErr.innerHTML = "You are eligible for vote" 
        ageErr.style.color = "green"
    }






    
    // console.log(name.value);
    // console.log(email.value);
    // console.log(age.value)

    var users = {
        name:name.value,
        email:email.value,
        age:age.value
    }
    // console.log(users);

    // let mydiv = document.getElementById("mydiv")
    // mydiv.innerHTML = JSON.stringify(users)

    console.log("Form submitted..");
    
}