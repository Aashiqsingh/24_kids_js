// var a= 0;
var colors = ["red","green","blue","yellow","darkblue","orange","navyblue","black","brown","violet","aqua"]
function changeColor(){

    // console.log("Hello");
    //    console.log(a++);

    let randomIndex = Math.floor(Math.random() * colors.length)
    console.log(randomIndex);

    let box = document.getElementById("box")

    box.style.backgroundColor = colors[randomIndex]
    
       
}