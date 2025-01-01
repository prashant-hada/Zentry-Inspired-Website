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
    <footer className='w-screen bg-violet-300 py-4 text-black'>
        <div className="flex items-center justify-center h-16 w-screen mt-4 mb-12 lg:mb-40">
            <h1 className='uppercase text-9xl sm:text-[20vh] font-bold special-font text-black'><b>ZENTRY</b></h1>
        </div>
        <div className='container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row'>
            <p className=' text-center text-sm md:text-left'>
                &copy; Nova 2024. All rights reserved
            </p>
            <div className="flex  justify-between gap-4 md:justify-start">
                <div className="flex justify-between items-center"></div>
            {
                links.map(link=>(
                    <a key={link} href={link.href} target='_blank' 
                    className='text-black transition-colors duration-500 ease-in-out hover:text-white flex justify-between items-center  '>
                        <span className=''>{link.icon} </span>
                        <span className=' hidden lg:inline-flex'>{link.name}</span>
                    </a>

                ))
            }
            </div>
            <a href="#privacy-policy"
            className='text-center text-sm hover:underline md:text-right'>Privacy Policy</a>
        </div>
    </footer>
  )
}

export default Footer