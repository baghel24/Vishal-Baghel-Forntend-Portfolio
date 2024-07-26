import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { PinContainer } from "./UI/Pin";
import { projects } from "@/data";
import Image from "next/image";

const RecentProjects = () => {
  return (
    <section id="projects" className="py-20">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-DarKBrown">recent projects</span>
      </h1>
      {/* first */}
      <div className="flex flex-wrap justify-end mr-24 p-4 gap-8 mt-10">
        <div className="border-2 border-Brown/40 h-[10rem] w-[40rem] mt-[16rem] p-4 rounded-lg shadow-xl shadow-Brown/10">
          <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 text-Brown/80 my-2"
          >
            {"Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js."}
          </p>

          <div className="flex items-center justify-between mt-7 mb-3">
            <div>
              <div className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center">
                <Image src={"/next.svg"} alt="icon5" className="p-2"  width={20} height={20}/>
              </div>
            </div>
            <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>

          </div>
        </div>
      {/* right */}
      <div className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]">
      <PinContainer
              title="/ui.aceternity.com"
              href="https://twitter.com/mannupaaji"
            >
       <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
       <div className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={"/p1.svg"}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                />
       </div>
       <h1 className="font-bold lg:text-2xl md:text-xl text-base ">
                {"3D Solar System Planets to Explore"}
              </h1>

            </PinContainer>
      </div>

      </div>

      {/* second */}
      <div className="flex flex-wrap justify-end mr-24 gap-8 p-4 mt-[-4rem] ">
      <div className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw] ">
      <PinContainer
              title="/ui.aceternity.com"
              href="https://twitter.com/mannupaaji"
            >
       <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
       <div className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={"/p1.svg"}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                />
       </div>
       <h1 className="font-bold lg:text-2xl md:text-xl text-base ">
                {"3D Solar System Planets to Explore"}
              </h1>

            </PinContainer>
      </div>
      <div className="border-2 border-Brown/40 h-[10rem] w-[40rem] mt-[16rem] p-4 rounded-lg shadow-xl shadow-Brown/10 ">
          <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 text-Brown/80 my-2"
          >
            {"Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js."}
          </p>

          <div className="flex items-center justify-between mt-7 mb-3">
            <div>
              <div className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center">
                <img src={"/next.svg"} alt="icon5" className="p-2" />
              </div>
            </div>
            <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
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
