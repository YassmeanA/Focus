// --- Safe element lookup ---
const SideNavbar3 = document.querySelector(".container3S .side-navbar");
const Item3s = document.querySelectorAll(".container3S .item.N");
const AccountSettings3 = document.querySelector(".container3S .account-settings");
const Settings3 = document.querySelector(".container3S .account .settings");
const Mouse3 = document.querySelector(".container3S .mouse");
const Ham3 = document.querySelector(".container3S .Ham");

// --- Sequence scheduler ---
let seqInterval3 = null;
let seqStart3 = 0;
let executed3 = [];

// Build sequence of animation steps {t: <ms offset>, fn: <callback>}
const steps3 = [
  // --- Opening ---
  { t: 0, fn: () => Mouse3 && (Mouse3.style.transform = "translate(-140px,-270px)") },
  { t: 400, fn: () => Mouse3?.querySelector(".cursor")?.classList.add("active") },
  { t: 700, fn: () => {
      Mouse3?.querySelector(".cursor")?.classList.remove("active");
      SideNavbar3?.classList.add("active");
      if (Ham3) Ham3.style.opacity = "0";
    }
  },

  // --- Move down & switch active item ---
  { t: 1200, fn: () => Mouse3 && (Mouse3.style.transform = "translate(-80px,-55px)") },
  { t: 1600, fn: () => Mouse3?.querySelector(".cursor")?.classList.add("active") },
  { t: 1900, fn: () => {
      Mouse3?.querySelector(".cursor")?.classList.remove("active");
      Item3s[0]?.classList.remove("active");
      Item3s[1]?.classList.add("active");
    }
  },

  // --- Move to settings ---
  { t: 2500, fn: () => Mouse3 && (Mouse3.style.transform = "translate(80px,200px)") },
  { t: 2900, fn: () => {
      Mouse3?.querySelector(".cursor")?.classList.add("active");
      Settings3?.querySelector(".circle")?.classList.add("active");
    }
  },
  { t: 3500, fn: () => {
      Mouse3?.querySelector(".cursor")?.classList.remove("active");
      Settings3?.querySelector(".circle")?.classList.remove("active");
    }
  },

  // --- Open account settings ---
  { t: 4000, fn: () => {
      SideNavbar3?.classList.remove("active");
      AccountSettings3?.classList.add("active");
    }
  },
  { t: 4400, fn: () => Mouse3 && (Mouse3.style.transform = "translate(-110px,-240px)") },
  { t: 4800, fn: () => Mouse3?.querySelector(".cursor")?.classList.add("active") },
  { t: 5100, fn: () => Mouse3?.querySelector(".cursor")?.classList.remove("active") },

  // --- Return to main side navbar ---
  { t: 5600, fn: () => {
      SideNavbar3?.classList.add("active");
      AccountSettings3?.classList.remove("active");
    }
  },
  { t: 6000, fn: () => Mouse3 && (Mouse3.style.transform = "translate(-80px,-100px)") },
  { t: 6400, fn: () => Mouse3?.querySelector(".cursor")?.classList.add("active") },
  { t: 6700, fn: () => {
      Mouse3?.querySelector(".cursor")?.classList.remove("active");
      Item3s[0]?.classList.add("active");
      Item3s[1]?.classList.remove("active");
    }
  },

  // --- Move up and close ---
  { t: 7200, fn: () => Mouse3 && (Mouse3.style.transform = "translate(90px,-245px)") },
  { t: 7600, fn: () => Mouse3?.querySelector(".cursor")?.classList.add("active") },
  { t: 7900, fn: () => {
      Mouse3?.querySelector(".cursor")?.classList.remove("active");
      SideNavbar3?.classList.remove("active");
    }
  },
  { t: 8300, fn: () => Ham3 && (Ham3.style.opacity = "1") },
  { t: 8700, fn: () => Mouse3 && (Mouse3.style.transform = "translate(180px,50px)") },

  // --- End: reset mouse ---
  { t: 9500, fn: () => Mouse3 && (Mouse3.style.transform = "translate(0,0)") }
];

// --- Scheduler logic ---
function stopSequence3() {
  if (seqInterval3) {
    clearInterval(seqInterval3);
    seqInterval3 = null;
  }
  executed3 = [];
}

function tickOnce3() {
  if (!seqStart3) return;
  const elapsed = Date.now() - seqStart3;

  for (let i = 0; i < steps3.length; i++) {
    if (!executed3[i] && elapsed >= steps3[i].t) {
      try { steps3[i].fn(); } catch (e) { console.error("step3 error", e); }
      executed3[i] = true;
    }
  }

  if (executed3.length === steps3.length && executed3.every(Boolean)) stopSequence3();
}

function startSequence3() {
  stopSequence3();
  executed3 = new Array(steps3.length).fill(false);
  seqStart3 = Date.now();
  tickOnce3();
  seqInterval3 = setInterval(tickOnce3, 100);
}

// Handle visibility & focus (pause/resume)
document.addEventListener("visibilitychange", () => {
  if (!document.hidden) tickOnce3();
});
window.addEventListener("focus", () => startSequence3());
window.addEventListener("blur", () => stopSequence3());

// Public function
function Show3() {
  startSequence3();
}

// Initial start + looping repeat
Show3();
const repeater3 = setInterval(() => Show3(), 11000);

// Cleanup on unload
window.addEventListener("beforeunload", () => {
  clearInterval(repeater3);
  stopSequence3();
});
