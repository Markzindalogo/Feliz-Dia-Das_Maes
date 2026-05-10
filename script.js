const button = document.getElementById("openBtn");
const music = document.getElementById("music");
const letter = document.getElementById("letter");

/* pega o vídeo (segunda memória) */
const video = document.querySelector(".card video");

/* ABRIR CARTINHA */

button.addEventListener("click", async () => {

  letter.style.display = "block";

  /* 🎵 música com fade in */
  try {
    music.volume = 0;
    await music.play();

    let vol = 0;
    const fade = setInterval(() => {
      if (vol < 0.5) {
        vol += 0.02;
        music.volume = vol;
      } else {
        clearInterval(fade);
      }
    }, 100);

  } catch (err) {
    console.log("Erro ao tocar música:", err);
  }

  /* 🎬 vídeo automático */
  if (video) {
    video.play().catch(err => {
      console.log("Erro ao tocar vídeo:", err);
    });
  }

});

/* FECHAR CARTINHA */

function closeLetter(){
  letter.style.display = "none";

  /* pausa vídeo */
  if (video) {
    video.pause();
  }
}

/* EMOJIS CAINDO */

function createHeart(){

  const heart = document.createElement("div");

  heart.classList.add("heart");

  heart.innerHTML =
  ["🤎","🌸","✨"][Math.floor(Math.random()*3)];

  heart.style.left =
  Math.random() * window.innerWidth + "px";

  heart.style.fontSize =
  Math.random() * 20 + 20 + "px";

  heart.style.animationDuration =
  Math.random() * 3 + 4 + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  },7000);

}

/* CRIA EMOJIS */

setInterval(createHeart, 300);