'use client'
import Image from 'next/image'
import React from 'react'
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircle from './BackgroundCircle';

type Props = {}

function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words:[
            "Hi, I Am Zerubabel Endale",
            "Guy-who-loves-coffee.tsx",
            "<ButLoves-To CodeMore/>"
        ],
        loop:true,
        delaySpeed:2000,
    });
  return (
    <div className=' h-screen flex flex-col space-y-8 
    items-center justify-center text-center overflow-hidden'>
        <BackgroundCircle/>
        <Image
        className='relative rounded-full h-32 w-32 mx-auto object-cover'
        src="https://scontent.fadd2-1.fna.fbcdn.net/v/t39.30808-6/318123663_108118135476786_1249089522681726946_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=QyM5WSaMvB8Ab5PEPkB&_nc_ht=scontent.fadd2-1.fna&oh=00_AfA0aDR-8-S2rk52gWH33xAuvOUOq8NbMeytt0QcB4Ogtg&oe=6618BF1E" width={300} height={300} alt="" />
        <div className=' z-20'>
            <h2 className=' text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Computer Engineer</h2>
            <h1 className=' text-5xl lg:text-6xl font-semibold px-10'>
                <span className=' mr-3'>{text}</span>
                <Cursor cursorColor='#778A35'/>
            </h1>
            <div className='pt-5'>
                <a href="#about">
                <button className='heroButton'>About</button>
                </a>
                <a  href="#experiance">
                    <button className='heroButton'>Experiance</button>
                </a>
                <a  href="#skills">
                    <button className='heroButton'>Skill</button>
                </a>
                <a  href="#projects">
                    <button className='heroButton'>Project</button>
                </a>
            </div>
        </div>
        
    </div>
  )
}

export default Hero