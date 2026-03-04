window.addEventListener("load", () => {
  const text = document.querySelector(".text");
  const loader = document.querySelector(".loader");
  const body = document.body;
  const navbar = document.querySelector(".navbar-vertical");
  const fadeElements = document.querySelectorAll(".fade-in-section");

  // Loader animation
  setTimeout(() => {
    text.style.opacity = "1";

    setTimeout(() => {
      loader.style.opacity = "0";

      setTimeout(() => {
        loader.style.display = "none";
        body.style.background = "white";
      }, 800);
    }, 500);
  }, 1500);

  // Fonction fade-in
  function checkFadeIn() {
    fadeElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if(rect.top <= window.innerHeight*0.85) {
        el.classList.add("is-visible");
      }
    });
  }

  // Changement navbar selon scroll et fond
  function updateNavbarColor() {
    const bodyBg = window.getComputedStyle(body).backgroundColor;
    if(bodyBg === "rgb(255, 255, 255)") {
      navbar.classList.add("scrolled", "light-bg");
      navbar.classList.remove("dark-bg");
    } else {
      navbar.classList.add("scrolled", "dark-bg");
      navbar.classList.remove("light-bg");
    }
  }

  window.addEventListener("scroll", () => {
    if(window.scrollY>30) { updateNavbarColor(); } 
    else { navbar.classList.remove("scrolled","dark-bg","light-bg"); }
    checkFadeIn();
  });

  checkFadeIn();
});