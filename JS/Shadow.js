const Arrow2 = document.querySelector(".container2S .Arrow");
const SideNavbar2 = document.querySelector(".container2S .side-navbar");
const ItemBtn2s = document.querySelectorAll(".container2S .item-btn.N");
const ItemMenu2s = document.querySelectorAll(".container2S .item.menu");
const MenuItemA2s = document.querySelectorAll(".container2S .menu-item.A");
const MenuItemB2s = document.querySelectorAll(".container2S .menu-item.B");
const Menu2s = document.querySelectorAll(".container2S .Menu");
const Text2s = document.querySelectorAll(".container2S .item .text");
const Item2s = document.querySelectorAll(".container2S .item-btn");
const Mouse2 = document.querySelector(".container2S .mouse");


//Activate & Deactivate Side Navbar
Arrow2.addEventListener("click",() => {

if(SideNavbar2.classList.contains("active")){

SideNavbar2.classList.remove("active");

}else{SideNavbar2.classList.add("active");

};

ItemMenu2s.forEach(ItemMenu => {
ItemMenu.querySelector(".item-btn").classList.remove("active");
ItemMenu.classList.remove("active");});

Menu2s.forEach(Menu => {
Menu.classList.remove("active");});

});


function Show2() {

Mouse2.style.transform="translate(-155px,-235px)";
setTimeout(() => {
Mouse2.querySelector(".cursor").classList.add("active");
setTimeout(() => {Arrow2.click();Mouse2.querySelector(".cursor").classList.remove("active");
},300);

setTimeout(() => {

Mouse2.style.transform="translate(-110px,-140px)";

setTimeout(() => {

Mouse2.querySelector(".cursor").classList.add("active");

setTimeout(() => {
Mouse2.querySelector(".cursor").classList.remove("active");

ItemMenu2s[0].classList.add("active");
ItemMenu2s[0].querySelector(".item-btn").classList.add("active");

setTimeout(() => {
Mouse2.style.transform="translate(-110px,0)";

setTimeout(() => {
Mouse2.querySelector(".cursor").classList.add("active");

setTimeout(() => {
Mouse2.querySelector(".cursor").classList.remove("active");
ItemMenu2s[0].classList.remove("active");
ItemMenu2s[0].querySelector(".item-btn").classList.remove("active");

ItemMenu2s[1].classList.add("active");
ItemMenu2s[1].querySelector(".item-btn").classList.add("active");

setTimeout(() => {
Mouse2.style.transform="translate(-110px,-110px)";

setTimeout(() => {
Mouse2.querySelector(".cursor").classList.add("active");

setTimeout(() => {
Mouse2.querySelector(".cursor").classList.remove("active");
ItemMenu2s[1].classList.remove("active");
ItemMenu2s[1].querySelector(".item-btn").classList.remove("active");

setTimeout(() => {
Mouse2.style.transform="translate(-90px,-235px)";

setTimeout(() => {
Mouse2.querySelector(".cursor").classList.add("active");

setTimeout(() => {
Mouse2.querySelector(".cursor").classList.remove("active");
Arrow2.click();


setTimeout(() => {
Mouse2.style.transform="translate(-175px,-110px)";

setTimeout(() => {
Text2s[2].style.display="flex";
setTimeout(() => {
Mouse2.querySelector(".cursor").classList.add("active");

setTimeout(() => {
Mouse2.querySelector(".cursor").classList.remove("active");
Menu2s[1].classList.add("active");
ItemMenu2s[1].querySelector(".item-btn").classList.add("active");

setTimeout(() => {
Mouse2.style.transform="translate(-175px,-140px)";
Text2s[2].style.display="none";

setTimeout(() => {
Text2s[1].style.display="flex";

setTimeout(() => {
Mouse2.querySelector(".cursor").classList.add("active");

setTimeout(() => {
Mouse2.querySelector(".cursor").classList.remove("active");
Menu2s[0].classList.add("active");
ItemMenu2s[0].querySelector(".item-btn").classList.add("active");
Menu2s[1].classList.remove("active");
ItemMenu2s[1].querySelector(".item-btn").classList.remove("active");

setTimeout(() => {
Mouse2.style.transform="translate(-105px,-170px)";
Text2s[1].style.display="none";

setTimeout(() => {
Mouse2.querySelector(".cursor").classList.add("active");

setTimeout(() => {

Mouse2.querySelector(".cursor").classList.remove("active");
Menu2s[0].classList.remove("active");
ItemMenu2s[0].querySelector(".item-btn").classList.remove("active");

setTimeout(() => {
Mouse2.style.transform="translate(0,0)";
},500);

},300);
},600);

},600);

},200);
},300);
},600);

},600);

},200);
},300);
},600);

},600);


},300);
},600);

},600);


},300);
},600);

},600);


},300);
},600);

},600);

},300);

},500);

},600);


},600);

}

setTimeout(() => {Show2();},500);

setInterval(() => {Show2();},14000);
