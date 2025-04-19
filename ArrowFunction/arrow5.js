const lasvegas = (amount,name)=>{
    return name + " your tour is confirm lasvegas with package " + amount
    
}

const singapore = (amount,name)=>{
    return name + " your tour is confirm singapore with package " + amount
    
}

const dubai = (amount,name)=>{
    return name + " your tour is confirm dubai with package " + amount
    
}

const goa = (amount,name)=>{
    return name + " your tour is confirm goa with package " + amount
    
}

var budget = 5001;
var fname = "rihaan";
var temp;


if(budget > 3500)
{
    temp = lasvegas(budget,"aditya")
}
else if(budget > 3000)
{
    temp = singapore(budget,fname)
}
else if(budget > 2500)
{
    temp = dubai(budget,fname)
}
else if(budget > 2000)
{
    temp = goa(budget,fname)
}else{
    console.log("You need to earn money for want any tour packages...");
    
}

console.log(temp);
