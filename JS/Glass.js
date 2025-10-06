const SideNavbar3 = document.querySelector(".container3S .side-navbar");
const Item3s = document.querySelectorAll(".container3S .item.N");
const AccountSettings3 = document.querySelector(".container3S .account-settings");
const Settings3 = document.querySelector(".container3S .account .settings");
const Mouse3 = document.querySelector(".container3S .mouse");
const Ham = document.querySelector(".container3S .Ham");

let activeTimeouts3 = [];
let loopInterval3 = null;

// Utility: clear all pending timeouts
function clearAllTimeouts3() {
  activeTimeouts3.forEach(id => clearTimeout(id));
  activeTimeouts3 = [];
}

// Safe setTimeout wrapper
function safeTimeout3(fn, delay) {
  const id = setTimeout(fn, delay);
  activeTimeouts3.push(id);
  return id;
}

// Reset all animation states instantly
function resetState3() {
  clearAllTimeouts3();
  Mouse3.querySelector(".cursor").classList.remove("active");
  SideNavbar3.classList.remove("active");
  AccountSettings3.classList.remove("active");
  Item3s.forEach(i => i.classList.remove("active"));
  Settings3.querySelector(".circle").classList.remove("active");
  Ham.style.opacity = "1";
  Mouse3.style.transform = "translate(0,0)";
}

// Core animation sequence
function Show3() {
  resetState3();

  safeTimeout3(() => {
    Mouse3.style.transform = "translate(-140px,-270px)";

    safeTimeout3(() => {
      Mouse3.querySelector(".cursor").classList.add("active");

      safeTimeout3(() => {
        Mouse3.querySelector(".cursor").classList.remove("active");
        SideNavbar3.classList.add("active");
        Ham.style.opacity = "0";
      }, 300);

      safeTimeout3(() => {
        Mouse3.style.transform = "translate(-80px,-55px)";

        safeTimeout3(() => {
          Mouse3.querySelector(".cursor").classList.add("active");
          safeTimeout3(() => {
            Mouse3.querySelector(".cursor").classList.remove("active");

            Item3s[0].classList.remove("active");
            Item3s[1].classList.add("active");

            safeTimeout3(() => {
              Mouse3.style.transform = "translate(80px,200px)";
              safeTimeout3(() => {
                Mouse3.querySelector(".cursor").classList.add("active");
                Settings3.querySelector(".circle").classList.add("active");

                safeTimeout3(() => {
                  Mouse3.querySelector(".cursor").classList.remove("active");
                  Settings3.querySelector(".circle").classList.remove("active");

                  safeTimeout3(() => {
                    SideNavbar3.classList.remove("active");
                    AccountSettings3.classList.add("active");

                    safeTimeout3(() => {
                      Mouse3.style.transform = "translate(-110px,-240px)";
                      safeTimeout3(() => {
                        Mouse3.querySelector(".cursor").classList.add("active");
                        safeTimeout3(() => {
                          Mouse3.querySelector(".cursor").classList.remove("active");

                          safeTimeout3(() => {
                            SideNavbar3.classList.add("active");
                            AccountSettings3.classList.remove("active");

                            safeTimeout3(() => {
                              Mouse3.style.transform = "translate(-80px,-100px)";
                              safeTimeout3(() => {
                                Mouse3.querySelector(".cursor").classList.add("active");
                                safeTimeout3(() => {
                                  Mouse3.querySelector(".cursor").classList.remove("active");

                                  Item3s[0].classList.add("active");
                                  Item3s[1].classList.remove("active");

                                  safeTimeout3(() => {
                                    Mouse3.style.transform = "translate(90px,-245px)";
                                    safeTimeout3(() => {
                                      Mouse3.querySelector(".cursor").classList.add("active");
                                      safeTimeout3(() => {
                                        Mouse3.querySelector(".cursor").classList.remove("active");
                                        SideNavbar3.classList.remove("active");
                                        safeTimeout3(() => {
                                          Ham.style.opacity = "1";
                                          safeTimeout3(() => {
                                            Mouse3.style.transform = "translate(180px,50px)";
                                          }, 500);
                                        }, 400);
                                      }, 300);
                                    }, 500);
                                  }, 800);
                                }, 300);
                              }, 500);
                            }, 800);
                          }, 300);
                        }, 300);
                      }, 500);
                    }, 800);
                  }, 500);
                }, 600);
              }, 500);
            }, 800);
          }, 600);
        }, 500);
      }, 800);
    }, 400);
  }, 500);
}

// Run once, then loop safely
function startLoop3() {
  clearInterval(loopInterval3);
  clearAllTimeouts3();
  Show3();
  loopInterval3 = setInterval(() => {
    Show3();
  }, 11000);
}

// Detect sleep/wake via visibilitychange
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    clearInterval(loopInterval3);
    clearAllTimeouts3();
  } else {
    startLoop3(); // resync animation
  }
});

window.addEventListener("blur", () => {
  clearInterval(loopInterval3);
  clearAllTimeouts3();
});

window.addEventListener("focus", startLoop3);

// Start after small delay
safeTimeout3(startLoop3, 500);
