const Iconb4s = document.querySelectorAll(".containerB6 .icon");

var xb4 = 1;

Iconb4s[0].addEventListener("click",() => {

document.querySelector(".containerB6 .icon.active").classList.remove("active");
Iconb4s[0].classList.add("active");

if(xb4 == 2){Indicator.style.animation="Gentle21 1s forwards";};
if(xb4 == 3){Indicator.style.animation="Gentle31 1s forwards";};
if(xb4 == 4){Indicator.style.animation="Gentle41 1.5s forwards";};
if(xb4 == 5){Indicator.style.animation="Gentle51 1.5s forwards";};

xb4 = 1;});

Iconb4s[1].addEventListener("click",() => {

document.querySelector(".containerB6 .icon.active").classList.remove("active");
Iconb4s[1].classList.add("active");

if(xb4 == 1){Indicator.style.animation="Gentle12 1s forwards";};
if(xb4 == 3){Indicator.style.animation="Gentle32 1s forwards";};
if(xb4 == 4){Indicator.style.animation="Gentle42 1s forwards";};
if(xb4 == 5){Indicator.style.animation="Gentle52 1.5s forwards";};

xb4 = 2;});

Iconb4s[2].addEventListener("click",() => {

document.querySelector(".containerB6 .icon.active").classList.remove("active");
Iconb4s[2].classList.add("active");

if(xb4 == 1){Indicator.style.animation="Gentle13 1s forwards";};
if(xb4 == 2){Indicator.style.animation="Gentle23 1s forwards";};
if(xb4 == 4){Indicator.style.animation="Gentle43 1s forwards";};
if(xb4 == 5){Indicator.style.animation="Gentle53 1s forwards";};

xb4 = 3;});

Iconb4s[3].addEventListener("click",() => {

document.querySelector(".containerB6 .icon.active").classList.remove("active");
Iconb4s[3].classList.add("active");

if(xb4 == 1){Indicator.style.animation="Gentle14 1.5s forwards";};
if(xb4 == 2){Indicator.style.animation="Gentle24 1s forwards";};
if(xb4 == 3){Indicator.style.animation="Gentle34 1s forwards";};
if(xb4 == 5){Indicator.style.animation="Gentle54 1s forwards";};

xb4 = 4;});

Iconb4s[4].addEventListener("click",() => {

document.querySelector(".containerB6 .icon.active").classList.remove("active");
Iconb4s[4].classList.add("active");

if(xb4 == 1){Indicator.style.animation="Gentle15 1.5s forwards";};
if(xb4 == 2){Indicator.style.animation="Gentle25 1.5s forwards";};
if(xb4 == 3){Indicator.style.animation="Gentle35 1s forwards";};
if(xb4 == 4){Indicator.style.animation="Gentle45 1s forwards";};

xb4 = 5;});

function ShowB6() {

setTimeout(() => {Iconb4s[1].click();},1200);
setTimeout(() => {Iconb4s[2].click();},2400);
setTimeout(() => {Iconb4s[3].click();},3600);
setTimeout(() => {Iconb4s[4].click();},4800);
setTimeout(() => {Iconb4s[0].click();},6000);

}

ShowB6();

setInterval(ShowB6,6000);
