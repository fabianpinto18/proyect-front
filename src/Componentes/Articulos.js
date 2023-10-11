import React, { useState } from 'react';
import '../EstilosComponentes/Articulos.css'

// Datos de ejemplo de los artículos
const articulos = [
  {
    id: 1,
    nombre: 'Producto 1',
    descripcion: 'Descripción del producto 1.',
    precio: 10.99,
  },
  {
    id: 2,
    nombre: 'Producto 2',
    descripcion: 'Descripción del producto 2.',
    precio: 15.99,
  },
  {
    id: 3,
    nombre: 'Producto 3',
    descripcion: 'Descripción del producto 3.',
    precio: 20.99,
  },
];

function Articulos() {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    // Clonar el carrito actual y agregar el producto
    const nuevoCarrito = [...carrito, producto];
    setCarrito(nuevoCarrito);
  };

  return (
    <div>
      <h2>Artículos Disponibles</h2>
      <div className="articulos-container">
        {articulos.map((articulo) => (
          <div className="articulo-card" key={articulo.id}>
            <h3>{articulo.nombre}</h3>
            <p>{articulo.descripcion}</p>
            <p>Precio: ${articulo.precio.toFixed(2)}</p>
            <button onClick={() => agregarAlCarrito(articulo)}>Comprar</button>
          </div>
        ))}
      </div>
      <h2>Carrito de Compras</h2>
      <div className="carrito-container">
        {carrito.map((item) => (
          <div className="carrito-item" key={item.id}>
            <p>{item.nombre} - ${item.precio.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Articulos;
