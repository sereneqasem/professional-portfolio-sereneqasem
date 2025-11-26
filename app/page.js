'use client';
import About from "./components/About";
import Navbar from "./components/Navbar";
import HeaderHome from "./components/HeaderHome";
import Experience from "./components/Experience";

export default function Home() {
  return (
    <>
    <Navbar />
    <HeaderHome />
    <About />
    <Experience />
    </>
  );
}