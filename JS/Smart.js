const Mouse5 = document.querySelector(".container5S .mouse");
const ItemContainer5 = document.querySelector(".container5S .item-container");
const ItemList5 = document.querySelector(".container5S .item-list");
const Item5s = document.querySelectorAll(".container5S .item");
const Rect5s = document.querySelectorAll(".container5S svg rect");
const Lamp5s = document.querySelectorAll(".container5S .lighting .lamp");
const Preset5s = document.querySelectorAll(".container5S .presets .lamp");
const Detail5s = document.querySelector(".container5S .details");
const detail5s = document.querySelectorAll(".container5S .details-list");
const Power5s = document.querySelectorAll(".container5S .power");
const Toggle5s = document.querySelectorAll(".container5S .toggle");
const ControlButton5s = document.querySelectorAll(".container5S .control");
const ArirConditioner5s = document.querySelectorAll(".container5S .air-conditioner");
const Back5 = document.querySelector(".container5S .back");
const BACK5 = document.querySelector(".container5S .Back");
const Section5s = document.querySelectorAll(".container5S .Section");
const SectionContainer5 = document.querySelector(".container5S .section-container");
const SectionList5 = document.querySelector(".container5S .section-list");
const Slide5s = document.querySelectorAll(".container5S .slide");
const State5s = document.querySelectorAll(".container5S .X .text2");

function state() {

if(detail5s[0].querySelector(".tv .power").classList.contains("active")){
State5s[0].innerHTML="On";}else{State5s[0].innerHTML="Off";};

if(detail5s[1].querySelector(".air-conditioner .power").classList.contains("active")){
State5s[1].innerHTML="On";}else{State5s[1].innerHTML="Off";};

let isAnyLampActive1 = false;
detail5s[2].querySelectorAll(".lighting .lamp").forEach((Lamp,index) => {

if(Lamp.classList.contains("active")) {isAnyLampActive1 = true;}

});

State5s[2].innerHTML = isAnyLampActive1 ? "On" : "Off";

let isAnyLampActive2 = false;
detail5s[3].querySelectorAll(".lighting .lamp").forEach((Lamp,index) => {

if(Lamp.classList.contains("active")) {isAnyLampActive2 = true;}

});

State5s[3].innerHTML = isAnyLampActive2 ? "On" : "Off";

if(detail5s[4].querySelector(".microwave .power").classList.contains("active")){
State5s[4].innerHTML="On";}else{State5s[4].innerHTML="Off";};

if(detail5s[5].querySelector(".heater .power").classList.contains("active")){
State5s[5].innerHTML="On";}else{State5s[5].innerHTML="Off";};

}

state();


setTimeout(() => {SectionList5.classList.add("active");},5000);

Section5s.forEach((Section,index) => {

Section.style.animation=`Show 0.5s forwards ${index*0.1}s`;

Section.addEventListener("click",() => {

Section.classList.add("active");
setTimeout(() => {SectionContainer5.classList.remove("active");},300);

setTimeout(() => {
ItemContainer5.classList.add("active");
if(index === 0){ItemList5.classList.add("active");}else{Slide5s[index-1].classList.add("active");};
SectionList5.classList.remove("active");
},500);

});
});


let x;
let N;


detail5s.forEach(detail => {
detail.querySelectorAll('.section').forEach((el, i) => {
el.style.animation = `Show 1s cubic-bezier(0.5, 0.5, 0, 1) forwards ${i * 0.1}s`;
});
});


function Resize() {

document.querySelectorAll('.item').forEach((el, index) => {

N=2;
    
const delay = Math.floor(index / N) * 0.1;
el.style.animation = `Show 1s cubic-bezier(0.5, 0.5, 0, 1) forwards ${delay}s`;
    
});


{x = 3000/(window.innerWidth - 60);}

Rect5s.forEach(Rect => {
Rect.setAttribute("rx",`${x}`);
Rect.setAttribute("ry",`${x}`);
Rect.setAttribute("stroke-width",`${x/10}`);

});

}

Resize();

window.addEventListener("resize",Resize);

Item5s.forEach((Item,index) => {
Item.addEventListener("click",() => {

Item.classList.add("active");

setTimeout(() => {
ItemContainer5.classList.remove("active");
Item.classList.remove("active");
Detail5s.classList.add("active");
detail5s[index].classList.add("active");
setTimeout(() => {ItemList5.classList.remove("active");},300);
},800);

});});

BACK5.addEventListener("click",() => {

Slide5s.forEach(Slide => {Slide.classList.remove("active");});

ItemContainer5.classList.remove("active");

Section5s.forEach(Section => {Section.classList.remove("active");});
SectionContainer5.classList.add("active");
SectionList5.classList.add("active");
  
setTimeout(() => {ItemList5.classList.remove("active");},300);

});


Back5.addEventListener("click",() => {
state();
setTimeout(() => {
ItemContainer5.classList.add("active");
ItemList5.classList.add("active");
Detail5s.classList.remove("active");
detail5s.forEach(detail => {detail.classList.remove("active");});
},300);

});


Power5s.forEach(Power => {
Power.addEventListener("click",() => {

if(Power.classList.contains("active")){
Power.classList.remove("active");}
else{Power.classList.add("active");};

});});




// Temperature Control
ArirConditioner5s.forEach(AirConditioner => {

let count = 22;

AirConditioner.querySelector(".plus").addEventListener("click", () => {
  if (count >= 30) return;
  count++;
  AirConditioner.querySelector(".digital").innerHTML = count;
});

AirConditioner.querySelector(".minus").addEventListener("click", () => {
  if (count <= 16) return;
  count--;
  AirConditioner.querySelector(".digital").innerHTML = count;
});

});

document.querySelector(".container5S .section-container").classList.remove("active");
document.querySelector(".container5S .section-list").classList.remove("active");
document.querySelector(".container5S .logo").style.display="none";

function Show5() {

document.querySelector(".container5S .section-container").classList.add("active");
document.querySelector(".container5S .logo").style.display="flex";

setTimeout(() => {

document.querySelector(".container5S .section-list").classList.add("active");

Mouse5.style.transform="translate(-90px,-150px)";

setTimeout(() => {
Mouse5.querySelector(".cursor").classList.add("active");
Section5s[0].click();

setTimeout(() => {
Mouse5.querySelector(".cursor").classList.remove("active");

setTimeout(() => {

Mouse5.style.transform="translate(90px,-160px)";

setTimeout(() => {
Mouse5.querySelector(".cursor").classList.add("active");
Item5s[1].click();

setTimeout(() => {
Mouse5.querySelector(".cursor").classList.remove("active");
},600);

setTimeout(() => {

Mouse5.style.transform="translate(0,260px)";

setTimeout(() => {

Mouse5.style.transform="translate(0,10px)";
Detail5s.scrollTop = 250;

setTimeout(() => {

Mouse5.style.transform="translate(35px,-25px)";

setTimeout(() => {
Mouse5.querySelector(".cursor").classList.add("active");
ArirConditioner5s[2].querySelector(".minus").click();
ArirConditioner5s[2].querySelector(".minus").classList.add("active");

setTimeout(() => {
Mouse5.querySelector(".cursor").classList.remove("active");
ArirConditioner5s[2].querySelector(".minus").classList.remove("active");

},600);

setTimeout(() => {
Mouse5.querySelector(".cursor").classList.add("active");
ArirConditioner5s[2].querySelector(".minus").click();
ArirConditioner5s[2].querySelector(".minus").classList.add("active");
setTimeout(() => {
Mouse5.querySelector(".cursor").classList.remove("active");
ArirConditioner5s[2].querySelector(".minus").classList.remove("active");

},600);

setTimeout(() => {

Mouse5.style.transform="translate(-90px,160px)";

setTimeout(() => {
Mouse5.querySelector(".cursor").classList.add("active");
Power5s[4].click();

setTimeout(() => {
Mouse5.querySelector(".cursor").classList.remove("active");
},600);


setTimeout(() => {

Mouse5.style.transform="translate(0,-100px)";

setTimeout(() => {

Mouse5.style.transform="translate(0,100px)";
Detail5s.scrollTop = 0;

setTimeout(() => {

Mouse5.style.transform="translate(130px,-260px)";

setTimeout(() => {
Mouse5.querySelector(".cursor").classList.add("active");
Back5.classList.add("active");
Back5.click();

setTimeout(() => {
Mouse5.querySelector(".cursor").classList.remove("active");
Back5.classList.remove("active");

},600);

setTimeout(() => {
ArirConditioner5s[2].querySelector(".plus").click();
ArirConditioner5s[2].querySelector(".plus").click();
Power5s[4].click();
Mouse5.style.transform="translate(-80px,140px)";

setTimeout(() => {
Mouse5.querySelector(".cursor").classList.add("active");
Item5s[4].click();

setTimeout(() => {
Mouse5.querySelector(".cursor").classList.remove("active");
},600);

setTimeout(() => {

Mouse5.style.transform="translate(0,250px)";

setTimeout(() => {

Mouse5.style.transform="translate(0,-250px)";
Detail5s.scrollTop = 500;

setTimeout(() => {

Mouse5.style.transform="translate(0,-250px)";

setTimeout(() => {

Mouse5.style.transform="translate(0,250px)";
Detail5s.scrollTop = 0;

setTimeout(() => {

Mouse5.style.transform="translate(130px,-260px)";

setTimeout(() => {
Mouse5.querySelector(".cursor").classList.add("active");
Back5.classList.add("active");
Back5.click();

setTimeout(() => {
Mouse5.querySelector(".cursor").classList.remove("active");
Back5.classList.remove("active");

},600);

setTimeout(() => {
Mouse5.querySelector(".cursor").classList.add("active");
BACK5.classList.add("active");
BACK5.click();

setTimeout(() => {
Mouse5.querySelector(".cursor").classList.remove("active");
BACK5.classList.remove("active");

},600);

setTimeout(() => {

Mouse5.style.transform="translate(180px,50px)";
document.querySelector(".section-container").classList.remove("active");

setTimeout(() => {

document.querySelector(".section-list").classList.remove("active");
document.querySelector(".logo").style.display="none";

},100);

},1000);

},1500);

},500);
},600);

},500);
},600);

},800);
},1000);

},500);
},800);

},500);
},500);

},500);
},500);

},500);
},500);

},700);

},500);
},500);

},500);

},1000);

},500);
},500);

},600);

},500);

},5000);

}

Show5();
setInterval(() => {Show5();},23000);
