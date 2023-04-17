import React from 'react'
import {FaFacebook} from "react-icons/fa";
import {RiWhatsappFill,RiInstagramFill} from "react-icons/ri";
import "../stylesheet/Info.css"
import fondoRedes from "../image/fondoRedes.jpg"

const Info = () => {
  return (
    <div className="redes">
      <p>Visitanos en las redes!</p>
      <div className="logos">
          <a className="fb" href="https://www.facebook.com" target="blank"><FaFacebook style={{color: "#FFC03D", fontSize: "35px"}}/></a>
          <a className="ig" href="https://www.instagram.com" target="blank"><RiInstagramFill style={{color: "#FF2525", fontSize: "35px"}}/></a>
          <a className="wa" href="https://www.whatsapp.com" target="blank"><RiWhatsappFill style={{color: "#432344", fontSize: "35px"}}/></a>
      </div>
    </div>
  )
}

export default Info
