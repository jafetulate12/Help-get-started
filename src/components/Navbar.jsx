import React from 'react';
import './Navbar.css'; // Archivo CSS para estilos

function Navbar() {
  return (
    <header className="header">
      <a href="#" className="logo">BizJeet!</a>

      <div className="bx bx-menu" id="menu-icon"></div>
      <nav className="navbar">
        <a href="#">Home</a>
        <a href="#">About us</a>
        <a href="#">Create Bizz</a>
        <a href="#">Contact</a>

        <span className="active-nav"></span>
      </nav>
    </header>
  );
}

export default Navbar;
