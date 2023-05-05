import Carousel from 'react-bootstrap/Carousel'
import '../Carousel/Carousel.css'

export function Carrusel() {
  return (
    <div>
      <Carousel className='first'>
        <Carousel.Item>
          <img 
            className="d-block" 
            src="https://hips.hearstapps.com/prima.cdnds.net/assets/15/26/1435331606-different-pasta-shapes.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item >
          <img 
            className="d-block"
            src="https://assets.epicurious.com/photos/606b6eb818ac0b1841b3bbbf/6:4/w_4526,h_3017,c_limit/WackyPastaShapes_HERO_040121_12258.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img 
            className="d-block"
            src="https://www.finedininglovers.it/sites/g/files/xknfdk1106/files/2022-06/tipi%20di%20pasta%20-%20Finedininglovers.jpg"
            alt="Third slide"
          />

        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Carrusel;