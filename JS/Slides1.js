const Cards = document.querySelectorAll(".container4 .card");
const Wrapper = document.querySelector(".container4 .carousel");

let y = 0;

setInterval(() => {
 
y++;

document.querySelector(".container4 .card.active").classList.remove("active");
Cards[y].classList.add("active");
 
if(y == 7){Wrapper.style.left = `${-42*y}px`;}else{Wrapper.style.left = `${-50*y}px`;}

if(y == 8){Wrapper.style.left = "-342px";y = -1;}
  
},1200);



