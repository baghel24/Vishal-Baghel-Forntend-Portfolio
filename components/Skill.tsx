import Image from 'next/image';
import React from 'react'

import { technologies } from '@/data'

import Infinitemovingcards from './Infinitemovingcards';
import { StarsBackground } from './UI/stars-background';

const Skill = () => {
  return (
    <section id='skills' className="flex flex-col items-center justify-center min-h-screen py-20"> {/* Full-height container for centering */}
      <StarsBackground/>
      <div className="mt-4">
        <h1 className="heading text-center"> {/* Centering the heading */}
          My Skills
        </h1>
        <div className="flex flex-wrap items-center justify-center  h-[10rem] w-[45rem] p-4 mt-[3rem] px-24 lg:px-0 md:px-0">
          <ul className="list-none flex flex-wrap justify-center  ">
            {technologies.map((tech, index) => (
              <li key={index} className="mb-5  mx-4 flex flex-col items-center justify-center p-4 border-2 border-Brown/40 rounded-full shadow-md shadow-Brown/50">
                <Image src={tech.icon} alt={tech.name} width={40} height={50} className="mb-" />
                {/* <span className="text-sm">{tech.name}</span> */}
              </li>
            ))}
          </ul>
        </div>
            {/* orbital */}
        <div className=' mt-16'>
          <Image src="/Screenshot 2024-07-27 235742.png" alt="img" width={700} height={500} className='mx-5'/>
        </div>
          
          {/* <div className=" mx-64 mt-16 curve-container">
        <svg className="curve-svg" viewBox="0 0 100 300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,300 Q50,150 0,0" stroke="#AD833D" stroke-width="0.5" fill="none"/>
        </svg>
        <svg className="curve-svg1" viewBox="0 0 100 300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,300 Q50,150 0,0" stroke="#AD833D" stroke-width="0.5" fill="none"/>
        </svg>
    </div> */}
        {/* <div className=" mx-[23rem] mt-64"> */}
{/* <div className='border-2 w-0 h-[25rem]'></div> */}


    {/* <div className="relative">
        
        <div className="orbit orbit-1 absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2"></div>
       
        <div className="orbit orbit-2 absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="orbit orbit-3 absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="orbit orbit-4 opacity-80 bg-Brown absolute top-0 left-0 shadow-xl  transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="orbit orbit-4  absolute top-0 left-0 shadow-xl shadow-Brown transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="orbit orbit-5 mt-[-20] absolute top-0 left-0 bg-DarKBrown transform -translate-x-1/2 -translate-y-1/2"></div>
    </div> */}
{/* </div> */}

     
      </div>
      <div className='mt-6'>
      <Infinitemovingcards />
      </div>
      
    </section>
  )
}

export default Skill
