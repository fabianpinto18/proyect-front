import React, { useState, useEffect } from 'react';
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
  const [data, setData] = useState([]);
  function getProducts() {
    const response =  fetch("https://fakestoreapi.com/products", {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    }).then(res=>res.json())
        .then(json=>setData(json))
        .catch((error) => {
          //Error
          alert(JSON.stringify(error));
          console.error(error);
        });
  }
  useEffect(()=>{
    getProducts()
  },[]);

  return (
    <>
      <div className="cardsOrden">
      {data.map((element)=>(
        <div className="shopping-card-container" >
            <div className="shopping-card">
                  <div key={element.id} className="product-info">
                    <img src={element.image} alt={productName} className="product-image" />
                    <h3 className="product-name">{element.title}</h3>
                    {/* <p className="descripcion">{descripcion}</p> */}
                    <p className="product-price">${element.price}</p>
                    <button
                        className="btn success add-to-cart-button"
                        onClick={() => {agregarProducto(primerProducto)}}
                    >
                      Agregar al carrito
                    </button>
                  </div>
            </div>
        </div>
      ))}
      </div>
      </>
  );
}

export default Card;
