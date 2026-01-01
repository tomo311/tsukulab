// simple scroll animation
const fades = document.querySelectorAll(".fade");
const onScroll = () => {
  fades.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
};
window.addEventListener("scroll", onScroll);
onScroll();
