
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Carrusel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 640, // mobile breakpoint
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

import Carousel from 'react-bootstrap/Carousel'


  return (

    <div className='py-8 h-5/6'>
    <h3 className="pb-8 text-2xl">Galeria</h3>
    <Slider {...settings}>
      <div>
        <img src="https://via.placeholder.com/500x350" alt="slide 1" />

    <div>
      <h3 className='mb-12 text-3xl font-bold'>GALERIA</h3>
    <div className='flex items-center content-center w-full h-auto '>
      <div className='py-8 mx-auto mb-20 w-96 top-4'>
        <Carousel className='first'>
          <Carousel.Item className='text-center'>
            <img 
              className='mx-auto d-block' 
              src='https://hips.hearstapps.com/prima.cdnds.net/assets/15/26/1435331606-different-pasta-shapes.jpg'
              alt='First slide'
            />
          </Carousel.Item>
          <Carousel.Item className='text-center'>
            <img 
              className='mx-auto d-block'
              src='https://assets.epicurious.com/photos/606b6eb818ac0b1841b3bbbf/6:4/w_4526,h_3017,c_limit/WackyPastaShapes_HERO_040121_12258.jpg'
              alt='Second slide'
            />
          </Carousel.Item>
          <Carousel.Item className='text-center'>
            <img 
              className='mx-auto d-block'
              src='https://www.finedininglovers.it/sites/g/files/xknfdk1106/files/2022-06/tipi%20di%20pasta%20-%20Finedininglovers.jpg'
              alt='Third slide'
            />
          </Carousel.Item>
        </Carousel>

      </div>
      <div>
        <img src="https://via.placeholder.com/500x350" alt="slide 2" />
      </div>
      <div>
        <img src="https://via.placeholder.com/500x350" alt="slide 3" />
      </div>
      <div>
        <img src="https://via.placeholder.com/500x350" alt="slide 4" />
      </div>
      <div>
        <img src="https://via.placeholder.com/500x350" alt="slide 5" />
      </div>
      <div>
        <img src="https://via.placeholder.com/500x350" alt="slide 6" />
      </div>
      <div>
        <img src="https://via.placeholder.com/500x350" alt="slide 7" />
      </div>
      <div>
        <img src="https://via.placeholder.com/500x350" alt="slide 8" />
      </div>
      <div>
        <img src="https://via.placeholder.com/500x350" alt="slide 9" />
      </div>
    </Slider>
    </div>
  );
}

export default Carrusel;
