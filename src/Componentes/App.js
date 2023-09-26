import { BiShoppingBag, BiUser } from "react-icons/bi";
import Card from "./Card";
import Nav from "./Nav";
import reloj1 from "../Imagenes/reloj1.jpg";
import Footer from "./Footer";
import Caracteristicas from "./Caracteristicas";
import Categorias from "./Categorias";
import '../EstilosComponentes/App.css'
import Header from "./Header";
function App() {
  
  return (
    <>
      <Nav />
      {/* <Carrusel images={images} /> */}
      <div>
      <Header />
      
    </div>
      <div className="App">
        <div className="primerDiv">
          <h1>Divs Centrados en Línea</h1>
          <Caracteristicas />
        </div>
        <div>
          <h1>Categorias</h1>
          <Categorias/>
        </div>
        <h1>Tarjetas de Compra</h1>
        <div className="shopping-card-container">
          <Card
            productName="Producto 1"
            descripcion="Cualquer cosa que sea ncesaria bobo hptaaa"
            price="19.99"
            imageUrl={reloj1}
          />
          <Card
            productName="Producto 2"
            descripcion="Cualquer cosa que sea ncesaria bobo hptaaa"
            price="24.99"
            imageUrl={reloj1}
          />
          <Card
            productName="Producto 3"
            descripcion="Cualquer cosa que sea ncesaria bobo hptaaa"
            price="24.99"
            imageUrl={reloj1}
          />

          
        </div>
      </div>
      <div className="App">
       
        <Footer />
      </div>
      
    </>
  );
}

export default App;
