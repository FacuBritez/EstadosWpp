import React, { useState } from "react";
import "./App.css";
import Slots from "./components/Slots";
import Comprobantes from "./components/Comprobantes";

function App() {
  const [mostrarSlots, setMostrarSlots] = useState(true);

  const toggleComponente = () => {
    setMostrarSlots(!mostrarSlots);
  };

  /* Componentes separados
  return (
    <div className="App">
      <div className="toggle-button-container">
        <button onClick={toggleComponente} className="toggle-button">
          {mostrarSlots ? "Mostrar Comprobantes" : "Mostrar Slots"}
        </button>
      </div>
      {mostrarSlots ? <Slots /> : <Comprobantes />}
    </div>
  );
  */

  return (
    <div className="App">
      <div className="toggle-button-container">
        <button onClick={toggleComponente} className="toggle-button">
          {mostrarSlots ? "Mostrar Comprobantes" : "Mostrar Slots"}
        </button>
      </div>
      {mostrarSlots ? <Slots /> : <Comprobantes />}
    </div>
  );
  
}

export default App;
