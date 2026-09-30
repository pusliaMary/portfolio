let mm = gsap.matchMedia();

mm.add({
  isMobile: "(max-width: 599px)",
  isTablet: "(min-width: 600px) and (max-width: 999px)",
  isDesktopSmall: "(min-width: 1000px) and (max-width: 1199px)",
  isDesktopLarge: "(min-width: 1200px)"
}, (context) => {
  let { isMobile, isTablet, isDesktopSmall, isDesktopLarge } = context.conditions;
  
  let targetX = 0;
  let targetY = 0;
  let duration = 2;

  if (isMobile) { targetY = 30; }
  else if (isTablet) { targetX = 100; }
  else if (isDesktopSmall) { targetX = 150; }
  else if (isDesktopLarge) { targetX = 200; duration = 3; }

  gsap.to("h1", {
    x: targetX,
    y: targetY,
    duration: duration,
    delay: isMobile ? 1 : 0,
    opacity: 1,
    ease: "bounce"
  });
});

gsap.from(".animPar2", { x: 200, duration: 2, delay: 2, opacity: 0 });
gsap.to(".animBtn", { scale: 1.05, repeat: -1, duration: 1 });
gsap.to(".animPar1", { text: "Web developer", duration: 3 });

// Personal info
document.addEventListener('DOMContentLoaded', function() {
  const checkbox = document.getElementById('privacy-policy');
  const submitBtn = document.getElementById('submit-btn');

  checkbox.addEventListener('change', function() {
    submitBtn.disabled = !this.checked;
  });
});



