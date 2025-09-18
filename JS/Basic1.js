
const carouselA = document.querySelector(".container1 .carousel");
const arrowBtns = document.querySelectorAll(".container1 .wrapper .arrow");
const Dots = document.querySelectorAll(".container1 .dot");


setInterval(() => {
arrowBtns[1].classList.add("active");

setTimeout(() => {
arrowBtns[1].classList.remove("active");
}, 500);

// smooth horizontal scroll by 210 px
carouselA.scrollTo({
left: carouselA.scrollLeft + 210,
behavior: 'smooth'
});

// when we reach the end, smoothly reset to 0
if (carouselA.scrollLeft + 210 > 1600) {
setTimeout(() => {
carouselA.scrollTo({ left: 0, behavior: 'smooth' });
arrowBtns[1].classList.remove("active");
}, 600); // wait for current smooth scroll to finish
}
}, 1500);


const ArrowsDots = () => {
arrowBtns[0].style.display = carouselA.scrollLeft <= 10? "none" : "block";
arrowBtns[1].style.display = carouselA.scrollLeft >= 1600? "none" : "block";

Dots.forEach((dot,index) => {

let thresholdStart1 = 210 * index - 50;
let thresholdEnd1 = 210 * (index + 1) - 50;

dot.classList.toggle("active", carouselA.scrollLeft > thresholdStart1 && carouselA.scrollLeft < thresholdEnd1);

});

};


carouselA.addEventListener("scroll", ArrowsDots);

