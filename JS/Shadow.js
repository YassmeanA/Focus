// --- Safe element lookup ---
const Mouse2 = document.querySelector(".container2S .mouse");
const SideNavbar2 = document.querySelector(".container2S .side-navbar");
const ItemMenu2s = document.querySelectorAll(".container2S .item.menu");
const Menu2s = document.querySelectorAll(".container2S .Menu");
const Text2s = document.querySelectorAll(".container2S .item .text");

// --- Sequence scheduler ---
let seq2IntervalId = null;
let seq2Start = 0;
let executed2 = [];

// Animation steps (same actions as original Show2)
const steps2 = [
  { t: 0, fn: () => Mouse2 && (Mouse2.style.transform = "translate(-155px,-235px)") },
  { t: 600, fn: () => Mouse2?.querySelector(".cursor")?.classList.add("active") },
  { t: 900, fn: () => {
      Mouse2?.querySelector(".cursor")?.classList.remove("active");
      SideNavbar2?.classList.add("active");
    }
  },

  { t: 1500, fn: () => Mouse2 && (Mouse2.style.transform = "translate(-110px,-140px)") },
  { t: 1800, fn: () => Mouse2?.querySelector(".cursor")?.classList.add("active") },
  { t: 2100, fn: () => {
      Mouse2?.querySelector(".cursor")?.classList.remove("active");
      ItemMenu2s[0]?.classList.add("active");
      ItemMenu2s[0]?.querySelector(".item-btn")?.classList.add("active");
    }
  },

  { t: 2700, fn: () => Mouse2 && (Mouse2.style.transform = "translate(-110px,0)") },
  { t: 3000, fn: () => Mouse2?.querySelector(".cursor")?.classList.add("active") },
  { t: 3300, fn: () => {
      Mouse2?.querySelector(".cursor")?.classList.remove("active");
      ItemMenu2s[0]?.classList.remove("active");
      ItemMenu2s[0]?.querySelector(".item-btn")?.classList.remove("active");
      ItemMenu2s[1]?.classList.add("active");
      ItemMenu2s[1]?.querySelector(".item-btn")?.classList.add("active");
    }
  },

  { t: 4000, fn: () => Mouse2 && (Mouse2.style.transform = "translate(-110px,-110px)") },
  { t: 4300, fn: () => Mouse2?.querySelector(".cursor")?.classList.add("active") },
  { t: 4600, fn: () => {
      Mouse2?.querySelector(".cursor")?.classList.remove("active");
      ItemMenu2s[1]?.classList.remove("active");
      ItemMenu2s[1]?.querySelector(".item-btn")?.classList.remove("active");
    }
  },

  { t: 5200, fn: () => Mouse2 && (Mouse2.style.transform = "translate(-90px,-235px)") },
  { t: 5500, fn: () => Mouse2?.querySelector(".cursor")?.classList.add("active") },
  { t: 5800, fn: () => {
      Mouse2?.querySelector(".cursor")?.classList.remove("active");
      SideNavbar2?.classList.remove("active");
    }
  },

  { t: 6400, fn: () => Mouse2 && (Mouse2.style.transform = "translate(-175px,-110px)") },
  { t: 6700, fn: () => (Text2s[2].style.display = "flex") },
  { t: 7000, fn: () => Mouse2?.querySelector(".cursor")?.classList.add("active") },
  { t: 7300, fn: () => {
      Mouse2?.querySelector(".cursor")?.classList.remove("active");
      Menu2s[1]?.classList.add("active");
      ItemMenu2s[1]?.querySelector(".item-btn")?.classList.add("active");
    }
  },

  { t: 7900, fn: () => {
      Mouse2.style.transform = "translate(-175px,-140px)";
      Text2s[2].style.display = "none";
    }
  },

  { t: 8200, fn: () => (Text2s[1].style.display = "flex") },
  { t: 8500, fn: () => Mouse2?.querySelector(".cursor")?.classList.add("active") },
  { t: 8800, fn: () => {
      Mouse2?.querySelector(".cursor")?.classList.remove("active");
      Menu2s[0]?.classList.add("active");
      ItemMenu2s[0]?.querySelector(".item-btn")?.classList.add("active");
      Menu2s[1]?.classList.remove("active");
      ItemMenu2s[1]?.querySelector(".item-btn")?.classList.remove("active");
    }
  },

  { t: 9500, fn: () => {
      Mouse2.style.transform = "translate(-105px,-170px)";
      Text2s[1].style.display = "none";
    }
  },

  { t: 9800, fn: () => Mouse2?.querySelector(".cursor")?.classList.add("active") },
  { t: 10100, fn: () => {
      Mouse2?.querySelector(".cursor")?.classList.remove("active");
      Menu2s[0]?.classList.remove("active");
      ItemMenu2s[0]?.querySelector(".item-btn")?.classList.remove("active");
    }
  },

  { t: 10700, fn: () => (Mouse2.style.transform = "translate(0,0)") },
];

// --- sequence controls ---
function stopSequence2() {
  if (seq2IntervalId) {
    clearInterval(seq2IntervalId);
    seq2IntervalId = null;
  }
  executed2 = [];
}

function tickSequence2() {
  if (!seq2Start) return;
  const elapsed = Date.now() - seq2Start;

  for (let i = 0; i < steps2.length; i++) {
    if (!executed2[i] && elapsed >= steps2[i].t) {
      try { steps2[i].fn(); } catch (err) { console.error("Step2 error:", err); }
      executed2[i] = true;
    }
  }

  if (executed2.every(Boolean)) stopSequence2();
}

function startSequence2() {
  stopSequence2();
  executed2 = new Array(steps2.length).fill(false);
  seq2Start = Date.now();
  tickSequence2();
  seq2IntervalId = setInterval(tickSequence2, 120);
}

// Visibility / focus handling
document.addEventListener("visibilitychange", () => {
  if (!document.hidden) tickSequence2();
});

window.addEventListener("focus", () => startSequence2());
window.addEventListener("blur", () => stopSequence2());

// Run once then repeat
function Show2() {
  startSequence2();
}

Show2();
const repeater2 = setInterval(() => Show2(), 14000);

window.addEventListener("beforeunload", () => {
  clearInterval(repeater2);
  stopSequence2();
});
