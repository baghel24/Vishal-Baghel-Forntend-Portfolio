import React from 'react'
import { GlareCard } from "./UI/glare-card";


const Services = () => {
  return (
    <section id="projects" className="py-15 mb-32">
      <h1 className="heading">
        What can I Do for{" "}<br></br>
        <span className="text-DarKBrown"> your Needs</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-36 mt-16 mx-5 ">
      <GlareCard className="flex flex-col items-start justify-end py-8 px-6">
        <p className="font-bold text-white text-lg">1. WEB DESIGN </p>
        <p className="font-normal text-base text-Brown mt-4">
        Visually stunning web designs that captivate your audience by blending your brand voice and customer needs.
        </p>
      </GlareCard>
      <GlareCard className="flex flex-col items-start justify-end py-8 px-6">
        <p className="font-bold text-white text-lg">2. DEVELOPMENT</p>
        <p className="font-normal text-base text-Brown mt-4">
        Get custom web development solutions that are tailored to your specifications, designed to deliver a flawless user experience.
        </p>
      </GlareCard>
      <GlareCard className="flex flex-col items-start justify-end py-8 px-6">
        <p className="font-bold text-white text-lg">3. </p>
        <p className="font-normal text-base text-Brown mt-4">
          The greatest trick the devil ever pulled was to convince the world
          that he didn&apos;t exist.
        </p>
      </GlareCard>
    </div>
    </section>
  )
}

export default Services
