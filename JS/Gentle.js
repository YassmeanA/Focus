const Iconb3s = document.querySelectorAll(".containerB5 .icon.A");
const iconb3s = document.querySelectorAll(".containerB5 .icon.B");
const Fillb3s = document.querySelectorAll(".containerB5 .fill");
const Textb3s = document.querySelectorAll(".containerB5 .icon.A span");
const Buttonb3 = document.querySelector(".containerB5 .icon.C");

const reset3 = () => {

path1.style.transition="0.5s cubic-bezier(0,0,0.5,2) 0.4s";
path1.style.strokeDashoffset="0";

plus.style.transition="0.5s cubic-bezier(0,0,0.5,1.5) 0.4s";
plus.style.transform="scale(1)";

path2.style.transition="0.5s cubic-bezier(0,0,0.5,2) 0.4s";
path2.style.strokeDashoffset="0";

}

var xb3 = 0;

//Click on items
const ICON1 = () => {

reset3();

path1.style.transition="0.3s cubic-bezier(0.5,-1,1,1)";
path1.style.strokeDashoffset="7";

if(xb3 == 2){
dot1.style.animation="Dots1 0.7s forwards";
dot2.style.animation="Dots1 0.7s forwards 0.1s";
dot3.style.animation="Dots1 0.7s forwards 0.2s";}

Textb3s[x].style.color="black";
Textb3s[0].style.color="#FF0099";

Fillb3s[x].style.animation="Hide 0.6s cubic-bezier(0.5,-0.5,1,1) forwards";
Fillb3s[0].style.animation="Gentle-Translate 1.6s forwards";

xb3 = 0;}

const ICON2 = () => {

reset3();

plus.style.transition="0.3s cubic-bezier(0.5,-0.5,1,1)";
plus.style.transform="scale(0)";

if(xb3 == 2){
dot1.style.animation="Dots1 0.7s forwards";
dot2.style.animation="Dots1 0.7s forwards 0.1s";
dot3.style.animation="Dots1 0.7s forwards 0.2s";}

Textb3s[x].style.color="black";
Textb3s[1].style.color="#FF0099";

Fillb3s[x].style.animation="Hide 0.6s cubic-bezier(0.5,-0.5,1,1) forwards";
Fillb3s[1].style.animation="Gentle-Translate 1.6s forwards";

xb3 = 1;}

const ICON3 = () => {

reset3();

dot1.style.animation="Dots 0.5s forwards";
dot2.style.animation="Dots 0.5s forwards 0.1s";
dot3.style.animation="Dots 0.5s forwards 0.2s";

Textb3s[x].style.color="black";
Textb3s[2].style.color="#FF0099";

Fillb3s[x].style.animation="Hide 0.6s cubic-bezier(0.5,-0.5,1,1) forwards";
Fillb3s[2].style.animation="Gentle-Translate 1.6s forwards";

xb3 = 2;}

const ICON4 = () => {

reset3();

path2.style.transition="0.3s cubic-bezier(0.5,-1,1,1)";
path2.style.strokeDashoffset="7";

if(xb3 == 2){
dot1.style.animation="Dots1 0.7s forwards";
dot2.style.animation="Dots1 0.7s forwards 0.1s";
dot3.style.animation="Dots1 0.7s forwards 0.2s";}

Textb3s[x].style.color="black";
Textb3s[3].style.color="#FF0099";

Fillb3s[x].style.animation="Hide 0.6s cubic-bezier(0.5,-0.5,1,1) forwards";
Fillb3s[3].style.animation="Gentle-Translate 1.6s forwards";

xb3 = 3;}

Iconb3s[0].addEventListener("click",ICON1);
Iconb3s[1].addEventListener("click",ICON2);
Iconb3s[2].addEventListener("click",ICON3);
Iconb3s[3].addEventListener("click",ICON4);


//Click on submenu btn
Buttonb3.addEventListener("click",()=> {

if(Buttonb3.classList.contains("active")){Close();}else{Open();}

});

const Open1 = () => {

Buttonb3.classList.add("active");

Buttonb3.style.transition="0.6s cubic-bezier(0,0,0.5,3)";
Buttonb3.style.transform="scale(1.2) translateY(4.15px)";

iconb3s[0].style.transition="0.6s cubic-bezier(0,0,0.5,1.5)";
iconb3s[0].style.transform="scale(1) translate(-80px,30px)";

iconb3s[1].style.transition="0.6s cubic-bezier(0,0,0.5,1.5) 0.05s";
iconb3s[1].style.transform="scale(1) translate(-30px,0px)";

iconb3s[2].style.transition="0.6s cubic-bezier(0,0,0.5,1.5) 0.1s";
iconb3s[2].style.transform="scale(1) translate(30px,0px)";

iconb3s[3].style.transition="0.6s cubic-bezier(0,0,0.5,1.5) 0.15s";
iconb3s[3].style.transform="scale(1) translate(80px, 30px)";

}

const Close1 = () => {

Buttonb3.classList.remove("active");

Buttonb3.style.transition="0.4s cubic-bezier(0.5,-2,1,1)";
Buttonb3.style.transform="scale(1) translateY(0px)";

iconb3s[0].style.transition="0.8s cubic-bezier(0.5,-0.5,1,1)";
iconb3s[0].style.transform="scale(0.5) translate(0px,130px)";

iconb3s[1].style.transition="0.8s cubic-bezier(0.5,-0.5,1,1) 0.05s";
iconb3s[1].style.transform="scale(0.5) translate(0px,130px)";

iconb3s[2].style.transition="0.8s cubic-bezier(0.5,-0.5,1,1) 0.1s";
iconb3s[2].style.transform="scale(0.5) translate(0px,130px)";

iconb3s[3].style.transition="0.8s cubic-bezier(0.5,-0.5,1,1) 0.15s";
iconb3s[3].style.transform="scale(0.5) translate(0px,130px)";

}

function ShowB5() {

setTimeout(ICON2,1000);
setTimeout(ICON3,2000);
setTimeout(ICON4,3000);
setTimeout(ICON1,4000);
setTimeout(Open1,5000);
setTimeout(Close1,6000);

}

ShowB5();

setInterval(ShowB5,7000);
