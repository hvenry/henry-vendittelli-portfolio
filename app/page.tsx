import { navItems } from "../data";
import Hero from "../components/Hero";
import About from "../components/About";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import { FloatingNav } from "../components/ui/FloatingNavbar"

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto">
      <div className="w-full">
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
        <p className="h-10 flex items-center font-mono text-2xl pl-1 bg-black"> Hello </p>
        <p className="h-10 flex items-center font-mono text-2xl pl-1 bg-red-500"> Hello </p>
        <p className="h-10 flex items-center font-mono text-2xl pl-1 bg-blue-500"> Hello </p>
        <p className="h-10 flex items-center font-mono text-2xl pl-1 bg-green-500"> Hello </p>
      </div>
    </main>
  );
}