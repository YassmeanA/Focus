const carouselB = document.querySelector(".container2 .carousel");
const DotBs = document.querySelectorAll(".container2 .dot");

let currentLeftB = 0; // Track the current left offset
let xb = 0;

setInterval(() => {

// move left position by 232 px
if(Math.abs(currentLeftB) == 0){currentLeftB -= 290;}else if(Math.abs(currentLeftB) == 590){currentLeftB -= 280;}else{currentLeftB -= 300;} // negative to move content to the left
carouselB.style.left = currentLeftB + "px";

dotBs();

// when we reach the end, smoothly reset to 0
if (Math.abs(currentLeftB) > 910) {
currentLeftB = 0;
carouselB.style.left = "0px";
}
 
},1500);

const dotBs = () => {

xb++;
if(xb == 4){xb = 0;}

DotBs.forEach(dot => {dot.classList.remove("active");});
DotBs[xb].classList.add("active");

};
