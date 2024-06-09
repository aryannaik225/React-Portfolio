import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerate-Effect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { navItems } from '@/data'
import Link from 'next/link'
import { cn } from '@/utils/cn'

const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
        <div>
            <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white'/>
            <Spotlight className='top-10 left-full h-[80vh] w-[50vh]' fill='purple'/>
            <Spotlight className='top-28 left-80 h-[80vh] w-[50vh]' fill='blue'/>    
        </div>

        <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        </div>

        <div className='flex flex-row items-center gap-10 w-50 lg:w-25 absolute right-20 top-10'>
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 font-medium"
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="text-sm !cursor-pointer">{navItem.name}</span>
            </Link>
          ))}
        </div>

        <div className='flex justify-center relative my-20 z-10'>
          <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
            <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
              Dynamic Web Magic with Next.js
            </h2>

            <TextGenerateEffect className='text-center text-[40px] md:text-5xl lg:text-6xl' words='Transforming Concepts into Seamless User Experiences'/>

            <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
              Hi, I&apos;m Aryan, a Web Developer based in India. 
            </p>
          
            <a href='#about'>
              <MagicButton 
                title='Show my work'
                icon={<FaLocationArrow />}
                position='right'
              />
            </a>
          </div>
        </div>
    </div>
  )
}

export default Hero