import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { PinContainer } from "./UI/Pin";
// import { projects } from "@/data";
import Image from "next/image";

const RecentProjects = () => {
  return (
    <section id="projects" className="py-20">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-DarKBrown">recent projects</span>
      </h1>
      {/* first */}
      <div className="flex justify-end lg:mr-24  mr-32 p-4 gap-8 ">
        <div className="  border-2 border-Brown/40 h-full lg:w-[40rem]   lg:mt-[16rem] md:mt-[16rem] mt-[20rem] p-4 rounded-lg shadow-xl shadow-Brown/10">
          <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-3 text-Brown/80 my-"
          >
            {"Engineered a comprehensive real estate web application using React.js+vite.js and Tailwind CSS, integrating seamless functionality for buying, selling, and renting properties; enhanced user experience with 20+ intuitive pages, boosting engagement by 40%."}
          </p>

          <div className="flex flex-wrap items-center justify-between  mb-1">
            <div className="flex">
              <div className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center">
                <Image src={"/re.svg"} alt="icon5" className="p-2" width={100} height={100} />
              </div>
              <div className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center">
                <Image src={"/tail.svg"} alt="icon5" className="p-2" width={100} height={100} />
              </div>
              <div className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center">
                <Image src={"/fm.svg"} alt="icon5" className="p-2" width={100} height={100} />
              </div>
            </div>
            <div className="flex justify-center items-center">
              <a href="https://dwello-estates.netlify.app/" className="flex lg:text-xl md:text-xs text-sm text-purple">
                Check Live Site
              </a>
              <FaLocationArrow className="ms-3" color="#CBACF9" />
            </div>

          </div>
        </div>
        {/* right */}
        <div className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]">
          <PinContainer
            title="DwelloEstates"
            href="https://twitter.com/mannupaaji"
          >
            <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
              <div className="relative w-full h-full overflow-hidden lg:rounded-3xl opacity-15"
                style={{ backgroundColor: "#DAC5A7" }}
              >
              </div>
              <Image
                src={"/Screenshot 2024-07-26 222950.png"}
                alt="cover"
                className="z-10 absolute  rounded-lg -skew-x-3 "
                width={380} height={500}
              />
            </div>
            <h1 className="font-bold lg:text-2xl md:text-xl text-base text-Brown">
              {"Dwello Estates (The Real Estate App)"}
            </h1>

          </PinContainer>
        </div>

      </div>

      {/* second */}
      <div className="flex justify-end lg:mr-24  gap-8 p-4 mt-[-4rem] ">
        <div className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw] lg:ml-0 ml-[10rem] ">
          <PinContainer
            title="Infinty"
            href="https://twitter.com/mannupaaji"
          >
            <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
              <div className="relative w-full h-full overflow-hidden lg:rounded-3xl opacity-15"
                style={{ backgroundColor: "#DAC5A7" }}
              >
                <Image src="/bg.png" alt="bgimg" width={20} height={20} />
              </div>
              <Image
                src={"/Screenshot 2024-07-26 224553.png"}
                alt="cover"
                className="z-10 absolute rounded-lg -skew-x-3 "
                width={500} height={500}
              />
            </div>
            <h1 className="font-bold lg:text-2xl md:text-xl text-base  text-Brown">
              {"Infinity-The power of AI"}
            </h1>

          </PinContainer>
        </div>
        <div className=" border-2 border-Brown/40 h-full w-[40rem]  lg:mt-[16rem] md:mt-[16rem] mt-[20rem] p-4 rounded-lg shadow-xl shadow-Brown/10 ">
          <p className="  lg:text-xl lg:font-normal font-light text-sm line-clamp-3 text-Brown/80 "
          >
            {" Sleek Design with Parallax Effects, employ React.js+vite.js and Tailwind CSS to design a visually stunning and immersive user experience with modern parallax effects and bento box layouts. It increases 40% of user interaction."}
          </p>

          <div className="flex flex-wrap items-center justify-between mb-1">
          <div className="flex">
              <div className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center">
                <Image src={"/re.svg"} alt="icon5" className="p-2" width={100} height={100} />
              </div>
              <div className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center">
                <Image src={"/tail.svg"} alt="icon5" className="p-2" width={100} height={100} />
              </div>
              <div className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center">
                <Image src={"/fm.svg"} alt="icon5" className="p-2" width={100} height={100} />
              </div>
            </div>
            <div className="flex justify-center items-center">
              <a href="https://infinity-ai.netlify.app/" className="flex lg:text-xl md:text-xs text-sm text-purple">
                Check Live Site
              </a>
              <FaLocationArrow className="ms-3" color="#CBACF9" />
            </div>

          </div>
        </div>
        {/* right */}


      </div>
    </section>
  );
};

export default RecentProjects;
