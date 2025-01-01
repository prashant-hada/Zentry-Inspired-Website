import {useState, useRef} from 'react'
import BentoCard from './BentoCard'
import { TiLocationArrow } from 'react-icons/ti'
import CardTiltWrapper from './CardTiltWrapper'

const Features = () => {
  return (
    <section className='bg-black pb-52'>
        <div className="container mx-auto px-8 md:px-10">
            <div className="px-5 py-32">
                <p className='font-circular-web text-lg text-blue-50'>Dive into the Zentry Universe</p>
            
            <p className='mx-w-md font-circular-web text-lg text-blue-50 opacity-50'>
            Immerse yourself in a rich and ever-expanding <br />ecosystem where a vibrant array of products converge <br />into an interconnected universe.
            </p>
            </div>

        <CardTiltWrapper className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
            <BentoCard 
                src='videos/feature-1.mp4'
                title={<>radi<b>an</b>t</>}
                description='A cross-platform metagame app turning your activities across Web2 and Web3 games into a rewarding adventure'
            />
        </CardTiltWrapper>
        <div className='grid h-[135vh] grid-cols-2 grid-rows-3 gap-7'>
            <CardTiltWrapper className="bento-tilt_1 row-span-2 md:col-span-1 md:row-span-2">
                <BentoCard
                  src='videos/feature-2.mp4'
                  title={<>Zig<b>M</b>A</>} 
                  description={'An anime and gaming-inspired NFT collection - the IP primed for expansion'}/>
            </CardTiltWrapper>
            <CardTiltWrapper className="bento-tilt_1 row-span-1 ms-1 md:col-span-1 md:ms-0">
                <BentoCard 
                src="videos/feature-3.mp4"
                title={<>N<b>e</b>x<b>u</b>s</>}
                description='A gamified social hub, adding a new dimension of play to social interaction for Web3 Communities'/>
            </CardTiltWrapper>
            <CardTiltWrapper className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
                <BentoCard 
                src="videos/feature-4.mp4"
                title={<>A<b>Zu</b>L</>}
                description='A cross-world AI Agent-elevating your gameplay to be more fun and productive'/>
            </CardTiltWrapper>
            <CardTiltWrapper className="bento-tilt_2 rounded-lg">
                <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
                    <h1 className='bento-title special-font max-w-64 text-black'><b>More coming Soon</b></h1>
                    <TiLocationArrow className='m-5 scale-[5] self-end' />     
                </div>
            </CardTiltWrapper>
            <CardTiltWrapper className="bento-tilt_2 rounded-lg">
                <video 
                src='videos/feature-5.mp4'
                loop
                muted
                autoPlay
                className=' size-full object-cover object-center'
                />
            </CardTiltWrapper>
        </div>
        </div>
    </section>
  )
}

export default Features