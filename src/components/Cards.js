import React from 'react';
import '../stylesheet/Pastas.css';

function Pastas(props) {
  return (
    <div className='contenedor-pastas'>
      <img 
        className='imagen-pastas' 
        src={require(`../image/${props.imagen}.jpg`)} 
        alt='Foto de Pastas'/>
      <div className='contenedor-texto-pastas'>
        <p className='producto-pastas'> {props.nombre} <br/> {props.sabor}</p>
        <p className='contenido-pastas'>{props.rendimiento}</p>
        <p className='contenido-boton'></p><button>Comprar</button>
      </div>
  </div>  
  );    
}  

export default Pastas;