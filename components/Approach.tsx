import React from 'react'

const Approach = () => {
  return (
    <div className="py-20">
      <p className='text-center text-Brown'>THE PROCESS</p>
      <h1 className="heading py-3">
        Your Website  {" "}
        <span className="text-DarKBrown ">in 5 steps</span>
      </h1>
      <p className='text-center text-Brown'>Our process ensures that we create a website 
        <br></br>tailored to your business needs.</p>
      

      <div className='flex mt-[5rem] gap-[12rem] '>
      <div className="border-2 border-Brown/40 h-[18rem] w-[35rem]  p-4 rounded-lg shadow-xl shadow-Brown/10  mt-[20rem]">
          <p className="lg:text-lg lg:font-normal font-light text-sm  text-DarKBrown/80 my-2">WE NEED A PLAN</p>
          <h1 className="lg:text-xl lg:font-normal font-light text-sm  text-Brown/90 my-2">CONCEPT & STRATEGY</h1>
          <p className="lg:text-lg lg:font-normal font-light text-sm  text-Brown/60 my-2">
          Together, we develop a strategy that successfully combines your goals with the needs of your target audience. Based on this concept, I create the first wireframes and an interactive prototype. This provides us with a very good impression of the website and the user interface.          </p>

        </div>
      <div className="border-2 border-Brown/40 h-[18rem] w-[35rem]  p-4 rounded-lg shadow-xl shadow-Brown/10  ">
          <p className="lg:text-lg lg:font-normal font-light text-sm  text-DarKBrown/80 my-2">DO WE MATCH?</p>
          <h1 className="lg:text-xl lg:font-normal font-light text-sm  text-Brown/90 my-2">DISCOVERY CALL</h1>
          <p className="lg:text-lg lg:font-normal font-light text-sm  text-Brown/60 my-2"
          >Before we start, we determine if and how I can help you. What are your requirements for your new website? Why do you need a new website? What goals do you have, and what problems can we solve with a new website?
          </p>

        </div>
        
        
      </div>
      <div className='flex mt-[6rem] gap-[12rem]'>
      <div className="border-2 border-Brown/40 h-[18rem] w-[35rem]  p-4 rounded-lg shadow-xl shadow-Brown/10  mt-[20rem]">
          <p className="lg:text-lg lg:font-normal font-light text-sm  text-DarKBrown/80 my-2">MORE MAGIC</p>
          <h1 className="lg:text-xl lg:font-normal font-light text-sm  text-Brown/90 my-2">DEVELOPMENT</h1>
          <p className="lg:text-lg lg:font-normal font-light text-sm  text-Brown/60 my-2">
In this step, we breathe life into your new high-end design. You will receive a custom-built website using a modular web design system and CMS integration. Animations will add the necessary flair to your site and set you apart from the boring competition.          </p>

        </div>
        <div className="border-2 border-Brown/40 h-[18rem] w-[35rem]  p-4 rounded-lg shadow-xl shadow-Brown/10  ">
          <p className="lg:text-lg lg:font-normal font-light text-sm  text-DarKBrown/80 my-2">SOME MAGIC</p>
          <h1 className="lg:text-xl lg:font-normal font-light text-sm  text-Brown/90 my-2">WEB DESIGN</h1>
          <p className="lg:text-lg lg:font-normal font-light text-sm  text-Brown/60 my-2">
Now comes the magic. Based on the previously developed concept, I create a high-end screen design perfectly tailored to your brand. A web design that sets you apart from your competition, fits your target audience ideally, and provides an excellent user experience.          </p>

        </div>
      </div>
    </div>
  )
}

export default Approach
