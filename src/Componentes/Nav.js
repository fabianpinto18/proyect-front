import logo from '../Imagenes/logo.jpg';
import logo2 from '../Imagenes/carros.png'
import '../EstilosComponentes/Nav.css'
import {BiShoppingBag,BiUser} from 'react-icons/bi';

function Nav() {
  return (
    <>
      <div className="contenedorNav">
      <div className="login">
        <ul>
          <li><a className='loginA' href="#">Login<BiUser/></a></li>
        </ul>
      </div>
        <div className="primerNav">
          <ul>
            <li className='estilosliNav'><a href='#'>HOME</a></li>
            <li className='estilosliNav'><a href='#'>PAGES</a></li>
            <li className='estilosliNav'><a href='#'>BLOG</a></li>
          </ul>
        </div>
        <div className="logo">
          <img src={logo2}></img>
        </div>
        <div className="segundoNav">
          <ul>
            <li className='estilosliNav'><a href='#'>SHOP</a></li>
            <li className='estilosliNav'><a href='#'>HEPL</a></li>
            <li className='estilosliNav'><a href='#'>CONTACT</a></li>
          </ul>
        </div>
        <div className="carrito">
        <ul>
          <li><a className='carritoA' href="#">Carrito<BiShoppingBag/></a></li>
        </ul>
        </div>
      </div>
      
    </>
  );
}

export default Nav;