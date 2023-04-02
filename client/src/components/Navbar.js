import React, {useState} from 'react'
import '../stylesheet/Navbar.css'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='navbar'>
        <div className='nav-logo'>Pastas</div>
        <div className={`nav-items ${isOpen && "open"}`}>
            <a href="#">HOME</a>
            <a href="#">PRODUCTOS</a>
            <a href="#">NOSOTROS</a>
            <a href="#">GALERIA</a>
            <a href="#">CONTACTOS</a>
        </div>
        <div className={`nav-toggle ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen)}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
  )
}

export default Navbar