import { navItems } from "../data";
import Hero from "../components/Hero";
import About from "../components/About";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import { FloatingNav } from "../components/ui/FloatingNavbar"

export default function Home() {
  return (
    <main className="w-full flex justify-center flex-col items-center bg-gray-950">
      <div className="md:w-1/2">
        <FloatingNav navItems={navItems}/>
        <Hero />
        <div id="about">
          <About />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    </main>
  );
}