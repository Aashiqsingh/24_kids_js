const submitHandler = (event)=>{
    event.preventDefault();

    let name = document.getElementById("name")
    let age = document.getElementById("age")
    let gender = document.getElementsByName("gender")


    let gen = ""

    if(gender[0].checked == true){
        gen = "Male"
    }
    else if(gender[1].checked == true){
        gen = "Female"
    }
    else{
        gen = "Other"
    }

    let user = {
        name:name.value,
        age:age.value,
        gender:gen
    }

    console.log(user);
    let result = document.getElementById("result")

    if(gen == "Male"){
        if(age.value > 18)
        {
            // alert("You are eligible for vote")
            result.innerHTML = "You are eligible for vote"
        }
        else{
            // alert("You are not eligible for vote")
            result.innerHTML = "You are not eligible for vote"
        }
    }
    else if(gen == "Female"){
        if(age.value > 21)
        {
            // alert("You are eligible for vote")
            result.innerHTML = "You are eligible for vote"
        }
        else{
            // alert("You are not eligible for vote")
            result.innerHTML = "You are not eligible for vote"
        }
    }
    else {
        if(age.value > 25){
            // alert("You are eligible for vote")
            result.innerHTML = "You are eligible for vote"
        }
        else{
            // alert("You are not eligible for vote")
            result.innerHTML = "You are not eligible for vote"
        }
    }
    

}