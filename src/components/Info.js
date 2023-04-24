import React from 'react'
import {FaFacebook} from "react-icons/fa";
import {RiWhatsappFill,RiInstagramFill} from "react-icons/ri";

const Info = () => {
  return (
    <div className="bg-fondoRedes.jpg justify-center h-28">
      <p className = "m-3 text-2xl bebasNeue">Visitanos en las redes!</p>
      <div className="flex px-10 m-3 place-content-center">
          <a className="px-2 text-4xl text-yellow" href="https://www.facebook.com" target="blank"><FaFacebook/></a>
          <a className="px-2 text-4xl text-red" href="https://www.instagram.com" target="blank"><RiInstagramFill/></a>
          <a className="px-2 text-4xl text-violet" href="https://www.whatsapp.com" target="blank"><RiWhatsappFill/></a>
      </div>
    </div>
  )
}

export default Info
