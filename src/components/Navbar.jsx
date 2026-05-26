import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const sections = [
    { id: 'hero', index: '01', dir: 'HOME', name: 'welcome_portal' },
    { id: 'about', index: '02', dir: 'ABOUT', name: 'about_developer' },
    { id: 'terminal', index: '03', dir: 'CONSOLE', name: 'interactive_panel' },
    { id: 'skills', index: '04', dir: 'SKILLS', name: 'skills_expertise' },
    { id: 'projects', index: '05', dir: 'PROJECTS', name: 'featured_projects' },
    { id: 'experience', index: '06', dir: 'HISTORY', name: 'milestones_experience' },
    { id: 'contact', index: '07', dir: 'CONTACT', name: 'contact_me' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // 1. Calculate scroll progress percentage
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // 2. Track active section
      const scrollPosition = window.scrollY + 200; // Offset for accuracy
      for (const sec of sections) {
        const el = document.getElementById(sec.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sec.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 40; // minimal spacing offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* 1. Top Scroll Progress Indicator */}
      <div 
        className="fixed top-0 left-0 h-[2px] bg-[#8FA3B8] z-50 transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* 2. Top Header Branding */}
      <header className="fixed top-0 left-0 right-0 z-40 py-6 px-8 md:px-16 flex items-center justify-between pointer-events-none">
        {/* Minimal logo mark */}
        <a 
          href="#hero" 
          onClick={(e) => handleNavClick(e, 'hero')}
          className="pointer-events-auto font-sans font-extrabold text-xl tracking-tight text-white hover:text-[#8FA3B8] transition-colors"
        >
          S.L.
        </a>
        
        {/* Floating trigger on the right */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="pointer-events-auto w-12 h-12 rounded-full border border-zinc-800 bg-[#0D0D0D]/60 backdrop-blur-md hover:bg-[#8FA3B8] hover:text-[#050505] text-white flex items-center justify-center transition-all duration-300 shadow-sm cursor-pointer"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </header>

      {/* 3. Left-edge Rotated status text */}
      <div className="fixed left-6 bottom-16 z-30 hidden xl:flex items-center gap-3 select-none pointer-events-none origin-left -rotate-90 translate-y-full">
        <span className="text-[10px] font-mono tracking-widest text-zinc-550 uppercase">
          SYS_INDEX // OPERATING_SHELL_S_SREE_LEKSHMI
        </span>
        <div className="w-12 h-[1px] bg-zinc-800" />
      </div>

      {/* 4. Right-edge Page Index channel (Monochrome Dashboard lines) */}
      <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-35 hidden md:flex flex-col gap-5 items-end select-none pointer-events-auto">
        <div className="h-20 w-[1px] bg-zinc-850 mb-2 self-center border-l border-dashed border-zinc-800" />
        
        {sections.map((sec) => {
          const isActive = activeSection === sec.id;
          return (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              onClick={(e) => handleNavClick(e, sec.id)}
              className="flex items-center gap-3 group py-1 text-right"
            >
              {/* Text label revealed on hover */}
              <span className={`text-[10px] font-mono font-bold tracking-widest uppercase transition-all duration-300 translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 ${
                isActive ? 'text-[#8FA3B8] opacity-100 translate-x-0' : 'text-zinc-500'
              }`}>
                {sec.dir}
              </span>
              
              {/* Monochromatic index dot */}
              <span className={`w-2 h-2 rounded-full border transition-all duration-300 ${
                isActive 
                  ? 'border-[#8FA3B8] bg-[#8FA3B8]' 
                  : 'border-zinc-800 bg-[#050505] group-hover:border-[#8FA3B8]'
              }`} />
            </a>
          );
        })}
        
        <div className="h-20 w-[1px] bg-zinc-850 mt-2 self-center border-l border-dashed border-zinc-800" />
      </nav>

      {/* 5. Full-Screen Directory Menu Overlay */}
      <div 
        className={`fixed inset-0 z-38 bg-[#050505]/98 backdrop-blur-lg transition-all duration-500 ease-in-out flex flex-col justify-center px-12 md:px-32 ${
          menuOpen 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 -translate-y-8 pointer-events-none'
        }`}
      >
        {/* Background Accent */}
        <div className="absolute right-0 bottom-0 w-[40vw] h-[70vh] bg-[#0D0D0D]/40 border-l border-t border-zinc-800/40 -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto w-full items-center">
          {/* Menu links list styled like OS paths */}
          <div className="lg:col-span-8 space-y-4 text-left">
            <h4 className="text-xs font-mono font-extrabold uppercase tracking-widest text-[#8FA3B8] mb-8 border-b border-zinc-800 pb-2 max-w-[200px]">
              Directory ROOT / Index
            </h4>
            <ul className="space-y-4 select-none">
              {sections.map((sec) => (
                <li key={sec.id} className="overflow-hidden">
                  <a
                    href={`#${sec.id}`}
                    onClick={(e) => handleNavClick(e, sec.id)}
                    className="group flex items-baseline gap-4 hover:translate-x-2 transition-transform duration-300"
                  >
                    <span className="font-mono text-sm font-bold text-zinc-550 group-hover:text-[#8FA3B8] transition-colors">
                      {sec.index} /
                    </span>
                    <span className="font-mono text-xs text-[#8FA3B8] group-hover:text-white transition-colors">
                      {sec.dir} /
                    </span>
                    <span className="font-sans text-3xl sm:text-5xl font-extrabold text-white group-hover:text-[#8FA3B8] transition-colors uppercase tracking-tight">
                      {sec.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Catalog technical credits block */}
          <div className="lg:col-span-4 border-l border-zinc-800 pl-8 space-y-8 text-left hidden lg:block select-text">
            <div className="space-y-2">
              <h5 className="font-sans text-lg font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#8FA3B8]" />
                S Sree Lekshmi
              </h5>
              <p className="text-sm text-zinc-400 leading-relaxed font-normal">
                B.Tech Computer Science & Engineering (Class of 2026). Specialized neural networks developer and systems architect.
              </p>
            </div>
            
            <div className="space-y-1 font-mono text-xs">
              <h6 className="text-[10px] font-bold uppercase tracking-widest text-zinc-550">SYSTEM_Correspondence</h6>
              <div className="flex gap-4 pt-1">
                <a href="https://github.com/sree-lekshmi" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors">GH</a>
                <a href="https://www.linkedin.com/in/sree-lekshmi-65b757255/" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors">LN</a>
                <a href="mailto:sreelxmi73@gmail.com" className="text-zinc-400 hover:text-white transition-colors">EM</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Navbar;
