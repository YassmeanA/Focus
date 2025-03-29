
const buttons = document.querySelectorAll(".container5 .card");

let b = 0;

setInterval(() => {

document.querySelector(".container5 .card.active").classList.remove("active");
buttons[b].classList.add("active");

b++;

if(b==6){b=0;};

},1000);
