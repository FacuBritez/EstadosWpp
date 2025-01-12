const assetsPath = "./assets/";
const juegos = [
  {
    nombre: "Mayan Cache",
    imagen: "image1.jpg",
    texto:
      "💎🤩 ¡Descubre el tesoro oculto en Mayan Cache de Ruby Play! Adéntrate en un mundo lleno de misterios y recompensas que te dejarán sin aliento. ¡No te pierdas la oportunidad de desenterrar tesoros únicos! 🐯🔥",
    proveedor: "Ruby Play",
  },
  {
    nombre: "Aladino",
    imagen: "image2.jpg",
    texto:
      "👳‍♂️💎 ¡Aventuras mágicas te esperan! Únete a Aladino en su viaje para derrotar al hechicero y descubrir tesoros ocultos. ¡Descubre tu destino ahora!🔮🤑",
    proveedor: "MGM",
  },
  {
    nombre: "Gravity Bonanza",
    imagen: "image3.jpg",
    texto:
      "🌌🚀 ¡Súbete a Gravity Bonanza Slot! 🎰💫 ¡Gira y experimenta la gravedad de grandes premios! 💰🌟 ¡Diversión cósmica te espera! 🪐🎉",
    proveedor: "Betsoft",
  },
  {
    nombre: "Egyptian Sun",
    imagen: "image4.jpg",
    texto:
      "🤑🍀 ¿Estás listo para conquistar las pirámides? Únete a la aventura de Egyptian Sun y desvela los secretos de una civilización perdida. ¡Tu viaje comienza hoy!🏺✨",
    proveedor: "Ruby Play",
  },
  {
    nombre: "Magic Journey",
    imagen: "image5.jpg",
    texto:
      "✨🎮¡Embárcate en una aventura mágica con 'Magic Journey' 🐒🎰 Únete al Rey Mono en un emocionante viaje lleno de sorpresas y premios asombrosos. 🐒🎰",
    proveedor: "Desconocido",
  },
  {
    nombre: "Gold Party",
    imagen: "image6.jpg",
    texto:
      "🧝🏻🌈 ¡Haz cada segundo contar! Gold Party te trae diversión, emoción y la posibilidad de ganar recompensas fabulosas. ¡Invita a tus amigos y comiencen la fiesta! 🤑✨",
    proveedor: "Pragmatic",
  },
  {
    nombre: "Irish Charms",
    imagen: "image7.png",
    texto:
      "🍀🎰 ¡Descubre la magia de Irlanda con Irish Charms! Sumérgete en un mundo lleno de tréboles, duendes y grandes premios. ¡Gira los carretes y deja que la suerte irlandesa te sonría! 🏆🇮🇪",
    proveedor: "Pragmatic",
  },
  {
    nombre: "",
    imagen: "image7.jpg",
    texto: "",
    proveedor: "Desconocido",
  },
];

// Función para cargar una imagen y texto válidos
function loadRandom() {
  let randomItem;
  do {
    randomItem = juegos[Math.floor(Math.random() * juegos.length)];
  } while (!randomItem.texto || !randomItem.imagen); // Reintenta si texto o imagen están vacíos

  document.getElementById("randomText").innerText = randomItem.texto;
  document.getElementById("randomImage").src = assetsPath + randomItem.imagen;

  // Actualizar el enlace de descarga
  const downloadLink = document.getElementById("downloadBtn");
  downloadLink.href = assetsPath + randomItem.imagen;
  downloadLink.download = randomItem.imagen; // Asigna el nombre de archivo para la descarga
}

// Función para copiar el texto al portapapeles
function copyText() {
  const text = document.getElementById("randomText").innerText;
  const messageElement = document.getElementById("copyMessage");

  if (text) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        messageElement.style.display = "block"; // Mostrar mensaje
        setTimeout(() => {
          messageElement.style.display = "none"; // Ocultar mensaje después de 2 segundos
        }, 2000);
      })
      .catch((err) => console.error("Error al copiar texto:", err));
  } else {
    messageElement.style.color = "red"; // Cambiar color si no hay texto
    messageElement.innerText = "No hay texto para copiar.";
    messageElement.style.display = "block";
    setTimeout(() => {
      messageElement.style.display = "none"; // Ocultar mensaje después de 2 segundos
    }, 2000);
  }
}

// Cargar un elemento válido al iniciar
loadRandom();
