import '../stylesheet/Aboutus.css'
import tenedorAbre from '../image/tenedor.png';
import tenedorCierra from '../image/tenedor (1).png';

const AboutUs = () => {
  return (
    <div className='main'>
    <div className='nosotros'>
    <h3>Conoce nuestra historia</h3>
    <div className='info'>
        
    <div  className='div1'>
    
    <img className='apertura'  /><ul>
 <li>Somos un grupo de 5 amigos que abrimos una fabrica de pastas con los mejores 
 sabemos de Italia. Hace 15 años que empezamos este hermoso proyecto, que hoy en dia ha crecido
 muchisimo y nos permite tener un gran emprendimiento.</li>
 <li>Actualmente tenemos 15 locales con venta presenciales distribuidos a lo largo del pais </li>
 
</ul>
 {/* src={tenedorAbre} alt="tenedor"*/}

    </div>

    <div className='div2'>
         <img className='apertura'   />
         <ul>
 <li>Nuestro nombre surgio debido a la nacionalidad de nuestros abuelos, siendo italianos.
 En nuestro pais, tenemos la costumbre de todo aquel con origenes y/o familiares de italia, se 
 acostumbra de llamarle "tano", por eso mismo nuestra franquicia se llama asi.  
 </li>
 <li>Contamos con venta al por mayor, por menor y totalmente online.</li>
 <li>Envios sin cargo en un rango de 150 kilometros</li>
</ul>
    </div>
    
    <div className='div3'>
     <img className='apertura'  />
     <ul>
 <li>Contamos con 157 empleados que se encargan diariamente de mantener en pie esta aventura de llevarle
      a muchos argentinos el sabor italiano a sus platos.
 </li></ul>
 </div> 
    </div>
    </div>
    </div>
  )
}

export default AboutUs