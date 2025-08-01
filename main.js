onload = () => {
  document.body.classList.remove("container");

  const audio = document.getElementById("bg-music");
  audio.play().catch(() => {
    // Algunas políticas de navegador evitan autoplay sin interacción
    console.log("Esperando interacción del usuario para reproducir audio.");
  });
};

function toggleMute() {
  const audio = document.getElementById("bg-music");
  const icon = document.querySelector(".music-icon");

  if (audio.muted) {
    audio.muted = false;
    icon.classList.add("playing");
  } else {
    audio.muted = true;
    icon.classList.remove("playing");
  }
}