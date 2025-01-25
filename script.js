const assetsPath = "./assets/";
let juegosCache = null; // Variable para almacenar los juegos

async function fetchJuegos() {
  try {
    const response = await fetch("https://very-olva-facubritez-dda6723d.koyeb.app/api/juegos");
    return await response.json();
  } catch (error) {
    console.error("Error:", error);
    return []; // Retorna array vacío en caso de error
  }
}

// Función para cargar y cachear los juegos al iniciar
async function initialize() {
  juegosCache = await fetchJuegos();
  loadRandom(); // Carga el primer juego después de obtener los datos
}

function loadRandom() {
  // Fade out
  document.getElementById('randomImage').style.opacity = '0';
  document.getElementById('randomText').style.opacity = '0';

  if (!juegosCache || juegosCache.length === 0) {
    console.error("No hay juegos disponibles.");
    return;
  }

  let randomItem;
  let intentos = 0;
  do {
    randomItem = juegosCache[Math.floor(Math.random() * juegosCache.length)];
    intentos++;
  } while ((!randomItem.texto || !randomItem.imagen) && intentos < 10);

  // Fade in
  setTimeout(() => {
    const imageUrl = `${assetsPath}${randomItem.imagen}`;
    
    document.getElementById("randomText").textContent = randomItem.texto;
    document.getElementById("randomImage").src = imageUrl;
    
    const downloadLink = document.getElementById("downloadLink");
    downloadLink.href = imageUrl;
    downloadLink.download = randomItem.nombre || "imagen_aleatoria.jpg";

    document.getElementById('randomImage').style.opacity = '1';
    document.getElementById('randomText').style.opacity = '1';
  }, 300);
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
initialize();