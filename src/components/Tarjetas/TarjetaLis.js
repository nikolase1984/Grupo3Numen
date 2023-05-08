import React from "react";
import { db } from "./PastCard";

function tarjetaList() {
  return (
    <div>
      <h3 className="h-24 pt-16 text-2xl bg-yellow text-black-300">NUESTROS PRODUCTOS</h3>
    <div className="flex flex-wrap items-center justify-around h-auto p-4 mb-16 md:items-center md:h-96 bg-yellow hover:shadow-lg">
      
      {db.map((tarjetadb) => (
        <div
          key={tarjetadb.id}
          /*className="h-16 rounded-md shadow-md mb-52 shadow-black w-34"*/
        >
          <div className="flex flex-col my-10 overflow-hidden bg-white rounded-lg shadow-md shadow-black ">
            <img className="w-32 h-28" src={tarjetadb.imagen} alt="Pastas" />
            <h2 className="my-2 font-extrabold text-violet-950">
              {tarjetadb.nombre}
            </h2>
            <p className="pb-4 font-medium text-violet-600">{tarjetadb.sabor}</p>
            <button className="w-20 mb-3 ml-6 rounded-md bg-violet text-zinc-300">
              <p className="pb-1">Carrito</p>
            </button>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}
export default tarjetaList;
