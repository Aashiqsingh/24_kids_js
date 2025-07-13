const submitHandler = (event)=>{
    event.preventDefault();

    const name = document.getElementById("name")
    const email = document.getElementById("email")
    const message = document.getElementById("message")

    // console.log(name.value)
    // console.log(email.value)
    // console.log(message.value)

    let Otp = Math.floor(100000 + Math.random() * 900000)

    



    const params = {
        name:name.value,
        email:email.value,
        message:message.value,
        otp:Otp
    }

    localStorage.setItem("otp",params.otp)
        console.log(params.otp);

    const serviceId = "service_lpt1l8e";
    const templateId = "template_qgmmaae";
    

    emailjs.send(serviceId,templateId,params).then((res)=>{
        console.log(res)
    }).catch((err)=>{
        console.log(err)
    })



}