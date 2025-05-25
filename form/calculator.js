var mydiv = document.getElementById("mydiv");
const submitHadler = ()=>{
    let no1 = parseInt(document.getElementById("no1").value);
    let no2 = parseInt(document.getElementById("no2").value);

    let choose = document.getElementById("choose").value;
    let output = document.getElementById("output");

    switch(choose){
        case "+":   mydiv.style.display = "none"
                    output.innerHTML = no1 + no2;
        break;
        case "-": output.innerHTML = no1 - no2;
        break;
        case "*": output.innerHTML = no1 * no2;
        break;
        case "/": output.innerHTML = no1 / no2;
        break;
        case "%": output.innerHTML = no1 % no2;
        break;
    }
    
}