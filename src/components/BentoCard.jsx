import React from 'react'

const BentoCard = ({title, src, description, containerClass}) => {
  return (
    <div className='relative size-full'>
        <video className='absolute left-0 size-full object-cover object-center '
        src={src}
        loop
        muted
        autoPlay
         />
         <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
            <div>
                <h1 className='bento-title special-font'>{title}</h1>
                {description && (
                    <p className='mt-3 max-w-64 text-sm font-semibold md:text-base'>{description}</p>
                )}
            </div>
         </div>
    </div>
  )
}

export default BentoCard