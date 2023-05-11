import { useCarrito } from "./Carrito";
import { useState } from "react";
import { db } from "./PastCard";

function TarjetaList() {
  const { carrito, agregarAlCarrito, eliminarDelCarrito,obtenerContadorProducto, obtenerContadorTotal } = useCarrito();
  const [carritoAbierto, setCarritoAbierto] = useState(false);

  const toggleCarrito = () => {
    setCarritoAbierto(!carritoAbierto);
  };

  const cerrarCarrito = () => {
    setCarritoAbierto(false);
  }

  return (

    <div>

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
              <p>{obtenerContadorProducto(producto)}</p>
            </div>
          </div>
        ))}
      </div>
      {carrito.length > 0 && (
        <div className="fixed top-0 right-0 z-50 p-4 bg-white rounded-md h-96 w-80">
          <div id="CarritoCompras" className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold text-black-300">
              CARRITO DE COMPRAS ({obtenerContadorTotal()})
            </h3>
            <button
              className="text-2xl font-bold text-black-300 focus:outline-none"
              onClick={cerrarCarrito}
            >
              X
            </button>
          </div>
          {carrito.map((producto) => (
            <div key={producto.id} className="mb-4">
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
      <button
        className="fixed w-12 h-12 transition-all rounded-full shadow-md bottom-4 right-4 bg-yellow text-black-300 focus:outline-none"
        onClick={toggleCarrito}
      >
        {carritoAbierto ? "-" : "+"}
      </button>
    </div>
  );
}

export default TarjetaList;
