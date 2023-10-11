import React from 'react';
import '../EstilosComponentes/Header.css'


function Header() {
  return (
    <header className="header">
      <div className="overlay"></div>
      <div className="content">
        <h1>Bienvenidos</h1>
        <p>Articulos</p>
      </div>
    </header>
  );
}

export default Header;
