import React, { useState } from "react";
import axios from "axios";
import "./Comprobantes.css";

const overlays = {
  "NaranjaX 1": "NX 1 (MP)",
  "NaranjaX 2": "NX 2",
  "Personal Pay": "Personal Pay",
  "Claro Pay": "Claro Pay (en desarrollo)",
  "Lemon": "Lemon (en desarrollo)"
};

function Comprobantes() {
  const [overlayType, setOverlayType] = useState("NaranjaX 1");
  const [processedImage, setProcessedImage] = useState(null);
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = async (e) => {
    e.preventDefault();
    setIsDragging(false);
    const newFile = e.dataTransfer.files[0];
    if (
      newFile &&
      (newFile.type.startsWith("image/") || newFile.type === "application/pdf")
    ) {
      setFile(newFile);
      await updateImage(newFile, overlayType);
    }
  };

  const handleFileChange = async (e) => {
    const newFile = e.target.files[0];
    if (newFile) {
      setFile(newFile);
      await updateImage(newFile, overlayType);
    }
  };

  const handleOverlayChange = async (e) => {
    setOverlayType(e.target.value);
    if (file) {
      await updateImage(file, e.target.value);
    }
  };

  const reloadEmojis = async () => {
    if (file) {
      await updateImage(file, overlayType);
    }
  };

  const updateImage = async (file, overlayType) => {
    try {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64File = reader.result.split(",")[1];
        const response = await axios.post("http://localhost:3000/api/procesar-imagen", {
          file: base64File,
          overlayType
        });
        setProcessedImage(response.data.processedImage);
      };
      reader.readAsDataURL(file);
    } catch (error) {
      console.error("Error al procesar la imagen:", error);
    }
  };

  return (
    <div
      className={`app-container ${isDragging ? "drag-over" : ""}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <h2 className="header">Procesador de Imagen</h2>
      <div className="controls-container">
        <div className="input-group">
          <label htmlFor="file-upload" className="file-upload-label">
            Seleccionar archivo
          </label>
          <input
            id="file-upload"
            type="file"
            accept="image/*,application/pdf"
            onChange={handleFileChange}
            className="file-input"
          />
        </div>
      </div>

      {processedImage && (
        <div className="canvas-container">
          <div className="button-container">
            <div className="input-group">
              <div className="input-group">
                <select value={overlayType} onChange={handleOverlayChange}>
                  {Object.keys(overlays).map((key) => (
                    <option key={key} value={key}>
                      {overlays[key]}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <a href={processedImage} download="imagen.png" className="button">
              Descargar Imagen
            </a>
            <button onClick={reloadEmojis} className="button">
              🔄️
            </button>
          </div>
          <h3>Imagen Procesada</h3>
          <img src={processedImage} alt="Procesada" />
        </div>
      )}
    </div>
  );
}

export default Comprobantes;