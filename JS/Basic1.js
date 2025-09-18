const carouselA = document.querySelector(".container1 .carousel");
const arrowBtns = document.querySelectorAll(".container1 .wrapper .arrow");
const Dots = document.querySelectorAll(".container1 .dot");

let currentLeft = 0; // Track the current left offset
let x = 0;

setInterval(() => {
arrowBtns[1].classList.add("active");

setTimeout(() => {
arrowBtns[1].classList.remove("active");
},500);

// move left position by 232 px
currentLeft -= 232; // negative to move content to the left
carouselA.style.left = currentLeft + "px";

// when we reach the end, smoothly reset to 0
if (Math.abs(currentLeft) > 1624) {
currentLeft = 0;
carouselA.style.left = "0px";
arrowBtns[1].classList.remove("active");
}

},1500);

const ArrowsDots = () => {
// Use Math.abs(currentLeft) because we move negatively
const offset = Math.abs(currentLeft);
arrowBtns[0].style.display = offset <= 100 ? "none" : "block";
arrowBtns[1].style.display = offset >= 1550 ? "none" : "block";
x++;
Dots.forEach((dot, index) => {
Dots.forEach(dot => {dot.classList.remove("active");});
Dots[x].classList.add("active");
});
};

setInterval(() => {ArrowsDots();},1000);

