import React from 'react'

const Button = ({id, rightIcon, leftIcon, title, containerClass}) => {
  return (
    <button id= {id} className={`${containerClass} group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-voilet-50 px-7 py-3 text-black`}>
        {leftIcon}
        <span className='relative incline-flex overflow-hidden font-general text-sm uppercase'>{title}</span>
        {rightIcon}
    </button>
  )
}

export default Button