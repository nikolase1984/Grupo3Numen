import "./App.css";
import AboutUs from "./components/Aboutus.js";
import Carrusel from "./components/Carousel";
import Footer from "./components/Footer.js";
import Navbar from "./components/Navbar.js";
<<<<<<< HEAD
import BuyNow from "./components/BuyNow";
=======
import Imagenconboton from "./components/Imagen-con-boton";
>>>>>>> 07c9a886367132ab1baeab272388db3817d2bf8b

function App() {
  return (
    <div className="App">
      <Navbar />
      <Imagenconboton />
      <h1>Tarjetas</h1>
      <h1>Info</h1>
      <AboutUs/>
      <h1>Call to action</h1>
      <BuyNow />
      <Carrusel />
      <Footer />
    </div>
  );
}

export default App;
