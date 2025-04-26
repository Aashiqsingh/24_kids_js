const wordHander = (option)=>{
    console.log(option.fname + " is handle by wordHandler...");
    
}

const pdfHandler = (option)=>{
    console.log(option.fname + " is handle by pdfHandler...");
    
}

const pngHandler = (option)=>{
    console.log(option.fname + " is handle by pngHandler...");
    
}

const jpgHandler = (option)=>{
    console.log(option.fname + " is handle by jpg handler...");
    
}


var fileName = "abc.word";

if(fileName.endsWith(".word")){
    wordHander({
        fname:fileName,
        size:"1000kb"
    })
}
else if(fileName.endsWith(".pdf")){
    pdfHandler({fname:fileName,size:"2000kb"})
}
else if(fileName.endsWith(".png")){
    pngHandler({fname:fileName,size:"1500kb"})
}
else if(fileName.endsWith(".jpg")){
    jpgHandler({fname:fileName,size:"2500kb"})
}