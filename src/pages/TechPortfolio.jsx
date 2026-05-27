import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Terminal from '../components/Terminal';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const TechPortfolio = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal-element');
    
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -20px 0px',
      }
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050505] text-white overflow-x-hidden selection:bg-[#8FA3B8] selection:text-[#050505] font-sans">
      
      {/* 1. Precise OS micro-dot grid background */}
      <div className="grid-overlay" />

      {/* 2. Floating minimal navigation trigger */}
      <Navbar />

      {/* Main system content console */}
      <main className="w-full max-w-[96%] sm:max-w-[94%] xl:max-w-[92%] mx-auto relative z-10 px-4 sm:px-6 xl:px-8 space-y-10">
        
        {/* System Boot Identity Panel */}
        <div className="reveal-element">
          <Hero />
        </div>

        {/* System Configuration (SYS_CONF) */}
        <div className="reveal-element">
          <About />
        </div>

        {/* Interactive Shell Terminal Console */}
        <div className="reveal-element">
          <Terminal />
        </div>

        {/* Installed Capabilities (SYS_MODULES) */}
        <div className="reveal-element">
          <Skills />
        </div>

        {/* Software Package Grid (SYS_BUILD) */}
        <div className="reveal-element">
          <Projects />
        </div>

        {/* Unified System Git Logs (SYSTEM_LOG) */}
        <div className="reveal-element">
          <Experience />
        </div>

        {/* Connection Port Shell (SYS_CONN) */}
        <div className="reveal-element">
          <Contact />
        </div>

      </main>

      {/* Technical blueprinted footer */}
      <Footer />

    </div>
  );
};

export default TechPortfolio;
