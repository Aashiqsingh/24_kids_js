function science(option){

    return option.name + " your adminsion confirm in scinec with per "+option.per 
}

function commerce(option){

    return option.name + " your adminsion confirm in commerce with per "+option.per
       
}

function arts(option){

    return option.name + " your adminsion confirm in arts with per "+option.per 
}

function addmision(file,cb){
    let ans = cb({name:file.name,per:file.per})
    console.log(ans);
    
}

var name = "rahul";
const per = 57;

if(per > 90){
    addmision({name:name,per:per},science)
}
else if(per > 70){
    addmision({name:name,per:per},commerce)
}
else if(per > 50){
    addmision({name:name,per:per},arts)
}