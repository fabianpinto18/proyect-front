import React from 'react';
import '../EstilosComponentes/Caracteristicas.css';
import {BiSolidPlaneTakeOff,BiTimer,BiSolidTruck,BiUserVoice} from 'react-icons/bi';

function Caracteristicas() {
  return (
    <div className="divs-container">
      <div className="division">
        <a><BiSolidPlaneTakeOff/></a>
        <p>Importadores Directos para Colombia</p>
      </div>
      <div className="division">
      <a><BiTimer/></a>
        <p>Respuesta de Inmediato</p>
      </div>
      <div className="division">
      <a><BiSolidTruck/></a>
        <p>Envios Sin costo adicional</p>
      </div>
      <div className="division">
      <a><BiUserVoice/></a>
        <p>Servicio Tecnico</p>
      </div>
    </div>
  );
}

export default Caracteristicas;
