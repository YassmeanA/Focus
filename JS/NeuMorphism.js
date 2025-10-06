// --- Safe element lookup ---
const Power6 = document.querySelector(".container6S .power button");
const ControlPanel6 = document.querySelector(".container6S .control-panel");
const Temp6 = document.querySelector(".container6S .screen .temp");
const Plus6 = document.querySelector(".container6S .plus");
const Minus6 = document.querySelector(".container6S .minus");
const Reset6 = document.querySelector(".container6S .reset");
const Toggle6 = document.querySelector(".container6S .Toggle");
const range6s = document.querySelectorAll(".container6S .range");
const speedButton = document.querySelector(".container6S .speed-button");
const Mouse6 = document.querySelector(".container6S .mouse");

let count = 22;
let savedRangeValues = ["-100px", "-50px", "-80px", "-100px"];

// --- Temperature and Controls ---
Power6?.addEventListener("click", () => {
  ControlPanel6.classList.toggle("active");
  if (!ControlPanel6.classList.contains("active")) {
    range6s.forEach(r => (r.querySelector(".level").style.bottom = "-140px"));
  } else {
    range6s.forEach((r, i) => (r.querySelector(".level").style.bottom = savedRangeValues[i]));
  }
});

Toggle6?.addEventListener("click", () => {
  Toggle6.classList.toggle("active");
});

Plus6?.addEventListener("click", () => {
  if (count < 30) Temp6.innerHTML = ++count;
});
Minus6?.addEventListener("click", () => {
  if (count > 16) Temp6.innerHTML = --count;
});

Reset6?.addEventListener("click", () => {
  ControlPanel6.classList.add("Reset6");
  Toggle6.classList.remove("active");
  count = 22;
  Temp6.innerHTML = count;
  const defaults = ["-100px", "-50px", "-80px", "-100px"];
  range6s.forEach((r, i) => {
    const level = r.querySelector(".level");
    level.style.bottom = defaults[i];
    savedRangeValues[i] = defaults[i];
  });
  rotation = 0;
  speedButton.style.transform = "rotate(0deg)";
});

// --- Fan speed control ---
let rotation = 0;
let isDraggingSpeed = false;
let lastAngle = 0;
const minRotation = -50, maxRotation = 150;

function getAngle(e, center) {
  const point = e.touches ? e.touches[0] : e;
  const x = point.clientX - center.x;
  const y = point.clientY - center.y;
  return Math.atan2(y, x) * (180 / Math.PI);
}

function normalizeAngle(a) {
  while (a > 180) a -= 360;
  while (a < -180) a += 360;
  return a;
}

speedButton?.addEventListener("mousedown", start);
speedButton?.addEventListener("touchstart", start);
document.addEventListener("mousemove", move);
document.addEventListener("touchmove", move);
document.addEventListener("mouseup", end);
document.addEventListener("touchend", end);

function start(e) {
  const rect = speedButton.getBoundingClientRect();
  const center = { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
  lastAngle = getAngle(e, center);
  isDraggingSpeed = true;
  e.preventDefault();
}
function move(e) {
  if (!isDraggingSpeed) return;
  const rect = speedButton.getBoundingClientRect();
  const center = { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
  const currentAngle = getAngle(e, center);
  const delta = normalizeAngle(currentAngle - lastAngle);
  lastAngle = currentAngle;
  rotation = Math.max(minRotation, Math.min(maxRotation, rotation + delta));
  speedButton.style.transform = `rotate(${rotation}deg)`;
}
function end() { isDraggingSpeed = false; }

// --- Range sliders ---
range6s.forEach((range, idx) => {
  let dragging = false;
  const level = range.querySelector(".level");
  const update = e => {
    const rect = range.getBoundingClientRect();
    const y = e.clientY ?? e.touches[0].clientY;
    const percent = 1 - (y - rect.top) / rect.height;
    const bottom = Math.max(-135, Math.min(0, -135 + percent * 135));
    level.style.bottom = `${bottom}px`;
  };
  range.addEventListener("mousedown", e => { dragging = true; update(e); });
  range.addEventListener("touchstart", e => { dragging = true; update(e); });
  document.addEventListener("mousemove", e => dragging && update(e));
  document.addEventListener("touchmove", e => dragging && update(e));
  document.addEventListener("mouseup", () => {
    if (dragging) {
      dragging = false;
      savedRangeValues[idx] = level.style.bottom;
    }
  });
  document.addEventListener("touchend", () => {
    if (dragging) {
      dragging = false;
      savedRangeValues[idx] = level.style.bottom;
    }
  });
});

// --- Sequential Animation ---
let seqIntervalId6 = null;
let seqStart6 = 0;
let executed6 = [];

const steps6 = [
  { t: 0, fn: () => Mouse6 && (Mouse6.style.transform = "translate(-50px,-235px)") },
  { t: 400, fn: () => Mouse6?.querySelector(".cursor")?.classList.add("active") },
  { t: 700, fn: () => { Mouse6?.querySelector(".cursor")?.classList.remove("active"); Power6?.click(); } },
  
  { t: 1200, fn: () => Mouse6 && (Mouse6.style.transform = "translate(-10px,-95px)") },
  { t: 1600, fn: () => { Mouse6?.querySelector(".cursor")?.classList.add("active"); Minus6?.click(); } },
  { t: 2000, fn: () => { Mouse6?.querySelector(".cursor")?.classList.remove("active"); } },
  { t: 2300, fn: () => { Mouse6?.querySelector(".cursor")?.classList.add("active"); Minus6?.click(); } },
  { t: 2600, fn: () => { Mouse6?.querySelector(".cursor")?.classList.remove("active"); } },

  { t: 2900, fn: () => Mouse6 && (Mouse6.style.transform = "translate(30px,-40px)") },
  { t: 3300, fn: () => Toggle6?.click() },
  
  { t: 3700, fn: () => { Mouse6 && (Mouse6.style.transform = "translate(15px,25px)"); } },
  { t: 4200, fn: () => { Mouse6 && (Mouse6.style.transform = "translate(30px,40px)"); speedButton.style.transform = "rotate(70deg)"; } },
  
  { t: 4700, fn: () => { Mouse6 && (Mouse6.style.transform = "translate(-15px,150px)"); } },
  { t: 5100, fn: () => { Mouse6 && (Mouse6.style.transform = "translate(-15px,110px)"); range6s[0].querySelector(".level").style.bottom = "-30px"; } },
  { t: 5600, fn: () => { Mouse6 && (Mouse6.style.transform = "translate(7px,120px)"); } },
  { t: 6000, fn: () => { Mouse6 && (Mouse6.style.transform = "translate(7px,140px)"); range6s[1].querySelector(".level").style.bottom = "-90px"; } },

  { t: 6500, fn: () => { Mouse6 && (Mouse6.style.transform = "translate(20px,-95px)"); } },
  { t: 7000, fn: () => { Mouse6?.querySelector(".cursor")?.classList.add("active"); Reset6?.click(); } },
  { t: 7400, fn: () => { Mouse6?.querySelector(".cursor")?.classList.remove("active"); } },

  { t: 7800, fn: () => { Mouse6 && (Mouse6.style.transform = "translate(-50px,-235px)"); } },
  { t: 8200, fn: () => { Mouse6?.querySelector(".cursor")?.classList.add("active"); Power6?.click(); } },
  { t: 8600, fn: () => { Mouse6?.querySelector(".cursor")?.classList.remove("active"); } },
  { t: 9100, fn: () => { Mouse6 && (Mouse6.style.transform = "translate(180px,50px)"); } }
];

// --- Scheduler logic ---
function stopSequence6() {
  if (seqIntervalId6) {
    clearInterval(seqIntervalId6);
    seqIntervalId6 = null;
  }
  executed6 = [];
}

function tickOnce6() {
  if (!seqStart6) return;
  const elapsed = Date.now() - seqStart6;

  for (let i = 0; i < steps6.length; i++) {
    if (!executed6[i] && elapsed >= steps6[i].t) {
      try { steps6[i].fn(); } catch (e) { console.error("step6 error", e); }
      executed6[i] = true;
    }
  }

  if (executed6.every(Boolean)) stopSequence6();
}

function startSequence6() {
  stopSequence6();
  executed6 = new Array(steps6.length).fill(false);
  seqStart6 = Date.now();
  tickOnce6();
  seqIntervalId6 = setInterval(tickOnce6, 100);
}

// --- Handle visibility (pause/resume) ---
document.addEventListener("visibilitychange", () => {
  if (!document.hidden) tickOnce6();
});

// --- Public trigger ---
function Show6() {
  startSequence6();
}

// --- Start and repeat safely ---
Show6();
const repeater6 = setInterval(() => Show6(), 13000);

// --- Cleanup on unload ---
window.addEventListener("beforeunload", () => {
  clearInterval(repeater6);
  stopSequence6();
});

