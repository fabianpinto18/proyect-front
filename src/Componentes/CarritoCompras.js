import React, { useState } from "react";
import "../EstilosComponentes/CarritoCompras.css";
import logo from '../Imagenes/logo.jpg'
import { BiArrowBack, BiUser } from "react-icons/bi";

function CarritoCompras({ carrito, eliminarProducto }) {
  return (
    <>
    <nav>
      
        
        <div className="icono-flecha">
        <BiArrowBack  />
        
        </div>
          
          <div className="centro">
          <span>Carrito de Compras</span>
          <img
            src={logo} // Reemplaza "ruta-de-tu-imagen.jpg" con la URL de tu imagen
            alt="Icono de carrito de compras"
            className="icono-carrito"
          />
          </div>
          
        
      
    </nav>
    <div className="contenedor">
      <h2>Carrito de Compras</h2>
      <div className="contenedorProductos">
        {carrito.length > 0 ? (
          <ul>
            {carrito.map((producto) => (
              <li className="liCarrito" key={producto.id}>
              <img src={producto.imagen} alt={producto.productName} className="product-image" />
                <h3 className="product-name">{producto.nombre}</h3> 
                <p className="product-price">${producto.precio}</p>
                <button className="btn success add-to-cart-button" onClick={() => eliminarProducto(producto)}>
                  Eliminar del Carrito
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No hay productos en el carrito.</p>
        )}
      </div>
    </div>
    
    

    </>
  );
}

export default CarritoCompras;
