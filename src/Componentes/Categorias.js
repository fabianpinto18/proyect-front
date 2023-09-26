import React from "react";
import "../EstilosComponentes/Categorias.css";
import categoriaFoto from "../Imagenes/reloj1.jpg";

function Categorias() {
  return (
    <>
      <div className="container">
      <div className="div-box">
        <div className="image-container">
          <button className="button">Articulos 1</button>
        </div>
      </div>
      <div className="div-box">
        <div className="image-container">
          <button className="button">Articulos 2</button>
        </div>
      </div>
    </div>
    </>
  );
}

export default Categorias;
