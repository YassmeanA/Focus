const SideNavbar4 = document.querySelector(".container4S .side-navbar");
const Item4s = document.querySelectorAll(".container4S .item.N");
const Mouse4 = document.querySelector(".container4S .mouse");
const Theme4 = document.querySelector(".container4S .theme");
const Container4 = document.querySelector(".container4S");

function Show4() {

Mouse4.style.transform="translate(-185px,20px)";
setTimeout(() => {

Mouse4.style.transform="translate(-65px,20px)";
SideNavbar4.style.width="280px";
setTimeout(() => {
Mouse4.style.transform="translate(-205px,-135px)";

setTimeout(() => {
Mouse4.querySelector(".cursor").classList.add("active");
Item4s[0].classList.remove("active");
Item4s[1].classList.add("active");

setTimeout(() => {
SideNavbar4.style.width="280px";
Mouse4.querySelector(".cursor").classList.remove("active");

setTimeout(() => {
Mouse4.style.transform="translate(-120px,260px)";

setTimeout(() => {
Mouse4.querySelector(".cursor").classList.add("active");
Theme4.classList.remove("active");
Container4.classList.replace("dark","light");
Theme4.querySelector("span").innerHTML = "Light";

setTimeout(() => {
Mouse4.querySelector(".cursor").classList.remove("active");
},300);

setTimeout(() => {
Mouse4.querySelector(".cursor").classList.add("active");
Theme4.classList.add("active");

Container4.classList.replace("light","dark");
Theme4.querySelector("span").innerHTML = "Dark";

setTimeout(() => {
Mouse4.style.transform="translate(-120px,20px)";
Mouse4.querySelector(".cursor").classList.remove("active");

setTimeout(() => {
Mouse4.style.transform="translate(-185px,30px)";
SideNavbar4.style.width="100px";

setTimeout(() => {
Mouse4.style.transform="translate(-185px,-160px)";

setTimeout(() => {
Mouse4.querySelector(".cursor").classList.add("active");
setTimeout(() => {
Mouse4.querySelector(".cursor").classList.remove("active");
},300);
Item4s[0].classList.add("active");
Item4s[1].classList.remove("active");

setTimeout(() => {
Mouse4.style.transform="translate(0,0)";
},500);

},500);

},500);

},500);

},500);

},800);

},500);

},300);

},700);

},500);

},700);

},700);


}

setTimeout(() => {Show4();},500);

setInterval(() => {Show4();},9000);
