import { useCarrito } from "./Carrito";
import { useState } from "react";
import { db } from "./PastCard";

function TarjetaList() {
  const {
    carrito,
    agregarAlCarrito,
    eliminarDelCarrito,
    obtenerContadorProducto,
    obtenerContadorTotal,
  } = useCarrito();
  const [carritoAbierto, setCarritoAbierto] = useState(false);

  const toggleCarrito = () => {
    setCarritoAbierto(!carritoAbierto);
  };

  const cerrarCarrito = () => {
    setCarritoAbierto(true);
  };

  return (
    <div>
      <div
        id="productos"
        className="flex flex-wrap items-center justify-around w-full h-auto p-4 mb-16 md:items-center md:h-96 bg-yellow hover:shadow-lg"
      >
        {db.map((producto) => (
          <div key={producto.id}>
            <div className="flex flex-col my-10 overflow-hidden bg-white rounded-lg shadow-md md:w-52 md:h-72 shadow-black xl:w-72 xl:h-96">
              <img
                className="object-cover w-32 h-36 md:w-56 xl:h-48 xl:w-72"
                src={producto.imagen}
                alt="Pastas"
              />
              <h2 className="my-1 font-serif font-extrabold text-violet-950 xl:text-2xl">
                {producto.nombre}
              </h2>
              <p className="pb-3 font-serif font-medium text-violet-600 xl:text-xl">
                {producto.sabor}
              </p>
              <button
                onClick={() => agregarAlCarrito(producto)}
                className="w-24 mb-3 ml-6 font-serif rounded-md md:ml-14 md:mb-9 bg-violet text-zinc-300 md:hover:scale-105 md:hover:transition xl:mt-5 xl:w-40 xl:h-12 xl:ml-20"
              >
                Agregar al carrito
              </button>
            </div>
          </div>
        ))}
      </div>
      {carrito.length > 0 && (
        <div className="fixed top-0 right-0 z-50 p-2 mt-16 bg-white border-2 border-black rounded-md h-80 w-72 xl:h-96 xl:w80">
          <div
            id="CarritoCompras"
            className="flex items-center justify-between mb-2 "
          >
            <h3 className="font-serif text-xs font-bold text-black-300 xl:text-2xl">
              CARRITO DE COMPRAS ({obtenerContadorTotal()})
            </h3>
            <button
              className="font-serif text-xs font-bold text-black-300 xl:text-2xl focus:outline-none"
              onClick={cerrarCarrito}
            >
              
            </button>
          </div>
          {carrito.map((producto) => (
            <div key={producto.id} className="mb-4">
              <p>
                {producto.nombre} - ${producto.precio} (
                {obtenerContadorProducto(producto)})
              </p>
              <button onClick={() => eliminarDelCarrito(producto)}>
                Eliminar del Carrito
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TarjetaList;
