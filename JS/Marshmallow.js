const Iconas = document.querySelectorAll(".containerB7 .icon.A");
const Iconbs = document.querySelectorAll(".containerB7 .icon.B");
const Iconcs = document.querySelectorAll(".containerB7 .icon.C");
const ICONAs = document.querySelectorAll(".containerB7 .ICON");
const TextAs = document.querySelectorAll(".containerB7 .text");

var xb5 = 0;

// reset IconAs & IconBs & IconCs//
const reset = () => {
Iconcs.forEach((IconC, index) => {
Iconcs[index].style.bottom="0px",Iconcs[index].style.opacity="0";});

Iconbs.forEach((IconB, index) => {
Iconbs[index].style.bottom="0px",Iconbs[index].style.opacity="0";});

Iconas.forEach((IconA, index) => {
Iconas[index].style.bottom="0px",Iconas[index].style.opacity="1";}); };

const Icon111 = () => { 

indicator3.style.left="var(--i2)";
reset();
Iconas[0].style.bottom="-120px",Iconas[0].style.opacity="0";

document.querySelector(".text.active").classList.remove("active");
TextAs[0].classList.add("active");

// set the opacity & location of moving icons//
if(xb5 == 2){
Iconas[1].style.opacity="0",
Iconcs[1].style.opacity="1",Iconcs[1].style.bottom="140px";};

// ICONS //
ICONAs.forEach((ICON, index) => {
if(index != 0){ICONAs[index].style.bottom="-80px";};
ICONAs[0].style.bottom="18px";});

xb5 = 0;};

const Icon222 = () => {

indicator3.style.left="calc(var(--i2) + var(--i1))";
reset();
Iconas[1].style.bottom="-120px",Iconas[1].style.opacity="0";

document.querySelector(".text.active").classList.remove("active");
TextAs[1].classList.add("active");

// ICONS //
ICONAs.forEach((ICON, index) => {
if(index != 1){ICONAs[index].style.bottom="-80px";};
ICONAs[1].style.bottom="18px"; });

xb5 = 1;};

const Icon333 = () => {

indicator3.style.left="calc(var(--i2) + var(--i1)*2)";
reset();
Iconas[2].style.bottom="-120px",Iconas[2].style.opacity="0";

document.querySelector(".text.active").classList.remove("active");
TextAs[2].classList.add("active");

// set the opacity & location of moving icons//
if(xb5 == 0){
Iconas[1].style.opacity="0",
Iconbs[1].style.opacity="1",Iconbs[1].style.bottom="140px";};

// ICONS //
ICONAs.forEach((ICON, index) => {
if(index != 2){ICONAs[index].style.bottom="-80px";};
ICONAs[2].style.bottom="18px";});

xb5 = 2;};

Click31.addEventListener("click",Icon111);
Click32.addEventListener("click",Icon222);
Click33.addEventListener("click",Icon333);

function ShowB7() {

setTimeout(Icon222,1000);
setTimeout(Icon333,2000);
setTimeout(Icon111,3000);}

ShowB7();

setInterval(ShowB7,3000);
