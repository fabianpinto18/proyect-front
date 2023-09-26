import React from 'react';
import '../EstilosComponentes/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-description">
          <h3>Descripción de la Página</h3>
          <p>
            Esta es una descripción de la página que explica brevemente su
            propósito y contenido.
          </p>
        </div>
        <div className="footer-social">
          <h3>Redes Sociales</h3>
          <ul>
            <li>
              <a href="https://www.facebook.com/">Facebook</a>
            </li>
            <li>
              <a href="https://twitter.com/">Twitter</a>
            </li>
            <li>
              <a href="https://www.instagram.com/">Instagram</a>
            </li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3>Contacto</h3>
          <p>Correo electrónico: ejemplo@example.com</p>
          <p>Teléfono: +1234567890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Pagina de Compras. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
