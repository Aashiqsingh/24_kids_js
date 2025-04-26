function demo(){

    console.log("demo function called....");
    
}



function test(x){
    // console.log(x);
    x()
    
}

// test(12)
// test("ram")
// test(1.55)
// test(true)


test(demo)