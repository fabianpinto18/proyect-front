import React,{useState} from "react";
import '../EstilosComponentes/Carrusel.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carrusel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };
  
    return (
      <div className="carousel">
        {/* <button onClick={prevSlide}>Anterior</button> */}
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
        <div className="textoCarrusel" ><h1>Hollaa</h1></div>
        {/* <button className="next-button" onClick={nextSlide}>Siguiente</button> */}
      </div>
    );
  };

export default Carrusel;
