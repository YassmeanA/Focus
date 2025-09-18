
const carouselA = document.querySelector(".container1 .carousel");
const arrowBtns = document.querySelectorAll(".container1 .wrapper .arrow");
const Dots = document.querySelectorAll(".container1 .dot");


// Make sure the carousel is positioned absolutely or relatively in CSS:
// #carouselA { position: relative; left: 0; transition: left 0.6s ease; }

let currentLeft = 0; // Track the current left offset

setInterval(() => {
  arrowBtns[1].classList.add("active");

  setTimeout(() => {
    arrowBtns[1].classList.remove("active");
  }, 500);

  // move left position by 232 px
  currentLeft -= 232; // negative to move content to the left
  carouselA.style.left = currentLeft + "px";

  // when we reach the end, smoothly reset to 0
  if (Math.abs(currentLeft) + 232 > 1600) {
    setTimeout(() => {
      currentLeft = 0;
      carouselA.style.transition = "none";     // disable transition for instant reset
      carouselA.style.left = "0px";
      // re-enable transition so next moves remain smooth
      requestAnimationFrame(() => {
        carouselA.style.transition = "left 0.6s ease";
      });
      arrowBtns[1].classList.remove("active");
    }, 600);
  }
}, 1500);

const ArrowsDots = () => {
  // Use Math.abs(currentLeft) because we move negatively
  const offset = Math.abs(currentLeft);
  arrowBtns[0].style.display = offset <= 10 ? "none" : "block";
  arrowBtns[1].style.display = offset >= 1600 ? "none" : "block";

  Dots.forEach((dot, index) => {
    const thresholdStart = 232 * index - 50;
    const thresholdEnd   = 232 * (index + 1) - 50;
    dot.classList.toggle(
      "active",
      offset > thresholdStart && offset < thresholdEnd
    );
  });
};

// Update arrows/dots whenever transition ends
carouselA.addEventListener("transitionend", ArrowsDots);

