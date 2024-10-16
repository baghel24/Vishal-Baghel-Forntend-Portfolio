import { socialMedia } from "@/data";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full pb-10 border-t-2">
      <div className="flex mt-2 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Vishal Baghel
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.url} // Linking to the social media URL
              target="_blank" // Opens link in a new tab
              rel="noopener noreferrer" // Security for external links
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
<Image src={info.img} alt="icons" width={20} height={20} style={{ objectFit: 'contain' }}/>
</a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

