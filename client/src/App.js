import "./App.css";
import AboutUs from "./components/Aboutus.js";
import Carrusel from "./components/Carousel";
import Footer from "./components/Footer.js";
import Navbar from "./components/Navbar.js";
import Imagenconboton from "./components/Imagen-con-boton";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Imagenconboton />
      <h1>Tarjetas</h1>
      <h1>Info</h1>
      <AboutUs/>
      <h1>Call to action</h1>
      <h1>Buy Now</h1>
      <Carrusel />
      <Footer />
    </div>
  );
}

export default App;
