const Cards = document.querySelectorAll(".container4 .card");
const Wrapper = document.querySelector(".container4 .carousel");

let y = 0;

setInterval(() => {

document.querySelector(".container4 .card.active").classList.remove("active");
Cards[y].classList.add("active");

y++;

if(y == 7){setTimeout(() => {Wrapper.style.left = `${-42*y}px`;},500);y = 0;}else{Wrapper.style.left = `${-50*y}px`;}

},1200);



