import React from 'react';
import Button from '../Cards/Button.jsx';
import '../../stylesheet/Card.css'


const Card = (props) => {
    return (
      <div className="flex flex-col items-center justify-center p-3 mx-8 mt-5 mb-5 overflow-hidden rounded-lg md:mx-7 w-52 md:mb-48 md:mt-30 bg-violet">
        
          <figcaption>
            <h2 className='mb-4 font-extrabold text-zinc-300'>{props.destino.titulo}</h2>
            <p className='text-center text-zinc-300'>{props.destino.descripcion}</p>
          </figcaption>
          <div className="flex justify-end py-6 ">
            <Button destino={props.destino}/>
          </div>
        
      </div>  
    )   
  }
  
export default Card

