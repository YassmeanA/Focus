const Cards = document.querySelectorAll(".container4 .card");
const Carousel = document.querySelector(".container4 .carousel");

let y = 0;

setInterval(() => {
 
y++;

document.querySelector(".container4 .card.active").classList.remove("active");
Cards[y].classList.add("active");

if(y == 7){Carousel.style.left = "-342px";y = -1;}else{Carousel.style.left = `${-50*y}px`;}
  
},1200);
