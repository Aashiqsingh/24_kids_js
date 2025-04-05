function singapore(name,amount){
    return name + " your tour singapore confirm with package " + amount + " $"
    
}
function dubai(name,amount){
    return name + " your tour dubai confirm with package " + amount + " $"
}

function malaysia(name,amount){
    return name + " your tour malaysia confirm with package " + amount + " $"
}

function goa(name,amount){
    return name + " your tour goa confirm with package " + amount + " $"
}


var budget = 3000;
var temp;
if(budget > 4000)
{
    temp = singapore("aditya",budget)
}
else if(budget > 3000)
{
    temp = dubai("pooja",budget)
}
else if(budget > 2000)
{
    temp = malaysia("sachin",budget)
}
else if(budget > 1000)
{
    temp = goa("surya",budget)
}
else{
    console.log("sorry you are not eligible for any tour package.");
}

console.log(temp);

