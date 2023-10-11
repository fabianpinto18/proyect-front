import React, { useState } from 'react';
import '../EstilosComponentes/Card.css'
import imagenCards from "../Imagenes/reloj1.jpg";
import CarritoCompras from './CarritoCompras';


function Card({ productName, price, imageUrl, descripcion, agregarProducto }) {
  const [productos] = useState([
    { id: 1, imagen:  imagenCards , nombre: 'Ropa', precio: 100 },
    { id: 2, imagen:  imagenCards , nombre: 'Balon', precio: 100 },
    { id: 3, imagen:  imagenCards , nombre: 'Lapiz', precio: 100 },
  ]);
  
  // Obtén el primer elemento del array productos
  const primerProducto = productos[0];
  const segundoProducto = productos[1];
  const tercerProducto = productos[2];

  return (
    <>
    <div className="shopping-card-container" >
      {/* Renderiza solo el primer producto */}
      <div >
        <div className="shopping-card">
          <div key={primerProducto.id} className="product-info">
            <img src={primerProducto.imagen} alt={productName} className="product-image" />
            <h3 className="product-name">{primerProducto.nombre}</h3>
            {/* <p className="descripcion">{descripcion}</p> */}
            <p className="product-price">${primerProducto.precio}</p>
            <button
              className="btn success add-to-cart-button"
              onClick={() => {agregarProducto(primerProducto)}}
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>

      {/* Renderiza solo el segundo producto */}
      <div className="shopping-card-container">
        <div className="shopping-card">
          <div key={segundoProducto.id} className="product-info">
            <img src={imagenCards} alt={productName} className="product-image" />
            <h3 className="product-name">{segundoProducto.nombre}</h3>
            {/* <p className="descripcion">{descripcion}</p> */}
            <p className="product-price">${segundoProducto.precio}</p>
            <button
              className="btn success add-to-cart-button"
              onClick={() => agregarProducto(segundoProducto)}
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>

       {/* Renderiza solo el tercer producto */}
       <div className="shopping-card-container">
        <div className="shopping-card">
          <div key={tercerProducto.id} className="product-info">
            <img src={imagenCards} alt={productName} className="product-image" />
            <h3 className="product-name">{tercerProducto.nombre}</h3>
            {/* <p className="descripcion">{descripcion}</p> */}
            <p className="product-price">${tercerProducto.precio}</p>
            <button
              className="btn success add-to-cart-button"
              onClick={() => agregarProducto(tercerProducto)}
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Card;
