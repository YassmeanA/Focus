const Arrow1 = document.querySelector(".container1S .Arrow");
const SideNavbar1 = document.querySelector(".container1S .side-navbar");
const ItemBtn1s = document.querySelectorAll(".container1S .item-btn.N");
const ItemMenu1s = document.querySelectorAll(".container1S .item.menu");
const MenuItemA1s = document.querySelectorAll(".container1S .menu-item.A");
const MenuItemB1s = document.querySelectorAll(".container1S .menu-item.B");
const Menu1s = document.querySelectorAll(".container1S .Menu");
const Text1s = document.querySelectorAll(".container1S .item .text");
const Item1s = document.querySelectorAll(".container1S .item-btn");
const Mouse1 = document.querySelector(".container1S .mouse");


//Activate & Deactivate Side Navbar
Arrow1.addEventListener("click",() => {

if(SideNavbar1.classList.contains("active")){

SideNavbar1.classList.remove("active");

}else{SideNavbar1.classList.add("active");

};

ItemMenu1s.forEach(ItemMenu => {
ItemMenu.querySelector(".item-btn").classList.remove("active");
ItemMenu.classList.remove("active");});

Menu1s.forEach(Menu => {
Menu.classList.remove("active");});

});


function Show1() {

Mouse1.style.transform="translate(-155px,-235px)";
setTimeout(() => {
Mouse1.querySelector(".cursor").classList.add("active");
setTimeout(() => {SideNavbar1.classList.add("active");Mouse1.querySelector(".cursor").classList.remove("active");
},300);

setTimeout(() => {

Mouse1.style.transform="translate(-110px,-130px)";

setTimeout(() => {

Mouse1.querySelector(".cursor").classList.add("active");

setTimeout(() => {
Mouse1.querySelector(".cursor").classList.remove("active");

ItemMenu1s[0].classList.add("active");
ItemMenu1s[0].querySelector(".item-btn").classList.add("active");

setTimeout(() => {
Mouse1.style.transform="translate(-110px,10px)";

setTimeout(() => {
Mouse1.querySelector(".cursor").classList.add("active");

setTimeout(() => {
Mouse1.querySelector(".cursor").classList.remove("active");
ItemMenu1s[0].classList.remove("active");
ItemMenu1s[0].querySelector(".item-btn").classList.remove("active");

ItemMenu1s[1].classList.add("active");
ItemMenu1s[1].querySelector(".item-btn").classList.add("active");

setTimeout(() => {
Mouse1.style.transform="translate(-110px,-100px)";

setTimeout(() => {
Mouse1.querySelector(".cursor").classList.add("active");

setTimeout(() => {
Mouse1.querySelector(".cursor").classList.remove("active");
ItemMenu1s[1].classList.remove("active");
ItemMenu1s[1].querySelector(".item-btn").classList.remove("active");

setTimeout(() => {
Mouse1.style.transform="translate(-90px,-235px)";

setTimeout(() => {
Mouse1.querySelector(".cursor").classList.add("active");

setTimeout(() => {
Mouse1.querySelector(".cursor").classList.remove("active");
SideNavbar1.classList.remove("active");

setTimeout(() => {
Mouse1.style.transform="translate(-175px,-100px)";

setTimeout(() => {
Text1s[2].style.display="flex";
setTimeout(() => {
Mouse1.querySelector(".cursor").classList.add("active");

setTimeout(() => {
Mouse1.querySelector(".cursor").classList.remove("active");
Menu1s[1].classList.add("active");
ItemMenu1s[1].querySelector(".item-btn").classList.add("active");

setTimeout(() => {
Mouse1.style.transform="translate(-175px,-130px)";
Text1s[2].style.display="none";

setTimeout(() => {
Text1s[1].style.display="flex";

setTimeout(() => {
Mouse1.querySelector(".cursor").classList.add("active");

setTimeout(() => {
Mouse1.querySelector(".cursor").classList.remove("active");
Menu1s[0].classList.add("active");
ItemMenu1s[0].querySelector(".item-btn").classList.add("active");
Menu1s[1].classList.remove("active");
ItemMenu1s[1].querySelector(".item-btn").classList.remove("active");

setTimeout(() => {
Mouse1.style.transform="translate(-105px,-170px)";
Text1s[1].style.display="none";

setTimeout(() => {
Mouse1.querySelector(".cursor").classList.add("active");

setTimeout(() => {

Mouse1.querySelector(".cursor").classList.remove("active");
Menu1s[0].classList.remove("active");
ItemMenu1s[0].querySelector(".item-btn").classList.remove("active");

setTimeout(() => {
Mouse1.style.transform="translate(0px,0px)";
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

setTimeout(() => {Show1();},500);

setInterval(() => {Show1();},14000);


