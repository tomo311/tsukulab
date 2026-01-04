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

// hero Animation
const mainText = "Be Creative!";
const subTextContent = "つくる人になろう";

const typingTarget = document.getElementById("typing-text");
const subText = document.getElementById("sub-text");
const cursor = document.querySelector(".cursor");
const hero = document.querySelector('.hero');

let index = 0;
let subIndex = 0;
const speed = 120;

// カーソルを指定要素の直後へ（行の開始時に1回だけ）
function moveCursorAfter(el) {
  el.after(cursor);
}

// 1行目タイプ
function typeMain() {
  // 行の開始時のみカーソル移動
  if (index === 0) {
    moveCursorAfter(typingTarget);
    cursor.style.opacity = 1;
  }

  if (index < mainText.length) {
    typingTarget.textContent += mainText[index];
    index++;
    setTimeout(typeMain, speed);
  } else {
    // 1行目完了後の余韻
    setTimeout(() => {
      cursor.style.opacity = 0;

      setTimeout(() => {
        cursor.style.opacity = 1;
        typeSub();
      }, 200);

    }, 1200);
  }
}

// 2行目タイプ
function typeSub() {
  // 行の開始時のみカーソル移動
  if (subIndex === 0) {
    moveCursorAfter(subText);
  }

  if (subIndex < subTextContent.length) {
    subText.textContent += subTextContent[subIndex];
    subIndex++;
    setTimeout(typeSub, speed);
  } else {
    // 全部完了
    setTimeout(() => {
      cursor.style.display = "none";
      hero.classList.add('bg-expand');
    }, 800);
  }
}

// 開始
typeMain();
