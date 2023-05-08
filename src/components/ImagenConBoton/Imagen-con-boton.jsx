import React from "react";
import imagen from "../../image/imagen-con-boton3.jpg";
import Swal from 'sweetalert2'



const Imagenconboton = () => {
  return (
    <div className="flex flex-col flex-wrap items-center w-screen mt-20 bg-grey md:flex-row">
      <div className="h-auto font-serif italic md:w-1/2 md:h-auto">
        <h2 className="p-3 text-2xl text-center text-red sm:mx-2 md:text-3xl md:text-left md:px-4">
          La tradición de la pasta italiana, hecha con nuestras manos
        </h2>
        <button onClick={()=> {Swal.fire({
  title: 'Explora nuestro canal de Youtube y aprende todas nuestras recetas',
  width: 600,
  padding: '3em',
  color: 'red',
  background: '#fff url(https://static.vecteezy.com/system/resources/previews/002/297/060/non_2x/abstract-white-gradient-background-free-vector.jpg)',
  backdrop: `
    rgba(0,0,123,0.4)
    url("/images/nyan-cat.gif")
    left top
    no-repeat
  `
})}} className="w-auto p-2 mb-10 text-xs duration-300 rounded-md h-2rem text-grey bg-violet md:hover:scale-105 hover:ease-linear md:text-lg md:mt-12">
          CONOCE NUESTRAS RECETAS
        </button>
      </div>
      <div className="bg-slate-400 h1/2 md:w-1/2 ">
        <img
          className="object-cover w-full md:h-full "
          src={imagen}
          alt="nuestras pastas"
        />
      </div>
    </div>
  );
};

export default Imagenconboton;
