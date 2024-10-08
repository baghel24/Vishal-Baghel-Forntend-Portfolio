import React from 'react';

const steps = [
  {
    number: 1,
    title: 'DISCOVERY CALL',
    subtitle: 'DO WE MATCH?',
    description: 'Before we start, we determine if and how I can help you. What are your requirements for your new website? Why do you need a new website? What goals do you have, and what problems can we solve with a new website?',
  },
  {
    number: 2,
    title: 'CONCEPT & STRATEGY',
    subtitle: 'WE NEED A PLAN',
    description: 'Together, we develop a strategy that successfully combines your goals with the needs of your target audience. Based on this concept, I create the first wireframes and an interactive prototype. This provides us with a very good impression of the website and the user interface.',
  },
  {
    number: 3,
    title: 'WEB DESIGN',
    subtitle: 'SOME MAGIC',
    description: 'Now comes the magic. Based on the previously developed concept, I create a high-end screen design perfectly tailored to your brand. A web design that sets you apart from your competition, fits your target audience ideally, and provides an excellent user experience.',
  },
  {
    number: 4,
    title: 'DEVELOPMENT',
    subtitle: 'MORE MAGIC',
    description: 'In this step, we breathe life into your new high-end design. You will receive a custom-built website using a modular web design system and CMS integration. Animations will add the necessary flair to your site and set you apart from the boring competition.',
  },
  
  
];

const Approach = () => {
  return (
    <div className="py-20">
      <p className="text-center text-Brown">THE PROCESS</p>
      <h1 className="heading py-3">
        Your Website <span className="text-DarKBrown">in 4 steps</span>
      </h1>
      <p className="text-center text-Brown">
        Our process ensures that we create a website
        <br />
        tailored to your business needs.
      </p>

      <div className="w-full h-full">
        <div className="relative wrap overflow-hidden mt-10 h-full">
          <div
            className="border-2-2 absolute lg:border-opacity-20 md:border-opacity-20 border-opacity-0 border-Brown h-full border"
            style={{ left: '50%' }}
          ></div>
          
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'right-timeline' : 'flex-row-reverse left-timeline'}`}
            >
              <div className="order-1 lg:w-5/12"></div>
              <div className="z-20 flex items-center order-1 border-2  border-Brown/40 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto bg-black-100 text-white font-semibold text-lg">{step.number}</h1>
            </div>
              <div
                className="order-1 border-2 border-Brown/40 rounded-lg shadow-xl lg:w-5/12 md:w-5/12 w-[20rem] px-6 py-4"
                style={{
                  backdropFilter: 'blur(20px) saturate(150%)',
                  backgroundColor: 'rgba(35, 35, 35, 0.5)',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.125)',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                }}
              >
                <p className="lg:text-lg lg:font-normal font-light text-sm text-DarKBrown/80 my-2">{step.subtitle}</p>
                <h1 className="lg:text-xl lg:font-normal font-light text-sm text-Brown/90 my-2">{step.title}</h1>
                <p className="lg:text-lg lg:font-normal font-light text-sm text-Brown/60 my-2">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Approach;


{/* <div className="z-20 flex items-center order-1 border-2  border-Brown/40 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto bg-black-100 text-white font-semibold text-lg">4</h1>
            </div> */}