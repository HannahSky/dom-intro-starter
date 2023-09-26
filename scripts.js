// Hannah Kaminsky

// ID section
//get paragraph by ID, add span with tan class and text

document.getElementById("firstPara").innerHTML += " <span class=\"tan\">This is new tan text</span>";

//Tag name Section
// get all img, change width to 250 px

let images = document.getElementsByTagName("img");
console.log(images);

for(let image of images){
    image.width = "250";
}

//Class name section
// set med-blue spans to: #3C5E73
//set light-blue to: #7C9EA6

let ltBlueSpans = document.getElementsByClassName("light-blue");
let medBlueSpans = document.getElementsByClassName("med-blue");

for(let span of ltBlueSpans){
    span.style.color = "#7C9EA6";
}

for(let span of medBlueSpans){
    span.style.color = "#3C5E73";
}