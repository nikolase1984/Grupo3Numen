import React from 'react'
import buyNow from "../image/buyNow.png"
import "../stylesheet/BuyNow.css"

const BuyNow = () => {
  return (
    <div className="buyNow">
        <div className="imagen">
            <img style = {{width: "350px", borderRadius: "10px"}}src={buyNow} alt="buyNow" />
        </div>
        <div className="action">
            <p>Ofrecemos una amplia variedad de pastas frescas y deliciosas elaboradas con ingredientes de alta calidad. Desde opciones sin gluten hasta pastas veganas y vegetarianas, nos enorgullece ofrecer pastas que satisfacen cualquier necesidad dietética o preferencia. Además, nos preocupamos por el medio ambiente y utilizamos empaques biodegradables y fuentes de energía renovable. </p>
            <a href="#tienda">Ir a la tienda</a>            
        </div>
    </div>
  )
}

export default BuyNow