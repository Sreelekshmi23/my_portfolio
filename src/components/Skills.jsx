import React, { useState, useEffect } from 'react';
import { Cpu } from 'lucide-react';

const Skills = () => {
  const [activeTab, setActiveTab] = useState(0);

  const capabilityModules = [
    {
      index: '01',
      short: 'LANGUAGES & DATABASE',
      category: 'PROGRAMMING LANGUAGES & DATABASES CORE',
      modules: ['Python', 'C++', 'JavaScript', 'SQL', 'MySQL', 'PostgreSQL', 'HTML5', 'CSS3']
    },
    {
      index: '02',
      short: 'FULL-STACK',
      category: 'FULL-STACK DEVELOPMENT SYSTEMS',
      modules: ['React.js', 'Next.js', 'Tailwind CSS', 'Flask', 'Node.js (basic)', 'REST APIs', 'Firebase']
    },
    {
      index: '03',
      short: 'MOBILE DEVELOPMENT',
      category: 'MOBILE & CROSS-PLATFORM SYSTEMS',
      modules: ['Flutter', 'Cross-platform UI development']
    },
    {
      index: '04',
      short: 'AI / ML & WORKFLOWS',
      category: 'AI / MACHINE LEARNING, TOOLS & WORKFLOWS',
      modules: ['Python for ML', 'OpenCV', 'Chatbot systems', 'GenAI exploration', 'Git / GitHub', 'Linux basics', 'Figma', 'Docker basics', 'VS Code']
    }
  ];

  // Automatic Horizontal Sliding Effect (Autoplay Timer every 7 seconds)
  // Dependency array includes activeTab so manual interaction resets the 7s countdown!
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev === capabilityModules.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(timer);
  }, [activeTab, capabilityModules.length]);

  return (
    <section id="skills" className="py-14 relative overflow-hidden bg-[#050505] asym-border-bottom select-none">
      <div className="w-full px-6 md:px-16 relative z-10">
        
        {/* Module Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-8 border-b border-zinc-800 pb-2">
          <div className="lg:col-span-3 text-left">
            <span className="text-xs sm:text-sm font-mono font-extrabold uppercase tracking-widest text-[#8FA3B8] flex items-center gap-1.5">
              <Cpu className="w-4 h-4" />
              03 / CORE SKILLS
            </span>
          </div>
          <div className="lg:col-span-9 text-left">
            <h2 className="font-sans text-xs font-bold text-zinc-400 uppercase tracking-widest">
              AREAS OF EXPERTISE & INSTALLED CAPABILITIES CONSOLE
            </h2>
          </div>
        </div>

        {/* Spacious Category Tab Selector Bar */}
        <div className="flex flex-wrap gap-2.5 mb-6 justify-start select-none border-b border-zinc-800/40 pb-4">
          {capabilityModules.map((row, idx) => {
            const isActive = activeTab === idx;
            return (
              <button 
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-4 py-2.5 rounded-sm font-mono text-xs sm:text-sm border transition-all duration-200 cursor-pointer ${
                  isActive 
                    ? 'border-[#8FA3B8] bg-[#0D0D0D] text-white shadow-sm font-bold' 
                    : 'border-zinc-800 bg-[#0D0D0D]/30 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                }`}
              >
                [ 0{row.index} / {row.short} ]
              </button>
            );
          })}
        </div>

        {/* Outer Container Frame with hidden overflow */}
        <div className="w-full overflow-hidden border border-zinc-850 rounded-sm bg-[#0D0D0D] shadow-md">
          
          {/* Hardware-Accelerated Sliding Track */}
          <div 
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform"
            style={{ transform: `translateX(-${activeTab * 100}%)` }}
          >
            {capabilityModules.map((row, idx) => (
              <div 
                key={idx}
                className="w-full shrink-0 p-8 text-left flex flex-col justify-between hover:bg-[#0D0D0D] transition-colors group min-h-[240px] select-text"
              >
                <div className="space-y-6">
                  
                  {/* Header subtext */}
                  <div className="flex justify-between items-center text-zinc-500 font-mono text-xs border-b border-zinc-800 pb-3">
                    <span>ACTIVE_MODULE // CORE_MOD_0{idx + 1}</span>
                    <span className="text-[#8FA3B8] font-bold">0{idx + 1} //</span>
                  </div>

                  {/* Discipline Title */}
                  <h3 className="font-sans text-base sm:text-lg lg:text-xl font-black text-white tracking-wider uppercase">
                    {row.category}
                  </h3>

                  {/* Modern Pill Tags - Highly Spacious, Breathes beautifully! */}
                  <div className="flex flex-wrap gap-3 pt-2">
                    {row.modules.map((mod, mIdx) => (
                      <span 
                        key={mIdx}
                        className="px-5 py-2.5 bg-[#141414] border border-zinc-800 text-sm sm:text-base font-sans font-semibold text-zinc-200 rounded-full hover:border-[#8FA3B8] hover:text-[#8FA3B8] transition-all duration-200 select-all shadow-sm"
                      >
                        {mod}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Compiled status details */}
                <div className="mt-8 pt-4 border-t border-zinc-800 flex justify-between text-xs font-mono text-zinc-550 opacity-70 group-hover:opacity-100 transition-opacity">
                  <span>COMPILED: OK</span>
                  <span>STATUS: ACTIVE_LOADED</span>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Skills;
