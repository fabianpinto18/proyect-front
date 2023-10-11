import logo from "../Imagenes/logo.jpg";
import logo2 from "../Imagenes/carros.png";
import "../EstilosComponentes/Nav.css";
import { BiShoppingBag, BiUser } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Nav({ contadorProductos }) {
  return (
    <>
      <div className="contenedorNav">
        <div className="login">
          <ul>
            <li>
              <NavLink className="loginA" to={"/Login"}>
                Login
                <BiUser />
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="primerNav">
          <ul>
            <li className="estilosliNav">
              <NavLink to={""}>Home</NavLink>
            </li>
            <li className="estilosliNav">
              <NavLink to={"/UserSupportForm"}>PQRS</NavLink>
            </li>
            <li className="estilosliNav">
              <NavLink to={""}>BLOG</NavLink>
            </li>
          </ul>
        </div>
        <div className="logo">
          <img src={logo}></img>
        </div>
        <div className="segundoNav">
          <ul>
            <li className="estilosliNav">
              <a href="#">SHOP</a>
            </li>
            <li className="estilosliNav">
              <a href="#">HEPL</a>
            </li>
            <li className="estilosliNav">
              <a href="#">CONTACT</a>
            </li>
          </ul>
        </div>
        <div className="carrito">
          <ul>
            <li>
              <NavLink className="carritoA" to={"CarritoCompras"}>
                Carrito
                <BiShoppingBag />
                <div className="carrito-contador">
          <span>{contadorProductos}</span>
        </div>
              </NavLink>
           
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Nav;
