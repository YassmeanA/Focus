const Icon2As = document.querySelectorAll(".icon.A");
const Icon2Bs = document.querySelectorAll(".icon.B");
const Icon2Cs = document.querySelectorAll(".icon.C");
const ICON2s = document.querySelectorAll(".ICON");

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

indicator.style.left="0px";
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
S1.style.animation="trim 0.9s forwards",S2.style.animation="trim 0.9s forwards", S3.style.animation="trim 1s forwards", S4.style.animation="trim 1s forwards";
D3.style.animation="d6 1s forwards",D2.style.animation="d5 1s forwards",D1.style.animation="d4 1s forwards",L3.style.animation="trim2 1s forwards",L2.style.animation="trim2 1s forwards",L1.style.animation="trim2 1s forwards";
A1.style.animation="trim2 1s forwards",A2.style.animation="trim2 1s forwards",A3.style.animation="trim2 1s forwards",A4.style.animation="trim2 1s forwards",A5.style.animation="trim2 1s forwards",A6.style.animation="trim2 1s forwards";
B1.style.animation="trim2 1s forwards",B2.style.animation="trim2 1s forwards",B3.style.animation="trim2 1s forwards",B4.style.animation="trim2 1s forwards";
P1.style.animation="trim2 1s forwards",P2.style.animation="trim2 1s forwards",P3.style.animation="trim2 1s forwards",P4.style.animation="trim2 1s forwards";

xb2 = 0;};

const Icon22 = () => {

indicator.style.left="var(--i)";
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
D3.style.animation="d3 0.8s forwards 0.2s",D2.style.animation="d2 0.8s forwards 0.1s",D1.style.animation="d1 0.8s forwards 0s",L3.style.animation="trim1 2s forwards 0.2s",L2.style.animation="trim1 2s forwards 0.1s",L1.style.animation="trim1 2s forwards 0s";
A1.style.animation="trim2 1s forwards",A2.style.animation="trim2 1s forwards",A3.style.animation="trim2 1s forwards",A4.style.animation="trim2 1s forwards",A5.style.animation="trim2 1s forwards",A6.style.animation="trim2 1s forwards";
B1.style.animation="trim2 1s forwards",B2.style.animation="trim2 1s forwards",B3.style.animation="trim2 1s forwards",B4.style.animation="trim2 1s forwards";
S1.style.animation="trim2 1s forwards",S2.style.animation="trim2 1s forwards",S3.style.animation="trim2 1s forwards", S4.style.animation="trim2 1s forwards";
P1.style.animation="trim2 1s forwards",P2.style.animation="trim2 1s forwards",P3.style.animation="trim2 1s forwards",P4.style.animation="trim2 1s forwards";

xb2 = 1;};

const Icon23 = () => {

indicator.style.left="calc(var(--i) * 2)";
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
P1.style.animation="trim 1.2s forwards",P2.style.animation="trim 1.2s forwards",P3.style.animation="trim 1.2s forwards",P4.style.animation="trim 1.2s forwards";
D3.style.animation="d6 1s forwards",D2.style.animation="d5 1s forwards",D1.style.animation="d4 1s forwards",L3.style.animation="trim2 1s forwards",L2.style.animation="trim2 1s forwards",L1.style.animation="trim2 1s forwards";
A1.style.animation="trim2 1s forwards",A2.style.animation="trim2 1s forwards",A3.style.animation="trim2 1s forwards",A4.style.animation="trim2 1s forwards",A5.style.animation="trim2 1s forwards",A6.style.animation="trim2 1s forwards";
B1.style.animation="trim2 1s forwards",B2.style.animation="trim2 1s forwards",B3.style.animation="trim2 1s forwards",B4.style.animation="trim2 1s forwards";
S1.style.animation="trim2 1s forwards",S2.style.animation="trim2 1s forwards",S3.style.animation="trim2 1s forwards", S4.style.animation="trim2 1s forwards";

xb2 = 2;};

const Icon24 = () => {

indicator.style.left="calc(var(--i) * 3)";
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
A1.style.animation="trim 1s forwards",A2.style.animation="trim 1s forwards",A3.style.animation="trim 1s forwards",A4.style.animation="trim 1s forwards",A5.style.animation="trim 1s forwards",A6.style.animation="trim 1s forwards";
D3.style.animation="d6 1s forwards",D2.style.animation="d5 1s forwards",D1.style.animation="d4 1s forwards",L3.style.animation="trim2 1s forwards",L2.style.animation="trim2 1s forwards",L1.style.animation="trim2 1s forwards";
B1.style.animation="trim2 1s forwards",B2.style.animation="trim2 1s forwards",B3.style.animation="trim2 1s forwards",B4.style.animation="trim2 1s forwards";
P1.style.animation="trim2 1s forwards",P2.style.animation="trim2 1s forwards",P3.style.animation="trim2 1s forwards",P4.style.animation="trim2 1s forwards";
S1.style.animation="trim2 1s forwards",S2.style.animation="trim2 1s forwards",S3.style.animation="trim2 1s forwards", S4.style.animation="trim2 1s forwards";

xb2 = 3;};

const Icon25 = () => {

indicator.style.left="calc(var(--i) * 4)";
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
B1.style.animation="trim 1.5s forwards",B2.style.animation="trim 2s forwards",B3.style.animation="trim 1.5s forwards", B4.style.animation="trim 2s forwards";
D3.style.animation="d6 1s forwards",D2.style.animation="d5 1s forwards",D1.style.animation="d4 1s forwards",L3.style.animation="trim2 1s forwards",L2.style.animation="trim2 1s forwards",L1.style.animation="trim2 1s forwards";
A1.style.animation="trim2 1s forwards",A2.style.animation="trim2 1s forwards",A3.style.animation="trim2 1s forwards",A4.style.animation="trim2 1s forwards",A5.style.animation="trim2 1s forwards",A6.style.animation="trim2 1s forwards";
P1.style.animation="trim2 1s forwards",P2.style.animation="trim2 1s forwards",P3.style.animation="trim2 1s forwards",P4.style.animation="trim2 1s forwards";
S1.style.animation="trim2 1s forwards",S2.style.animation="trim2 1s forwards",S3.style.animation="trim2 1s forwards", S4.style.animation="trim2 1s forwards";

xb2 = 4;};

Click1.addEventListener("click",Icon21);
Click2.addEventListener("click",Icon22);
Click3.addEventListener("click",Icon23);
Click4.addEventListener("click",Icon24);
Click5.addEventListener("click",Icon25);

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

