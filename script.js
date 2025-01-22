const assetsPath = "./assets/";

// Función para cargar datos desde el backend
async function fetchJuegos() {
  try {
    const response = await fetch('http://localhost:3000/api/juegos');
    return await response.json();
  } catch (error) {
    console.error("Error al cargar juegos:", error);
    return []; // Retorna array vacío si hay error
  }
}

// Función para cargar una imagen y texto válidos
async function loadRandom() {
  const juegos = await fetchJuegos(); // Ahora los datos vienen del backend
  if (juegos.length === 0) return; // Si no hay datos, no hace nada

  let randomItem;
  do {
    randomItem = juegos[Math.floor(Math.random() * juegos.length)];
  } while (!randomItem.texto || !randomItem.imagen); // Reintenta si texto o imagen están vacíos

  const imageUrl = `${assetsPath}${randomItem.imagen}`;
  document.getElementById("randomText").textContent = randomItem.texto;
  document.getElementById("randomImage").src = imageUrl;

  // Actualizar el enlace de descarga dinámicamente
  const downloadLink = document.getElementById("downloadLink");
  downloadLink.href = imageUrl; // Usar la URL de la imagen
  downloadLink.download = randomItem.nombre || "imagen_aleatoria.jpg"; // Nombre del archivo o por defecto
}

// Función para copiar el texto al portapapeles
function copyText() {
  const text = document.getElementById("randomText").innerText;

  if (text) {
    navigator.clipboard
      .writeText(text)
      .catch((err) => console.error("Error al copiar texto:", err));
  }
}

function downloadAndCopy() {
  console.log("downloadAndCopy() llamado");
  // Copia el texto.
  copyText();

  // Simula un clic en el enlace para descargar la imagen.
  const downloadLink = document.getElementById("downloadLink");
  downloadLink.click();
}

// Cargar un elemento válido al iniciar
loadRandom();
