import React from "react";
import buyNow from "../../image/buyNow.png";

const BuyNow = () => {
  return (
    <div className="flex flex-col flex-wrap items-center w-full my-20 md:my-40 bg-grey md:flex-row">
      <div className="h1/2 md:w-1/2 ">
        <img
          className="object-cover w-full opacity-75 md:pl-5 md:h-full "
          src={buyNow}
          alt="buyNow"
        />
      </div>
      <div className="h-64 mt-2 font-serif italic md:w-1/2 md:h-auto">
        <p className="px-6 py-2 text-sm text-center text-black md:text-xl md:text-center md:px-10">
          Ofrecemos una amplia variedad de pastas frescas y deliciosas
          elaboradas con ingredientes de alta calidad. Desde opciones sin gluten
          hasta pastas veganas y vegetarianas, nos enorgullece ofrecer pastas
          que satisfacen cualquier necesidad dietética o preferencia. Además,
          nos preocupamos por el medio ambiente y utilizamos empaques
          biodegradables y fuentes de energía renovable.{" "}
        </p>
        <button className="p-2 m-3 rounded-md text-zinc-100 bg-violet md:hover:scale-105 hover:transition">
          <p>Ir a la tienda</p>
        </button>
      </div>
    </div>
  );
};

export default BuyNow;
