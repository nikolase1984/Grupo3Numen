import React from 'react';
import Button from './Button';
import '../stylesheet/Card.css'


const Card = (props) => {
    return (
      <div className="flex flex-col items-center justify-center w-64 p-3 m-4 overflow-hidden rounded-lg bg-violet min-w-xs hover:shadow-lg">
        
          <figcaption className=''>
            <h2 className='mb-4 font-extrabold text-zinc-300'>{props.destino.titulo}</h2>
            <p className='text-center text-zinc-300'>{props.destino.descripcion}</p>
          </figcaption>
          <div className="flex justify-end mt- ">
            <Button destino={props.destino}/>
          </div>
        
      </div>  
    )   
  }
  
export default Card

