import React from 'react';
import { Settings, Cpu, HardDrive } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-14 relative overflow-hidden bg-[#050505] asym-border-bottom select-none">
      <div className="w-full px-2 sm:px-6 md:px-16 relative z-10">
        
        {/* Module Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-10 border-b border-zinc-800 pb-2">
          <div className="lg:col-span-3 text-left">
            <span className="text-xs sm:text-sm font-mono font-extrabold uppercase tracking-widest text-[#8FA3B8] flex items-center gap-1.5">
              <Settings className="w-4 h-4" />
              02 / ABOUT ME
            </span>
          </div>
          <div className="lg:col-span-9 text-left">
            <h2 className="font-sans text-xs font-bold text-zinc-400 uppercase tracking-widest">
              ABOUT S SREE LEKSHMI // THE PERSONAL & TECHNICAL MIND
            </h2>
          </div>
        </div>

        {/* System registers configuration grids */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* REG_01: Technical Philosophy register (7/12 width) */}
          <div className="reveal-item lg:col-span-7 p-6 bg-[#0D0D0D] border border-zinc-800 rounded-sm text-left flex flex-col justify-between hover:border-zinc-700 transition-colors">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-zinc-550 border-b border-zinc-800/60 pb-2 font-mono text-xs">
                <Cpu className="w-3.5 h-3.5" />
                <span>PHILOSOPHY // The Engineering Approach</span>
              </div>
              <h3 className="font-sans text-xl md:text-2xl font-bold text-white tracking-tight leading-relaxed max-w-xl">
                "We must construct architectures that are as mathematically sound as they are visually arresting."
              </h3>
              <p className="text-zinc-400 leading-relaxed text-sm md:text-base font-normal">
                My engineering journey is defined by combining robust backend operations with high-fidelity, polished user experiences. Through collaborative freelancing and academic exploration, I have learned to build clean, modular, and deployment-ready software systems that fulfill real-world client parameters and adapt to client workflows.
              </p>
            </div>
            
            <div className="pt-6 mt-6 border-t border-zinc-800 flex items-center gap-4 text-zinc-550 select-none font-mono text-xs">
              <span>OPERATOR: S S SREE LEKSHMI</span>
              <div className="w-12 h-[1px] bg-zinc-800" />
              <span>CORE_STABLE_VER</span>
            </div>
          </div>

          {/* REG_02: Computation Capabilities (5/12 width) */}
          <div className="reveal-item lg:col-span-5 p-6 bg-[#0D0D0D] border border-zinc-800 rounded-sm text-left flex flex-col justify-between hover:border-zinc-700 transition-colors">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-zinc-550 border-b border-zinc-800/60 pb-2 font-mono text-xs">
                <HardDrive className="w-3.5 h-3.5" />
                <span>CAPABILITY // Full-Stack & Model Training</span>
              </div>
              <p className="text-zinc-400 leading-relaxed text-sm md:text-base font-normal">
                I have built multiple end-to-end applications in domains such as healthcare, education, sustainability, and encrypted messaging. My experience spans full-stack engineering (React, Next.js, Flask, Node) and mobile development (Flutter). Currently, I am actively strengthening my AI/ML expertise by building and deploying real trained models.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-zinc-800 space-y-2">
              <div className="flex justify-between font-mono text-[10px] text-zinc-550">
                <span>INSTRUCTION_SET: RISC_64</span>
                <span>LATENCY_RATING: 99.8%</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
