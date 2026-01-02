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

// toggle "read more" message
const btn = document.getElementById("toggleMessageBtn");
const more = document.getElementById("messageMore");
const preview = document.querySelector(".message-fade-preview");

btn.addEventListener("click", () => {
  const isOpen = more.style.display === "block";

  more.style.display = isOpen ? "none" : "block";
  preview.style.display = isOpen ? "block" : "none";
  btn.textContent = isOpen ? "続きを読む" : "閉じる";
});
