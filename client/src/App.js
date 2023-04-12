import "./App.css";
import AboutUs from "./components/Aboutus.js";
import Carrusel from "./components/Carousel";
import Footer from "./components/Footer.js";
import Navbar from "./components/Navbar.js";
import BuyNow from "./components/BuyNow";
import Imagenconboton from "./components/Imagen-con-boton";
import Info from "./components/Info";
import CardList from "./components/CardList";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Imagenconboton />
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
