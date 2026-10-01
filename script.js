// GSAP

let mm = gsap.matchMedia();

mm.add(
  {
    isMobile: "(max-width: 599px)",
    isTablet: "(min-width: 600px) and (max-width: 999px)",
    isDesktopSmall: "(min-width: 1000px) and (max-width: 1199px)",
    isDesktopLarge: "(min-width: 1200px)",
  },
  (context) => {
    let { isMobile, isTablet, isDesktopSmall, isDesktopLarge } =
      context.conditions;

    let targetX = 0;
    let targetY = 0;
    let duration = 2;

    if (isMobile) {
      targetY = 30;
    } else if (isTablet) {
      targetX = 100;
    } else if (isDesktopSmall) {
      targetX = 150;
    } else if (isDesktopLarge) {
      targetX = 200;
      duration = 3;
    }

    gsap.to("h1", {
      x: targetX,
      y: targetY,
      duration: duration,
      delay: isMobile ? 1 : 0,
      opacity: 1,
      ease: "bounce",
    });
  },
);

gsap.from(".animPar2", { x: 200, duration: 2, delay: 2, opacity: 0 });
gsap.to(".animBtn", { scale: 1.05, repeat: -1, duration: 1 });
gsap.to(".animPar1", { text: "Full-Stack Developer", duration: 3 });

// Personal info

document.addEventListener("DOMContentLoaded", function () {
  const checkbox = document.getElementById("privacy-policy");
  const submitBtn = document.getElementById("submit-btn");

  checkbox.addEventListener("change", function () {
    submitBtn.disabled = !this.checked;
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".carousel-slide");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  let currentIndex = 0;

  function changeSlide(direction) {
    slides[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + direction + slides.length) % slides.length;
    slides[currentIndex].classList.add("active");
  }

  prevBtn.addEventListener("click", (e) => {
    e.preventDefault();
    changeSlide(-1);
  });

  nextBtn.addEventListener("click", (e) => {
    e.preventDefault();
    changeSlide(1);
  });
});

// LANG SWITCHER

document.addEventListener("DOMContentLoaded", () => {
  const switcher = document.querySelector(".lang-switcher");
  const langButtons = document.querySelectorAll(".lang-btn");

  function changeLanguage(lang) {
    document.querySelectorAll("[data-i18n-en]").forEach((el) => {
      const translation = el.getAttribute(`data-i18n-${lang}`);

      if (translation) {
        el.textContent = translation;
      }
    });

    document.querySelectorAll("[data-i18n-aria-en]").forEach((el) => {
      const ariaTranslation = el.getAttribute(`data-i18n-aria-${lang}`);
      if (ariaTranslation) {
        el.setAttribute("aria-label", ariaTranslation);
      }
    });

    if (lang === "ru") {
      switcher.classList.remove("lang-en");
      switcher.classList.add("lang-ru");
    } else {
      switcher.classList.remove("lang-ru");
      switcher.classList.add("lang-en");
    }

    localStorage.setItem("site-lang", lang);
  }

  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetLang = btn.getAttribute("data-lang");
      changeLanguage(targetLang);
    });
  });

  const currentLang = localStorage.getItem("site-lang") || "en";
  changeLanguage(currentLang);
});

// Night / Day theme

document.addEventListener("DOMContentLoaded", () => {
  const btnNight = document.getElementById("theme-toggle-night");
  const btnDay = document.getElementById("theme-toggle-day");

  const savedTheme = localStorage.getItem("site-theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
  }

  function changeTheme(toDark) {
    if (toDark) {
      document.body.classList.add("dark-theme");
      localStorage.setItem("site-theme", "dark");
    } else {
      document.body.classList.remove("dark-theme");
      localStorage.setItem("site-theme", "light");
    }
  }

  if (btnNight) {
    btnNight.addEventListener("click", () => changeTheme(true));
  }

  if (btnDay) {
    btnDay.addEventListener("click", () => changeTheme(false));
  }
});
