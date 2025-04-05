function singapore(name,amount){
    console.log(name + " your tour singapore confirm with package " + amount);
    
}
function dubai(name,amount){
    console.log(name + " your tour dubai confirm with package " + amount);
}

function malaysia(name,amount){
    console.log(name + " your tour malaysia confirm with package " + amount);
}

function goa(name,amount){
    console.log(name + " your tour goa confirm with package " + amount);
}


var budget = 2000;
if(budget > 4000)
{
    singapore("aditya",budget)
}
else if(budget > 3000)
{
    dubai("pooja",budget)
}
else if(budget > 2000)
{
    malaysia("sachin",budget)
}
else if(budget > 1000)
{
    goa("surya",budget)
}
else{
    console.log("sorry you are not eligible for any tour package.");
}
