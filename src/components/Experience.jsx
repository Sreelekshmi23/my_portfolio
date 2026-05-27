import React, { useState, useEffect } from 'react';
import { Terminal as TerminalIcon, Calendar, Briefcase } from 'lucide-react';

const Experience = () => {
  const [activeLog, setActiveLog] = useState(0); // Default to the first (latest) milestone!

  const gitLogs = [
    {
      commit: '03a48e7',
      date: 'May 2026',
      type: 'EXP',
      role: 'Collaborative Freelance Developer',
      company: 'Freelance Client Solutions',
      subject: 'Delivering Production-Level Client Software Solutions',
      details: [
        'Collaborating with a peer developer to deliver customized end-to-end software solutions for clients.',
        'Completed development on a major full-stack web platform currently undergoing client review and validation.',
        'Obtained deep exposure to complete software workflows, system design, and deployment-ready engineering.'
      ]
    },
    {
      commit: 'b21d9f2',
      date: 'Jan 2026',
      type: 'MENT',
      role: 'Programming & Bootcamp Technical Mentor',
      company: 'IEEE CEC & FOCES CEC Chapters',
      subject: 'Mentoring Student Cohorts in C and Java Languages',
      details: [
        'Appointed as Mentor for the IEEE C Programming Bootcamp "Learn to Code", teaching core concepts to student cohorts.',
        'Served as Mentor for the FOCES CEC Java Bootcamp "Coding Arena 2.0" conducting coding labs and challenge sessions.',
        'Supported over 100+ student developers in structural algorithm paradigms and syntax debugging.'
      ]
    },
    {
      commit: 'f97e21a',
      date: 'Nov 2024',
      type: 'WIN',
      role: 'IEEE Hackathon Winner (3rd Prize)',
      company: 'IEEE State-Level Technical Hackathon',
      subject: 'Conferred 3rd Prize in IEEE State Hackathon',
      details: [
        'Engineered high-performance prototype systems under tight hackathon timeline constraints.',
        'Awarded 3rd Prize in the APJ Abdul Kalam Technological University state-level developer hackathon.',
        'Formulated custom data models and scalable API integrations to address localized community challenges.'
      ]
    },
    {
      commit: 'c38d12e',
      date: 'Jul 2024',
      type: 'CERT',
      role: 'Google Challenge & GenAI Badges',
      company: 'Google Developers & GCP Academy',
      subject: 'Google Solution Challenge Achievement & GenAI badges',
      details: [
        'Conferred official Google Solution Challenge Certificate of Achievement for student engineering excellence.',
        'Completed Google Developer badges specializing in MLOps and Generative AI application architecture.',
        'Gained competencies in machine learning pipelines, prompt engineering, and serverless Google Cloud deployments.'
      ]
    },
    {
      commit: 'd2140eb',
      date: 'Mar 2023',
      type: 'CERT',
      role: 'IBM SkillBuild & NPTEL DBMS Credentials',
      company: 'IBM Academy & NPTEL India',
      subject: 'Acquired Generative AI & DBMS Certifications',
      details: [
        'Acquired IBM SkillBuild "Generative AI in Action" credential, exploring model workflows and prompt constructs.',
        'Completed the NPTEL Database Management Systems certification program with distinction.',
        'Gained strong fundamentals in relational database designs, transaction matrices, and SQL query compilation.'
      ]
    },
    {
      commit: 'e51b901',
      date: 'Sep 2022',
      type: 'ACAD',
      role: 'B.Tech Computer Science Graduate & Student Governance',
      company: 'College of Engineering Chengannur',
      subject: 'B.Tech CSE Graduation & College Union Governance',
      details: [
        'APJ Abdul Kalam Technological University - College of Engineering Chengannur B.Tech CSE Graduate.',
        'Maintained a numerical CGPA of 9.06 / 10.0, placing in academic distinction thresholds.',
        'Elected and served as a Member of the College Union for 3 consecutive years, representing student initiatives.'
      ]
    }
  ];

  // Automatic Chronological Sliding Effect (Autoplay Timer every 6 seconds)
  // Dependency array includes activeLog so manual interaction resets the 6s countdown!
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveLog((prev) => (prev === gitLogs.length - 1 ? 0 : prev + 1));
    }, 6000); // 6s duration allowing comfortable reading of milestones
    return () => clearInterval(timer);
  }, [activeLog, gitLogs.length]);

  const handlePrev = () => {
    setActiveLog((prev) => (prev === 0 ? gitLogs.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveLog((prev) => (prev === gitLogs.length - 1 ? 0 : prev + 1));
  };

  const currentLog = gitLogs[activeLog];

  return (
    <section id="experience" className="py-14 relative overflow-hidden bg-[#050505] asym-border-bottom select-none">
      <div className="w-full px-2 sm:px-6 md:px-16 relative z-10">
        
        {/* Module Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-8 border-b border-zinc-800 pb-2">
          <div className="lg:col-span-3 text-left">
            <span className="text-xs sm:text-sm font-mono font-extrabold uppercase tracking-widest text-[#8FA3B8] flex items-center gap-1.5">
              <TerminalIcon className="w-4 h-4" />
              05 / EXPERIENCE
            </span>
          </div>
          <div className="lg:col-span-9 text-left">
            <h2 className="font-sans text-xs font-bold text-zinc-400 uppercase tracking-widest">
              EXPERIENCE TIMELINE, ACADEMIC LOG & HACKATHONS
            </h2>
          </div>
        </div>

        {/* Chronological Milestone Progress Track */}
        <div className="w-full mb-8 relative select-none">
          {/* Timeline connecting line behind buttons */}
          <div className="absolute top-[18px] left-6 right-6 h-[1px] bg-zinc-800 border-b border-dashed border-zinc-700/60 -z-10 hidden sm:block" />

          {/* Horizontal scrollable button container */}
          <div className="flex items-center gap-4 overflow-x-auto pb-4 scrollbar-none sm:justify-between px-2 w-full">
            {gitLogs.map((log, idx) => {
              const isActive = activeLog === idx;
              return (
                <button
                  key={log.commit}
                  onClick={() => setActiveLog(idx)}
                  className={`flex flex-col items-center shrink-0 group transition-all duration-200 cursor-pointer ${
                    isActive ? 'scale-105' : 'hover:scale-102'
                  }`}
                >
                  {/* Milestones Date Label */}
                  <span className={`text-[10px] font-mono tracking-widest uppercase mb-1.5 transition-colors ${
                    isActive ? 'text-[#8FA3B8] font-bold' : 'text-zinc-500 group-hover:text-zinc-350'
                  }`}>
                    {log.date}
                  </span>

                  {/* Intersect node indicator */}
                  <span className={`w-3.5 h-3.5 rounded-full border-2 transition-all duration-300 ${
                    isActive 
                      ? 'bg-[#8FA3B8] border-[#8FA3B8] scale-110 shadow-[0_0_10px_rgba(143,163,184,0.15)]' 
                      : 'bg-[#050505] border-zinc-850 group-hover:border-zinc-650'
                  }`} />

                  {/* Hash code subtext */}
                  <span className={`text-[8px] font-mono mt-1 transition-colors ${
                    isActive ? 'text-zinc-300' : 'text-zinc-600'
                  }`}>
                    *{log.commit}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Outer Container Frame with hidden overflow */}
        <div className="w-full overflow-hidden border border-zinc-850 rounded-sm bg-[#0D0D0D] shadow-md">
          
          {/* Hardware-Accelerated Sliding Track */}
          <div 
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform"
            style={{ transform: `translateX(-${activeLog * 100}%)` }}
          >
            {gitLogs.map((log) => (
              <div 
                key={log.commit}
                className="w-full shrink-0 p-8 text-left flex flex-col justify-between hover:bg-[#0D0D0D] transition-colors group min-h-[350px] select-text"
              >
                <div className="space-y-6">
                  
                  {/* Selected Commit Header */}
                  <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-[#8FA3B8]" />
                      <span className="font-mono text-sm text-white uppercase tracking-wider">PROJECT_LOG // {log.commit}</span>
                    </div>
                    <span className="font-mono text-xs text-zinc-500 font-bold">[{log.date}]</span>
                  </div>

                  {/* Summary Header */}
                  <div className="space-y-1">
                    <h3 className="font-sans text-xl sm:text-2xl font-black text-white leading-snug uppercase">
                      {log.subject}
                    </h3>
                    <p className="text-sm sm:text-base text-[#8FA3B8] font-mono tracking-wider">
                      {log.company} — <span className="text-white font-sans font-semibold">{log.role}</span>
                    </p>
                  </div>

                  {/* Bulleted details - Spacious margins and layouts! */}
                  <ul className="space-y-3.5 pt-2">
                    {log.details.map((detail, dIdx) => (
                      <li key={dIdx} className="text-base text-zinc-300 leading-relaxed font-normal flex items-start gap-3.5">
                        <span className="w-2 h-2 rounded-full bg-[#8FA3B8] mt-2 shrink-0 animate-pulse" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              </div>
            ))}
          </div>

          {/* Bottom Fixed Navigation and Status Indicators (Does not slide) */}
          <div className="p-6 border-t border-zinc-800/60 bg-[#0D0D0D] flex flex-col sm:flex-row items-center justify-between gap-4 select-none">
            
            {/* Index Tracker */}
            <span className="font-mono text-xs text-zinc-500 font-bold uppercase tracking-widest">
              SYSTEM_REVISION // LOG {activeLog + 1} OF {gitLogs.length}
            </span>

            {/* Commit slider arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="px-4 py-2 bg-[#141414] hover:bg-[#8FA3B8] hover:text-[#050505] border border-zinc-800 text-xs font-mono text-white rounded-sm transition-colors duration-200 cursor-pointer"
              >
                [ &lt; PREV_COMMIT ]
              </button>
              
              <div className="flex items-center gap-1.5 px-2">
                {gitLogs.map((_, idx) => (
                  <span 
                    key={idx}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                      activeLog === idx ? 'bg-[#8FA3B8] scale-125' : 'bg-zinc-800'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="px-4 py-2 bg-[#141414] hover:bg-[#8FA3B8] hover:text-[#050505] border border-zinc-800 text-xs font-mono text-white rounded-sm transition-colors duration-200 cursor-pointer"
              >
                [ NEXT_COMMIT &gt; ]
              </button>
            </div>

            <span className="text-xs font-mono text-zinc-550 select-none">CHECKSUM: VERIFIED_STABLE</span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;
