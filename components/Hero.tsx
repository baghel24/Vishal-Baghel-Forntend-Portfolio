import Button from './Button'
import { Spotlight } from './UI/Spotlight'
import { TextGenerateEffect } from './UI/TextGenerateEffect'
import { GoArrowUpRight } from "react-icons/go";


const Hero = () => {
  return (
    <div className="pb-20 pt-36 relative">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="Brown"
        />
      </div>
      
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center relative">
          <div className="w-[32rem] mt-[-8rem] absolute top-0 left-1/2 transform -translate-x-1/2 z-0">
            <img src="/Untitled design (19).png" alt="" />
          </div>

          <div className="z-10 mt-[12rem]">
            <TextGenerateEffect 
              words="Transforming Concepts into Seamless User Experiences"
              className="text-center text-[40px] md:text-4xl lg:text-5xl"
            />
          </div>

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-3xl z-10">
            Hi! I'm Vishal Baghel, a Web Designer & Developer.
          </p>

          <a href="#about" className="z-10">
            <Button
              title="Show my work"
              icon={<GoArrowUpRight/>}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero
