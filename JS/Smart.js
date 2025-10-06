// --- Safe element lookups ---
const Mouse5 = document.querySelector(".container5S .mouse");
const ItemContainer5 = document.querySelector(".container5S .item-container");
const ItemList5 = document.querySelector(".container5S .item-list");
const Item5s = document.querySelectorAll(".container5S .item");
const Rect5s = document.querySelectorAll(".container5S svg rect");
const Detail5s = document.querySelector(".container5S .details");
const detail5s = document.querySelectorAll(".container5S .details-list");
const Power5s = document.querySelectorAll(".container5S .power");
const AirConditioner5s = document.querySelectorAll(".container5S .air-conditioner");
const Back5 = document.querySelector(".container5S .back5");
const BACK5 = document.querySelector(".container5S .Back");
const Section5s = document.querySelectorAll(".container5S .Section");
const SectionContainer5 = document.querySelector(".container5S .section-container");
const SectionList5 = document.querySelector(".container5S .section-list");
const Slide5s = document.querySelectorAll(".container5S .slide");
const State5s = document.querySelectorAll(".container5S .X .text2");

// --- Helper to update ON/OFF state ---
function state() {
  if (detail5s[1]?.querySelector(".air-conditioner .power")?.classList.contains("active")) {
    State5s[1].innerHTML = "On";
  } else {
    State5s[1].innerHTML = "Off";
  }
}
state();

// --- Initial setup ---
Rect5s.forEach(r => {
  r.setAttribute("rx", "10");
  r.setAttribute("ry", "10");
  r.setAttribute("stroke-width", "1");
});

// --- Safe click simulation ---
function safeClick(el) { if (el) el.click(); }

// --- Step-by-step animation sequence ---
let seq5Interval = null;
let seq5Start = 0;
let executed5 = [];

const steps5 = [
  { t: 0, fn: () => {
      SectionContainer5?.classList.add("active");
      document.querySelector(".container5S .logo").style.display = "flex";
    }
  },
  { t: 500, fn: () => SectionList5?.classList.add("active") },
  { t: 1000, fn: () => Mouse5 && (Mouse5.style.transform = "translate(-90px,-150px)") },
  { t: 1500, fn: () => { Mouse5?.querySelector(".cursor")?.classList.add("active"); safeClick(Section5s[0]); } },
  { t: 2000, fn: () => Mouse5?.querySelector(".cursor")?.classList.remove("active") },
  { t: 2500, fn: () => Mouse5 && (Mouse5.style.transform = "translate(90px,-160px)") },
  { t: 3000, fn: () => { Mouse5?.querySelector(".cursor")?.classList.add("active"); safeClick(Item5s[1]); } },
  { t: 3600, fn: () => Mouse5?.querySelector(".cursor")?.classList.remove("active") },
  { t: 4200, fn: () => Mouse5 && (Mouse5.style.transform = "translate(0,260px)") },
  { t: 4700, fn: () => {
      Mouse5 && (Mouse5.style.transform = "translate(0,10px)");
      Back5.style.transform = "translateY(-250px)";
      detail5s[1].style.transform = "translateY(-250px)";
    }
  },
  { t: 5300, fn: () => {
      Mouse5.style.transform = "translate(35px,-25px)";
      Mouse5?.querySelector(".cursor")?.classList.add("active");
      AirConditioner5s[0]?.querySelector(".minus")?.click();
    }
  },
  { t: 5900, fn: () => Mouse5?.querySelector(".cursor")?.classList.remove("active") },
  { t: 6400, fn: () => {
      Mouse5?.querySelector(".cursor")?.classList.add("active");
      AirConditioner5s[0]?.querySelector(".minus")?.click();
    }
  },
  { t: 7000, fn: () => Mouse5?.querySelector(".cursor")?.classList.remove("active") },
  { t: 7600, fn: () => {
      Mouse5.style.transform = "translate(-90px,160px)";
      Mouse5?.querySelector(".cursor")?.classList.add("active");
      Power5s[1]?.click();
    }
  },
  { t: 8200, fn: () => Mouse5?.querySelector(".cursor")?.classList.remove("active") },
  { t: 8700, fn: () => {
      Mouse5.style.transform = "translate(0,-100px)";
      Back5.style.transform = "translateY(0)";
      detail5s[1].style.transform = "translateY(0)";
    }
  },
  { t: 9400, fn: () => {
      Mouse5.style.transform = "translate(130px,-260px)";
      Mouse5?.querySelector(".cursor")?.classList.add("active");
      Back5.classList.add("active");
      safeClick(Back5);
    }
  },
  { t: 10000, fn: () => {
      Mouse5?.querySelector(".cursor")?.classList.remove("active");
      Back5.classList.remove("active");
      AirConditioner5s[0]?.querySelector(".plus")?.click();
      AirConditioner5s[0]?.querySelector(".plus")?.click();
      Power5s[1]?.click();
    }
  },
  { t: 10600, fn: () => {
      Mouse5.style.transform = "translate(-80px,140px)";
      Mouse5?.querySelector(".cursor")?.classList.add("active");
      safeClick(Item5s[4]);
    }
  },
  { t: 11200, fn: () => Mouse5?.querySelector(".cursor")?.classList.remove("active") },
  { t: 11700, fn: () => {
      Mouse5.style.transform = "translate(0,250px)";
      Back5.style.transform = "translateY(-500px)";
      detail5s[4].style.transform = "translateY(-500px)";
    }
  },
  { t: 12200, fn: () => {
      Mouse5.style.transform = "translate(0,-250px)";
      Back5.style.transform = "translateY(0px)";
      detail5s[4].style.transform = "translateY(0px)";
    }
  },
  { t: 12800, fn: () => {
      Mouse5.style.transform = "translate(130px,-260px)";
      Mouse5?.querySelector(".cursor")?.classList.add("active");
      Back5.classList.add("active");
      safeClick(Back5);
    }
  },
  { t: 13300, fn: () => {
      Mouse5?.querySelector(".cursor")?.classList.remove("active");
      Back5.classList.remove("active");
      Mouse5?.querySelector(".cursor")?.classList.add("active");
      BACK5.classList.add("active");
      safeClick(BACK5);
    }
  },
  { t: 13900, fn: () => {
      Mouse5?.querySelector(".cursor")?.classList.remove("active");
      BACK5.classList.remove("active");
    }
  },
  { t: 14300, fn: () => {
      Mouse5.style.transform = "translate(180px,50px)";
      SectionContainer5?.classList.remove("active");
      SectionList5?.classList.remove("active");
      document.querySelector(".container5S .logo").style.display = "none";
    }
  }
];

// --- Scheduler logic ---
function stopSequence5() {
  if (seq5Interval) clearInterval(seq5Interval);
  seq5Interval = null;
  executed5 = [];
}

function tickOnce5() {
  if (!seq5Start) return;
  const elapsed = Date.now() - seq5Start;

  steps5.forEach((step, i) => {
    if (!executed5[i] && elapsed >= step.t) {
      try { step.fn(); } catch (e) { console.error("step5 error", e); }
      executed5[i] = true;
    }
  });

  if (executed5.length === steps5.length && executed5.every(Boolean)) {
    stopSequence5();
  }
}

function startSequence5() {
  stopSequence5();
  executed5 = new Array(steps5.length).fill(false);
  seq5Start = Date.now();
  tickOnce5();
  seq5Interval = setInterval(tickOnce5, 100);
}

// --- Handle tab visibility ---
document.addEventListener("visibilitychange", () => {
  if (!document.hidden) tickOnce5();
});

// --- Public trigger ---
function Show5() {
  startSequence5();
}

// --- Start and repeat ---
Show5();
const repeater5 = setInterval(() => Show5(), 23000);

// --- Cleanup on unload ---
window.addEventListener("beforeunload", () => {
  clearInterval(repeater5);
  stopSequence5();
});
