import React from 'react'
import '../stylesheet/Imagen-con-boton.css'

const Imagenconboton = () => {
  return (
    <div className='contenedor'>
      <div className='contenedor-texto-boton'>
        <h2>La tradición de la pasta italiana, hecha con nuestras manos</h2>
        <button>Conoce nuestras recetas</button>      
      </div>
      <div className='contenedor-imagen'>
        <img src={require("../image/imagen-con-boton3.jpg")} alt="nuestras pastas" />
      </div>
    </div>
  )
}

export default Imagenconboton
