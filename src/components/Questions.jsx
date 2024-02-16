import React, { useState, useRef, useEffect } from 'react';
import './Questions.css'
function Questions() {
    // Estado para almacenar las respuestas
    const [respuestas, setRespuestas] = useState({
      pregunta1: '',
      pregunta2: '',
      pregunta3: '',
      pregunta4: '',
      pregunta5: ''
    });
  
    // Referencia para el primer campo de respuesta
    const primerCampoRef = useRef(null);
  
    // Efecto para enfocar el primer campo al cargar la página
    useEffect(() => {
      primerCampoRef.current.focus();
    }, []);
  
    // Función para manejar cambios en los campos de respuesta
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setRespuestas({
        ...respuestas,
        [name]: value
      });
    };
  
    // Función para manejar el envío del formulario
    const handleSubmit = (event) => {
      event.preventDefault();
      // Aquí podrías realizar cualquier acción que desees con las respuestas
      console.log('Respuestas:', respuestas);
    };
  
    return (
      <div className="App">
        <h1>Formulario de Respuestas</h1>
        <form onSubmit={handleSubmit}>
          <div className="pregunta">
            <label htmlFor="pregunta1">Pregunta 1:</label>
            <input
              type="text"
              id="pregunta1"
              name="pregunta1"
              value={respuestas.pregunta1}
              onChange={handleInputChange}
              ref={primerCampoRef} // Referencia al primer campo de entrada
            />
          </div>
          <div className="pregunta">
            <label htmlFor="pregunta2">Pregunta 2:</label>
            <input
              type="text"
              id="pregunta2"
              name="pregunta2"
              value={respuestas.pregunta2}
              onChange={handleInputChange}
            />
          </div>
          <div className="pregunta">
            <label htmlFor="pregunta3">Pregunta 3:</label>
            <input
              type="text"
              id="pregunta3"
              name="pregunta3"
              value={respuestas.pregunta3}
              onChange={handleInputChange}
            />
          </div>
          <div className="pregunta">
            <label htmlFor="pregunta4">Pregunta 4:</label>
            <input
              type="text"
              id="pregunta4"
              name="pregunta4"
              value={respuestas.pregunta4}
              onChange={handleInputChange}
            />
          </div>
          <div className="pregunta">
            <label htmlFor="pregunta5">Pregunta 5:</label>
            <input
              type="text"
              id="pregunta5"
              name="pregunta5"
              value={respuestas.pregunta5}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit">Enviar respuestas</button>
        </form>
        {/* Mostrar resumen de respuestas */}
        <div className="resumen">
          <h2>Resumen de respuestas</h2>
          <p>Pregunta 1: {respuestas.pregunta1}</p>
          <p>Pregunta 2: {respuestas.pregunta2}</p>
          <p>Pregunta 3: {respuestas.pregunta3}</p>
          <p>Pregunta 4: {respuestas.pregunta4}</p>
          <p>Pregunta 5: {respuestas.pregunta5}</p>
        </div>
      </div>
    );
  }
  
  export default Questions;
