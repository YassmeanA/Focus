const Mouse5 = document.querySelector(".container5S .mouse");
const ItemContainer5 = document.querySelector(".container5S .item-container");
const ItemList5 = document.querySelector(".container5S .item-list");
const Item5s = document.querySelectorAll(".container5S .item");
const Rect5s = document.querySelectorAll(".container5S svg rect");
const Detail5s = document.querySelector(".container5S .details");
const detail5s = document.querySelectorAll(".container5S .details-list");
const Power5s = document.querySelectorAll(".container5S .power");
const ArirConditioner5s = document.querySelectorAll(".container5S .air-conditioner");
const Back5 = document.querySelector(".container5S .back5");
const BACK5 = document.querySelector(".container5S .Back");
const Section5s = document.querySelectorAll(".container5S .Section");
const SectionContainer5 = document.querySelector(".container5S .section-container");
const SectionList5 = document.querySelector(".container5S .section-list");
const Slide5s = document.querySelectorAll(".container5S .slide");
const State5s = document.querySelectorAll(".container5S .X .text2");

function state() {

if(detail5s[1].querySelector(".air-conditioner .power").classList.contains("active")){
State5s[1].innerHTML="On";}else{State5s[1].innerHTML="Off";};

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


let x5;

detail5s.forEach(detail => {
detail.querySelectorAll('.section').forEach((el, i) => {
el.style.animation = `Show 1s cubic-bezier(0.5, 0.5, 0, 1) forwards ${i * 0.1}s`;
});
});

document.querySelectorAll('.container5S .item').forEach((el, index) => {
    
const delay = Math.floor(index / 2) * 0.1;
el.style.animation = `Show 1s cubic-bezier(0.5, 0.5, 0, 1) forwards ${delay}s`;
    
});


x5 = 10;

Rect5s.forEach(Rect => {
Rect.setAttribute("rx",`${x5}`);
Rect.setAttribute("ry",`${x5}`);
Rect.setAttribute("stroke-width",`${x5/10}`);

});

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


// Utility: cursor blink effect
function clickEffect5(targetFn, delay = 300) {
  Mouse5.querySelector(".cursor").classList.add("active");
  setTimeout(() => {
    targetFn?.();
    Mouse5.querySelector(".cursor").classList.remove("active");
  }, delay);
}


// === Scheduler for container5 ===
function schedule5() {

  const tasks = [
    // Step 1: Activate container
    [0, () => {
      sectionContainer5.classList.add("active");
      logo5.style.display = "flex";
    }],

    // Step 2: Show section list
    [500, () => {
      sectionList5.classList.add("active");
      Mouse5.style.transform = "translate(-90px,-150px)";
    }],

    // Step 3: Click first section
    [800, () => clickEffect5(() => Section5s[0].click(), 400)],

    // Step 4: Move and click second item
    [1600, () => {
      Mouse5.style.transform = "translate(90px,-160px)";
      setTimeout(() => clickEffect5(() => Item5s[1].click(), 400), 400);
    }],

    // Step 5: Move to open details
    [2800, () => {
      Mouse5.style.transform = "translate(0,260px)";
      setTimeout(() => {
        Mouse5.style.transform = "translate(0,10px)";
        Back5.style.transform = "translateY(-250px)";
        detail5s[1].style.transform = "translateY(-250px)";
      }, 600);
    }],

    // Step 6: Adjust air conditioner
    [4000, () => {
      Mouse5.style.transform = "translate(35px,-25px)";
      setTimeout(() => clickEffect5(() => {
        ArirConditioner5s[0].querySelector(".minus").click();
      }), 400);
    }],

    // Step 7: Repeat minus click
    [5000, () => clickEffect5(() => {
      ArirConditioner5s[0].querySelector(".minus").click();
    })],

    // Step 8: Click power button
    [6000, () => {
      Mouse5.style.transform = "translate(-90px,160px)";
      setTimeout(() => clickEffect5(() => Power5s[1].click()), 400);
    }],

    // Step 9: Close first detail
    [7000, () => {
      Mouse5.style.transform = "translate(0,-100px)";
      setTimeout(() => {
        Mouse5.style.transform = "translate(0,100px)";
        Back5.style.transform = "translateY(0px)";
        detail5s[1].style.transform = "translateY(0px)";
      }, 400);
    }],

    // Step 10: Back click animation
    [8500, () => {
      Mouse5.style.transform = "translate(130px,-260px)";
      setTimeout(() => clickEffect5(() => {
        Back5.classList.add("active");
        Back5.click();
      }), 400);
    }],

    // Step 11: Move, click plus, and open new item
    [9500, () => {
      ArirConditioner5s[0].querySelector(".plus").click();
      ArirConditioner5s[0].querySelector(".plus").click();
      Power5s[1].click();
      Mouse5.style.transform = "translate(-80px,140px)";
      setTimeout(() => clickEffect5(() => Item5s[4].click()), 400);
    }],

    // Step 12: Animate detail open
    [11000, () => {
      Mouse5.style.transform = "translate(0,250px)";
      setTimeout(() => {
        Mouse5.style.transform = "translate(0,-250px)";
        Back5.style.transform = "translateY(-500px)";
        detail5s[4].style.transform = "translateY(-500px)";
      }, 600);
    }],

    // Step 13: Animate detail close
    [13000, () => {
      Mouse5.style.transform = "translate(0,-250px)";
      setTimeout(() => {
        Mouse5.style.transform = "translate(0,250px)";
        Back5.style.transform = "translateY(0px)";
        detail5s[4].style.transform = "translateY(0px)";
      }, 600);
    }],

    // Step 14: Click BACK button
    [14500, () => {
      Mouse5.style.transform = "translate(130px,-260px)";
      setTimeout(() => clickEffect5(() => {
        BACK5.classList.add("active");
        BACK5.click();
      }), 400);
    }],

    // Step 15: Hide container and reset
    [16000, () => {
      Mouse5.style.transform = "translate(180px,50px)";
      sectionContainer5.classList.remove("active");
      setTimeout(() => {
        sectionList5.classList.remove("active");
        logo5.style.display = "none";
      }, 400);
    }],
  ];

  // Run all scheduled tasks
  tasks.forEach(([delay, task]) => setTimeout(task, delay));
}


// === Looping control ===
function Show5() {
  schedule5();
}

Show5();
setInterval(Show5, 23000);
