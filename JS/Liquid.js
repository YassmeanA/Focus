const Add = document.querySelector(".containerB8 .icon.Add");
const Circles = document.querySelectorAll(".containerB8 .circle");
const Iconb6s = document.querySelectorAll(".containerB8 .Icon");

//Click on Add btn
Add.addEventListener("click", () => {

if(Add.classList.contains("active")){

Add.classList.remove("active");Close();}

else{Add.classList.add("active");Open();};});

//Open & Close Submenu
const Open = () => {

Submenu.style.animation="X1 0.2s ease-out forwards , X2 0.5s ease-out forwards 0.2s",
Shadow.classList.add("active");

Liquid.style.transition="0.71s 0.2s",
Liquid.style.clipPath="path('M6.74831e-06 60C6.74831e-06 93.4277 51.8566 110 127.276 110C202.695 110 250 93.4277 250 60C250 26.5722 202.695 10 127.276 10C51.8566 10 6.74831e-06 26.5722 6.74831e-06 60Z')",

Drip1.style.transition="all 0.7s 0.2s, opacity 0s",
Drip1.style.d="path('M102 59.9996C102 72.4258 112.204 82.4992 124.883 82.4992C137.561 82.4992 147 72.4258 147 59.9996C147 47.5734 137.561 37.5 124.883 37.5C112.204 37.5 102 47.5734 102 59.9996Z')",

Drip2.style.transition="all 0.7s 0.2s, opacity 0s",
Drip2.style.d="path('M243 60C243 72.4264 232.074 82.5 219.951 82.5C207.827 82.5 198 72.4264 198 60C198 47.5736 207.827 37.5 219.951 37.5C232.074 37.5 243 47.5736 243 60Z')",

Drip3.style.transition="all 0.7s 0.2s, opacity 0s",
Drip3.style.d="path('M52 59.9996C52 72.4258 41.9266 82.4992 29.5001 82.4992C17.0736 82.4992 7 72.4258 7 59.9996C7 47.5734 17.0736 37.5 29.5001 37.5C41.9266 37.5 52 47.5734 52 59.9996Z')",

setTimeout(() => {

Iconb6s.forEach(Icon => {Icon.style.display="flex";});

Drip1.style.transition="all 0.3s, opacity 0s",
Drip1.style.d="path('M124 60C124 60.2761 124.227 60.5 124.508 60.5C124.79 60.5 125 60.2761 125 60C125 59.7239 124.79 59.5 124.508 59.5C124.227 59.5 124 59.7239 124 60Z')",

Drip2.style.transition="all 0.3s, opacity 0s",
Drip2.style.d="path('M221 60C221 60.2761 220.757 60.5 220.488 60.5C220.218 60.5 220 60.2761 220 60C220 59.7239 220.218 59.5 220.488 59.5C220.757 59.5 221 59.7239 221 60Z')",

Drip3.style.transition="all 0.3s, opacity 0s",
Drip3.style.d="path('M30 60C30 60.2761 29.7761 60.5 29.5 60.5C29.2239 60.5 29 60.2761 29 60C29 59.7239 29.2239 59.5 29.5 59.5C29.7761 59.5 30 59.7239 30 60Z')";

Shadow.classList.remove("active");

setTimeout(() => {

Drip1.style.opacity="0";
Drip2.style.opacity="0";
Drip3.style.opacity="0";

},300);

},800);

Add.style.animation="Button 0.7s forwards";
Plus.style.animation="Plus 0.7s forwards";

}

const Close = () => {

Drip1.style.opacity="1";
Drip2.style.opacity="1";
Drip3.style.opacity="1";

setTimeout(() => {

Iconb6s.forEach(Icon => {Icon.style.display="none";});
  
Submenu.style.animation="X4 0.5s ease-out forwards , X3 0.3s ease-out forwards 0.5s";},300);

Liquid.style.transition="0.5s 0.4s",
Liquid.style.clipPath="path('M113.5 60.4998C113.5 66.5748 118.489 71.4996 124.687 71.4996C130.885 71.4996 135.5 66.5748 135.5 60.4998C135.5 54.4248 130.885 49.5 124.687 49.5C118.489 49.5 113.5 54.4248 113.5 60.4998Z')",

Drip1.style.transition="all 0.4s, opacity 0s",
Drip1.style.d="path('M102 59.9996C102 72.4258 112.204 82.4992 124.883 82.4992C137.561 82.4992 147 72.4258 147 59.9996C147 47.5734 137.561 37.5 124.883 37.5C112.204 37.5 102 47.5734 102 59.9996Z')",

Drip2.style.transition="all 0.4s, opacity 0s",
Drip2.style.d="path('M243 60C243 72.4264 232.074 82.5 219.951 82.5C207.827 82.5 198 72.4264 198 60C198 47.5736 207.827 37.5 219.951 37.5C232.074 37.5 243 47.5736 243 60Z')",

Drip3.style.transition="all 0.4s, opacity 0s",
Drip3.style.d="path('M52 59.9996C52 72.4258 41.9266 82.4992 29.5001 82.4992C17.0736 82.4992 7 72.4258 7 59.9996C7 47.5734 17.0736 37.5 29.5001 37.5C41.9266 37.5 52 47.5734 52 59.9996Z')",

setTimeout(() => {

Drip1.style.transition="all 0.6s, opacity 0s",
Drip1.style.d="path('M62.0009 60.2099C62.0009 75.0584 88.04 82.4198 125.911 82.4198C163.781 82.4198 187.535 75.0584 187.535 60.2099C187.535 45.3614 163.781 38 125.911 38C88.04 38 62.0009 45.3614 62.0009 60.2099Z')",

Drip2.style.transition="all 0.6s, opacity 0s",
Drip2.style.d="path('M136.739 60.7884C136.739 73.0548 125.954 82.9987 113.987 82.9987C102.019 82.9987 63.3496 73.0548 63.3496 60.7884C63.3496 48.522 102.019 38.5781 113.987 38.5781C125.954 38.5781 136.739 48.522 136.739 60.7884Z')",

Drip3.style.transition="all 0.6s, opacity 0s",
Drip3.style.d="path('M186.184 60.2099C186.184 72.4761 147.271 82.4198 135.005 82.4198C122.739 82.4198 112.795 72.4761 112.795 60.2099C112.795 47.9437 122.739 38 135.005 38C147.271 38 186.184 47.9437 186.184 60.2099Z')";

},400);

setTimeout(() => {
Shadow.classList.remove("active");},800)

Shadow.classList.add("active");
Add.style.animation="Button1 0.7s forwards";
Plus.style.animation="Plus1 0.7s forwards";

}


function ShowB8() {

setTimeout(Open,1000);
setTimeout(Close,3000);

}

ShowB8();

setInterval(ShowB8,5000);
