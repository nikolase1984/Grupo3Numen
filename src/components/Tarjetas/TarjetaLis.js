import React, { useState } from "react";
import { db } from "./PastCard";

function TarjetaList() {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  const eliminarDelCarrito = (productoAEliminar) => {
    const nuevoCarrito = carrito.filter(
      (producto) => producto.id !== productoAEliminar.id
    );
    setCarrito(nuevoCarrito);
  };
//cards y logica del carrito
  return (
    <div id="productos">
      <h3 className="h-24 pt-16 text-2xl bg-yellow text-black-300">
        NUESTROS PRODUCTOS
      </h3>
      <div className="flex flex-wrap items-center justify-around w-full h-auto p-4 mb-16 md:items-center md:h-96 bg-yellow hover:shadow-lg">
        {db.map((producto) => (
          <div key={producto.id}>
            <div className="flex flex-col my-10 overflow-hidden bg-white rounded-lg shadow-md md:w-52 md:h-64 shadow-black">
              <img className="object-cover w-32 h-36 md:w-56" src={producto.imagen} alt="Pastas" />
              <h2 className="my-1 font-extrabold text-violet-950">
                {producto.nombre}
              </h2>
              <p className="pb-3 font-medium text-violet-600">
                {producto.sabor}
              </p>
              <button
                onClick={() => agregarAlCarrito(producto)}
                className="w-20 mb-3 ml-6 rounded-md md:ml-16 md:mb-9 bg-violet text-zinc-300 md:hover:scale-105 md:hover:ease-linear"
              >
                <p className="pb-1 text-xs">Agregar al Carrito</p>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div>
        {carrito.length > 0 && (
          <div>
            <h3 className="h-24 pt-16 text-2xl bg-yellow text-black-300">
              CARRITO DE COMPRAS
            </h3>
            {carrito.map((producto) => (
              <div key={producto.id}>
                <p>
                  {producto.nombre} - ${producto.precio}
                </p>
                <button onClick={() => eliminarDelCarrito(producto)}>
                  Eliminar del Carrito
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default TarjetaList;
