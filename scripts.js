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

//selecting a group with CSS selectors 
let colors = ["#283040", "#3C5E73", "#7C9EA6", "#D9BCA3", "#F2DCC9"];
let svgs = document.querySelectorAll("#svgs svg");
console.log(svgs);

//iterate through the SVG collection and change the color of each
for(let i = 0; i < svgs.length; i++){
    svgs[i].style.stroke = colors[i];
}

//individual elements with CSS selector 
document.querySelector(".bold").style.color = "#7C9EA6";

// changing DOM node content
document.querySelector(".content_list li:first-of-type").textContent = "this is new list item text";

//this would select all of the li's in the .content_list
document.querySelectorAll(".content_list li")[2].innerHTML += "<strong> Hannah Kaminsky</strong>"; // the brackets would say pick specifically the number in the idex (0 , 1, 2 ,3)

// removing attributes 
document.querySelector("#remove a").removeAttribute("hidden");