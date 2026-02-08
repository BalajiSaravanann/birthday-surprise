const heartsContainer = document.querySelector(".hearts");

function createHeart(){
  const heart = document.createElement("span");

  // 🖤 = you, 🤍 = her
  heart.innerHTML = Math.random() > 0.5 ? "🖤" : "🤍";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (18 + Math.random() * 10) + "px";
  heart.style.animationDuration = (5 + Math.random() * 4) + "s";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 9000);
}

setInterval(createHeart, 600);
