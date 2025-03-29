const Container = document.querySelector(".container12");

const wrapper2 = Container.querySelector(".swiper");

var swiper = new Swiper(".swiper-container", {

spaceBetween:0,
effect:'coverflow',
grabCursor:true,
centeredSlides:true,
loop:true,
autoplay:true,
slidesPerView:"auto",

autoplay: {
delay:1000,},

coverflowEffect: {
rotate:0,
stretch:0,
depth:150,
modifier:1,
slideShadows:false,},

pagination: {
el:'.swiper-pagination',
dynamicBullets:true,},

});
