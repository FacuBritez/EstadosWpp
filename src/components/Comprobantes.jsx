import React, { useState } from "react";
import axios from "axios";
import "./Comprobantes.css";

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
      console.log("Archivo recibido");
  
      let base64File;
      if (file.type === "application/pdf") {
        console.log("Tipo de archivo: PDF \nprocesando PDF...");
        base64File = await processPdf(file); // Procesa el PDF y devuelve la imagen base64
        console.log("PDF procesado a base64");
      } else {
        console.log("Tipo de archivo: Imagen \nprocesando imagen...");
        const reader = new FileReader();
        reader.onloadend = async () => {
          base64File = reader.result.split(",")[1];
          console.log("Imagen convertida a base64");
          console.log("Enviando imagen al backend...");
          await sendToBackend(base64File, overlayType);
        };
        reader.readAsDataURL(file);
        return; // Salimos porque el envío se hará en el onloadend
      }
  
      // Si es PDF o ya tenemos el base64, enviamos al backend
      console.log("Enviando PDF convertido al backend...");
      await sendToBackend(base64File, overlayType);
    } catch (error) {
      console.error("Error al procesar la imagen:", error);
    }
  };
  
  const processPdf = async (file) => {
    console.log("Importando pdfjs...");
    const pdfjsLib = await import("pdfjs-dist/build/pdf");
    pdfjsLib.GlobalWorkerOptions.workerSrc = `${
      import.meta.env.BASE_URL
    }pdf.worker.js`;
  
    console.log("Cargando documento PDF...");
    const loadingTask = pdfjsLib.getDocument(URL.createObjectURL(file));
    const pdf = await loadingTask.promise;
  
    console.log("PDF cargado. Obteniendo página 1...");
    const page = await pdf.getPage(1);
    const viewport = page.getViewport({ scale: 1 });
  
    const canvas = document.createElement("canvas");
    canvas.width = viewport.width;
    canvas.height = viewport.height;
    const ctx = canvas.getContext("2d");
  
    console.log("Renderizando página 1...");
    await page.render({ canvasContext: ctx, viewport }).promise;
  
    console.log("Página renderizada.");
    const dataUrl = canvas.toDataURL("image/png");
    console.log("Canvas convertido a DataURL.");
    return dataUrl.split(",")[1]; // Solo devolvemos el contenido base64
  };
  
  const sendToBackend = async (base64File, overlayType) => {
    try {
      const response = await axios.post(
        "https://very-olva-facubritez-dda6723d.koyeb.app/api/procesar-imagen",
        {
          file: base64File,
          overlayType,
        }
      );
      console.log("Respuesta del backend:", response.data);
      setProcessedImage(response.data.processedImage); // Actualizamos la imagen procesada
    } catch (error) {
      console.error("Error al enviar la imagen al backend:", error);
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
                  <option value="NaranjaX 1">NX 1 (MP)</option>
                  <option value="NaranjaX 2">NX 2</option>
                  <option value="Personal Pay">Personal Pay</option>
                  {/* <option value="Claro Pay">Claro Pay</option> */}
                  <option value="Lemon">Lemon</option>
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
