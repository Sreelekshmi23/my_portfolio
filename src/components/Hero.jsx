import React, { useState, useEffect } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import developerImg from '../assets/developer.jpg';

const Hero = () => {
  const introText = `> Initializing developer core parameters...
> Connection port configured.
> Identity active: S Sree Lekshmi.
> Institution: College of Engineering Chengannur (CEC).
> Status: Welcoming client collaborations...
> Welcome to my system interface dashboard. How would you like to explore?`;

  const [typedText, setTypedText] = useState('');
  const [uptime, setUptime] = useState(0);

  // Typewriter effect for readable intro status
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText((prev) => prev + introText.charAt(index));
      index++;
      if (index >= introText.length) {
        clearInterval(interval);
      }
    }, 10);

    return () => clearInterval(interval);
  }, []);

  // System session uptime ticker
  useEffect(() => {
    const timer = setInterval(() => {
      setUptime((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="min-h-[75vh] flex items-center justify-center pt-24 pb-8 relative overflow-hidden bg-[#050505] select-none">
      <div className="w-full px-2 sm:px-4 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start relative z-10">
        
        {/* Left Side: Friendly welcoming bio + highlights */}
        <div className="lg:col-span-7 flex flex-col space-y-5 text-left">
          
          {/* Highlighted Broadcast Greeting Banner */}
          <div className="w-full bg-[#0D0D0D]/90 border border-[#8FA3B8] p-5 rounded-sm relative overflow-hidden shadow-[0_0_20px_rgba(143,163,184,0.04)]">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#8FA3B8]" />
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#8FA3B8] animate-pulse" />
              <span className="text-[10px] font-mono tracking-widest text-[#8FA3B8] uppercase font-bold">
                SYSTEM_BROADCAST // WELCOME
              </span>
            </div>
            <h2 className="font-sans font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tighter leading-tight">
              Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#8FA3B8] to-zinc-500 drop-shadow-md">Sree Lekshmi</span>
            </h2>
          </div>

          {/* User-friendly introduction message */}
          <div className="space-y-4 select-text">
            <div className="flex items-center gap-2 border-b border-zinc-800 pb-2 w-full">
              <TerminalIcon className="w-4 h-4 text-[#8FA3B8]" />
              <span className="text-[10px] font-mono tracking-widest text-[#8FA3B8] uppercase font-bold">
                SYS_STATUS // INITIALIZATION_LOG
              </span>
            </div>

            {/* Micro-terminal greeting log */}
            <pre className="w-full p-5 bg-[#0D0D0D] border border-zinc-800 rounded-sm font-mono text-xs sm:text-sm text-[#A3A3A3] whitespace-pre-wrap leading-relaxed min-h-[140px] overflow-hidden select-text">
              <code className="text-[#8FA3B8]">{typedText}</code>
              <span className="terminal-cursor" />
            </pre>

            {/* Direct Art Portfolio Link for immediate visibility */}
            <Link to="/art" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#8FA3B8]/10 border border-[#8FA3B8]/30 hover:border-[#8FA3B8] hover:bg-[#8FA3B8] hover:text-[#050505] text-[#8FA3B8] font-mono text-xs font-bold uppercase tracking-widest px-6 py-4 rounded-sm transition-all duration-300 shadow-[0_0_15px_rgba(143,163,184,0.05)] mb-2 mt-4">
              [ 🎨 EXPLORE MY ART PORTFOLIO ]
            </Link>

            {/* Human-readable premium biography */}
            <div className="font-sans text-base sm:text-lg text-zinc-300 leading-relaxed font-normal pt-2 space-y-4">
              <p>
                I am a Computer Science graduate (B.Tech) from College of Engineering Chengannur, with strong hands-on experience in full-stack development and a growing specialization in Artificial Intelligence and Machine Learning.
              </p>
              <p>
                Alongside my academic journey, I actively work as a freelance developer in collaboration with a peer, where we build real-world software solutions for clients. Our work includes delivering production-level systems currently under client review and validation, which has given me exposure to real project workflows, system design, and deployment-ready development practices.
              </p>
              <p>
                I have built multiple end-to-end applications across domains such as healthcare, education, sustainability, automation, and secure communication systems. My technical expertise spans React, Next.js, Tailwind CSS, Flutter, Flask, Python, Firebase, and SQL databases, along with a strong foundation in scalable backend and frontend integration.
              </p>
              <p>
                Currently, my focus is on strengthening my Machine Learning and AI skills by building and deploying real trained models as part of my learning journey.
              </p>
            </div>
          </div>

        </div>

        {/* Right Side: Portrait image & OS Status registers (Inter Sans-serif) */}
        <div className="lg:col-span-5 flex flex-col items-start text-left space-y-4">
          
          {/* Developer Visual Window */}
          <div className="w-full relative border border-zinc-800 bg-[#0D0D0D] p-3 rounded-sm group overflow-hidden">
            <div className="flex items-center justify-between text-zinc-550 border-b border-zinc-800 pb-2 mb-3 font-mono text-[10px]">
              <span>SYS_VISUAL // S_SREE_LEKSHMI.JPG</span>
              <span className="text-[#8FA3B8] font-bold">OK // 100%_RESOLVED</span>
            </div>
            <div className="relative aspect-square overflow-hidden border border-zinc-800/80 grayscale-[30%] contrast-110 brightness-95 hover:grayscale-0 transition-all duration-500">
              <img 
                src={developerImg} 
                alt="S Sree Lekshmi" 
                className="w-full h-full object-cover object-center scale-100 group-hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#8FA3B8]/2 to-transparent pointer-events-none opacity-20" />
            </div>
            <div className="mt-2.5 flex justify-between font-mono text-[9px] text-zinc-550">
              <span>DIMENSION: 1024x1024</span>
              <span>CHANNEL: MONO_SYSTEM</span>
            </div>
          </div>

          {/* Minimal system status indicator */}
          <div className="w-full p-5 bg-[#0D0D0D] border border-zinc-800 rounded-sm space-y-4 font-sans text-sm text-[#A3A3A3]">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-2.5">
              <span className="font-bold uppercase tracking-wider text-xs">STATUS</span>
              <div className="flex items-center gap-2 text-white font-mono font-bold text-xs">
                <span className="w-2 h-2 rounded-full bg-[#8FA3B8] animate-pulse" />
                ACTIVE_STABLE
              </div>
            </div>
            
            <div className="flex items-center justify-between border-b border-zinc-800 pb-2.5">
              <span className="font-bold uppercase tracking-wider text-xs">INSTITUTION</span>
              <span className="text-white font-semibold text-right text-xs">College of Engineering Chengannur</span>
            </div>

            <div className="flex items-center justify-between border-b border-zinc-800 pb-2.5">
              <span className="font-bold uppercase tracking-wider text-xs">ROLE</span>
              <span className="text-white font-semibold text-right text-sm">B.Tech Computer Science Graduate</span>
            </div>

            <div className="flex items-center justify-between border-b border-zinc-800 pb-2.5">
              <span className="font-bold uppercase tracking-wider text-xs">UNIVERSITY</span>
              <span className="text-white font-semibold text-right text-xs">APJ Abdul Kalam Technological University</span>
            </div>

            <div className="flex items-center justify-between border-b border-zinc-800 pb-2.5">
              <span className="font-bold uppercase tracking-wider text-xs">CGPA</span>
              <span className="text-white font-mono text-sm font-bold">9.06 / 10</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="font-bold uppercase tracking-wider text-xs">SESSION_UPTIME</span>
              <span className="text-white font-mono text-xs font-bold">{uptime}s</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
