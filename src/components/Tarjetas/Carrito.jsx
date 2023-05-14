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
    const index = carrito.findIndex((producto) => producto.id === productoAEliminar.id);
    if (index !== -1) {
      // Encontrar el producto y disminuir su cantidad en 1
      const nuevoCarrito = [...carrito];
      nuevoCarrito[index].cantidad -= 1;
  
      // Si la cantidad resultante es mayor a cero, actualizar el carrito
      if (nuevoCarrito[index].cantidad > 0) {
        setCarrito(nuevoCarrito);
      } else {
        // De lo contrario, eliminar el producto del carrito por completo
        nuevoCarrito.splice(index, 1);
        setCarrito(nuevoCarrito);
      }
    }
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
