import React from 'react'
import Button from './Button'
import { GoArrowUpRight } from "react-icons/go";
import { socialMedia } from "@/data";

const About = () => {
  return (
    <section id='about' className="w-full py-20 flex gap-28" >
      <div className='w-[50%]'>
        <h1 className="text-DarKBrown/80 text-[40px] md:text-4xl lg:text-5xl mb-8"
        >About</h1>
        
        <p className='text-Brown mb-6'>Hi, I'm Vishal Baghel, a frontend developer specializing in React.js and Tailwind CSS. 
          I’m passionate about crafting engaging and responsive UIs, creating every project with complete dedication. 
          Let's work together to create high-quality, user-centric web applications that bring your vision to life!</p>
          <div className="flex items-center mb-9 md:gap-6 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
        <a href="#about">
            <Button 
              title="Hire Me"
              icon={<GoArrowUpRight/>}
              position="right"
            />
            </a>
         </div>
      {/* <div className='w-[32rem] '>
        <img src="/Untitled design (19).png" alt="" />
      </div> */}
    </section>
  )
}

export default About
