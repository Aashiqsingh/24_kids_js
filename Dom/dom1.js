function changeTxt(){
    let txt = document.getElementById("txt")

    txt.innerHTML = "Royal technosoft p ltd."
    txt.style.backgroundColor = "red";
    txt.style.color = "white";

}

function changeRef(){
    let link = document.getElementById("link")

    link.href = "https://netflix.com";
    link.innerHTML = "Netflix"
}

function sizeIncrease(){
    let image = document.getElementById("image")
    image.style.height = "400px";
    image.style.width = "500px"
}

function sizeDecrease(){
    let image = document.getElementById("image")
    image.style.height = "200px";
    image.style.width = "300px"
}