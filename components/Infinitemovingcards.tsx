import React from 'react'
import { technologies } from '@/data';
import Image from 'next/image';
const Infinitemovingcards = () => {
  return (
    <div>
      <main className="relative  flex flex-col justify-center overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
            <div className="text-center">

                {/* <!-- Logo Carousel animation --> */}
                <div
                    x-data="{}"
                    x-init="$nextTick(() => {
                        let ul = $refs.logos;
                        ul.insertAdjacentHTML('afterend', ul.outerHTML);
                        ul.nextSibling.setAttribute('aria-hidden', 'true');
                    })"
                    className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
                >
                    <ul x-ref="logos" className="flex  items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll ">
                    {technologies.map((tech, index) => (
              <li key={index} className="  mx-2 flex  items-center justify-center gap-6  ">
                <Image src={tech.icon} alt={tech.name} width={50} height={50} className="mb-" />
                <span className="text-lg text-Brown">{tech.name}</span>
              </li>
            ))}
                        
                    </ul>                
                </div>
                {/* <!-- End: Logo Carousel animation --> */}
                
            </div>

        </div>
    </main>
    </div>
  )
}

export default Infinitemovingcards
