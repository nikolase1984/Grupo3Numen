import { useState } from "react";
import Button from "../NuevaNav/Button";
import logo from "../../image/Logo blanco.png";
import Icono from "../../image/barra-de-menus.png";

const Navbar = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "PRODUCTOS", link: "/" },
    { name: "ABOUT US", link: "/" },
    { name: "GALERIA", link: "/" },
    { name: "CONTACTOS", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="top-0 left-0 w-full shadow-md bg-violet">
      <div className="items-center justify-between h-20 py-4 bg-violet md:flex md:px-10 px-7">
        <div
          className="bg-violet font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-white"
        >
          <span className="pt-2 mr-1 text-3xl text-indigo-600">
            <img src={logo} alt="logo" className="w-8 h-auto" />
          </span>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="absolute text-3xl cursor-pointer right-8 top-6 md:hidden"
        >
          <button className="w-10" name={open ? "close" : "menu"}><img  src={ Icono } alt="icono" /></button>
        </div>
        {open && <p>Soy visible</p>}

        <ul
          className={`md:flex bg-violet md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((Link) => (
            <li key={Link.name} className="text-xl md:ml-8 md:my-0 my-7">
              <a
                href={Link.link}
                className="text-white duration-500 hover:text-gray-400"
              >
                {Link.name}
              </a>
            </li>
          ))}
          <Button>Carrito</Button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
