setInterval(() => {
  const fallingItem = document.createElement("div");
  fallingItem.textContent = "🎮";
  fallingItem.className = "fallingItem";

  fallingItem.style.left = `${Math.random() * window.innerWidth}px`;
  fallingItem.style.fontSize = `${10 + Math.random() * 20}px`;
  fallingItem.style.animationDuration = `${3 + Math.random() * 5}s`;
  fallingItem.style.animationDelay = `${Math.random() * 4}s`;

  document.body.appendChild(fallingItem);

  fallingItem.addEventListener("animationend", () => fallingItem.remove());
}, 200);
