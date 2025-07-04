"use client";
import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import About from "@/components/About";
import Certifications from "@/components/Certifications";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Main() {
  return (
    <>
      <Navbar />
      <main className="scroll-smooth">
        <section id="home" className="min-h-screen">
          <Home />
        </section>
        <section id="about" className="min-h-screen">
          <About />
        </section>
        <section id="education" className="min-h-screen">
          <Education />
        </section>
        <section id="projects" className="min-h-screen">
          <Projects />
        </section>
        <section id="certifications" className="min-h-screen">
          <Certifications />
        </section>
        <section id="contact" className="min-h-screen">
          <Contact />
        </section>
      </main>
    </>
  );
}
