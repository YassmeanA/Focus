
    const carouselB = document.querySelector(".container2 .carousel");
    const DotBs = document.querySelectorAll(".container2 .dot");
    

    setInterval(() => {
    
    if(carouselB.scrollLeft > 800){carouselB.scrollLeft = 0;}else{
    carouselB.scrollLeft += 375;}

    },1500);


carouselB.addEventListener("scroll", () => {

if(carouselB.scrollLeft > 0 && carouselB.scrollLeft <= 300){

document.querySelector(".container2 .dot.active").classList.remove("active");
DotBs[0].classList.add("active");

}

if(carouselB.scrollLeft > 300 && carouselB.scrollLeft <= 600){

document.querySelector(".container2 .dot.active").classList.remove("active");
DotBs[1].classList.add("active");

}

if(carouselB.scrollLeft > 600 && carouselB.scrollLeft <= 800){

document.querySelector(".container2 .dot.active").classList.remove("active");
DotBs[2].classList.add("active");

}

if(carouselB.scrollLeft > 800){

document.querySelector(".container2 .dot.active").classList.remove("active");
DotBs[3].classList.add("active");

}

});

