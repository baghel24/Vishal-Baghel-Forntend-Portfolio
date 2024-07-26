import React from 'react';
import { FaLocationArrow } from "react-icons/fa6";
import Button from "./Button";
import Image from 'next/image';

const Contact = () => {
  return (
    <section className="w-full pt-20 pb-10" id="contact">
      {/* Background grid */}
      {/* <div className="w-full absolute left-0 bottom-32 min-h-96">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
           width={20} height={20}
        />
      </div> */}

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let's discuss how I can help you achieve your goals.
        </p>
        <a href="mailto:contact@jsmastery.pro">
          <Button
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex items-center justify-center py-16 gap-12 border-2 border-Brown/20 mt-9 bg-black-100">
        <div className="w-full max-w-md  rounded-lg p-4 shadow-md">
          <h2 className="text-2xl font-bold text-Brown mb-4">Contact Form</h2>
          <form>
            <div className="flex flex-wrap gap-2">
              <input
                type="text"
                className="text-Brown border-2 border-Brown/20 rounded-md p-2 mb-4 focus:outline-none focus:ring-1 focus:ring-black-100 transition ease-in-out duration-150 w-full md:w-[48%] placeholder-Brown"
                placeholder="First Name"
              />
              <input
                type="text"
                className="text-Brown border-2 border-Brown/20 rounded-md p-2 mb-4 focus:outline-none focus:ring-1 focus:ring-black-100 transition ease-in-out duration-150 w-full md:w-[48%] placeholder-Brown"
                placeholder="Last Name"
              />
            </div>
            <input
              type="email"
              className="text-Brown border-2 border-Brown/20 rounded-md p-2 mb-4 focus:outline-none focus:ring-1 focus:ring-black-100 transition ease-in-out duration-150 w-full placeholder-Brown"
              placeholder="Email"
            />
            <input
              type="number"
              className="text-Brown border-2 border-Brown/20 rounded-md p-2 mb-4 focus:outline-none focus:ring-1 focus:ring-black-100 transition ease-in-out duration-150 w-full placeholder-Brown"
              placeholder="Phone Number"
            />
            <textarea
              name="message"
              className="text-Brown border-2 border-Brown/20 rounded-md p-2 mb-4 w-full h-32 focus:outline-none focus:ring-1 focus:ring-black-100 transition ease-in-out duration-150 placeholder-Brown"
              placeholder="Message"
            ></textarea>
            <div className="mt-3 text-end">
              <a href="#">
                <Button
                  title="Send"
                  icon={<FaLocationArrow />}
                  position="right"
                />
              </a>
            </div>
          </form>
        </div>
        <div className="border-2 w-[45%]">
          <Image src="/bgimg" alt="bgimg"  width={20} height={20}/>
        </div>
      </div>
    </section>
  );
}

export default Contact;
