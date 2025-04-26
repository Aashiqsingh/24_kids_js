function add(no1,no2){
    console.log("Addition = ",no1+no2);
    
}

function sub(no1,no2){
    console.log("Subtrcation = ",no1-no2);
    
}

function mul(no1,no2){
    console.log("Multiplication = ",no1*no2);
    
}

function div(no1,no2){
    console.log("Divide = ",no1/no2);
    
}


// cb -- callback 
function calculator(no1,no2,cb)
{
    cb(no1,no2)
}


var a = parseInt(prompt("Enter first number :-"))
var b = parseInt(prompt("Enter second number :-"))
var choice = parseInt(prompt("1 for add \n2 for sub \n3 for mul \n4 for div \n\nEnter your choice"))

switch(choice){
    case 1:
        calculator(a,b,add)
        break;

    case 2:
        calculator(a,b,sub)
        break;

    case 3:
        calculator(a,b,mul);
        break;

    case 4:
        calculator(a,b,div)
        break;
}


