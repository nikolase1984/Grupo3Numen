import React from 'react'
import logoRojo from "../image/logoRojo.png"

const Footer = () => {
  return (
<footer className="py-2 font-bebasNeue bg-grey">

    <div>
      <div className="flex content-center, justify-center py-2">
          <img style={{height: "120px", width: "120px"}}src= {logoRojo} alt="logo"/>
      </div>
    </div>

 
    <div className="flex justify-center px-8 py-4 text-violet bg-red place-content-center group-hover:text-white">
        <a href="" className='px-3'><h3>INICIO</h3></a>
        <a href="" className='px-3'><h3>PRODUCTOS</h3></a>
        <a href="" className='px-3'><h3>LOCALES</h3></a>
        <a href="" className='px-3'><h3>CONTACTO</h3></a>
    </div>
    <div className="py-2 text-xs font-bold">
        <p>Copyright@2022 Grupo3Numen. All rights reserved</p>
    </div>


</footer>
  )
}

export default Footer
