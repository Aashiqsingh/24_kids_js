var sec = parseInt(prompt("Enter second"));   // 3750



    var hour = Math.floor(sec / 3600);
    sec = sec % 3600;    
    var min = Math.floor(sec / 60);
    sec = sec % 60;



console.log("hours : ",hour);
console.log("minutes : ",min);
console.log("seconds : ", sec);
