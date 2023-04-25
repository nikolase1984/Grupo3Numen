import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-white text-xl text-red font-[Poppins] 
    py-2 px-6 rounded md:ml-8 hover:indigo-400 duration-500'>
      {props.children}
    </button>
  )
}

export default Button