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
          <img style={{height: "120px", width: "120px"}}src= {logoRojo} alt="logo"/>
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
