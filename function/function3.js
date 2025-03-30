function science(name,per){
    return name + " your admission confirm in science with per "+per
    
}
function commerce(name,per){
    return name + " your admission confirm in commerce with per "+per
    
}
function arts(name,per){
    return name + " your admission confirm in arts with per "+per
    
}

var first_name = "surya";
var per = parseInt(prompt("Enter your percentage"));
let temp;
if(per > 90)
{
    temp = science(first_name,per)
}
else if(per > 70)
{
    temp = commerce(first_name,per)
}
else if(per > 50)
{
    temp = arts(first_name,per)
}
else{
    console.log("sorry you are not eligible for admission in any stream.");
}

console.log(temp);
