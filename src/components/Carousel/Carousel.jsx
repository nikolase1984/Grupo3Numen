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

  return (
    <div className='py-8 h-5/6'>
    <h3 className="pb-8 text-2xl">Galeria</h3>
    <Slider {...settings}>
      <div>
        <img src="https://via.placeholder.com/500x350" alt="slide 1" />
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
