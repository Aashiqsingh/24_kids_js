const wordHander = (option)=>{
    return option.fname + " is handle by wordHandler..." + option.size
    
}

const pdfHandler = (option)=>{
    return option.fname + " is handle by pdfHandler..."
    
}

const pngHandler = (option)=>{
    return option.fname + " is handle by pngHandler..."
    
}

const jpgHandler = (option)=>{
    return option.fname + " is handle by jpg handler..."
    
}


var fileName = "abc.word";
var temp;

if(fileName.endsWith(".word")){
    temp = wordHander({
        fname:fileName,
        size:"1000kb"
    })
}
else if(fileName.endsWith(".pdf")){
    temp = pdfHandler({fname:fileName,size:"2000kb"})
}
else if(fileName.endsWith(".png")){
    temp = pngHandler({fname:fileName,size:"1500kb"})
}
else if(fileName.endsWith(".jpg")){
    temp = jpgHandler({fname:fileName,size:"2500kb"})
}

console.log(temp);
