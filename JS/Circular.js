let t=1;

const Background = document.querySelector(".container7 #Background");
const Title = document.querySelector(".container7 #Title");
const Title1 = document.querySelector(".container7 #Title1");
const Title2 = document.querySelector(".container7 #Title2");
const text = document.querySelector(".container7 #text");
const Imgs = document.querySelectorAll(".container7 .Container7 img");
const Buttons = document.querySelectorAll(".container7 .wrapper section");

const iceCreams = [
  {bg: "#ffd4e4", color: "#ff3884", title: "Strawberry", text: "SVG/Strawberry.svg"},
  {bg: "#baffe9", color: "#03fcad", title: "Mint", text: "SVG/Mint.svg"},
  {bg: "#fcffba", color: "#fce303", title: "Mango", text: "SVG/Mango.svg"},
  {bg: "#8ceeff", color: "#00c3e6", title: "Blueberry", text: "SVG/Blueberry.svg"},
  {bg: "#fffef2", color: "#a1a08c", title: "Vanilla", text: "SVG/Vanilla.svg"},
  {bg: "#ab816a", color: "#703616", title: "Chocolate", text: "SVG/Chocolate.svg"},
  {bg: "#d3ffc2", color: "#61a13b", title: "Pistachio", text: "SVG/Pistachio.svg"},
  {bg: "#fae7a7", color: "#d9a600", title: "Peanut Butter", text: "SVG/Peanut.svg"}
];



setInterval(() => {

document.querySelector(".container7 .Active").classList.remove("Active");
Imgs[t].classList.add("Active");

document.querySelector(".container7 .active").classList.remove("active");
Buttons[t].classList.add("active");

const iceCream = iceCreams[t];

Title.style.transition="0s";text.style.transition="0s";
Title.style.top="150px";text.style.top="180px";
Title.style.opacity="0";text.style.opacity="0";

setTimeout(() => {
Title.style.transition="1s";text.style.transition="0.8s 0.5s";
Title.style.top="100px";text.style.top="145px";
Title.style.opacity="1";text.style.opacity="1";
},100);


Background.style.background = iceCream.bg;
document.querySelector(".container7").style.background = iceCream.bg;
Title1.style.color = iceCream.color;
Title2.style.color = iceCream.color;
Title1.innerHTML = iceCream.title;
Title2.innerHTML = "Ice Cream";
text.src = iceCream.text;

t++;

if(t==8){t=0;}

},2500);
