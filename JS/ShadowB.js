const Iconb2s = document.querySelectorAll(".containerB4 .icon");
const Textb2s = document.querySelectorAll(".containerB4 .text");


Iconb2s.forEach((Icon,index) => {

Iconb2s[index].addEventListener("click",() => {

document.querySelector(".containerB4 .icon.active").classList.remove("active");
Iconb2s[index].classList.add("active");

});});

function ShowB4() {

setTimeout(() => {Iconb2s[1].click();},1000);
setTimeout(() => {Iconb2s[2].click();},2000);
setTimeout(() => {Iconb2s[3].click();},3000);
setTimeout(() => {Iconb2s[4].click();},4000);
setTimeout(() => {Iconb2s[0].click();},5000);

}

ShowB4();

setInterval(ShowB4,5000);
