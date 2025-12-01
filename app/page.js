'use client';
import About from "./components/About";
import Navbar from "./components/Navbar";
import HeaderHome from "./components/HeaderHome";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
    <Navbar />
    <HeaderHome />
    
    <div className="w-full flex justify-center py-1">
      <div className="w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-black to-transparent"></div>
    </div>
    
    <About />
    
    <div className="w-full flex justify-center py-1">
      <div className="w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-black to-transparent"></div>
    </div>
    
    <Experience />
    
    <div className="w-full flex justify-center py-1">
      <div className="w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-black to-transparent"></div>
    </div>
    
    <Projects />
    
    <div className="w-full flex justify-center py-1">
      <div className="w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-black to-transparent"></div>
    </div>
    
    <Contact />
    <Footer />
    </>
  );
}