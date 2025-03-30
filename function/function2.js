function science(name,per){
    console.log(name + " your admission confirm in science with per "+per);
    
}
function commerce(name,per){
    console.log(name + " your admission confirm in commerce with per "+per);
    
}
function arts(name,per){
    console.log(name + " your admission confirm in arts with per "+per);
    
}

var first_name = "surya";
var per = parseInt(prompt("Enter your percentage"));
if(per > 90)
{
    science(first_name,per)
}
else if(per > 70)
{
    commerce(first_name,per)
}
else if(per > 50)
{
    arts(first_name,per)
}
else{
    console.log("sorry you are not eligible for admission in any stream.");
}