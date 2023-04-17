import React from 'react';
import Button from './Button';
import '../stylesheet/Card.css'



const Card = (props) => {
    return (
       
     
    <div className='figure'> 
    
    <figure>
        <figcaption>
            <h3>{props.destino.titulo}</h3>
            <p>{props.destino.descripcion}</p>
        </figcaption>
        <Button 
            destino={props.destino}/>
    </figure>
    </div>
    
    )   
}

export default Card