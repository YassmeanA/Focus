const Power6 = document.querySelector(".container6S .power button");
const ControlPanel6 = document.querySelector(".container6S .control-panel");
const Temp6 = document.querySelector(".container6S .screen .temp");
const Plus6 = document.querySelector(".container6S .plus");
const Minus6 = document.querySelector(".container6S .minus");
const Reset6 = document.querySelector(".container6S .reset");
const Toggle6 = document.querySelector(".container6S .Toggle");
const range6s = document.querySelectorAll('.container6S .range');
const speedButton = document.querySelector(".speed-button");
const Mouse6 = document.querySelector(".container6S .mouse");

let count = 22;
let savedRangeValues = Array.from(range6s) // Store each level's bottom value

savedRangeValues[0] = "-100px";
savedRangeValues[1] = "-50px";
savedRangeValues[2] = "-80px";
savedRangeValues[3] = "-100px";


// Power6 button Toggle6
Power6.addEventListener("click", () => {
  ControlPanel6.classList.remove("Reset6");

  if (ControlPanel6.classList.contains("active")) {
    ControlPanel6.classList.remove("active");
    range6s.forEach(range => {
      range.querySelector(".level").style.bottom = "-140px";
    });
  } else {
    ControlPanel6.classList.add("active");

    // Restore saved level values
    range6s.forEach((range, i) => {
      const level = range.querySelector(".level");
      level.style.bottom = savedRangeValues[i] || "-140px";
    });
  }
});

// Toggle6 swing
Toggle6.addEventListener("click", () => {
  Toggle6.classList.toggle("active");
});

// Temp6erature controls
Plus6.addEventListener("click", () => {
  if (count >= 30) return;
  count++;
  Temp6.innerHTML = count;
});

Minus6.addEventListener("click", () => {
  if (count <= 16) return;
  count--;
  Temp6.innerHTML = count;
});

// Reset6 all controls
Reset6.addEventListener("click", () => {
  ControlPanel6.classList.add("Reset6");
  Toggle6.classList.remove("active");

  count = 22;
  Temp6.innerHTML = count;

  const Reset6Values = ["-100px", "-50px", "-80px", "-100px"];
  range6s.forEach((range, i) => {
    const level = range.querySelector(".level");
    level.style.bottom = Reset6Values[i];
    savedRangeValues[i] = Reset6Values[i];
  });

  rotation = 0;
  speedButton.style.transform = `rotate(0deg)`;
});



// Fan speed control
let isDraggingSpeed = false;
let rotation = 0;
let lastAngle = 0;

const minRotation = -50;
const maxRotation = 150;

function getAngle(e, center) {
  const x = (e.touches ? e.touches[0].clientX : e.clientX) - center.x;
  const y = (e.touches ? e.touches[0].clientY : e.clientY) - center.y;
  return Math.atan2(y, x) * (180 / Math.PI);
}

function normalizeAngle(angle) {
  // Normalize angle between -180 and 180
  while (angle > 180) angle -= 360;
  while (angle < -180) angle += 360;
  return angle;
}

function onStart(e) {
  const rect = speedButton.getBoundingClientRect();
  const center = { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
  lastAngle = getAngle(e, center);
  isDraggingSpeed = true;
  e.preventDefault();
}

function onMove(e) {
  if (!isDraggingSpeed) return;

  const rect = speedButton.getBoundingClientRect();
  const center = { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
  const currentAngle = getAngle(e, center);
  let delta = normalizeAngle(currentAngle - lastAngle);
  lastAngle = currentAngle;

  rotation += delta;
  rotation = Math.max(minRotation, Math.min(maxRotation, rotation));
  speedButton.style.transform = `rotate(${rotation}deg)`;
}

function onEnd() {
  isDraggingSpeed = false;
}


// Reset6 on ControlPanel6 class change
const observer = new MutationObserver(() => {
  if (ControlPanel6.classList.contains("Reset6")) {
    rotation = 0;
    speedButton.style.transform = `rotate(0deg)`;
  }
});
observer.observe(ControlPanel6, { attributes: true, attributeFilter: ['class'] });


// Range drag behavior
range6s.forEach(range => {
  let isDraggingRange = false;

  range.addEventListener('Mouse6down', (e) => {
    isDraggingRange = true;
    updateLevel(e, range);
  });

  document.addEventListener('Mouse6move', (e) => {
    if (isDraggingRange) updateLevel(e, range);
  });

  document.addEventListener('Mouse6up', () => {
    if (!isDraggingRange) return;
    isDraggingRange = false;
    const index = Array.from(range6s).indexOf(range);
    const level = range.querySelector(".level");
    savedRangeValues[index] = level.style.bottom;
  });

  range.addEventListener('touchstart', (e) => {
    isDraggingRange = true;
    updateLevel(e.touches[0], range);
  });

  document.addEventListener('touchmove', (e) => {
    if (isDraggingRange) updateLevel(e.touches[0], range);
  });

  document.addEventListener('touchend', () => {
    if (!isDraggingRange) return;
    isDraggingRange = false;
    const index = Array.from(range6s).indexOf(range);
    const level = range.querySelector(".level");
    savedRangeValues[index] = level.style.bottom;
  });

  function updateLevel(e, rangeElement) {
    const rect = rangeElement.getBoundingClientRect();
    const level = rangeElement.querySelector('.level');
    const offset = e.clientY - rect.top;
    let percent = 1 - (offset / rect.height); // Top = 1, Bottom = 0
    percent = Math.max(0, Math.min(1, percent));
    const minBottom = -135;
    const maxBottom = 0;
    const bottomOffset = minBottom + percent * (maxBottom - minBottom);
    level.style.bottom = `${bottomOffset}px`;
  }
});


function Show6() {

setTimeout(() => {

Mouse6.style.transform="translate(-50px,-235px)";

setTimeout(() => {

Mouse6.querySelector(".cursor").classList.add("active");
Power6.classList.add("active");
Power6.click();

setTimeout(() => {

Mouse6.querySelector(".cursor").classList.remove("active");
Power6.classList.remove("active");

},600);

setTimeout(() => {

Mouse6.style.transform="translate(-10px,-95px)";

setTimeout(() => {

Mouse6.querySelector(".cursor").classList.add("active");
Minus6.classList.add("active");
Minus6.click();

setTimeout(() => {

Mouse6.querySelector(".cursor").classList.remove("active");
Minus6.classList.remove("active");

setTimeout(() => {

Mouse6.querySelector(".cursor").classList.add("active");
Minus6.classList.add("active");
Minus6.click();

setTimeout(() => {

Mouse6.querySelector(".cursor").classList.remove("active");
Minus6.classList.remove("active");

setTimeout(() => {

Mouse6.style.transform="translate(30px,-40px)";

setTimeout(() => {

Mouse6.querySelector(".cursor").classList.add("active");
Toggle6.click();

setTimeout(() => {

Mouse6.querySelector(".cursor").classList.remove("active");

},600);

setTimeout(() => {

Mouse6.style.transform="translate(15px,25px)";

setTimeout(() => {

Mouse6.style.transform="translate(30px,40px)";
speedButton.style.transform="rotate(70deg)";

setTimeout(() => {

Mouse6.style.transform="translate(-15px,150px)";

setTimeout(() => {

Mouse6.style.transform="translate(-15px,110px)";
range6s[0].querySelector(".level").style.bottom="-30px";

setTimeout(() => {

Mouse6.style.transform="translate(7px,120px)";

setTimeout(() => {

Mouse6.style.transform="translate(7px,140px)";
range6s[1].querySelector(".level").style.bottom="-90px";

setTimeout(() => {

Mouse6.style.transform="translate(20px,-95px)";

setTimeout(() => {

Mouse6.querySelector(".cursor").classList.add("active");
Reset6.classList.add("active");
Reset6.click();

setTimeout(() => {

Mouse6.querySelector(".cursor").classList.remove("active");
Reset6.classList.remove("active");

},600);

setTimeout(() => {

Mouse6.style.transform="translate(-50px,-235px)";

setTimeout(() => {

Mouse6.querySelector(".cursor").classList.add("active");
Power6.classList.add("active");
Power6.click();

setTimeout(() => {

Mouse6.querySelector(".cursor").classList.remove("active");
Power6.classList.remove("active");

},600);

setTimeout(() => {

Mouse6.style.transform="translate(180px,50px)";

},700);

},700);
},500);

},700);
},500);

},700);
},500);

},700);
},500);

},600);
},500);

},600);
},500);

},600);

},600);
},500);

},500);

},500);


},500);

},500);

}

Show6();
setInterval(() => {Show6();},13000);
