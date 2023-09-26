import React from 'react';
import '../EstilosComponentes/Card.css'


function Card({ productName, price, imageUrl, descripcion }) {
  return (
    <div className="shopping-card">
      <img src={imageUrl} alt={productName} className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{productName}</h3>
        <p className="descripcion">{descripcion}</p>
        <p className="product-price">${price}</p>
        <button className="btn success add-to-cart-button">Agregar al carrito</button>
      </div>
    </div>
  );
}

export default Card;
