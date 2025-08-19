
let slider10 = document.querySelector(".container10 .slider");

setInterval(() => {

let Slides = document.querySelectorAll(".container10 .slide");
slider10.prepend(Slides[Slides.length - 1]);

},1500)
