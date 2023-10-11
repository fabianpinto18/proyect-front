import { BiShoppingBag, BiUser } from "react-icons/bi";
import React, { useState } from "react";
import Card from "./Card";
import Nav from "./Nav";
import reloj1 from "../Imagenes/reloj1.jpg";
import Footer from "./Footer";
import Caracteristicas from "./Caracteristicas";
import Categorias from "./Categorias";
import "../EstilosComponentes/App.css";
import Header from "./Header";
import UserSupportForm from "./UserSupportForm";
import Login from "./Login";
import CarritoCompras from "./CarritoCompras";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [carrito, setCarrito] = useState([]);
  const [contadorProductos, SetContandorProductos] = useState(0);
  const agregarProducto = (producto) => {
    setCarrito([...carrito, producto]);
    SetContandorProductos(contadorProductos + 1);
  };
  const eliminarProducto = (producto) => {
    const nuevoCarrito = carrito.filter((item) => item.id !== producto.id);
    setCarrito(nuevoCarrito);
    SetContandorProductos(contadorProductos - 1);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Nav contadorProductos={contadorProductos} />
              <Header />

              <div className="App">
                <div className="primerDiv">
                  <h1>Divs Centrados en Línea</h1>
                  <Caracteristicas />
                </div>
                <div>
                  <h1>Categorias</h1>
                  <Categorias />
                </div>
                <h1>Tarjetas de Compra</h1>
                <div className="shopping-card-container">
                  <Card agregarProducto={agregarProducto} />
                  {/* <Card
                    productName="Producto 1"
                    descripcion="Descripción del Producto"
                    price="19.99"
                    imageUrl={reloj1}
                  /> */}
                  {/* <Card
                    productName="Producto 2"
                    descripcion="Descripción del Producto"
                    price="24.99"
                    imageUrl={reloj1}
                  />
                  <Card
                    productName="Producto 3"
                    descripcion="Descripción del Producto"
                    price="24.99"
                    imageUrl={reloj1}
                  /> */}
                </div>
              </div>
              <div>{/* <Login/> */}</div>

              <div className="App">
                {/* Contenido de tu aplicación */}
                <Footer />
              </div>
            </>
          }
        />
        <Route path="/Login" element={<Login />} />
        <Route path="/UserSupportForm" element={<UserSupportForm />} />
        <Route
          path="/CarritoCompras"
          element={
            <CarritoCompras
              carrito={carrito}
              eliminarProducto={eliminarProducto}
              
              
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
