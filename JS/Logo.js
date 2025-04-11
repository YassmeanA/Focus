
const LogoContainer = document.querySelector(".logo-container");
const LogoButton = document.querySelector(".logo-container button");
const LogoBack = document.querySelector(".show .back");
const LogoSections = document.querySelectorAll(".show section span");
const Containers = document.querySelectorAll(".show .Container");
const LogoNav = document.querySelector(".show nav");
const LogoBackground = document.querySelector(".show nav .background");
const LogoNavbar = document.querySelector(".show nav section");
const show = document.querySelector(".show");
const shine = document.querySelector(".logo-container #shine");
const light = document.querySelector(".logo-container #light");
const hide = document.querySelector(".logo-container #hide");
const glow = document.querySelector(".logo-container #glow");
const glass = document.querySelector(".logo-container #glass");
const cus = document.querySelector(".logo-container #cus");
const audio1 = document.querySelector("#audio1");
const audio2 = document.querySelector("#audio2");

let Z;

//Check if the user uses touchscreen or not
if ("ontouchstart" in document.documentElement)

{LogoContainer.classList.add("touch");LogoContainer.classList.remove("mouse");show.classList.add("touch");show.classList.remove("mouse");Z=0;}

else {LogoContainer.classList.add("mouse");LogoContainer.classList.remove("touch");show.classList.add("mouse");show.classList.remove("touch");Z=7;}

let Y;

if(window.innerHeight > window.innerWidth){Y=window.innerHeight;}else{Y=window.innerWidth;}

const W = Array.from(LogoSections).reduce((total, section) => total + section.clientWidth, 250);

if(window.innerWidth * 0.9 >= W){

LogoNav.style.width=`calc(${W}px + 4px)`;
LogoBackground.style.width=`${W}px`;
LogoNavbar.style.width=`${W}px`;
LogoNavbar.style.justifyContent="center";

}else if(window.innerWidth * 0.9 < W){

LogoNav.style.width="90vw";
LogoBackground.style.width="calc(90vw - 4px)";
LogoNavbar.style.width="calc(90vw - 4px)";
LogoNavbar.style.justifyContent="start";

}


let isDragging = false, startX, startScrollLeft;

const snapToNearestCard = () => {
  const scrollLeft = LogoNavbar.scrollLeft;
  let closestSlide = LogoSections[0];
  let minDistance = Math.abs(scrollLeft - LogoSections[0].offsetLeft);

  // Loop through all slides to find the one closest to current scroll
  LogoSections.forEach(slide => {
    const distance = Math.abs(scrollLeft - slide.offsetLeft);
    if (distance < minDistance) {
      minDistance = distance;
      closestSlide = slide;
    }
  });

  // Snap to the closest slide
  LogoNavbar.scrollTo({
    left: closestSlide.offsetLeft + 50,
    behavior: "smooth"
  });
};

const dragStart = (e) => {
  isDragging = true;
  LogoNavbar.classList.add("dragging");
  startX = e.pageX;
  startScrollLeft = LogoNavbar.scrollLeft;
};

const dragging = (e) => {
  if (!isDragging) return;
  e.preventDefault(); // Prevent text/image selection
  LogoNavbar.scrollLeft = startScrollLeft - (e.pageX - startX);
};

const dragStop = () => {
  isDragging = false;
  LogoNavbar.classList.remove("dragging");
  snapToNearestCard();
};

LogoNavbar.addEventListener("mousedown", dragStart);
LogoNavbar.addEventListener("mousemove", dragging);
LogoNavbar.addEventListener("mouseup", dragStop);


LogoSections.forEach((Section,index) => {

Section.addEventListener("click", () => {

LogoNav.querySelector("section span.active").classList.remove("active");
LogoSections[index].classList.add("active");

document.querySelector(".Container.active").classList.remove("active");
Containers[index].classList.add("active");

});
});

Containers.forEach((Container,index) => {
if(Containers[index].classList.contains("active")){Containers[index].style.pointerEvents="none";};});

LogoContainer.addEventListener("scroll",() => {

let X = LogoContainer.scrollTop;

if(show.classList.contains("active")){
    
show.style.clipPath=`circle(${Y}px at calc(50vw - 100px + 67px - ${Z}px) calc(var(--i) - ${X}px + 104.034px))`;

}else{

show.style.clipPath=`circle(8.5px at calc(50vw - 100px + 67px - ${Z}px) calc(var(--i) - ${X}px + 104.034px))`;

}

LogoButton.addEventListener("click",() => {

show.classList.add("active");

LogoContainer.style.pointerEvents="none";
show.style.pointerEvents="auto";

Containers.forEach((Container,index) => {
Container.style.display="grid";});

Containers.forEach((Container,index) => {
if(Containers[index].classList.contains("active")){Containers[index].style.pointerEvents="auto";};});

show.style.clipPath=`circle(${Y}px at calc(50vw - 100px + 67px - ${Z}px) calc(var(--i) - ${X}px + 104.034px))`;

light.style.animation="lighting2 0.2s forwards";

audio2.play();

show.style.transition="clip-path 0.5s 0.6s, opacity 0.1s 0.6s";
show.style.opacity="1";

setTimeout(() => {
shine.style.transition="opacity 0.2s 0.1s, left 0.4s";
shine.style.opacity="0";
shine.style.left="3px";

shine.classList.add("active");
setTimeout(() => {shine.classList.remove("active");},500)

glow.style.transition="0.3s";
glow.style.opacity="0";

glass.style.transition="0.4s";
glass.style.left="3px";
cus.style.left="83.5px";

hide.setAttribute('width',5.2);
hide.setAttribute('x',10);},100);

});

LogoBack.addEventListener("click",() => {

show.classList.remove("active");

show.style.pointerEvents="none";
LogoContainer.style.pointerEvents="auto";

Containers.forEach((Container,index) => {
if(Containers[index].classList.contains("active")){Containers[index].style.pointerEvents="none";};});

show.style.transition="clip-path 0.5s, opacity 0.5s 0.5s";
show.style.opacity="0";
show.style.clipPath=`circle(8.5px at calc(50vw - 100px + 67px - ${Z}px) calc(var(--i) - ${X}px + 104.034px))`;

audio1.play();

setTimeout(() => {

show.scrollTop=0;

shine.style.transition="opacity 0.5s, left 0.4s";
shine.style.opacity="1";
shine.style.left="8.5px";

glow.style.transition="0.5s";
glow.style.opacity="0.5";

glass.style.transition="0.4s";
glass.style.left="8.5px";
cus.style.left="89px";


hide.setAttribute('width',0);
hide.setAttribute('x',15);

setTimeout(() => {

shine.classList.add("active");
setTimeout(() => {shine.classList.remove("active");},500);

light.style.animation="lighting1 0.8s forwards";},200);

Containers.forEach((Container,index) => {
Container.style.display="none";});

},900);

});

});
