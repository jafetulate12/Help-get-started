import React, { useState } from 'react';
import './Carousel.css'; // Importa tus estilos CSS
import work1 from './images/work1.jpg';
import work2 from './images/work2.jpg';
import work3 from './images/work3.jpg';
import work4 from './images/work4.jpg';
import work5 from './images/work5.jpg';

function Carousel() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [work1, work2, work3, work4, work5];

  const nextSlide = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="carousel-container">
      <div className="image-container">
        {images.map((image, index) => (
          <div key={index} className={`slide ${index === currentImage ? 'active' : ''}`}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className="next-button" onClick={nextSlide}>Siguiente</button>
    </div>
  );
}

export default Carousel;



