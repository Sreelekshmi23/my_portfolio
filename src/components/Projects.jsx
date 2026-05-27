import React, { useState, useEffect } from 'react';
import { Package, ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const softwarePackages = [
    {
      id: '01',
      name: 'TPC Connect',
      registry: 'MAIN_PROJECT // PLACEMENT_AUTOMATION',
      description: 'An integrated placement cell automation system designed to streamline college placement operations, manage recruiters, and track student recruitment pipelines.',
      impact: 'Simplifies operational placement cell workflows, recruiter scheduling, and student database management.',
      stack: ['React.js', 'Flask', 'PostgreSQL', 'REST APIs']
    },
    {
      id: '02',
      name: 'Mindboom Chatbot',
      registry: 'AI_AGENT // MENTAL_HEALTH_WELLNESS',
      description: 'An AI-assisted mental wellness platform combining intelligent conversational chatbot support with curated mental health logs and resource guides.',
      impact: 'Improves immediate accessibility to mental health support through intuitive, private conversational interfaces.',
      stack: ['React.js', 'Flask', 'Python', 'Firebase']
    },
    {
      id: '03',
      name: 'EcoLife Farming',
      registry: 'WEB_SYSTEM // SUSTAINABLE_AGRICULTURE',
      description: 'A digital agricultural ecosystem connecting regional farmers with vital farming tools, technical guides, and sustainable agronomy practices.',
      impact: 'Promotes tech adoption in rural agriculture and supports informed, sustainable farming decisions.',
      stack: ['React.js', 'Firebase', 'Web Integrations']
    },
    {
      id: '04',
      name: 'VaultTalk Message',
      registry: 'SECURE_SHELL // ANONYMOUS_COMMUNICATION',
      description: 'A privacy-focused messaging platform enabling secure, encrypted anonymous one-to-one communications with localized decryption logic.',
      impact: 'Enhances absolute user privacy and secure messaging channels against unauthorized intercept nodes.',
      stack: ['JavaScript', 'Encryption APIs', 'Web Sockets']
    },
    {
      id: '05',
      name: 'Auto Form Generator',
      registry: 'COMPUTER_VISION // FORM_AUTOMATION',
      description: 'An image processing automation system that extracts data from paper paper inputs and generates structured digital forms using custom pixel transforms.',
      impact: 'Reduces corporate and institutional workload by automating manual paper form scanning and extraction.',
      stack: ['Python', 'OpenCV', 'Image Processing']
    },
    {
      id: '06',
      name: 'TeamUp Organizer',
      registry: 'CROSS_PLATFORM // TEAM_MANAGEMENT',
      description: 'A high-performance Flutter-based mobile application built to organize group teams, assign structural tasks, and manage collaborative project pipelines.',
      impact: 'Enhances coordination, task tracking, and individual productivity inside joint development teams.',
      stack: ['Flutter', 'Dart', 'Firebase']
    }
  ];

  // Automatic Horizontal Carousel Sliding Effect (Autoplay Timer every 5 seconds)
  // Dependency array includes currentIndex so manual interaction resets the 5s countdown!
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === softwarePackages.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex, softwarePackages.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? softwarePackages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === softwarePackages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="projects" className="py-14 relative overflow-hidden bg-[#050505] asym-border-bottom select-none">
      <div className="w-full px-2 sm:px-6 md:px-16 relative z-10">
        
        {/* Module Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-8 border-b border-zinc-800 pb-2">
          <div className="lg:col-span-3 text-left">
            <span className="text-xs sm:text-sm font-mono font-extrabold uppercase tracking-widest text-[#8FA3B8] flex items-center gap-1.5">
              <Package className="w-4 h-4" />
              04 / PROJECTS
            </span>
          </div>
          <div className="lg:col-span-9 text-left">
            <h2 className="font-sans text-xs font-bold text-zinc-400 uppercase tracking-widest">
              FEATURED SOFTWARE PROJECTS & BUILDS CAROUSEL
            </h2>
          </div>
        </div>

        {/* Outer Container Frame with hidden overflow */}
        <div className="w-full overflow-hidden border border-zinc-850 rounded-sm bg-[#0D0D0D] shadow-md">
          
          {/* Hardware-Accelerated Sliding Track */}
          <div 
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {softwarePackages.map((project) => (
              <div 
                key={project.id}
                className="w-full shrink-0 p-8 text-left flex flex-col justify-between hover:bg-[#0D0D0D] transition-colors group min-h-[350px] select-text"
              >
                <div className="space-y-6">
                  
                  {/* Package Registry */}
                  <div className="flex justify-between items-center text-zinc-550 font-mono text-xs border-b border-zinc-800/40 pb-3">
                    <span>{project.registry}</span>
                    <span className="text-[#8FA3B8] font-bold">PKG_0{project.id} //</span>
                  </div>

                  {/* Project Title */}
                  <h3 className="font-sans text-2xl sm:text-3xl font-black text-white tracking-tight leading-none group-hover:text-[#8FA3B8] transition-colors uppercase">
                    {project.name}
                  </h3>

                  {/* Brief description */}
                  <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
                    {project.description}
                  </p>

                  {/* One-Line Impact box */}
                  <div className="p-4 border-l-2 border-[#8FA3B8] bg-slate-900/60 text-sm sm:text-base font-sans font-medium text-zinc-200 leading-relaxed shadow-sm">
                    {project.impact}
                  </div>

                  {/* Tech Pill Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.stack.map((tech, sIdx) => (
                      <span 
                        key={sIdx} 
                        className="px-3.5 py-1.5 bg-[#141414] border border-zinc-800 text-xs font-mono text-zinc-300 rounded-sm select-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Code blueprint action */}
                <div className="mt-10 pt-4 border-t border-zinc-800/60 flex justify-between items-center">
                  <button
                    onClick={() => alert(`Blueprints for ${project.name} currently under validation.`)}
                    className="group inline-flex items-center gap-2 text-sm font-sans font-bold uppercase tracking-widest text-[#8FA3B8] hover:text-white transition-colors cursor-pointer"
                  >
                    View Code Blueprints
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                  <span className="text-xs font-mono text-zinc-500 select-none">BUILD: PASSING</span>
                </div>

              </div>
            ))}
          </div>

          {/* Bottom Fixed Navigation and Status Indicators (Does not slide) */}
          <div className="p-6 border-t border-zinc-800/60 bg-[#0D0D0D] flex flex-col sm:flex-row items-center justify-between gap-4 select-none">
            
            {/* Index Tracker */}
            <span className="font-mono text-xs text-zinc-500 font-bold uppercase tracking-widest">
              SYSTEM_BUILD // PACKAGE {currentIndex + 1} OF {softwarePackages.length}
            </span>

            {/* Navigation Buttons + Dot Track */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="px-4 py-2 bg-[#141414] hover:bg-[#8FA3B8] hover:text-[#050505] border border-zinc-800 text-xs font-mono text-white rounded-sm transition-colors duration-200 cursor-pointer"
              >
                [ &lt; PREV_BUILD ]
              </button>
              
              {/* Dot Track Indicator */}
              <div className="flex items-center gap-1.5 px-2">
                {softwarePackages.map((_, idx) => (
                  <span 
                    key={idx}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                      currentIndex === idx ? 'bg-[#8FA3B8] scale-125' : 'bg-zinc-800'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="px-4 py-2 bg-[#141414] hover:bg-[#8FA3B8] hover:text-[#050505] border border-zinc-800 text-xs font-mono text-white rounded-sm transition-colors duration-200 cursor-pointer"
              >
                [ NEXT_BUILD &gt; ]
              </button>
            </div>

            <span className="text-xs font-mono text-zinc-500 select-none">BUILD: PASSING</span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Projects;
