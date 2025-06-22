var students = [
    {
        id: 1,
        name: "Narendra modi",
        age: 12,
        email: "ishika@gmail.com",
        mobile: 63547873687,
        url:"https://media.licdn.com/dms/image/v2/D4D03AQHElqo2BcNgyw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1730290871834?e=2147483647&v=beta&t=sYtzezOn5BJoRWaJjIZ_dfhD13oOzG0g9rhyAcoH_d8"
    },
    {
        id: 2,
        name: "Yogi ji",
        age: 12,
        email: "manu@gmail.com",
        mobile: 63547873687,
        url:"https://i.pinimg.com/736x/dd/7e/7f/dd7e7f211cb2f8bdc0a0cbaf662aa4ad.jpg"
    },
    {
        id: 3,
        name: "Amit shah",
        age: 12,
        email: "rihaan@gmail.com",
        mobile: 63547873687,
        url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcduMUlOHh0XuvlO-wkW4S6NjC1rFW0lMn-A&s"
    },
    {
        id: 4,
        name: "bhupendra patel",
        age: 12,
        email: "aditya@gmail.com",
        mobile: 63547873687,
        url:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Chief_Minister_of_Gujarat%2C_Shri_Bhupendra_Patel.jpg/640px-Chief_Minister_of_Gujarat%2C_Shri_Bhupendra_Patel.jpg"
    }
]

console.log(students);


const addStudents = () => {
    let tbody = document.getElementById("tbody")

    for (let i = 0; i < students.length; i++) {
        let tr = document.createElement("tr");
        let idTd = document.createElement("td")
        let nameTd = document.createElement("td")
        let ageTd = document.createElement("td")
        let emailTd = document.createElement("td")
        let mobileTd = document.createElement("td")
        let imageTd = document.createElement("td")
        let img = document.createElement("img")


        idTd.innerHTML = students[i].id
        nameTd.innerHTML = students[i].name
        ageTd.innerHTML = students[i].age
        emailTd.innerHTML = students[i].email
        mobileTd.innerHTML = students[i].mobile
        img.src = students[i].url
        img.style.height = "100px"
        img.style.width = "100px"




        tbody.appendChild(tr)
        tr.appendChild(idTd)
        tr.appendChild(nameTd)
        tr.appendChild(ageTd)
        tr.appendChild(emailTd)
        tr.appendChild(mobileTd)
        tr.appendChild(imageTd)
        imageTd.appendChild(img)
    }
}
