
const carousel = document.querySelector(".carousel");
const slides = document.querySelectorAll(".card");
const dotsContainer = document.getElementById("dots");
const firstSlideWidth = slides[0].offsetWidth + 10; // 10px spacing
const totalCardWidth = carousel.scrollWidth;


    //Check if the user uses touchscreen or not
    if ("ontouchstart" in document.documentElement)
    
    {carousel.classList.add("touch");carousel.classList.remove("mouse");}
    
    else {carousel.classList.add("mouse");carousel.classList.remove("touch");}
    
    
    if(carousel.classList.contains("mouse")){
    
    let isDragging = false, startX, startScrollLeft;
    
    const snapToNearestCard = () => {
      // Calculate the index of the closest slide
      const scrollLeft = carousel.scrollLeft;
      const index = Math.round(scrollLeft / firstSlideWidth);
    
      // Scroll to the nearest slide
      carousel.scrollTo({
      left: index * firstSlideWidth,
      behavior: "smooth"
    });
    
    };
    
    const dragStart = (e) => {
      stopAutoplay();
      isDragging = true;
      carousel.style.cursor="grab";
      carousel.classList.add("dragging");
      startX = e.pageX;
      startScrollLeft = carousel.scrollLeft;
    };
    
    const dragging = (e) => {
      if (!isDragging) return;
      carousel.style.cursor="grabbing";
      e.preventDefault(); // Prevent image/text selection while dragging
      carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
      
    };
    
    const dragStop = () => {
      isDragging = false;
      carousel.style.cursor="grab";
      snapToNearestCard();
      startAutoplay()
    
    };
    
    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);
    
    }


let autoplayTimer = null;
const autoplayDelay = 3000; // 3 seconds
let slidesInView;

function getSlidesInView() {
  return Math.round(window.innerWidth / firstSlideWidth);
}

function setupDots() {
  dotsContainer.innerHTML = "";
  slidesInView = getSlidesInView();

  
  if (slidesInView >= 0.7 * slides.length) {dotsContainer.style.display = "none";}else{dotsContainer.style.display = "flex";}

  if (slidesInView >= slides.length / 2) {slidesInView = slides.length / 2;} 


  const totalDots = Math.round(slides.length / slidesInView);
  const dots = [];

  for (let i = 0; i < totalDots; i++) {
    const dot = document.createElement("div");
    dot.className = "dot";
    if (i === 0) dot.classList.add("active");

    dot.addEventListener("click", () => {
      stopAutoplay();
      const targetScroll = i * slidesInView * firstSlideWidth;
      carousel.scrollTo({
        left: targetScroll,
        behavior: "smooth"
      });
    });

    dotsContainer.appendChild(dot);
    dots.push(dot);
  }

  carousel.addEventListener("scroll", () => {
    const scrollLeft = carousel.scrollLeft;
    const groupWidth = slidesInView * firstSlideWidth;
    const activeIndex = Math.round(scrollLeft / groupWidth);

    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === activeIndex);
    });
  });
}

function startAutoplay() {
  
  setTimeout(() => {
  
  stopAutoplay(); // Avoid multiple timers
  slidesInView = getSlidesInView();
  const scrollAmount = slidesInView * firstSlideWidth;

  autoplayTimer = setInterval(() => {
    const maxScroll = carousel.scrollWidth - carousel.clientWidth;
    if (carousel.scrollLeft >= maxScroll) {
      carousel.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  }, autoplayDelay);

},5000);

}

function stopAutoplay() {
  clearInterval(autoplayTimer);
  autoplayTimer = null;
}

setupDots();
startAutoplay();
window.addEventListener("resize", () => {
  setupDots();
  startAutoplay(); // Restart autoplay with updated slidesInView
});

