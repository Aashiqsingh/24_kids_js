var students = [
    {
        id:1,
        name:"roshan",
        age:22,
        email:"roshan@gmail.com",
        gender:"male",
        isActive:true
    },
    {
        id:2,
        name:"priya",
        age:23,
        email:"priya@gmail.com",
        gender:"female",
        isActive:true
    },
    {
        id:3,
        name:"bhuwan",
        age:25,
        email:"bhuwan@gmail.com",
        gender:"male",
        isActive:true
    },
    {
        id:4,
        name:"rahul",
        age:19,
        email:"rahul@gmail.com",
        gender:"male",
        isActive:true
    }
]

let ageGreEighteen = students.filter((stu)=>{
    return stu.age > 22
})

console.log(ageGreEighteen);





// console.log(students);

// for(let i=0;i<students.length;i++)
// {
//     console.log(students[i].name);
    
// }


// let femaleStudent = students.filter((stu)=>{
//     return stu.gender == "female"
// })

// console.log(femaleStudent);


// let studentName = students.map((stu)=>{
//     return stu.name
// })

// console.log(studentName);


