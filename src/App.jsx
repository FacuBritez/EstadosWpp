import React, { useState } from "react";
import "./App.css";
import Slots from "./components/Slots";
import Comprobantes from "./components/Comprobantes";

function App() {
  // Estado para controlar qué componente mostrar
  const [mostrarSlots, setMostrarSlots] = useState(true);

  // Función para alternar entre los componentes
  const toggleComponente = () => {
    setMostrarSlots(!mostrarSlots);
  };

  return (
    <div className="App">
      <div className="toggle-button-container">
        <button onClick={toggleComponente} className="toggle-button">
          {mostrarSlots ? "Mostrar Comprobantes" : "Mostrar Slots"}
        </button>
      </div>
      {/* Renderiza el componente basado en el estado */}
      {mostrarSlots ? <Slots /> : <Comprobantes />}
    </div>
  );
}

export default App;