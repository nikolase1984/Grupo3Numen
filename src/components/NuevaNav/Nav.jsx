import { useState } from "react";
import Button from "../NuevaNav/Button";
import logo from "../../image/Logo blanco.png";
import Icono from "../../image/barra-de-menus.png";
import * as style from "../NuevaNav/styles";

const Navbar = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "PRODUCTOS", link: "/" },
    { name: "ABOUT US", link: "#about" },
    { name: "GALERIA", link: "#galeria" },
    { name: "CONTACTOS", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="fixed top-0 z-50">
      <div className={style.div2}>
        <div className={style.div3}>
          <span className={style.span}>
            <img src={logo} alt="logo" className="w-8 h-auto" />
          </span>
        </div>

        <div onClick={() => setOpen(!open)} className={style.divOnClick}>
          <button className="w-10" name={open ? "close" : "menu"}>
            <img src={Icono} alt="icono" />
          </button>
        </div>

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
