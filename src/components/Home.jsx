import React from 'react';
import './Home.css'; // Archivo CSS para estilos
import fondo from './images/Fondo.jpg'; // Importar la imagen de fondo

function Home() {
  return (
    <div className='Home' style={{ background: `url(${fondo})` }}>
        <div className="home-content">
            <p className='neon'>THE TAKEOFF OF YOUR BUSINESS STARTS HERE...</p>
        </div>
    </div>
  );
}

export default Home;
