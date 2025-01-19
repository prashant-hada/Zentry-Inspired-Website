import React, { ReactElement } from 'react'

interface ButtonProps {
  id?:string;
  rightIcon? : React.ReactNode;
  leftIcon?:React.ReactNode;
  title : string;
  containerClass?: string
}

const Button = ({id, rightIcon, leftIcon, title, containerClass}: ButtonProps) => {
  return (
    <button id= {id} className={`${containerClass} group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full px-7 py-3 text-black`}>
        {leftIcon}
        <span className='relative incline-flex overflow-hidden font-general text-sm uppercase'>{title}</span>
        {rightIcon}
    </button>
  )
}

export default Button