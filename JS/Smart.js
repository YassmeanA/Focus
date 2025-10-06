
  const Mouse5 = container5.querySelector(".mouse");
  const ItemContainer5 = container5.querySelector(".item-container");
  const ItemList5 = container5.querySelector(".item-list");
  const Item5s = container5.querySelectorAll(".item");
  const Rect5s = container5.querySelectorAll("svg rect");
  const Detail5s = container5.querySelector(".details");
  const detail5s = container5.querySelectorAll(".details-list");
  const Power5s = container5.querySelectorAll(".power");
  const AirConditioner5s = container5.querySelectorAll(".air-conditioner");
  const Back5 = container5.querySelector(".back5");
  const BACK5 = container5.querySelector(".Back");
  const Section5s = container5.querySelectorAll(".Section");
  const SectionContainer5 = container5.querySelector(".section-container");
  const SectionList5 = container5.querySelector(".section-list");
  const Slide5s = container5.querySelectorAll(".slide");
  const State5s = container5.querySelectorAll(".X .text2");

  // --- Helpers ---
  function state5() {
    if (detail5s[1]?.querySelector(".air-conditioner .power")?.classList.contains("active")) {
      State5s[1].innerHTML = "On";
    } else {
      State5s[1].innerHTML = "Off";
    }
  }

  function cursorBlink5(ms = 300) {
    const c = Mouse5?.querySelector(".cursor");
    c?.classList.add("active");
    setTimeout(() => c?.classList.remove("active"), ms);
  }

  // --- Initial static setup ---
  state5();
  SectionList5?.classList.remove("active");
  SectionContainer5?.classList.remove("active");
  container5.querySelector(".logo")?.style.setProperty("display", "none");

  Rect5s.forEach(r => {
    r.setAttribute("rx", "10");
    r.setAttribute("ry", "10");
    r.setAttribute("stroke-width", "1");
  });

  // --- Animation Steps ---
  const steps5 = [
    { t: 0, fn: () => {
        SectionContainer5?.classList.add("active");
        container5.querySelector(".logo").style.display = "flex";
      }
    },
    { t: 500, fn: () => SectionList5?.classList.add("active") },

    { t: 1000, fn: () => Mouse5 && (Mouse5.style.transform = "translate(-90px,-150px)") },
    { t: 1500, fn: () => {
        cursorBlink5();
        Section5s[0]?.click();
      }
    },

    { t: 2000, fn: () => Mouse5 && (Mouse5.style.transform = "translate(90px,-160px)") },
    { t: 2500, fn: () => {
        cursorBlink5();
        Item5s[1]?.click();
      }
    },

    { t: 3500, fn: () => Mouse5 && (Mouse5.style.transform = "translate(0,260px)") },
    { t: 4000, fn: () => {
        Mouse5.style.transform = "translate(0,10px)";
        Back5.style.transform = "translateY(-250px)";
        detail5s[1].style.transform = "translateY(-250px)";
      }
    },

    { t: 4500, fn: () => {
        Mouse5.style.transform = "translate(35px,-25px)";
        cursorBlink5();
        AirConditioner5s[0]?.querySelector(".minus")?.click();
        AirConditioner5s[0]?.querySelector(".minus")?.classList.add("active");
        setTimeout(() => AirConditioner5s[0]?.querySelector(".minus")?.classList.remove("active"), 600);
      }
    },

    { t: 5500, fn: () => {
        cursorBlink5();
        AirConditioner5s[0]?.querySelector(".minus")?.click();
      }
    },

    { t: 6500, fn: () => {
        Mouse5.style.transform = "translate(-90px,160px)";
        cursorBlink5();
        Power5s[1]?.click();
      }
    },

    { t: 7500, fn: () => Mouse5 && (Mouse5.style.transform = "translate(0,-100px)") },
    { t: 8000, fn: () => {
        Mouse5.style.transform = "translate(0,100px)";
        Back5.style.transform = "translateY(0px)";
        detail5s[1].style.transform = "translateY(0px)";
      }
    },

    { t: 8500, fn: () => {
        Mouse5.style.transform = "translate(130px,-260px)";
        cursorBlink5();
        Back5.classList.add("active");
        Back5.click();
        setTimeout(() => Back5.classList.remove("active"), 600);
      }
    },

    { t: 9500, fn: () => {
        AirConditioner5s[0]?.querySelector(".plus")?.click();
        AirConditioner5s[0]?.querySelector(".plus")?.click();
        Power5s[1]?.click();
        Mouse5.style.transform = "translate(-80px,140px)";
      }
    },

    { t: 10000, fn: () => {
        cursorBlink5();
        Item5s[4]?.click();
      }
    },

    { t: 11000, fn: () => {
        Mouse5.style.transform = "translate(0,250px)";
      }
    },
    { t: 11500, fn: () => {
        Mouse5.style.transform = "translate(0,-250px)";
        Back5.style.transform = "translateY(-500px)";
        detail5s[4].style.transform = "translateY(-500px)";
      }
    },
    { t: 12000, fn: () => {
        Mouse5.style.transform = "translate(0,250px)";
        Back5.style.transform = "translateY(0px)";
        detail5s[4].style.transform = "translateY(0px)";
      }
    },

    { t: 13000, fn: () => {
        Mouse5.style.transform = "translate(130px,-260px)";
        cursorBlink5();
        Back5.classList.add("active");
        Back5.click();
        setTimeout(() => Back5.classList.remove("active"), 600);
      }
    },

    { t: 14000, fn: () => {
        cursorBlink5();
        BACK5.classList.add("active");
        BACK5.click();
        setTimeout(() => BACK5.classList.remove("active"), 600);
      }
    },

    { t: 15000, fn: () => {
        Mouse5.style.transform = "translate(180px,50px)";
        SectionContainer5.classList.remove("active");
      }
    },
    { t: 15500, fn: () => {
        SectionList5.classList.remove("active");
        container5.querySelector(".logo").style.display = "none";
      }
    }
  ];

  // --- Scheduler logic ---
  let seqStart5 = 0;
  let seqInterval5 = null;
  let executed5 = [];

  function stopSequence5() {
    if (seqInterval5) clearInterval(seqInterval5);
    seqInterval5 = null;
    executed5 = [];
  }

  function tickOnce5() {
    if (!seqStart5) return;
    const elapsed = Date.now() - seqStart5;
    for (let i = 0; i < steps5.length; i++) {
      if (!executed5[i] && elapsed >= steps5[i].t) {
        try { steps5[i].fn(); } catch (e) { console.error("step5 error", e); }
        executed5[i] = true;
      }
    }
    if (executed5.length === steps5.length && executed5.every(Boolean)) stopSequence5();
  }

  function startSequence5() {
    stopSequence5();
    executed5 = new Array(steps5.length).fill(false);
    seqStart5 = Date.now();
    tickOnce5();
    seqInterval5 = setInterval(tickOnce5, 100);
  }

  // --- Public trigger ---
  function Show5() {
    startSequence5();
  }

  // --- Start and repeat ---
  Show5();
  const repeater5 = setInterval(Show5, 23000);

  window.addEventListener("beforeunload", () => {
    clearInterval(repeater5);
    stopSequence5();
  });

