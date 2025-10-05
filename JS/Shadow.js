const Arrow2 = document.querySelector(".container2S .Arrow");
const SideNavbar2 = document.querySelector(".container2S .side-navbar");
const ItemMenu2s = document.querySelectorAll(".container2S .item.menu");
const Menu2s = document.querySelectorAll(".container2S .Menu");
const Text2s = document.querySelectorAll(".container2S .item .text");
const Mouse2 = document.querySelector(".container2S .mouse");

let activeTimeouts = [];
let loopInterval = null;

// Utility: clear all pending timeouts
function clearAllTimeouts() {
  activeTimeouts.forEach(id => clearTimeout(id));
  activeTimeouts = [];
}

// Safe setTimeout wrapper
function safeTimeout(fn, delay) {
  const id = setTimeout(fn, delay);
  activeTimeouts.push(id);
  return id;
}

// Reset all animation state instantly
function resetState() {
  clearAllTimeouts();
  Mouse2.querySelector(".cursor").classList.remove("active");
  SideNavbar2.classList.remove("active");
  ItemMenu2s.forEach(it => {
    it.classList.remove("active");
    it.querySelector(".item-btn").classList.remove("active");
  });
  Menu2s.forEach(m => m.classList.remove("active"));
  Text2s.forEach(t => (t.style.display = "none"));
  Mouse2.style.transform = "translate(0,0)";
}

// Core animation sequence
function Show2() {
  resetState();

  Mouse2.style.transform = "translate(-155px,-235px)";

  safeTimeout(() => {
    Mouse2.querySelector(".cursor").classList.add("active");
    safeTimeout(() => {
      SideNavbar2.classList.add("active");
      Mouse2.querySelector(".cursor").classList.remove("active");
    }, 300);

    safeTimeout(() => {
      Mouse2.style.transform = "translate(-110px,-140px)";
      safeTimeout(() => {
        Mouse2.querySelector(".cursor").classList.add("active");
        safeTimeout(() => {
          Mouse2.querySelector(".cursor").classList.remove("active");

          ItemMenu2s[0].classList.add("active");
          ItemMenu2s[0].querySelector(".item-btn").classList.add("active");

          safeTimeout(() => {
            Mouse2.style.transform = "translate(-110px,0)";
            safeTimeout(() => {
              Mouse2.querySelector(".cursor").classList.add("active");
              safeTimeout(() => {
                Mouse2.querySelector(".cursor").classList.remove("active");
                ItemMenu2s[0].classList.remove("active");
                ItemMenu2s[0].querySelector(".item-btn").classList.remove("active");

                ItemMenu2s[1].classList.add("active");
                ItemMenu2s[1].querySelector(".item-btn").classList.add("active");

                safeTimeout(() => {
                  Mouse2.style.transform = "translate(-110px,-110px)";
                  safeTimeout(() => {
                    Mouse2.querySelector(".cursor").classList.add("active");
                    safeTimeout(() => {
                      Mouse2.querySelector(".cursor").classList.remove("active");
                      ItemMenu2s[1].classList.remove("active");
                      ItemMenu2s[1].querySelector(".item-btn").classList.remove("active");

                      safeTimeout(() => {
                        Mouse2.style.transform = "translate(-90px,-235px)";
                        safeTimeout(() => {
                          Mouse2.querySelector(".cursor").classList.add("active");
                          safeTimeout(() => {
                            Mouse2.querySelector(".cursor").classList.remove("active");
                            SideNavbar2.classList.remove("active");

                            safeTimeout(() => {
                              Mouse2.style.transform = "translate(-175px,-110px)";
                              safeTimeout(() => {
                                Text2s[2].style.display = "flex";
                                safeTimeout(() => {
                                  Mouse2.querySelector(".cursor").classList.add("active");
                                  safeTimeout(() => {
                                    Mouse2.querySelector(".cursor").classList.remove("active");
                                    Menu2s[1].classList.add("active");
                                    ItemMenu2s[1].querySelector(".item-btn").classList.add("active");

                                    safeTimeout(() => {
                                      Mouse2.style.transform = "translate(-175px,-140px)";
                                      Text2s[2].style.display = "none";

                                      safeTimeout(() => {
                                        Text2s[1].style.display = "flex";
                                        safeTimeout(() => {
                                          Mouse2.querySelector(".cursor").classList.add("active");
                                          safeTimeout(() => {
                                            Mouse2.querySelector(".cursor").classList.remove("active");
                                            Menu2s[0].classList.add("active");
                                            ItemMenu2s[0].querySelector(".item-btn").classList.add("active");
                                            Menu2s[1].classList.remove("active");
                                            ItemMenu2s[1].querySelector(".item-btn").classList.remove("active");

                                            safeTimeout(() => {
                                              Mouse2.style.transform = "translate(-105px,-170px)";
                                              Text2s[1].style.display = "none";

                                              safeTimeout(() => {
                                                Mouse2.querySelector(".cursor").classList.add("active");
                                                safeTimeout(() => {
                                                  Mouse2.querySelector(".cursor").classList.remove("active");
                                                  Menu2s[0].classList.remove("active");
                                                  ItemMenu2s[0].querySelector(".item-btn").classList.remove("active");

                                                  safeTimeout(() => {
                                                    Mouse2.style.transform = "translate(0,0)";
                                                  }, 500);
                                                }, 300);
                                              }, 600);
                                            }, 600);
                                          }, 600);
                                        }, 200);
                                      }, 300);
                                    }, 600);
                                  }, 600);
                                }, 200);
                              }, 300);
                            }, 600);
                          }, 600);
                        }, 300);
                      }, 600);
                    }, 600);
                  }, 300);
                }, 600);
              }, 600);
            }, 300);
          }, 600);
        }, 600);
      }, 300);
    }, 500);
  }, 600);
}

// Run once, then loop safely
function startLoop() {
  clearInterval(loopInterval);
  clearAllTimeouts();
  Show2();
  loopInterval = setInterval(() => {
    Show2();
  }, 14000);
}

// Detect sleep/wake via visibilitychange
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    clearInterval(loopInterval);
    clearAllTimeouts();
  } else {
    startLoop(); // resync animation
  }
});

window.addEventListener("blur", () => {
  clearInterval(loopInterval);
  clearAllTimeouts();
});

window.addEventListener("focus", startLoop);

// start after small delay
safeTimeout(startLoop, 500);
