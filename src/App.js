import "./App.css";
import NuevoAboutUs from "./components/NuevoAboutUs/NuevoAboutUs.jsx";
import Carrusel from "./components/Carousel/Carousel";
import Footer from "./components/Footer/Footer";
import Nav from "./components/NuevaNav/Nav.jsx";
import BuyNow from "./components/BuyNow/BuyNow";
import Imagenconboton from "./components/ImagenConBoton/Imagen-con-boton";
import Info from "./components/Info/Info";
import CardList from "./components/Cards/CardList";


import CallToAction2 from "./components/CallToAction2/CallToAction2";
import TarjetaList from "./components/Tarjetas/TarjetaLis";

function App() {
  console.log("");
  return (
    <div className="App">
      <Nav />
      <Imagenconboton />
      <TarjetaList />
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
