
let season = 'winter';
let response;

// Add your code here
switch (season){
  case "summer":
  response = "This is summer, take out your sun shades";
   break;
case "winter":
  response = "This is winter, take out your sweater";
   break;
default:
  response = "We don't know exactly what season you're in.";
}
// Don't edit the code below here!

const section = document.querySelector('.preview');
section.innerHTML = ' ';
let para1 = document.createElement('p');
para1.textContent = response;
section.appendChild(para1);