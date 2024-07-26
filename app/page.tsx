import About from "@/components/About";
import Approach from "@/components/Approach";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import RecentProjects from "@/components/RecentProjects";
import Services from "@/components/Services";
import Skill from "@/components/Skill";
import { FloatingNav } from "@/components/UI/FloatingNavbar";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
      <FloatingNav navItems={navItems} />
       <Hero />
       <About />
       <Services/>
       <Skill />
       <RecentProjects />
       <Project />
       <Approach />
       <Contact />
       <Footer />
      </div>
    </main>
  );
}
