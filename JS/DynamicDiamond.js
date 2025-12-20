const Icon2As = document.querySelectorAll(".containerB2 .icon.A");
const Icon2Bs = document.querySelectorAll(".containerB2 .icon.B");
const Icon2Cs = document.querySelectorAll(".containerB2 .icon.C");
const ICON2s = document.querySelectorAll(".containerB2 .ICON");

var xb2 = 0;

// reset Icon2As & Icon2Bs & Icon2Cs//
const reset2 = () => {

Icon2Cs.forEach((IconC, index) => {
Icon2Cs[index].style.bottom="0px",Icon2Cs[index].style.opacity="0";});

Icon2Bs.forEach((IconB, index) => {
Icon2Bs[index].style.bottom="0px",Icon2Bs[index].style.opacity="0";});

Icon2As.forEach((IconA, index) => {
Icon2As[index].style.bottom="0px",Icon2As[index].style.opacity="1";});

};

const Icon21 = () => { 

indicator2.style.left="0px";
reset2();
Icon2As[0].style.bottom="-120px",Icon2As[0].style.opacity="0";

// set the opacity & location of moving icons//
if(xb2 == 2){
Icon2As[1].style.opacity="0",
Icon2Cs[1].style.opacity="1",Icon2Cs[1].style.bottom="140px";};

if(xb2 == 3){
Icon2As[1].style.opacity="0",Icon2As[2].style.opacity="0",
Icon2Cs[1].style.opacity="1",Icon2Cs[1].style.bottom="140px",
Icon2Cs[2].style.opacity="1",Icon2Cs[2].style.bottom="140px";};

if(xb2 == 4){
Icon2As[1].style.opacity="0",Icon2As[2].style.opacity="0",Icon2As[3].style.opacity="0",
Icon2Cs[1].style.opacity="1",Icon2Cs[1].style.bottom="140px",
Icon2Cs[2].style.opacity="1",Icon2Cs[2].style.bottom="140px",
Icon2Cs[3].style.opacity="1",Icon2Cs[3].style.bottom="140px";};

// ICONS //
ICON2s.forEach((ICON, index) => {
if(index != 0){ICON2s[index].style.bottom="-80px";};
ICON2s[0].style.bottom="11px";});

// trim path animation //
Sb1.style.animation="trim 0.9s forwards",Sb2.style.animation="trim 0.9s forwards", Sb3.style.animation="trim 1s forwards", Sb4.style.animation="trim 1s forwards";
Db3.style.animation="d6 1s forwards",Db2.style.animation="d5 1s forwards",Db1.style.animation="d4 1s forwards",Lb3.style.animation="trim2 1s forwards",Lb2.style.animation="trim2 1s forwards",Lb1.style.animation="trim2 1s forwards";
Ab1.style.animation="trim2 1s forwards",Ab2.style.animation="trim2 1s forwards",Ab3.style.animation="trim2 1s forwards",Ab4.style.animation="trim2 1s forwards",Ab5.style.animation="trim2 1s forwards",Ab6.style.animation="trim2 1s forwards";
Bb1.style.animation="trim2 1s forwards",Bb2.style.animation="trim2 1s forwards",Bb3.style.animation="trim2 1s forwards",Bb4.style.animation="trim2 1s forwards";
Pb1.style.animation="trim2 1s forwards",Pb2.style.animation="trim2 1s forwards",Pb3.style.animation="trim2 1s forwards",Pb4.style.animation="trim2 1s forwards";

xb2 = 0;};

const Icon22 = () => {

indicator2.style.left="var(--i)";
reset2();
Icon2As[1].style.bottom="-120px",Icon2As[1].style.opacity="0";

// set the opacity & location of moving icons//
if(xb2 == 3){
Icon2As[2].style.opacity="0",
Icon2Cs[2].style.opacity="1",Icon2Cs[2].style.bottom="140px";};

if(xb2 == 4){
Icon2As[2].style.opacity="0",Icon2As[3].style.opacity="0",
Icon2Cs[2].style.opacity="1",Icon2Cs[2].style.bottom="140px",
Icon2Cs[3].style.opacity="1",Icon2Cs[3].style.bottom="140px";};

// ICONS //
ICON2s.forEach((ICON, index) => {
if(index != 1){ICON2s[index].style.bottom="-80px";};
ICON2s[1].style.bottom="11px"; });

// trim path animation //
Db3.style.animation="d3 0.8s forwards 0.2s",Db2.style.animation="d2 0.8s forwards 0.1s",Db1.style.animation="d1 0.8s forwards 0s",Lb3.style.animation="trim1 2s forwards 0.2s",Lb2.style.animation="trim1 2s forwards 0.1s",Lb1.style.animation="trim1 2s forwards 0s";
Ab1.style.animation="trim2 1s forwards",Ab2.style.animation="trim2 1s forwards",Ab3.style.animation="trim2 1s forwards",Ab4.style.animation="trim2 1s forwards",Ab5.style.animation="trim2 1s forwards",Ab6.style.animation="trim2 1s forwards";
Bb1.style.animation="trim2 1s forwards",Bb2.style.animation="trim2 1s forwards",Bb3.style.animation="trim2 1s forwards",Bb4.style.animation="trim2 1s forwards";
Sb1.style.animation="trim2 1s forwards",Sb2.style.animation="trim2 1s forwards",Sb3.style.animation="trim2 1s forwards", Sb4.style.animation="trim2 1s forwards";
Pb1.style.animation="trim2 1s forwards",Pb2.style.animation="trim2 1s forwards",Pb3.style.animation="trim2 1s forwards",Pb4.style.animation="trim2 1s forwards";

xb2 = 1;};

const Icon23 = () => {

indicator2.style.left="calc(var(--i) * 2)";
reset2();
Icon2As[2].style.bottom="-120px",Icon2As[2].style.opacity="0";

// set the opacity & location of moving icons//
if(xb2 == 0){
Icon2As[1].style.opacity="0",
Icon2Bs[1].style.opacity="1",Icon2Bs[1].style.bottom="140px";};

if(xb2 == 4){
Icon2As[3].style.opacity="0",
Icon2Cs[3].style.opacity="1",Icon2Cs[3].style.bottom="140px";};

// ICONS //
ICON2s.forEach((ICON, index) => {
if(index != 2){ICON2s[index].style.bottom="-80px";};
ICON2s[2].style.bottom="11px";});

// trim path animation //
Pb1.style.animation="trim 1.2s forwards",Pb2.style.animation="trim 1.2s forwards",Pb3.style.animation="trim 1.2s forwards",Pb4.style.animation="trim 1.2s forwards";
Db3.style.animation="d6 1s forwards",Db2.style.animation="d5 1s forwards",Db1.style.animation="d4 1s forwards",Lb3.style.animation="trim2 1s forwards",Lb2.style.animation="trim2 1s forwards",Lb1.style.animation="trim2 1s forwards";
Ab1.style.animation="trim2 1s forwards",Ab2.style.animation="trim2 1s forwards",Ab3.style.animation="trim2 1s forwards",Ab4.style.animation="trim2 1s forwards",Ab5.style.animation="trim2 1s forwards",Ab6.style.animation="trim2 1s forwards";
Bb1.style.animation="trim2 1s forwards",Bb2.style.animation="trim2 1s forwards",Bb3.style.animation="trim2 1s forwards",Bb4.style.animation="trim2 1s forwards";
Sb1.style.animation="trim2 1s forwards",Sb2.style.animation="trim2 1s forwards",Sb3.style.animation="trim2 1s forwards", Sb4.style.animation="trim2 1s forwards";

xb2 = 2;};

const Icon24 = () => {

indicator2.style.left="calc(var(--i) * 3)";
reset2();
Icon2As[3].style.bottom="-120px",Icon2As[3].style.opacity="0";

// set the opacity & location of moving icons//
if(xb2 == 0){
Icon2As[1].style.opacity="0",Icon2As[2].style.opacity="0",
Icon2Bs[1].style.opacity="1",Icon2Bs[1].style.bottom="140px",
Icon2Bs[2].style.opacity="1",Icon2Bs[2].style.bottom="140px";};

if(xb2 == 1){
Icon2As[2].style.opacity="0",
Icon2Bs[2].style.opacity="1",Icon2Bs[2].style.bottom="140px";};

// ICONS //
ICON2s.forEach((ICON, index) => {
if(index != 3){ICON2s[index].style.bottom="-80px";};
ICON2s[3].style.bottom="11px";});

// trim path animation //
Ab1.style.animation="trim 1s forwards",Ab2.style.animation="trim 1s forwards",Ab3.style.animation="trim 1s forwards",Ab4.style.animation="trim 1s forwards",Ab5.style.animation="trim 1s forwards",Ab6.style.animation="trim 1s forwards";
Db3.style.animation="d6 1s forwards",Db2.style.animation="d5 1s forwards",Db1.style.animation="d4 1s forwards",Lb3.style.animation="trim2 1s forwards",Lb2.style.animation="trim2 1s forwards",Lb1.style.animation="trim2 1s forwards";
Bb1.style.animation="trim2 1s forwards",Bb2.style.animation="trim2 1s forwards",Bb3.style.animation="trim2 1s forwards",Bb4.style.animation="trim2 1s forwards";
Pb1.style.animation="trim2 1s forwards",Pb2.style.animation="trim2 1s forwards",Pb3.style.animation="trim2 1s forwards",Pb4.style.animation="trim2 1s forwards";
Sb1.style.animation="trim2 1s forwards",Sb2.style.animation="trim2 1s forwards",Sb3.style.animation="trim2 1s forwards", Sb4.style.animation="trim2 1s forwards";

xb2 = 3;};

const Icon25 = () => {

indicator2.style.left="calc(var(--i) * 4)";
reset2();
Icon2As[4].style.bottom="-120px",Icon2As[4].style.opacity="0";

// set the opacity & location of moving icons//
if(xb2 == 0){
Icon2As[1].style.opacity="0",Icon2As[2].style.opacity="0",Icon2As[3].style.opacity="0",
Icon2Bs[1].style.opacity="1",Icon2Bs[1].style.bottom="140px",
Icon2Bs[2].style.opacity="1",Icon2Bs[2].style.bottom="140px",
Icon2Bs[3].style.opacity="1",Icon2Bs[3].style.bottom="140px";};

if(xb2 == 1){
Icon2As[2].style.opacity="0",Icon2As[3].style.opacity="0",
Icon2Bs[2].style.opacity="1",Icon2Bs[2].style.bottom="140px",
Icon2Bs[3].style.opacity="1",Icon2Bs[3].style.bottom="140px";};

if(xb2 == 2){
Icon2As[3].style.opacity="0",
Icon2Bs[3].style.opacity="1",Icon2Bs[3].style.bottom="140px";};

// ICONS //
ICON2s.forEach((ICON, index) => {
if(index != 4){ICON2s[index].style.bottom="-80px";};
ICON2s[4].style.bottom="11px";});

// trim path animation //
Bb1.style.animation="trim 1.5s forwards",Bb2.style.animation="trim 2s forwards",Bb3.style.animation="trim 1.5s forwards", Bb4.style.animation="trim 2s forwards";
Db3.style.animation="d6 1s forwards",Db2.style.animation="d5 1s forwards",Db1.style.animation="d4 1s forwards",Lb3.style.animation="trim2 1s forwards",Lb2.style.animation="trim2 1s forwards",Lb1.style.animation="trim2 1s forwards";
Ab1.style.animation="trim2 1s forwards",Ab2.style.animation="trim2 1s forwards",Ab3.style.animation="trim2 1s forwards",Ab4.style.animation="trim2 1s forwards",Ab5.style.animation="trim2 1s forwards",Ab6.style.animation="trim2 1s forwards";
Pb1.style.animation="trim2 1s forwards",Pb2.style.animation="trim2 1s forwards",Pb3.style.animation="trim2 1s forwards",Pb4.style.animation="trim2 1s forwards";
Sb1.style.animation="trim2 1s forwards",Sb2.style.animation="trim2 1s forwards",Sb3.style.animation="trim2 1s forwards", Sb4.style.animation="trim2 1s forwards";

xb2 = 4;};

Click21.addEventListener("click",Icon21);
Click22.addEventListener("click",Icon22);
Click23.addEventListener("click",Icon23);
Click24.addEventListener("click",Icon24);
Click25.addEventListener("click",Icon25);

function ShowB2() {

setTimeout(Icon22,1000);
setTimeout(Icon23,2000);
setTimeout(Icon24,3000);
setTimeout(Icon25,4000);
setTimeout(Icon23,5000);
setTimeout(Icon21,6000);
setTimeout(Icon23,7000);
setTimeout(Icon25,8000);
setTimeout(Icon21,9000);
setTimeout(Icon25,10000);
setTimeout(Icon21,11000);

}

ShowB2();

setInterval(ShowB2,12000);

