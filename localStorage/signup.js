const submitHandler = (event)=>{
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let age = document.getElementById("age").value;

    localStorage.setItem("email",email)
    localStorage.setItem("password",password)


    alert("Form submitted successfully!");
    location.href = "login.html"
}


const login = ()=>{

    let getEmail = localStorage.getItem("email")
    let getPassword = localStorage.getItem("password")

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if(email === getEmail && password === getPassword){
        alert("Login Successful");
    }
    else{
        alert("Invalid email or password");
    }

}