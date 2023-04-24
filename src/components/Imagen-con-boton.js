import React from 'react'
import imagen from '../image/imagen-con-boton3.jpg'

const Imagenconboton = () => {
  return (
    <div className='flex flex-col md:flex-row overflow-hidden ' >
    <div className= ' h-1/2 bg-celestin font-serif italic md:w-1/2 md:h-auto'>
      <h2 className='my-20 text-red-600 text-2xl text-center sm:mx-2 xl:text-4xl xl:text-left xl:px-4' >La tradición de la pasta italiana, hecha con nuestras manos</h2>
      <button className=' mb-16 bg-violeta w-auto text-sm md:hover:scale-105 hover:ease-linear duration-300 lg:mt-12'>CONOCE NUESTRAS RECETAS</button>      
    </div>
    <div className='bg-slate-400 h1/2 md:w-1/2 '>
      <img className='object-cover md:h-full w-full 'src={imagen} alt="nuestras pastas" />
    </div>
  </div>
  )
}

export default Imagenconboton
