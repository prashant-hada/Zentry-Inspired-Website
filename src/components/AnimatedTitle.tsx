import gsap from 'gsap';
import React, { useRef } from 'react'
import { useEffect } from 'react';

interface AnimatedTitleProps {
  title:string;
  containerClass ? : string
}

const AnimatedTitle = ({title, containerClass}: AnimatedTitleProps) => {
    const containerRef = useRef(null);

    useEffect(()=>{
        const context = gsap.context(
            ()=>{
          const titleAnimation= gsap.timeline({
            scrollTrigger:{
                trigger: containerRef.current,
                start: '100 bottom',
                end:'center bottom',
                toggleActions: 'play none none reverse'
            }
          })   
          titleAnimation.to('.animated-word',{
            opacity:1,
            transform: 'translate3d(0,0,0) rotateY(0deg) rotateX(0deg)',
            ease:'power2.inOut',
            stagger: 0.02  // have changes the value from string to number
          })
        }, containerRef)

        return ()=> context.revert();
    },[])
  return (
    <div ref={containerRef} className={`${containerClass} animated-title`}>
        {
            title.split('<br />').map((line, index)=>(
                <div key={index} className='flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3'>
                    {
                        line.split(' ').map((word,i)=>(
                            <span key={i} className='animated-word' dangerouslySetInnerHTML={{__html:word}} />
                        ))
                    }
                </div>
            ))
        }
    </div>
  )
}

export default AnimatedTitle