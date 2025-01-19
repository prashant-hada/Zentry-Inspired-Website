import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'
import AnimatedTitle from './AnimatedTitle';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    useGSAP(()=>{
        const clipAnimation = gsap.timeline({
            scrollTrigger:{
                trigger: '#clip',
                start: 'center center',
                end: '+=800 center',
                scrub: 0.5,
                pin:true,
                pinSpacing:true,
            }
        });
        gsap.set("#about-frame", {
            // clipPath: "polygon(10% 1%, 71% 9%, 88% 85%, 11% 100%)", // Initial trapezium
            clipPath: "polygon(21% 5%, 76% 9%, 88% 95%, 20% 91%)", // Initial trapezium
            // height:"68vh",
            scale:0.9
          });

        clipAnimation.to('#about-frame',{
            width: '100vw',
            height:'100vh',
            borderRadius:0,
            scale:1.1,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
        })
    })
  return (
    <div id ='about' className='min-h-screen w-screen'>
        <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
            <h2 className='font-general text-sm uppercase md:text-[10px]'>Welcome to Zentry</h2>
            <AnimatedTitle title={`Disc<b>o</b>ver the world's <br /> l<b>a</b>rgest shared Adventure`}
            containerClass= 'mt-5 !text-black text-center'/>
            <div className='about-subtext'>
                <p>The Game of Games begins-your life, now as an epic MMORPG</p>
                <p>Zentrty unites every player from countless games and platforms</p>
            </div>
        </div>
        <div id ="clip" className="h-dvh w-screen">
            <div id='about-frame' className="mask-clip-path about-image ">
                <img src="img/about.webp" alt="Background" 
                className='absolute left-0 top-0 size-full object-cover'/>
            </div>
            <img src="img/stones.webp" alt="Background" 
                className='absolute left-0 top-0 size-full object-cover z-20'/>
        </div>
    </div>
  )
}

export default About