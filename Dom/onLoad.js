function red(){
    let body = document.getElementsByTagName("body")
    body[0].style.backgroundColor = "red";


    setTimeout(()=>{
        green()
    },3000)
}

function green(){
    let body = document.getElementsByTagName("body")
    body[0].style.backgroundColor = "green";

    setTimeout(()=>{
        pink()
    },3000)
}

function pink(){
    let body = document.getElementsByTagName("body")
    body[0].style.backgroundColor = "pink";

    setTimeout(()=>{
        purple()
    },3000)
}

function purple(){
    let body = document.getElementsByTagName("body")
    body[0].style.backgroundColor = "purple";

    setTimeout(()=>{
        gray()
    },3000)
}

function gray(){
    let body = document.getElementsByTagName("body")
    body[0].style.backgroundColor = "gray";

    setTimeout(()=>{
        black()
    },3000)
}

function black(){
    let body = document.getElementsByTagName("body")
    body[0].style.backgroundColor = "black";

    setTimeout(()=>{
        yellow()
    },3000)
}

function yellow(){
    let body = document.getElementsByTagName("body")
    body[0].style.backgroundColor = "yellow";

    setTimeout(()=>{
        red()
    },3000)
}