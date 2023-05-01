import React from "react";
import imagen from "../image/imagen-con-boton3.jpg";

const Imagenconboton = () => {
  return (
    <div className="flex flex-col flex-wrap items-center w-screen mt-20 bg-grey md:flex-row">
      <div className="h-auto font-serif italic md:w-1/2 md:h-auto">
        <h2 className="p-3 text-2xl text-center text-red sm:mx-2 md:text-3xl md:text-left md:px-4">
          La tradición de la pasta italiana, hecha con nuestras manos
        </h2>
        <button className="w-auto h-2rem mb-10 p-2 text-xs text-grey duration-300 rounded-md bg-violet md:hover:scale-105 hover:ease-linear md:text-lg md:mt-12">
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
