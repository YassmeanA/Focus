
const Cards = document.querySelectorAll(".container4 .card");
const Wrapper = document.querySelector(".container4 .carousel");

let y = 1;

setInterval(() => {

document.querySelector(".container4 .card.active").classList.remove("active");
Cards[y].classList.add("active");

y++;

if(y==9){setTimeout(() => {Wrapper.style.left = "0";},500);}

if(y==9){y=0;}

Wrapper.style.left = `${-50*y}px`;

},1200);



