const Iconb1s = document.querySelectorAll(".containerB3 .icon");

Iconb1s.forEach((Icon,index)=>{
Iconb1s[index].addEventListener("click",() => {

document.querySelector(".containerB3 .icon.active").classList.remove("active");
Iconb1s[index].classList.add("active");

});});

function ShowB3() {

setTimeout(() => {Iconb1s[1].click();},1500);
setTimeout(() => {Iconb1s[2].click();},3000);
setTimeout(() => {Iconb1s[3].click();},4500);
setTimeout(() => {Iconb1s[0].click();},6000);

}

ShowB3();

setInterval(ShowB3,6000);
