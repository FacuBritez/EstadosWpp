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
    nombre: "Fortunes of the Aztec",
    imagen: "image8.jpg",
    texto:
      "¡Descubre el misterio y la aventura de la antigua civilización azteca en el emocionante juego 'Fortunes of the Aztec'!✨✨",
    proveedor: "Pragmatic",
  },
  {
    nombre: "Book of Riches Deluxe Chapter",
    imagen: "image9.jpg",
    texto:
      "🎰🤩 No te pierdas la oportunidad de jugar 'Book of Riches Deluxe Chapter'. Con bonificaciones emocionantes y una jugabilidad envolvente, ¡tu camino hacia la riquezacomienza ahora! 🤑🌟",
    proveedor: "Ruby Play",
  },
  {
    nombre: "Fire Strike 2",
    imagen: "image10.jpg",
    texto:
      "🎰💰 Descubre el apasionante mundo de Fire Strike 2, el nuevo slot de Pragmatic Play que trae múltiples formas de ganar. ¡Aprovecha las bonificaciones y conviértete en el próximo gran ganador! ✨🔥",
    proveedor: "Pragmatic",
  },
  {
    nombre: "Clover Gold",
    imagen: "image11.jpg",
    texto:
      "🍀🧝🏻 ¡Embárcate en la aventura dorada de Clover Gold! Descubre tesoros escondidos y desafíos épicos. ¡Descárgalo ahora! 💰💎",
    proveedor: "Pragmatic",
  },
  {
    nombre: "Dragon Hero",
    imagen: "image12.jpg",
    texto:
      "🐉🔥 ¡Descubre la aventura épica con Dragon Hero! Sumérgete en un mundo lleno de dragones y tesoros. ¡Gira los carretes y siente la emoción de ganar a lo grande! 🤑💎",
    proveedor: "Pragmatic",
  },
  {
    nombre: "Take Olympus",
    imagen: "image13.jpg",
    texto:
      "¡🌟 ¡Prepárate para ascender al Monte Olimpo y reclamar las riquezas de los dioses en Take Olympus! 🏛️🎰",
    proveedor: "Desconocido",
  },
  {
    nombre: "Dragon Kingdom",
    imagen: "image14.jpg",
    texto:
      "🐉🤩 ¡Descubre el Reino de los Dragones! Sumérgete en la aventura con el nuevo slot 'Dragon Kingdom' de Pragmatic Play. ¡Gira los carretes reels y encuentra tesoros ocultos! 💎💰",
    proveedor: "Pragmatic",
  },
  {
    nombre: "Wild Wild Riches",
    imagen: "image15.jpg",
    texto:
      "🍀🌳💰 Entra en el Salvaje Oeste de Wild Wild Riches. Gira los carretes y busca riquezas ocultas en los campos verdes y las ruedas de la fortuna. ¿Te convertirás en un verdadero buscador de tesoros? 🍀🌳💰",
    proveedor: "Desconocido",
  },
  {
    nombre: "Wizard's Spell",
    imagen: "image16.jpg",
    texto:
      "🤑🪄 En Wizard's Spell, cada hechizo cuenta y cada elección importa. ¿Estás listo para definir tu legado mágico? 🧙🏻💫",
    proveedor: "Ruby Play",
  },

  {
    nombre: "El Dorado: The Lost City",
    imagen: "image17.jpg",
    texto:
      "🌟💎 ¡Descubre El Dorado: The Lost City! Embárcate en una aventura épica con esta emocionante tragamonedas de Pragmatic Play. Con gráficos deslumbrantes y multiplicadores que te harán brillar, ¡la ciudad de oro te espera! 🏆💰",
    proveedor: "Pragmatic",
  },
  {
    nombre: "Colossal Cash Zone",
    imagen: "image18.jpg",
    texto:
      "💪🏻🤑 ¡Descubre el mundo de Colossal Cash Zone! Sumérgete en una aventura llena de grandes premios y sorpresas colosales. ¡Juega ahora y siente la emoción! 🤩🎁",
    proveedor: "Pragmatic",
  },
  {
    nombre: "9 Masks of Fire",
    imagen: "image19.jpg",
    texto:
      "🤩🎰 ¡Caza 9 máscaras y desata la potencia de los giros gratis en 9 Masks of Fire! 💪🏻🤑",
    proveedor: "Microgaming",
  },
  {
    nombre: "Big Bass Bonanza",
    imagen: "image20.jpg",
    texto:
      "🎣💥 ¡Prepárate para una pesca llena de sorpresas en Big Bass Bonanza! 🐟💰 Lanza tu anzuelo y captura grandes premios mientras disfrutas de una emocionante aventura en el mar. 🌊🎉",
    proveedor: "Desconocido",
  },
  {
    nombre: "Mustang Gold",
    imagen: "image21.jpg",
    texto:
      "🐴💰 ¡Embárcate en una emocionante aventura en el oeste con Mustang Gold! 🌵✨ Caza grandes premios mientras dominas los salvajes giros y aprovechas el poder del oro. 🌟🤑",
    proveedor: "Desconocido",
  },
  {
    nombre: "Goblin Heist",
    imagen: "image22.jpg",
    texto:
      "🦹‍♂️💎 ¡Únete a los astutos goblins en su misión de robar grandes tesoros en Goblin Heist! 🏆🎉 Prepárate para una aventura llena de giros emocionantes y premios inesperados. 💰✨",
    proveedor: "Desconocido",
  },
  {
    nombre: "Medusa Money",
    imagen: "image23.jpg",
    texto:
      "🐍💰 ¡Enfréntate a la mirada de Medusa en Medusa Money y conviértete en el dueño de sus tesoros! 🏺✨ Con cada giro, prepárate para una experiencia llena de giros salvajes y grandes premios. 🤑🔮",
    proveedor: "Ruby Play",
  },
  {
    nombre: "",
    imagen: "image.jpg",
    texto:
      "",
    proveedor: "Desconocido",
  },
  {
    nombre: "",
    imagen: "image.jpg",
    texto:
      "",
    proveedor: "Desconocido",
  },
  {
    nombre: "",
    imagen: "image.jpg",
    texto:
      "",
    proveedor: "Desconocido",
  },
  {
    nombre: "",
    imagen: "image.jpg",
    texto:
      "",
    proveedor: "Desconocido",
  },
  {
    nombre: "",
    imagen: "image.jpg",
    texto:
      "",
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
