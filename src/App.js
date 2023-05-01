import "./App.css";
import NuevoAboutUs from "./components/NuevoAboutUs/NuevoAboutUs.jsx";
import Carrusel from "./components/Carousel";
import Footer from "./components/Footer.js";
import Nav from "./components/NuevaNav/Nav.jsx";
import BuyNow from "./components/BuyNow";
import Imagenconboton from "./components/Imagen-con-boton";

import Pastas from "./components/Cards";

import Info from "./components/Info";
import CardList from "./components/CardList";
import CallToAction2 from "./components/CallToAction2/CallToAction2";

function App() {
  console.log("");
  return (
    <div className="App">
      <Nav />
      <Imagenconboton />

      <Pastas
        nombre="Sorrentinos"
        sabor="Mozzarella, Jamon"
        
        imagen="sorrentinos"
        rendimiento=" 1 plancha por persona.
    "
      />

      <Pastas
        nombre="Ravioles"
        sabor="Verdura y Pollo"
        imagen="Ravioles"
        rendimiento="1 plancha por persona.
    "
      />

      <Pastas
        nombre="Ñoquis"
        sabor="Papa - Espinaca"
        imagen="Nioquis"
        rendimiento="300g por persona"
      />

      <Pastas
        nombre="Fideos"
        sabor="Semola - Espinaca"
        imagen="Fideos"
        rendimiento="200g por persona"
      />

      <h1>Info</h1>

      <CardList />

      <NuevoAboutUs />
      <CallToAction2 />
      <BuyNow />
      <Carrusel />
      <Info />
      <Footer />
    </div>
  );
}

export default App;
