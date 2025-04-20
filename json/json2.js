var employee = {
    id:101,
    name:"rahul",
    age:32,
    salary:74687,
    email:"rahul@gmail.com",
    mobile:["89275897583","8927839482","9874509233"],
    stauts:true,
    isMarried:true,
    address:{
        street:"C.G road",
        city:"Ahmedabad",
        state:"Gujarat",
        country:"India",
        pincode:726498
    }
}

console.log(employee);
console.log(employee.name);
console.log(employee.age);
console.log(employee.salary);
console.log(employee.email);
console.log(employee.mobile);
// console.log(employee.mobile[0]);

for(let i=0;i<employee.mobile.length;i++)
{
    console.log(employee.mobile[i]);
    
}
console.log(employee.address);
console.log(employee.address.street);
console.log(employee.address.city);
console.log(employee.address.state);








