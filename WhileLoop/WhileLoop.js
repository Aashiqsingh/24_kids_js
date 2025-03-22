// 

// let i = 0;
// while(i < 5)
// {
//     console.log(i);
//     i++;
// }


// reverse number

// var num = 8754;

// while(num!=0){
//     let remainder = num % 10;
//     console.log(remainder);
//     num = Math.floor(num / 10);

// }

// pallindrome number

var num = 131;
var rev = 0;
var temp = num;

while(num!=0){
    let remainder = num % 10;
    // console.log(remainder);
    rev = rev * 10 + remainder
    num = Math.floor(num / 10);

}

if(temp === rev)
{
    console.log("Pallindrome");
}
else{
    console.log("Not Pallindrome");
}