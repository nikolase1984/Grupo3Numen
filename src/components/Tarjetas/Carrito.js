function Carrito({ carrito }) {
    return (
      <div>
        <h3 className="h-24 pt-16 text-2xl bg-yellow text-black-300">CARRITO DE COMPRAS</h3>
        <div className="flex flex-wrap items-center justify-around h-auto p-4 mb-16 md:items-center md:h-96 bg-yellow hover:shadow-lg">
          {carrito.map((producto) => (
            <div key={producto.id}>
              <p>{producto.nombre}</p>
              <p>{producto.sabor}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Carrito;