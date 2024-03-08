export function generateStars() {
  const sky = document.querySelector(".sky");
  if (sky) {
    sky.replaceChildren();
    for (let i = 0; i < 300; i++) {
      let size = randomIntFromInterval(2, 4);
      let opacity = randomIntFromInterval(25, 75);
      let top = randomIntFromInterval(1, 100);
      let left = randomIntFromInterval(1, 100);
      let offsetX = randomIntFromInterval(-3, 3);
      let offsetY = randomIntFromInterval(-3, 3);
      let star = document.createElement("div");
      star.classList.add("star");
      star.style.height = `${size}px`;
      star.style.width = `${size}px`;
      star.style.opacity = `${opacity}%`;
      star.style.top = `${top}%`;
      star.style.left = `${left}%`;
      star.style.transform = `translate(${offsetX}px, ${offsetY}px`;
      sky.appendChild(star);
    }
  }
}

function randomIntFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
