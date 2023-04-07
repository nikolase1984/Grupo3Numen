import "./App.css";
import Carrusel from "./components/Carousel";
import Footer from "./components/Footer.js";
import Navbar from "./components/Navbar.js";
import BuyNow from "./components/BuyNow";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Imagen Con Boton</h1>
      <h1>Tarjetas</h1>
      <h1>Info</h1>
      <h1>About Us</h1>
      <h1>Call to action</h1>
      <BuyNow />
      <Carrusel />
      <h1>Redes Sociales</h1>
      <Footer />
    </div>
  );
}

export default App;
