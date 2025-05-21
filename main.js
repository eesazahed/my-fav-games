setInterval(() => {
  let e = document.createElement("div");
  (e.textContent = "\uD83C\uDFAE"),
    (e.className = "fallingItem"),
    (e.style.left = `${Math.random() * window.innerWidth}px`),
    (e.style.fontSize = `${10 + 20 * Math.random()}px`),
    (e.style.animationDuration = `${3 + 5 * Math.random()}s`),
    (e.style.animationDelay = `${4 * Math.random()}s`),
    document.body.appendChild(e),
    e.addEventListener("animationend", () => e.remove());
}, 200);
