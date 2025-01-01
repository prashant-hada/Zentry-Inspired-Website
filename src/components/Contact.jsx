import React from 'react'
import Button from './Button'

const ImageClipBox=({src,clipClass})=>(
    <div className={clipClass}>
        <img src={src} alt="" />
    </div>
)
const Contact = () => {
  return (
    <section id ='contact' className='my-24 min-h-96 w-screen px-6' >
        <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
            <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
                <ImageClipBox 
                clipClass='contact-clip-path-1'
                src='img/contact-1.webp'
                />
                <ImageClipBox 
                clipClass='contact-clip-path-2 lg:translate-y-40 translate-y-60 '
                src='img/contact-2.webp'
                />
            </div>
            <div className="absolute left-20 -top-40  w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80  ">
            <ImageClipBox 
                clipClass='absolute md:scale-125'
                src='img/swordman-partial.webp'
                />
                <ImageClipBox 
                clipClass='sword-man-clip-path md:scale-125'
                src='img/swordman.webp'
                />
            </div>
            <div className="flex flex-col items-center text-center">
                <p className=' font-general text-[10px] uppercase'>Join Zentry</p>
                <p className='special-font mt-10 w-full font-zentry text-5xl leading-[0.9] md:text-[6rem] z-50'>Les<b>t</b>'s B<b>u</b>i<b>l</b>d t<b>h</b>e<br /> <b>N</b>e<b>W</b> er<b>a</b> <b>o</b>f g<b>a</b>mi<b>n</b>g <br /> t<b>o</b>get<b>h</b>er</p>

                <Button  title ='contact-us'
                containerClass='mt-10 cursor-pointer bg-blue-50 font-semibold hover:bg-yellow-300 hover:scale-[0.95] transition-all duration-500 ease-in-out' />
            </div>

        </div>
    </section>
  )
}

export default Contact