function getElement(){

    let mydiv = document.getElementById("mydiv")


    let h1 = document.createElement("h1")
    h1.innerHTML = "Royal technosoft p ltd.";
    h1.style.color = "red"


    let link = document.createElement("a")
    link.innerHTML = "google"
    link.href = "https://www.google.com"

    let btn = document.createElement("button")
    btn.innerHTML = "Click Me"
    btn.addEventListener("click",()=>{
        link.href = "https://www.netflix.com";
        link.innerHTML = "Netflix"
        link.target = "_blank"
    })






    mydiv.appendChild(h1)
    mydiv.appendChild(link)
    mydiv.appendChild(btn)
}