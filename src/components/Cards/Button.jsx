import React from 'react';
import '../../stylesheet/Button.css';
import Swal from 'sweetalert2';

const Button = () => {

  return (
    
    <button onClick={()=> {
      Swal.fire({
        title: 'Conócenos mas!',
        text: 'Investiga sobre nuestra historia en nuestra seccion about us',
        imageUrl: 'https://www.searchenginejournal.com/wp-content/uploads/2022/01/about-us-page-examples-1-61fd8f9784626-sej-384x202.jpg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
    }} className='h-10 px-5 m-2 font-serif rounded-lg text-zinc-300 md:hover:scale-105 hover:transition bg-rose-900'>INFO</button>
   
  )
}

export default Button