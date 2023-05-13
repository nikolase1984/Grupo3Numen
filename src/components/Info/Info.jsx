import React from "react";
import { FaFacebook } from "react-icons/fa";
import { RiWhatsappFill, RiInstagramFill } from "react-icons/ri";

const Info = () => {
  return (
    <div className="bg-fondoRedes.jpg justify-center h-28">
      <p className="m-3 font-serif text-2xl">Visitanos en las redes!</p>
      <div className="flex px-10 m-3 font-serif place-content-center">
        <a
          className="px-2 text-4xl text-blue-600 md:hover:scale-125 hover:transition hover:blue"
          href="https://www.facebook.com"
          target="blank"
        >
          <FaFacebook />
        </a>
        <a
          className="px-2 text-4xl text-pink-900 md:hover:scale-125 hover:transition hover:text-pink-900"
          href="https://www.instagram.com"
          target="blank"
        >
          <RiInstagramFill />
        </a>
        <a
          className="px-2 text-4xl text-green-600 md:hover:scale-125 hover:transition hover:text-green-600"
          href="https://www.whatsapp.com"
          target="blank"
        >
          <RiWhatsappFill />
        </a>
      </div>
    </div>
  );
};

export default Info;
