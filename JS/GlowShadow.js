const Arrow = document.querySelector(".container1S .Arrow");
const SideNavbar = document.querySelector(".container1S .side-navbar");
const ItemBtns = document.querySelectorAll(".container1S .item-btn.N");
const ItemMenus = document.querySelectorAll(".container1S .item.menu");
const MenuItemAs = document.querySelectorAll(".container1S .menu-item.A");
const MenuItemBs = document.querySelectorAll(".container1S .menu-item.B");
const Menus = document.querySelectorAll(".container1S .Menu");
const Texts = document.querySelectorAll(".container1S .item .text");
const Items = document.querySelectorAll(".container1S .item-btn");
const Mouse = document.querySelector(".container1S .mouse");


//Activate & Deactivate Side Navbar
Arrow.addEventListener("click",() => {

if(SideNavbar.classList.contains("active")){

SideNavbar.classList.remove("active");

}else{SideNavbar.classList.add("active");

};

ItemMenus.forEach(ItemMenu => {
ItemMenu.querySelector(".item-btn").classList.remove("active");
ItemMenu.classList.remove("active");});

Menus.forEach(Menu => {
Menu.classList.remove("active");});

});


function Show1() {

Mouse.style.transform="translate(-155px,-235px)";
setTimeout(() => {
Mouse.querySelector(".cursor").classList.add("active");
setTimeout(() => {Arrow.click();Mouse.querySelector(".cursor").classList.remove("active");
},300);

setTimeout(() => {

Mouse.style.transform="translate(-110px,-130px)";

setTimeout(() => {

Mouse.querySelector(".cursor").classList.add("active");

setTimeout(() => {
Mouse.querySelector(".cursor").classList.remove("active");

ItemMenus[0].classList.add("active");
ItemMenus[0].querySelector(".item-btn").classList.add("active");

setTimeout(() => {
Mouse.style.transform="translate(-110px,10px)";

setTimeout(() => {
Mouse.querySelector(".cursor").classList.add("active");

setTimeout(() => {
Mouse.querySelector(".cursor").classList.remove("active");
ItemMenus[0].classList.remove("active");
ItemMenus[0].querySelector(".item-btn").classList.remove("active");

ItemMenus[1].classList.add("active");
ItemMenus[1].querySelector(".item-btn").classList.add("active");

setTimeout(() => {
Mouse.style.transform="translate(-110px,-100px)";

setTimeout(() => {
Mouse.querySelector(".cursor").classList.add("active");

setTimeout(() => {
Mouse.querySelector(".cursor").classList.remove("active");
ItemMenus[1].classList.remove("active");
ItemMenus[1].querySelector(".item-btn").classList.remove("active");

setTimeout(() => {
Mouse.style.transform="translate(-90px,-235px)";

setTimeout(() => {
Mouse.querySelector(".cursor").classList.add("active");

setTimeout(() => {
Mouse.querySelector(".cursor").classList.remove("active");
Arrow.click();


setTimeout(() => {
Mouse.style.transform="translate(-175px,-100px)";

setTimeout(() => {
Texts[2].style.display="flex";
setTimeout(() => {
Mouse.querySelector(".cursor").classList.add("active");

setTimeout(() => {
Mouse.querySelector(".cursor").classList.remove("active");
Menus[1].classList.add("active");
ItemMenus[1].querySelector(".item-btn").classList.add("active");

setTimeout(() => {
Mouse.style.transform="translate(-175px,-130px)";
Texts[2].style.display="none";

setTimeout(() => {
Texts[1].style.display="flex";

setTimeout(() => {
Mouse.querySelector(".cursor").classList.add("active");

setTimeout(() => {
Mouse.querySelector(".cursor").classList.remove("active");
Menus[0].classList.add("active");
ItemMenus[0].querySelector(".item-btn").classList.add("active");
Menus[1].classList.remove("active");
ItemMenus[1].querySelector(".item-btn").classList.remove("active");

setTimeout(() => {
Mouse.style.transform="translate(-105px,-170px)";
Texts[1].style.display="none";

setTimeout(() => {
Mouse.querySelector(".cursor").classList.add("active");

setTimeout(() => {

Mouse.querySelector(".cursor").classList.remove("active");
Menus[0].classList.remove("active");
ItemMenus[0].querySelector(".item-btn").classList.remove("active");

setTimeout(() => {
Mouse.style.transform="translate(0px,0px)";
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

setInterval(() => {Show1();},14500);


