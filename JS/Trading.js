// --- Safe element lookup ---
const SideNavbar4 = document.querySelector(".container4S .side-navbar");
const Item4s = document.querySelectorAll(".container4S .item.N");
const Mouse4 = document.querySelector(".container4S .mouse");
const Theme4 = document.querySelector(".container4S .theme");
const Container4 = document.querySelector(".container4S");

let seqIntervalId4 = null;
let seqStart4 = 0;
let executed4 = [];

// --- Animation steps sequence ---
const steps4 = [
  { t: 0, fn: () => Mouse4 && (Mouse4.style.transform = "translate(-185px,20px)") },
  { t: 500, fn: () => Mouse4 && (Mouse4.style.transform = "translate(-65px,20px)") },
  { t: 700, fn: () => SideNavbar4 && (SideNavbar4.style.width = "280px") },

  { t: 1200, fn: () => Mouse4 && (Mouse4.style.transform = "translate(-215px,-135px)") },
  { t: 1700, fn: () => Mouse4?.querySelector(".cursor")?.classList.add("active") },
  { t: 2000, fn: () => {
      Mouse4?.querySelector(".cursor")?.classList.remove("active");
      Item4s[0]?.classList.remove("active");
      Item4s[1]?.classList.add("active");
    }
  },

  { t: 2700, fn: () => SideNavbar4 && (SideNavbar4.style.width = "280px") },
  { t: 3000, fn: () => Mouse4?.querySelector(".cursor")?.classList.remove("active") },

  { t: 3500, fn: () => Mouse4 && (Mouse4.style.transform = "translate(-120px,260px)") },
  { t: 4000, fn: () => {
      Mouse4?.querySelector(".cursor")?.classList.add("active");
      Theme4?.classList.remove("active");
      Container4?.classList.replace("dark", "light");
      Theme4?.querySelector("span") && (Theme4.querySelector("span").innerHTML = "Light");
    }
  },
  { t: 4300, fn: () => Mouse4?.querySelector(".cursor")?.classList.remove("active") },

  { t: 4800, fn: () => {
      Mouse4?.querySelector(".cursor")?.classList.add("active");
      Theme4?.classList.add("active");
      Container4?.classList.replace("light", "dark");
      Theme4?.querySelector("span") && (Theme4.querySelector("span").innerHTML = "Dark");
    }
  },

  { t: 5300, fn: () => {
      Mouse4 && (Mouse4.style.transform = "translate(-120px,20px)");
      Mouse4?.querySelector(".cursor")?.classList.remove("active");
    }
  },

  { t: 5800, fn: () => {
      Mouse4 && (Mouse4.style.transform = "translate(-185px,30px)");
      SideNavbar4 && (SideNavbar4.style.width = "100px");
    }
  },

  { t: 6300, fn: () => Mouse4 && (Mouse4.style.transform = "translate(-185px,-160px)") },
  { t: 6800, fn: () => Mouse4?.querySelector(".cursor")?.classList.add("active") },
  { t: 7100, fn: () => Mouse4?.querySelector(".cursor")?.classList.remove("active") },

  { t: 7400, fn: () => {
      Item4s[0]?.classList.add("active");
      Item4s[1]?.classList.remove("active");
    }
  },
  { t: 7900, fn: () => Mouse4 && (Mouse4.style.transform = "translate(0,0)") }
];

// --- Scheduler logic ---
function stopSequence4() {
  if (seqIntervalId4) {
    clearInterval(seqIntervalId4);
    seqIntervalId4 = null;
  }
  executed4 = [];
}

function tickOnce4() {
  if (!seqStart4) return;
  const elapsed = Date.now() - seqStart4;

  for (let i = 0; i < steps4.length; i++) {
    if (!executed4[i] && elapsed >= steps4[i].t) {
      try { steps4[i].fn(); } catch (e) { console.error("step4 error", e); }
      executed4[i] = true;
    }
  }

  if (executed4.length === steps4.length && executed4.every(Boolean)) {
    stopSequence4();
  }
}

function startSequence4() {
  stopSequence4();
  executed4 = new Array(steps4.length).fill(false);
  seqStart4 = Date.now();
  tickOnce4();
  seqIntervalId4 = setInterval(tickOnce4, 100);
}

// --- Handle visibility (pause/resume) ---
document.addEventListener("visibilitychange", () => {
  if (!document.hidden) tickOnce4();
});

// --- Public trigger (same name as original) ---
function Show4() {
  startSequence4();
}

// --- Start and repeat safely ---
Show4();
const repeater4 = setInterval(() => Show4(), 9000);

// --- Cleanup on unload ---
window.addEventListener("beforeunload", () => {
  clearInterval(repeater4);
  stopSequence4();
});
