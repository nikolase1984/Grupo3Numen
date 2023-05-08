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
    <div id='galeria' className='mb-32 h-5/6'>
    <h3 className="pb-8 mb-16 text-4xl">GALERIA</h3>
    <Slider {...settings}>
      <div>
        <img className='h-64 px-2 w-96' src="https://img-global.cpcdn.com/recipes/8dd7cb20c2d275ce/1200x630cq70/photo.jpg" alt="slide 1" />
      </div>
      <div>
        <img className='h-64 px-2 w-96' src="https://cdn7.kiwilimon.com/recetaimagen/20318/640x426/8558.jpg.webp" alt="slide 2" />
      </div>
      <div>
        <img className='h-64 px-2 w-96' src="https://www.consumer.es/app/uploads/2019/07/img_pasta-casera-errores-hd.jpg" alt="slide 3" />
      </div>
      <div>
        <img className='h-64 px-2 w-96' src="https://www.clarin.com/img/2020/05/23/S2o9dH36y_720x0__1.jpg" alt="slide 4" />
      </div>
      <div>
        <img className='h-64 px-2 w-96' src="https://sivarious.com/wp-content/uploads/2023/02/pasta-casera.jpg" alt="slide 5" />
      </div>
      <div>
        <img className='h-64 px-2 w-96' src="https://elcomercio.pe/resizer/tEUf1rxCaTeS0L3qC5E9BBfHQvM=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/DJHZC6U2EFBVVOJRG3BF33ZYYU.jpg" alt="slide 6" />
      </div>
      <div>
        <img className='h-64 px-2 w-96' src="https://www.laespanolaaceites.com/wp-content/uploads/2019/05/pasta-fresca-casera-1080x671.jpg" alt="slide 7" />
      </div>
      <div>
        <img className='h-64 px-2 w-96' src="https://mirror1.cdn.net.ar/mirror1/2022/09/mirror1/images/07/25/72536_f40b78378cc932cfe70a206e3b9dac723d8e28caf901313a554cebc7d32e67e5/lg.webp" alt="slide 8" />
      </div>
      <div>
        <img className='h-64 px-2 w-96' src="https://agenciadeaprendizaje.bue.edu.ar/wp-content/uploads/2021/04/FabricacionDePastasCaseras.jpg" alt="slide 9" />
      </div>
    </Slider>
    </div>
  );
}

export default Carrusel;


