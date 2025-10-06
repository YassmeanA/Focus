// --- Safe element lookup ---
const Arrow1 = document.querySelector(".container1S .Arrow");
const SideNavbar1 = document.querySelector(".container1S .side-navbar");
const ItemMenu1s = document.querySelectorAll(".container1S .item.menu");
const Menu1s = document.querySelectorAll(".container1S .Menu");
const Text1s = document.querySelectorAll(".container1S .item .text");
const Mouse1 = document.querySelector(".container1S .mouse");

// --- Navbar toggle ---
Arrow1?.addEventListener("click", () => {
  SideNavbar1?.classList.toggle("active");
  ItemMenu1s.forEach(ItemMenu => {
    ItemMenu.classList.remove("active");
    ItemMenu.querySelector(".item-btn")?.classList.remove("active");
  });
  Menu1s.forEach(Menu => Menu.classList.remove("active"));
});

// --- Sequence scheduler ---
let seqIntervalId = null;
let seqStart = 0;
let executed = [];

// Build sequence of animation steps {t: <ms offset>, fn: <callback>}
const steps = [
  { t: 0, fn: () => Mouse1 && (Mouse1.style.transform = "translate(-155px,-235px)") },

  { t: 500, fn: () => Mouse1?.querySelector(".cursor")?.classList.add("active") },
  { t: 800, fn: () => { 
      Mouse1?.querySelector(".cursor")?.classList.remove("active");
      SideNavbar1?.classList.add("active");
    }
  },

  { t: 1400, fn: () => Mouse1 && (Mouse1.style.transform = "translate(-110px,-130px)") },
  { t: 1800, fn: () => Mouse1?.querySelector(".cursor")?.classList.add("active") },
  { t: 2100, fn: () => {
      Mouse1?.querySelector(".cursor")?.classList.remove("active");
      ItemMenu1s[0]?.classList.add("active");
      ItemMenu1s[0]?.querySelector(".item-btn")?.classList.add("active");
    }
  },

  { t: 2700, fn: () => Mouse1 && (Mouse1.style.transform = "translate(-110px,10px)") },
  { t: 3100, fn: () => Mouse1?.querySelector(".cursor")?.classList.add("active") },
  { t: 3400, fn: () => {
      Mouse1?.querySelector(".cursor")?.classList.remove("active");
      ItemMenu1s[0]?.classList.remove("active");
      ItemMenu1s[0]?.querySelector(".item-btn")?.classList.remove("active");
      ItemMenu1s[1]?.classList.add("active");
      ItemMenu1s[1]?.querySelector(".item-btn")?.classList.add("active");
    }
  },

  { t: 4000, fn: () => Mouse1 && (Mouse1.style.transform = "translate(-110px,-100px)") },
  { t: 4400, fn: () => Mouse1?.querySelector(".cursor")?.classList.add("active") },
  { t: 4700, fn: () => {
      Mouse1?.querySelector(".cursor")?.classList.remove("active");
      ItemMenu1s[1]?.classList.remove("active");
      ItemMenu1s[1]?.querySelector(".item-btn")?.classList.remove("active");
    }
  },

  { t: 5200, fn: () => Mouse1 && (Mouse1.style.transform = "translate(-90px,-235px)") },
  { t: 5600, fn: () => Mouse1?.querySelector(".cursor")?.classList.add("active") },
  { t: 5900, fn: () => {
      Mouse1?.querySelector(".cursor")?.classList.remove("active");
      SideNavbar1?.classList.remove("active");
    }
  },

  { t: 6400, fn: () => Mouse1 && (Mouse1.style.transform = "translate(-175px,-100px)") },
  { t: 6700, fn: () => Text1s[2] && (Text1s[2].style.display = "flex") },
  { t: 7100, fn: () => Mouse1?.querySelector(".cursor")?.classList.add("active") },
  { t: 7400, fn: () => {
      Mouse1?.querySelector(".cursor")?.classList.remove("active");
      Menu1s[1]?.classList.add("active");
      ItemMenu1s[1]?.querySelector(".item-btn")?.classList.add("active");
    }
  },

  { t: 8000, fn: () => {
      Mouse1 && (Mouse1.style.transform = "translate(-175px,-130px)");
      Text1s[2] && (Text1s[2].style.display = "none");
    }
  },
  { t: 8300, fn: () => Text1s[1] && (Text1s[1].style.display = "flex") },
  { t: 8600, fn: () => Mouse1?.querySelector(".cursor")?.classList.add("active") },
  { t: 8900, fn: () => {
      Mouse1?.querySelector(".cursor")?.classList.remove("active");
      Menu1s[0]?.classList.add("active");
      ItemMenu1s[0]?.querySelector(".item-btn")?.classList.add("active");
      Menu1s[1]?.classList.remove("active");
      ItemMenu1s[1]?.querySelector(".item-btn")?.classList.remove("active");
    }
  },

  { t: 9500, fn: () => {
      Mouse1 && (Mouse1.style.transform = "translate(-105px,-170px)");
      Text1s[1] && (Text1s[1].style.display = "none");
    }
  },
  { t: 9900, fn: () => Mouse1?.querySelector(".cursor")?.classList.add("active") },
  { t: 10200, fn: () => {
      Mouse1?.querySelector(".cursor")?.classList.remove("active");
      Menu1s[0]?.classList.remove("active");
      ItemMenu1s[0]?.querySelector(".item-btn")?.classList.remove("active");
    }
  },

  { t: 10800, fn: () => Mouse1 && (Mouse1.style.transform = "translate(0,0)") }
];

// --- Scheduler logic ---
function stopSequence() {
  if (seqIntervalId) {
    clearInterval(seqIntervalId);
    seqIntervalId = null;
  }
  executed = [];
}

function tickOnce() {
  if (!seqStart) return;
  const elapsed = Date.now() - seqStart;

  for (let i = 0; i < steps.length; i++) {
    if (!executed[i] && elapsed >= steps[i].t) {
      try { steps[i].fn(); } catch (e) { console.error("step error", e); }
      executed[i] = true;
    }
  }

  // stop when finished
  if (executed.length === steps.length && executed.every(Boolean)) {
    stopSequence();
  }
}

function startSequence() {
  stopSequence();
  executed = new Array(steps.length).fill(false);
  seqStart = Date.now();
  tickOnce();
  seqIntervalId = setInterval(tickOnce, 100);
}

// Handle visibility (pause/resume)
document.addEventListener("visibilitychange", () => {
  if (!document.hidden) tickOnce();
});

// Public function (same name as before)
function Show1() {
  startSequence();
}

// Initial start + looping repeat
Show1();
const repeater = setInterval(() => Show1(), 14000);

// Cleanup on unload
window.addEventListener("beforeunload", () => {
  clearInterval(repeater);
  stopSequence();
});
