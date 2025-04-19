const chapati = (pcs)=>{
    return "you have an order " + pcs + " pcs chapati"
}

const rice = (plate)=>{

    return "you have an order " + plate + " plate rice"

}

const paneer = (plate)=>{

    return "you have an order " + plate + " plate paneer"

}

var choice = parseInt(prompt("1 for chapati \n2 for rice \n3 for paneer \n\nEnter your choice"))
var flag;

switch(choice){
    case 1: flag = chapati(4)
            break;

    case 2: flag = rice(3)
            break;

    case 3: flag = paneer(2)
            break;
}

console.log(flag);
