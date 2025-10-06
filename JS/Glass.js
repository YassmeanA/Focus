do the same this for this code "const SideNavbar3 = document.querySelector(".container3S .side-navbar");
const Item3s = document.querySelectorAll(".container3S .item.N");
const AccountSettings3 = document.querySelector(".container3S .account-settings");
const Settings3 = document.querySelector(".container3S .account .settings");
const Mouse3 = document.querySelector(".container3S .mouse");
const Ham = document.querySelector(".container3S .Ham");

function Show3() {

setTimeout(() => {

Mouse3.style.transform="translate(-140px,-270px)";

setTimeout(() => {

Mouse3.querySelector(".cursor").classList.add("active");

setTimeout(() => {

Mouse3.querySelector(".cursor").classList.remove("active");
SideNavbar3.classList.add("active");
Ham.style.opacity="0";

setTimeout(() => {
Mouse3.style.transform="translate(-80px,-55px)";

setTimeout(() => {

Mouse3.querySelector(".cursor").classList.add("active");

setTimeout(() => {

Mouse3.querySelector(".cursor").classList.remove("active");
},300);

setTimeout(() => {
Item3s[0].classList.remove("active");
Item3s[1].classList.add("active");

setTimeout(() => {
Mouse3.style.transform="translate(80px,200px)";

setTimeout(() => {

Mouse3.querySelector(".cursor").classList.add("active");
Settings3.querySelector(".circle").classList.add("active");

setTimeout(() => {

Mouse3.querySelector(".cursor").classList.remove("active");
Settings3.querySelector(".circle").classList.remove("active");

},600);

setTimeout(() => {
SideNavbar3.classList.remove("active");
AccountSettings3.classList.add("active");

setTimeout(() => {
Mouse3.style.transform="translate(-110px,-240px)";

setTimeout(() => {

Mouse3.querySelector(".cursor").classList.add("active");

setTimeout(() => {

Mouse3.querySelector(".cursor").classList.remove("active");

},300);

setTimeout(() => {
SideNavbar3.classList.add("active");
AccountSettings3.classList.remove("active");

setTimeout(() => {
Mouse3.style.transform="translate(-80px,-100px)";

setTimeout(() => {

Mouse3.querySelector(".cursor").classList.add("active");

setTimeout(() => {

Mouse3.querySelector(".cursor").classList.remove("active");

},300);

setTimeout(() => {
Item3s[0].classList.add("active");
Item3s[1].classList.remove("active");

setTimeout(() => {
Mouse3.style.transform="translate(90px,-245px)";

setTimeout(() => {

Mouse3.querySelector(".cursor").classList.add("active");

setTimeout(() => {

Mouse3.querySelector(".cursor").classList.remove("active");

},300);

setTimeout(() => {
SideNavbar3.classList.remove("active");
setTimeout(() => {Ham.style.opacity="1";},400);

setTimeout(() => {
Mouse3.style.transform="translate(180px,50px)";
},500);

},100);
},500);
},800);

},100);
},500);
},800);

},300);
},500);
},800);

},500);
},500);
},800);


},100);
},500);
},800);


},400);
},500);
},500);

}


setTimeout(() => {Show3();},500);

setInterval(() => {Show3();},11000)'
