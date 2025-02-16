import React, { useEffect, useRef } from "react";

const assetsPath = "/EstadosWpp/assets/slots/"; // Actualiza la ruta base
let juegosCache = null; // Variable para almacenar los juegos

async function fetchJuegos() {
  try {
    const response = await fetch(
      "https://very-olva-facubritez-dda6723d.koyeb.app/api/juegos"
    );
    return await response.json();
  } catch (error) {
    console.error("Error:", error);
    return [
      {
        imagen: "default.gif",
        texto: "y los jueguito??<br><br>⚠️Se cayó el servidor⚠️",
      },
    ];
  }
}

// Función para cargar y cachear los juegos al iniciar
async function initialize() {
  if (!juegosCache) {
    juegosCache = await fetchJuegos();
    loadRandom(); // Carga el primer juego después de obtener los datos
  }
}

let fadeOut = () => {
  const randomImage = document.getElementById("randomImage");
  const randomText = document.getElementById("randomText");
  if (randomImage && randomText) {
    randomImage.style.opacity = "0";
    randomText.style.opacity = "0";
  }
};

function loadRandom() {
  const randomImage = document.getElementById("randomImage");
  const randomText = document.getElementById("randomText");

  if (!randomImage || !randomText || !juegosCache) return;

  let randomItem;
  let intentos = 0;

  // Evita bucles infinitos en el caso de que no encuentre un slot válido
  do {
    randomItem = juegosCache[Math.floor(Math.random() * juegosCache.length)];
    intentos++;
  } while ((!randomItem.texto || !randomItem.imagen) && intentos < 10);

  // Fade out
  fadeOut();

  // Fade in
  setTimeout(() => {
    const imageUrl = `${assetsPath}${randomItem.imagen}`;

    randomText.innerHTML = randomItem.texto;
    randomImage.src = imageUrl;

    const downloadLink = document.getElementById("downloadLink");
    downloadLink.href = imageUrl;
    downloadLink.download = randomItem.nombre || "imagen_aleatoria.jpg";

    randomImage.style.opacity = "1";
    randomText.style.opacity = "1";
  }, 300);
}

// Funciones para botones

function copyText() {
  const text = document.getElementById("randomText").innerText;
  if (text) {
    navigator.clipboard
      .writeText(text)
      .catch((err) => console.error("Error al copiar:", err));
  }
}

function downloadAndCopy() {
  copyText();
  document.getElementById("downloadLink").click();
}

function Slots() {
  const initializedRef = useRef(false);

  useEffect(() => {
    if (!initializedRef.current) {
      initialize();
      initializedRef.current = true;
    }
  }, []);

  return (
    <div className="slots">
      <h2>Slots Aleatorios</h2>
      <div className="container">
        <div className="button-container">
          <button onClick={loadRandom} id="loadRandom">
            <i className="fas fa-sync-alt"></i>
          </button>

          <button onClick={downloadAndCopy} className="button">
            💾imagen📋texto
          </button>

          <a id="downloadLink" className="button" download>
            💾Imagen
          </a>

          <button onClick={copyText} className="button">
            📋texto
          </button>
        </div>

        <div className="slot">
          <img id="randomImage" />
          <p id="randomText"></p>
        </div>
      </div>
    </div>
  );
}

export default Slots;