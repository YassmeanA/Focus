const Icon1As = document.querySelectorAll(".containerB1 .icon.A");
const Icon1Bs = document.querySelectorAll(".containerB1 .icon.B");
const Icon1Cs = document.querySelectorAll(".containerB1 .icon.C");
const ICON1s = document.querySelectorAll(".containerB1 .ICON");

var xb1 = 0;

// reset Icon1As & Icon1Bs & Icon1Cs//
const reset1 = () => {
Icon1Cs.forEach((Icon1C, index) => {
Icon1Cs[index].style.bottom="0px",Icon1Cs[index].style.opacity="0";});

Icon1Bs.forEach((Icon1B, index) => {
Icon1Bs[index].style.bottom="0px",Icon1Bs[index].style.opacity="0";});

Icon1As.forEach((Icon1A, index) => {
Icon1As[index].style.bottom="0px",Icon1As[index].style.opacity="1";}); };

const Icon11 = () => { 

indicator1.style.left="0px";
reset1();
Icon1As[0].style.bottom="-120px",Icon1As[0].style.opacity="0";

// set the opacity & location of moving icons//
if(xb1 == 2){
Icon1As[1].style.opacity="0",
Icon1Cs[1].style.opacity="1",Icon1Cs[1].style.bottom="140px";};

if(xb1 == 3){
Icon1As[1].style.opacity="0",Icon1As[2].style.opacity="0",
Icon1Cs[1].style.opacity="1",Icon1Cs[1].style.bottom="140px",
Icon1Cs[2].style.opacity="1",Icon1Cs[2].style.bottom="140px";};

if(xb1 == 4){
Icon1As[1].style.opacity="0",Icon1As[2].style.opacity="0",Icon1As[3].style.opacity="0",
Icon1Cs[1].style.opacity="1",Icon1Cs[1].style.bottom="140px",
Icon1Cs[2].style.opacity="1",Icon1Cs[2].style.bottom="140px",
Icon1Cs[3].style.opacity="1",Icon1Cs[3].style.bottom="140px";};

// ICONS //
ICON1s.forEach((ICON, index) => {
if(index != 0){ICON1s[index].style.bottom="-80px";};
ICON1s[0].style.bottom="6px";});

// trim path animation //
Sa1.style.animation="trim 0.9s forwards",Sa2.style.animation="trim 0.9s forwards", Sa3.style.animation="trim 1s forwards", Sa4.style.animation="trim 1s forwards";
Da3.style.animation="d6 1s forwards",Da2.style.animation="d5 1s forwards",Da1.style.animation="d4 1s forwards",La3.style.animation="trim2 1s forwards",La2.style.animation="trim2 1s forwards",La1.style.animation="trim2 1s forwards";
Aa1.style.animation="trim2 1s forwards",Aa2.style.animation="trim2 1s forwards",Aa3.style.animation="trim2 1s forwards",Aa4.style.animation="trim2 1s forwards", Aa5.style.animation="trim2 1s forwards",Aa6.style.animation="trim2 1s forwards";
Ba1.style.animation="trim2 1s forwards",Ba2.style.animation="trim2 1s forwards",Ba3.style.animation="trim2 1s forwards",Ba4.style.animation="trim2 1s forwards";
Pa1.style.animation="trim2 1s forwards",Pa2.style.animation="trim2 1s forwards",Pa3.style.animation="trim2 1s forwards",Pa4.style.animation="trim2 1s forwards";

xb1 = 0;};

const Icon12 = () => {

indicator1.style.left="var(--i)";
reset1();
Icon1As[1].style.bottom="-120px",Icon1As[1].style.opacity="0";

// set the opacity & location of moving icons//
if(xb1 == 3){
Icon1As[2].style.opacity="0",
Icon1Cs[2].style.opacity="1",Icon1Cs[2].style.bottom="140px";};

if(xb1 == 4){
Icon1As[2].style.opacity="0",Icon1As[3].style.opacity="0",
Icon1Cs[2].style.opacity="1",Icon1Cs[2].style.bottom="140px",
Icon1Cs[3].style.opacity="1",Icon1Cs[3].style.bottom="140px";};

// ICONS //
ICON1s.forEach((ICON, index) => {
if(index != 1){ICON1s[index].style.bottom="-80px";};
ICON1s[1].style.bottom="6px";});

// trim path animation //
Da3.style.animation="d3 0.8s forwards 0.2s",Da2.style.animation="d2 0.8s forwards 0.1s",Da1.style.animation="d1 0.8s forwards 0s",La3.style.animation="trim1 2s forwards 0.2s",La2.style.animation="trim1 2s forwards 0.1s",La1.style.animation="trim1 2s forwards 0s";
Aa1.style.animation="trim2 1s forwards",Aa2.style.animation="trim2 1s forwards",Aa3.style.animation="trim2 1s forwards",Aa4.style.animation="trim2 1s forwards",Aa5.style.animation="trim2 1s forwards",Aa6.style.animation="trim2 1s forwards";
Ba1.style.animation="trim2 1s forwards",Ba2.style.animation="trim2 1s forwards",Ba3.style.animation="trim2 1s forwards",Ba4.style.animation="trim2 1s forwards";
Sa1.style.animation="trim2 1s forwards",Sa2.style.animation="trim2 1s forwards",Sa3.style.animation="trim2 1s forwards",Sa4.style.animation="trim2 1s forwards";
Pa1.style.animation="trim2 1s forwards",Pa2.style.animation="trim2 1s forwards",Pa3.style.animation="trim2 1s forwards",Pa4.style.animation="trim2 1s forwards";

xb1 = 1;};

const Icon13 = () => {

indicator1.style.left="calc(var(--i) * 2)";
reset1();
Icon1As[2].style.bottom="-120px",Icon1As[2].style.opacity="0";

// set the opacity & location of moving icons//
if(xb1 == 0){
Icon1As[1].style.opacity="0",
Icon1Bs[1].style.opacity="1",Icon1Bs[1].style.bottom="140px";};

if(xb1 == 4){
Icon1As[3].style.opacity="0",
Icon1Cs[3].style.opacity="1",Icon1Cs[3].style.bottom="140px";};

// ICONS //
ICON1s.forEach((ICON, index) => {
if(index != 2){ICON1s[index].style.bottom="-80px";};
ICON1s[2].style.bottom="6px";});

// trim path animation //
Pa1.style.animation="trim 1.2s forwards",Pa2.style.animation="trim 1.2s forwards",Pa3.style.animation="trim 1.2s forwards",Pa4.style.animation="trim 1.2s forwards";
Da3.style.animation="d6 1s forwards",Da2.style.animation="d5 1s forwards",Da1.style.animation="d4 1s forwards",La3.style.animation="trim2 1s forwards",La2.style.animation="trim2 1s forwards",La1.style.animation="trim2 1s forwards";
Aa1.style.animation="trim2 1s forwards",Aa2.style.animation="trim2 1s forwards",Aa3.style.animation="trim2 1s forwards",Aa4.style.animation="trim2 1s forwards",Aa5.style.animation="trim2 1s forwards",Aa6.style.animation="trim2 1s forwards";
Ba1.style.animation="trim2 1s forwards",Ba2.style.animation="trim2 1s forwards",Ba3.style.animation="trim2 1s forwards",Ba4.style.animation="trim2 1s forwards";
Sa1.style.animation="trim2 1s forwards",Sa2.style.animation="trim2 1s forwards",Sa3.style.animation="trim2 1s forwards",Sa4.style.animation="trim2 1s forwards";

xb1 = 2;};

const Icon14 = () => {

indicator1.style.left="calc(var(--i) * 3)";
reset1();
Icon1As[3].style.bottom="-120px",Icon1As[3].style.opacity="0";

// set the opacity & location of moving icons//
if(xb1 == 0){
Icon1As[1].style.opacity="0",Icon1As[2].style.opacity="0",
Icon1Bs[1].style.opacity="1",Icon1Bs[1].style.bottom="140px",
Icon1Bs[2].style.opacity="1",Icon1Bs[2].style.bottom="140px";};

if(xb1 == 1){
Icon1As[2].style.opacity="0",
Icon1Bs[2].style.opacity="1",Icon1Bs[2].style.bottom="140px";};

// ICONS //
ICON1s.forEach((ICON, index) => {
if(index != 3){ICON1s[index].style.bottom="-80px";};
ICON1s[3].style.bottom="6px";});

// trim path animation //
Aa1.style.animation="trim 1s forwards",Aa2.style.animation="trim 1s forwards",Aa3.style.animation="trim 1s forwards",Aa4.style.animation="trim 1s forwards",Aa5.style.animation="trim 1s forwards",Aa6.style.animation="trim 1s forwards";
Da3.style.animation="d6 1s forwards",Da2.style.animation="d5 1s forwards",Da1.style.animation="d4 1s forwards",La3.style.animation="trim2 1s forwards",La2.style.animation="trim2 1s forwards",La1.style.animation="trim2 1s forwards";
Ba1.style.animation="trim2 1s forwards",Ba2.style.animation="trim2 1s forwards",Ba3.style.animation="trim2 1s forwards",Ba4.style.animation="trim2 1s forwards";
Pa1.style.animation="trim2 1s forwards",Pa2.style.animation="trim2 1s forwards",Pa3.style.animation="trim2 1s forwards",Pa4.style.animation="trim2 1s forwards";
Sa1.style.animation="trim2 1s forwards",Sa2.style.animation="trim2 1s forwards",Sa3.style.animation="trim2 1s forwards", Sa4.style.animation="trim2 1s forwards";

xb1 = 3;};

const Icon15 = () => {

indicator1.style.left="calc(var(--i) * 4)";
reset1();
Icon1As[4].style.bottom="-120px",Icon1As[4].style.opacity="0";

// set the opacity & location of moving icons//
if(xb1 == 0){
Icon1As[1].style.opacity="0",Icon1As[2].style.opacity="0",Icon1As[3].style.opacity="0",
Icon1Bs[1].style.opacity="1",Icon1Bs[1].style.bottom="140px",
Icon1Bs[2].style.opacity="1",Icon1Bs[2].style.bottom="140px",
Icon1Bs[3].style.opacity="1",Icon1Bs[3].style.bottom="140px";};

if(xb1 == 1){
Icon1As[2].style.opacity="0",Icon1As[3].style.opacity="0",
Icon1Bs[2].style.opacity="1",Icon1Bs[2].style.bottom="140px",
Icon1Bs[3].style.opacity="1",Icon1Bs[3].style.bottom="140px";};

if(xb1 == 2){
Icon1As[3].style.opacity="0",
Icon1Bs[3].style.opacity="1",Icon1Bs[3].style.bottom="140px";};

// ICONS //
ICON1s.forEach((ICON, index) => {
if(index != 4){ICON1s[index].style.bottom="-80px";};
ICON1s[4].style.bottom="6px";});

// trim path animation //
Ba1.style.animation="trim 1.5s forwards",Ba2.style.animation="trim 2s forwards",Ba3.style.animation="trim 1.5s forwards", Ba4.style.animation="trim 2s forwards";
Da3.style.animation="d6 1s forwards",Da2.style.animation="d5 1s forwards",Da1.style.animation="d4 1s forwards",La3.style.animation="trim2 1s forwards",La2.style.animation="trim2 1s forwards",La1.style.animation="trim2 1s forwards";
Aa1.style.animation="trim2 1s forwards",Aa2.style.animation="trim2 1s forwards",Aa3.style.animation="trim2 1s forwards",Aa4.style.animation="trim2 1s forwards",Aa5.style.animation="trim2 1s forwards",Aa6.style.animation="trim2 1s forwards";
Pa1.style.animation="trim2 1s forwards",Pa2.style.animation="trim2 1s forwards",Pa3.style.animation="trim2 1s forwards",Pa4.style.animation="trim2 1s forwards";
Sa1.style.animation="trim2 1s forwards",Sa2.style.animation="trim2 1s forwards",Sa3.style.animation="trim2 1s forwards", Sa4.style.animation="trim2 1s forwards";

xb1 = 4;};

Click11.addEventListener("click",Icon11);
Click12.addEventListener("click",Icon12);
Click13.addEventListener("click",Icon13);
Click14.addEventListener("click",Icon14);
Click15.addEventListener("click",Icon15);

function ShowB1() {

setTimeout(Icon12,1000);
setTimeout(Icon13,2000);
setTimeout(Icon14,3000);
setTimeout(Icon15,4000);
setTimeout(Icon13,5000);
setTimeout(Icon11,6000);
setTimeout(Icon13,7000);
setTimeout(Icon15,8000);
setTimeout(Icon11,9000);
setTimeout(Icon15,10000);
setTimeout(Icon11,11000);

}

ShowB1();

setInterval(ShowB1,11000);
