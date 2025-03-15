

// for(let i=0;i<5;i++)
// {
//     // console.log(i);
//     console.log("*");
    
    
// }

// 

var num = 18;
var flag = true;

for(let i=2;i<num;i++)
{
    if(num % i == 0)
    {
        flag = false;
    }
}

if(flag === true)
{
    console.log("The number is prime");
}
else{
    console.log("The number is not prime");
}
