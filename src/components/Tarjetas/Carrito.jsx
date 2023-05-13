import { useState } from "react";

export const useCarrito = () => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    const index = carrito.findIndex((p) => p.id === producto.id);
    if (index !== -1) {
      // El producto ya está en el carrito, aumentar la cantidad
      const nuevoCarrito = [...carrito];
      nuevoCarrito[index].cantidad += 1;
      setCarrito(nuevoCarrito);
    } else {
      // El producto no está en el carrito, agregarlo con cantidad 1
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };

  const eliminarDelCarrito = (productoAEliminar) => {
    setCarrito(
      carrito.filter((producto) => producto.id !== productoAEliminar.id)
    );
  };

  // Obtener el contador total del carrito
  const obtenerContadorTotal = () => {
    let contadorTotal = 0;
    carrito.forEach((producto) => (contadorTotal += producto.cantidad));
    return contadorTotal;
  };

  // Obtener el contador de un producto específico en el carrito
  const obtenerContadorProducto = (producto) => {
    const index = carrito.findIndex((p) => p.id === producto.id);
    return index !== -1 ? carrito[index].cantidad : 0;
  };

  return {
    carrito,
    agregarAlCarrito,
    eliminarDelCarrito,
    obtenerContadorTotal,
    obtenerContadorProducto,
  };
};
