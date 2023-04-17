
import "./App.css";
import AboutUs from "./components/Aboutus.js";
import Carrusel from "./components/Carousel";
import Footer from "./components/Footer.js";
import Navbar from "./components/Navbar.js";
import BuyNow from "./components/BuyNow";
import Imagenconboton from "./components/Imagen-con-boton";

import Pastas from "./components/Cards";

import Info from "./components/Info";
import CardList from "./components/CardList";




function App() {
  return (
    <div className="App">
      <Navbar />
      <Imagenconboton />

      
    <Pastas
    nombre= 'Sorrentinos'
    sabor='Mozzarella, Jamon'
    imagen='sorrentinos'
    rendimiento=' 1 plancha por persona.
    '/>

    <Pastas
    nombre='Ravioles'
    sabor='Verdura y Pollo'
    imagen='Ravioles'
    rendimiento='1 plancha por persona.
    '/>

    <Pastas 
    nombre='Ñoquis'
    sabor='Papa - Espinaca'
    imagen='Nioquis'
    rendimiento='300g por persona'
    />

    <Pastas 
    nombre='Fideos'
    sabor='Semola - Espinaca'
    imagen='Fideos'
    rendimiento='200g por persona'
    />

      <h1>Info</h1>

      <CardList />

      <AboutUs/>
      <h1>Call to action</h1>
      <BuyNow />
      <Carrusel />
      <Info />
      <Footer />
    </div>
  );
}

export default App;
