
let a = 1;

const S1 = document.querySelector(".container6 #S1")
const S2 = document.querySelector(".container6 #S2")
const S3 = document.querySelector(".container6 #S3")

const Slide1 = () => {

S2.classList.remove("active");
S3.classList.remove("active");
S1.classList.add("active");


if(a == 2){
S1.style.animation="Gentle31 1.5s forwards";
S2.style.animation="Gentle12 1.5s forwards",
S3.style.animation="Gentle23 1.5s forwards";};

if(a == 3){
S1.style.animation="Gentle21 1.5s forwards";
S2.style.animation="Gentle32 1.5s forwards",
S3.style.animation="Gentle13 1.5s forwards";};

a = 1;};

const Slide2 = () => {

S1.classList.remove("active");
S3.classList.remove("active");
S2.classList.add("active");

if(a == 1){
S2.style.animation="Gentle21 1.5s forwards";
S1.style.animation="Gentle13 1.5s forwards",
S3.style.animation="Gentle32 1.5s forwards";};

if(a == 3){
S2.style.animation="Gentle31 1.5s forwards";
S1.style.animation="Gentle23 1.5s forwards",
S3.style.animation="Gentle12 1.5s forwards";};

a = 2;};

const Slide3 = () => {

S1.classList.remove("active");
S2.classList.remove("active");
S3.classList.add("active");

if(a == 1){
S3.style.animation="Gentle31 1.5s forwards";
S1.style.animation="Gentle12 1.5s forwards",
S2.style.animation="Gentle23 1.5s forwards";};

if(a == 2){
S3.style.animation="Gentle21 1.5s forwards";
S1.style.animation="Gentle32 1.5s forwards",
S2.style.animation="Gentle13 1.5s forwards";};

a = 3;};

setTimeout(() => {Slide2();},1500);
setTimeout(() => {Slide3();},3000);
setTimeout(() => {Slide1();},4500);

setInterval(() => {

setTimeout(() => {Slide2();},1500);
setTimeout(() => {Slide3();},3000);
setTimeout(() => {Slide1();},4500);

},4500);
