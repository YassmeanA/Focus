
const wrapper1 = document.querySelector(".swiper1");

var swiper = new Swiper(".mySwiper1", {

spaceBetween:0,

effect:'cards',
grabCursor:true,
centeredSlides:true,
loop:true,
autoplay:true,
slidesPerView:"auto",

autoplay: {
delay: 1200,},

coverflowEffect: {
rotate:0,
stretch:0,
depth:150,
modifier:1,
slideShadows:false,},

pagination: {
el:'.swiper-pagination',
clickable:true,},

navigation: {
nextEl:'.next',
prevEl:'.prev',},

});
