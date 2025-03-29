
const Cards = document.querySelectorAll(".container4 .card");
const Wrapper = document.querySelector(".container4 .wrapper");

let y = 1;

setInterval(() => {

document.querySelector(".container4 .card.active").classList.remove("active");
Cards[y].classList.add("active");

y++;

if(y==9){setTimeout(() => {Wrapper.scrollLeft = 0;},500);}

if(y==9){y=0;}

if(y==1 || y==9){Wrapper.scrollLeft += 0;}else{Wrapper.scrollLeft += 50;}



},1200);



