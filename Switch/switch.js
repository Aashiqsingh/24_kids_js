var a = parseInt(prompt("Enter first number :"))
var b = parseInt(prompt("Enter second number :"))

var choice = parseInt(prompt("1 for add \n2 for sub \n3 for mul \n4 for div \n\nEnter Your choice"))
switch(choice){

    case 1: let add = a + b;
            console.log("Addition = ",add);
            break;

    case 2: let sub = a - b;
            console.log("Subtraction = ",sub);
            break;
            
    case 3: let mul = a * b;
            console.log("Multiplication = ",mul);
            break;
            
    case 4: let div = a / b;
            console.log("Division = ",div);
            break;
            
    default: console.log("Invalid choice");
            
}