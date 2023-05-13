import React from "react";
import logoRojo from "../../image/logoRojo.png";

const Footer = () => {
  return (
    <footer className="w-full py-2 font-bebasNeue bg-grey">
      <div id="contactos">
        <div className="flex content-center, justify-center py-2">
          <img
            style={{ height: "120px", width: "120px" }}
            src={logoRojo}
            alt="logo"
          />
        </div>
      </div>

      <div className="flex px-8 py-4 font-serif text-sm text-white md:text-lg justify-evenly bg-red place-content-center ">
        <a
          href="#"
          className="hover:text-black md:hover:scale-105 hover:transition"
        >
          <h3>INICIO</h3>
        </a>
        <a
          href="#productos"
          className="hover:text-black md:hover:scale-105 hover:transition"
        >
          <h3>PRODUCTOS</h3>
        </a>
        <a
          href="#galeria"
          className="hover:text-black md:hover:scale-105 hover:transition"
        >
          <h3>GALERIA</h3>
        </a>
        <a
          href="#contactos"
          className="hover:text-black md:hover:scale-105 hover:transition"
        >
          <h3>CONTACTO</h3>
        </a>
      </div>
      <div className="py-2 font-serif text-xs font-bold">
        <p>Copyright@2022 Grupo3Numen. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
