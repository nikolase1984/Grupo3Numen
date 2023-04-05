import React from 'react'
import logoRojo from "../image/logoRojo.png"
import "../stylesheet/Footer.css"
import {FaFacebook} from "react-icons/fa";
import {RiWhatsappFill,RiInstagramFill} from "react-icons/ri";

const Footer = () => {
  return (
<footer className='pie'>

    <div>
      <div className="logo">
          <img style={{height: "80px", width: "80px"}}src= {logoRojo} alt="logo"/>
      </div>
    </div>

    <div className="redes">
      <div>
          <a className="fb" href="https://www.facebook.com" target="blank"><FaFacebook style={{color: "#FFC03D", fontSize: "25px"}}/></a>
          <a className="ig" href="https://www.instagram.com" target="blank"><RiInstagramFill style={{color: "#FF2525", fontSize: "25px"}}/></a>
          <a className="wa" href="https://www.whatsapp.com" target="blank"><RiWhatsappFill style={{color: "#432344", fontSize: "25px"}}/></a>
      </div>
    </div>
 
    <div className="section">
        <a href=""><h3>INICIO</h3></a>
        <a href=""><h3>PRODUCTOS</h3></a>
        <a href=""><h3>LOCALES</h3></a>
        <a href=""><h3>CONTACTO</h3></a>
    </div>
    <div className="derechos">
        <p>Copyright@2022 Grupo3Numen. All rights reserved</p>
    </div>


</footer>
  )
}

export default Footer
