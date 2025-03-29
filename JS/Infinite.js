
const carousel1 = document.getElementById("carousel1");
const carouselInner1 = carousel1.querySelector(".container3 .carousel ul");
const carouselContent1 = Array.from(carouselInner1.children);
carouselContent1.forEach(item => {
const duplicatedItem1 = item.cloneNode(true);
carouselInner1.appendChild(duplicatedItem1);
carouselInner1.style.animation = "move-rtl 7s linear infinite";

});

const carousel2 = document.getElementById("carousel2");
const carouselInner2 = carousel2.querySelector(".container3 .carousel ul");
const carouselContent2 = Array.from(carouselInner2.children);
carouselContent2.forEach(item => {
const duplicatedItem2 = item.cloneNode(true);
carouselInner2.appendChild(duplicatedItem2);
carouselInner2.style.animation = "move-ltr 8s linear infinite";

});