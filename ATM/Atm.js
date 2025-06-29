let main = document.getElementById("main")

const startApp = ()=>{

    let main1 = document.createElement("div")

    let AccLable = document.createElement("lable")
    AccLable.innerHTML = "Account Number :";
    let accInput = document.createElement("input")
    let pinLable = document.createElement("lable")
    pinLable.innerHTML = "PIN :";
    let pinInput = document.createElement("input")
    pinInput.setAttribute("type", "password")

    let btn = document.createElement("button")
    btn.innerHTML = "Submit"
    btn.addEventListener("click",()=>{
        choice();
        main1.style.display = "none";
    })

    main.appendChild(main1)
    main1.appendChild(AccLable)
    main1.appendChild(accInput)
    main1.appendChild(document.createElement("br"))
    main1.appendChild(pinLable)
    main1.appendChild(pinInput)
    main1.appendChild(document.createElement("br"))
    main1.appendChild(btn)

}

const choice = ()=>{
    // alert("Welcome to ATM")
    let main2 = document.createElement("div")

    let para1 = document.createElement("p")
    para1.innerHTML = "1. Check Balance ";
    let para2 = document.createElement("p")
    para2.innerHTML = "2. Withdraw Money ";
    let para3 = document.createElement("p")
    para3.innerHTML = "3. Deposit Money ";

    let input = document.createElement("input")
    input.setAttribute("type", "number")

    let btn = document.createElement("button")
    btn.innerHTML = "Submit"


    main.appendChild(main2)
    main2.appendChild(para1)
    main2.appendChild(para2)
    main2.appendChild(para3)
    main2.appendChild(input)
    main2.appendChild(btn)
}