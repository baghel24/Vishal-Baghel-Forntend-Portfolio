"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./UI/Pin";
import Image from "next/image";
import Button from "./Button";
import { GoArrowUpRight } from "react-icons/go";

const Project = () => {
  return (
    <div className="py-15">
      <h1 className="heading">
        More {" "}
        <span className="text-DarKBrown">projects</span>
      </h1>
      <div className=" flex flex-wrap items-center justify-center  gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[50vw]"
            key={item.id}
          >
            <PinContainer
              title={item.pintitle}
              href="https://twitter.com/mannupaaji"
            >
             <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[25vh] rounded-lg lg:h-[30vh] mb-8">
              <div className="relative w-full h-full overflow-hidden lg:rounded-3xl opacity-15"
                style={{ backgroundColor: "#DAC5A7" }}
              
                >
                  
                </div>
                <Image
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute  rounded-lg -skew-x-3 "
                width={380} height={500}
                />
              </div>

              <h1 className="font-bold lg:text-xl md:text-lg text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-lg lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <Image src={icon} alt="icon5" className="p-2"  width={100} height={100}/>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center mt-2">
            <a href={item.link}  className="z-10">
            <Button
              title="Check Live Site"
              icon={<GoArrowUpRight/>}
              position="right"
            />
          </a>
            </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;