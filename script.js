const hearts = document.querySelector(".hearts");
const balloons = document.querySelector(".balloons");
const confettiBox = document.querySelector(".confetti");

/* 🖤🤍 HEARTS */
function createHeart(){
  const h = document.createElement("span");
  h.innerHTML = Math.random() > 0.5 ? "🖤" : "🤍";
  h.style.left = Math.random()*100 + "vw";
  h.style.fontSize = (18 + Math.random()*10) + "px";
  h.style.animation = `riseSlow ${6 + Math.random()*4}s linear`;
  hearts.appendChild(h);
  setTimeout(()=>h.remove(),10000);
}

/* 🎈 BALLOONS – slow rise */
function createBalloon(){
  const b = document.createElement("span");
  b.innerHTML = "🎈";
  b.style.left = Math.random()*100 + "vw";
  b.style.fontSize = (24 + Math.random()*14) + "px";
  b.style.animation = `riseSlow ${10 + Math.random()*6}s linear`;
  balloons.appendChild(b);
  setTimeout(()=>b.remove(),16000);
}

/* 🎊 CONFETTI BLAST – every 3 seconds */
function confettiBlast(){
  for(let i=0;i<20;i++){
    const c = document.createElement("span");
    c.innerHTML = "🎊";
    c.style.left = Math.random()*100 + "vw";
    c.style.top = "-20px";
    c.style.fontSize = (14 + Math.random()*10) + "px";
    c.style.animation = `fall ${3 + Math.random()*2}s linear`;
    confettiBox.appendChild(c);
    setTimeout(()=>c.remove(),5000);
  }
}

/* Intervals */
setInterval(createHeart, 700);
setInterval(createBalloon, 1200);
setInterval(confettiBlast, 3000);
