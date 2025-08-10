import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
// import Testimonials from "./components/testimonials";
import Contact from "./components/Contact";
import Particles from "./components/ParticlesBackground";
import Footer from "./components/Footer";

const App = () => {
  return (
    
    <main className="mx-auto max-w-7xl overflow-x-hidden antialiased">
      
      <div className="bg-image fixed inset-0 bg-cover bg-fixed bg-center">
        <Particles
          particleColors={["#ffffffff", "#ffffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        {/* <Testimonials /> */}
        <Contact />
        <Footer />
      </div>
    </main>
  );
};

export default App;
