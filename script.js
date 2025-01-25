const assetsPath = "./assets/";

async function fetchJuegos() {
  try {
    const response = await fetch("https://very-olva-facubritez-dda6723d.koyeb.app/api/juegos"); //La anterior: https://estados-backend.onrender.com/api/juegos
    return await response.json();
  } catch (error) {
    console.error("Error:", error);
  }
}

async function loadRandom() {
  // Fade out
  document.getElementById('randomImage').style.opacity = '0';
  document.getElementById('randomText').style.opacity = '0';

  const juegos = await fetchJuegos();
  if (juegos.length === 0) return;

  let randomItem;
  let intentos = 0;
  do {
    randomItem = juegos[Math.floor(Math.random() * juegos.length)];
    intentos++;
  } while ((!randomItem.texto || !randomItem.imagen) && intentos < 10);

  // Fade in después de 300ms
  setTimeout(() => {
    const imageUrl = `${assetsPath}${randomItem.imagen}`;
    
    document.getElementById("randomText").textContent = randomItem.texto;
    document.getElementById("randomImage").src = imageUrl;
    
    const downloadLink = document.getElementById("downloadLink");
    downloadLink.href = imageUrl;
    downloadLink.download = randomItem.nombre || "imagen_aleatoria.jpg";

    document.getElementById('randomImage').style.opacity = '1';
    document.getElementById('randomText').style.opacity = '1';
  }, 400);
}

function copyText() {
  const text = document.getElementById("randomText").innerText;
  if (text) {
    navigator.clipboard.writeText(text)
      .catch(err => console.error("Error al copiar:", err));
  }
}

function downloadAndCopy() {
  copyText();
  document.getElementById("downloadLink").click();
}

// Iniciar
loadRandom();