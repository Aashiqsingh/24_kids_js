var mydiv = document.getElementById("mydiv")
function changeColor(){
    const color = document.getElementById("color")

    console.log(color.value);

    mydiv.style.height = "300px";
    mydiv.style.width = "300px";
    mydiv.style.backgroundColor = color.value;
    mydiv.style.margin = "100px 400px"
    
}