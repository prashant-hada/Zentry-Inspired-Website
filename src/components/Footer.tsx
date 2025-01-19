import React from 'react'
import { FaDiscord, FaGithub, FaTwitch } from 'react-icons/fa'
import { FaX, FaXTwitter } from 'react-icons/fa6'

const links = [
    {href:'https://discord.com', icon: <FaDiscord />, name:'Discord'},
    {href:'https://x.com', icon: <FaXTwitter />, name:'X(Twitter)'},
    {href:'https://github.com', icon: <FaGithub />, name:'GitHub'},
    {href:'https://twitch.com', icon: <FaTwitch />, name:'Twitch'},
]

const Footer = () => {
  return (
    <footer className='w-screen bg-violet-300 py-4 text-black flex justify-center flex-col items-center'>
        <div className="flex items-center justify-center h-16 w-screen mt-8 pt-7 mb-12 lg:mb-40">
            <h1 className='uppercase text-8xl sm:text-[20vh] font-bold special-font text-black'><b>ZENTRY</b></h1>
        </div>
        <div className='container mx-auto flex flex-col gap-5 md:gap-0 items-center justify-between  px-4 md:flex-row'>
            <div className="flex justify-center items-center lg:w-1/4 lg:justify-start">
            <p className=' text-center text-sm md:text-left'>
                &copy; Nova 2024. All rights reserved
            </p></div>
            <div className="flex  justify-between gap-4 md:justify-start lg:w-1/2">
                <div className="flex justify-around items-center w-full gap-5">
            {
                links.map(link=>(
                    <a key={link.name} href={link.href} target='_blank' 
                    className='text-black transition-colors duration-500 ease-in-out hover:text-white flex justify-between gap-2 items-center  '>
                        <span className=''>{link.icon} </span>
                        <span className=' hidden md:inline-flex'>{link.name}</span>
                    </a>

                ))
            }
            </div>
            </div>
            <div className="flex justify-center items-center lg:w-1/4 lg:justify-end">
            <a href="#privacy-policy"
            className='text-center text-sm hover:underline md:text-right'>Privacy Policy</a>
            </div>
        </div>

        <div id="disclaimer" className=' mt-10 h-40 w-screen md:w-[50vw] flex flex-col justify-center items-center px-12 '>
            <p className='text-black text-sm font-semibold opacity-70'>Disclaimer: </p>
            <p className='text-black text-center text-sm font-normal opacity-60'>This website is a personal project inspired by Zentry.com. It is not affiliated with or endorsed by Zentry.com.</p>
        </div>
    </footer>
  )
}

export default Footer