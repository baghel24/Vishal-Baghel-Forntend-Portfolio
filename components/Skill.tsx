import Image from 'next/image';
import React from 'react'

import { technologies } from '@/data'

const Skill = () => {
  return (
    <div className="flex items-center justify-center min-h-screen py-20"> {/* Full-height container for centering */}
      <div className="mt-4">
        <h1 className="heading text-center"> {/* Centering the heading */}
          My Skills
        </h1>
        <div className="flex flex-wrap items-center justify-center  h-[10rem] w-[35rem] p-4 mt-[3rem] px-24 lg:px-0 md:px-0">
          <ul className="list-none flex flex-wrap justify-center ">
            {technologies.map((tech, index) => (
              <li key={index} className="mb-2 text-center mx-4 flex flex-col items-center">
                <Image src={tech.icon} alt={tech.name} width={50} height={50} className="mb-2" />
                <span className="text-sm">{tech.name}</span>
              </li>
            ))}
          </ul>
        </div>

            {/* orbital */}
        <div className='border-2 w-[35rem] h-[35rem] rounded-full skew-x-12 rotate- mt-52'></div>
      </div>
    </div>
  )
}

export default Skill
