const lasvegas = (amount,name)=>{
    console.log(name + " your tour is confirm lasvegas with package " + amount);
    
}

const singapore = (amount,name)=>{
    console.log(name + " your tour is confirm singapore with package " + amount);
    
}

const dubai = (amount,name)=>{
    console.log(name + " your tour is confirm dubai with package " + amount);
    
}

const goa = (amount,name)=>{
    console.log(name + " your tour is confirm goa with package " + amount);
    
}

var budget = 2001;
var fname = "rihaan"

if(budget > 3500)
{
    lasvegas(budget,"aditya")
}
else if(budget > 3000)
{
    singapore(budget,fname)
}
else if(budget > 2500)
{
    dubai(budget,fname)
}
else if(budget > 2000)
{
    goa(budget,fname)
}else{
    console.log("You need to earn money for want any tour packages...");
    
}