const pdfHandler = (option)=>{
    return option.fname + " handle with pdfHandler..."
}

const wordHandler = (option)=>{
    return option.fname + " handle with word handler";
}

const pngHandler = (option)=>{
    return option.fname + " handle with png handler"
}

const csvHandler = (option)=>{
    return option.fname + " handle with csv handler"
}

const Handler = (fname,size,cb)=>{
    const x = cb({
        fname:fname,
        size:size
    })

    console.log(x);
    
}

var fileName = "abc.png";

if(fileName.endsWith(".pdf")){
    Handler(fileName,"1000kb",pdfHandler)
}
else if(fileName.endsWith(".word")){
    Handler(fileName,"1000kb",wordHandler)
}
else if(fileName.endsWith(".png")){
    Handler(fileName,"1000kb",pngHandler)
}
else if(fileName.endsWith(".csv")){
    Handler(fileName,"1000kb",csvHandler)
}