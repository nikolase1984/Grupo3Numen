import React from 'react'
import imagen from '../image/imagen-con-boton3.jpg'

const Imagenconboton = () => {
  return (
    <div className='flex flex-col overflow-hidden md:flex-row md:w-screen ' >
    <div className= 'font-serif italic h-1/2 bg-celeste md:w-1/2 md:h-auto'>
      <h2 className='my-20 text-2xl text-center text-red-600 sm:mx-2 xl:text-4xl xl:text-left xl:px-4' >La tradición de la pasta italiana, hecha con nuestras manos</h2>
      <button className='w-auto mb-16 text-sm duration-300 bg-violeta md:hover:scale-105 hover:ease-linear lg:mt-12'>CONOCE NUESTRAS RECETAS</button>      
    </div>
    <div className='bg-slate-400 h1/2 md:w-1/2 '>
      <img className='object-cover w-full md:h-full 'src={imagen} alt="nuestras pastas" />
    </div>
  </div>
  )
}

export default Imagenconboton
