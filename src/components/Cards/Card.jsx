import React from 'react';
import Button from '../Cards/Button.jsx';
import '../../stylesheet/Card.css'


const Card = (props) => {
    return (
      <div className="flex flex-col items-center justify-center p-3 mt-10 mb-10 overflow-hidden rounded-lg w-52 md:mb-36 md:mt-36 md:mx-7 bg-violet min-w-xs hover:shadow-lg">
        
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

