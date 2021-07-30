const bg = document.querySelector("body");
const colors = ["#2ecc71", "#3498db", "#e67e22"];

function resizee() {
  const width = window.innerWidth;
  if (width < 700) {
    bg.style.backgroundColor = colors[0];
  } else if (width >= 700 && width < 900) {
    bg.style.backgroundColor = colors[1];
  } else {
    bg.style.backgroundColor = colors[2];
  }
}

window.addEventListener("resize", resizee);
