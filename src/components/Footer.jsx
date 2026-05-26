import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-zinc-800 relative z-10 bg-[#050505] select-none text-left">
      <div className="w-full px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Technical Registry Credits */}
        <div className="flex flex-col items-center md:items-start gap-1 text-center md:text-left">
          <p className="font-sans text-base font-bold text-white tracking-tight">
            S Sree Lekshmi
          </p>
          <p className="text-xs font-mono font-bold text-zinc-550 uppercase tracking-widest leading-none">
            B.TECH CSE (CLASS OF 2026) // AI CORE INFRASTRUCTURES
          </p>
        </div>

        {/* Console checksum badge */}
        <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#8FA3B8] bg-slate-900 border border-zinc-800 px-3.5 py-1.5 rounded-sm shadow-sm">
          DESIGNED & DEVELOPED // S_SREE_LEKSHMI_SYSTEM_2026
        </div>

        {/* Copyright notice */}
        <div className="text-xs font-mono font-bold text-zinc-550 uppercase tracking-widest">
          &copy; {currentYear} S SREE LEKSHMI. COMPILED SPECIFICATIONS.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
