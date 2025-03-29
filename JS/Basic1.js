
const carouselA = document.querySelector(".container1 .carousel");
const arrowBtns = document.querySelectorAll(".container1 .wrapper .arrow");
const Dots = document.querySelectorAll(".container1 .dot");


setInterval(() => {

arrowBtns[1].classList.add("active");
setTimeout(() => {arrowBtns[1].classList.remove("active");},500);

carouselA.scrollLeft += 210;

if(carouselA.scrollLeft > 1600){

carouselA.scrollLeft = 0;
arrowBtns[1].classList.remove("active");

}

},1500);


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

