import React, { useState, useRef, useEffect } from 'react';

const Terminal = () => {
  const [history, setHistory] = useState([
    { text: 'S_SREE_LEKSHMI CORE OS v2.026 (build 11204)', type: 'system' },
    { text: "Welcome. Click the [QUICK_SHORTCUTS] buttons below to explore my profile instantly.", type: 'system' },
    { text: '', type: 'empty' }
  ]);
  const [input, setInput] = useState('');
  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  const commands = {
    help: [
      'Available system commands:',
      '  about       - Get structured profile data',
      '  skills      - List installed capability modules',
      '  projects    - Print compiled software packages',
      '  logs        - Read experience timeline logs',
      '  clear       - Clear console screen',
      '  sudo hire   - Trigger direct connection command'
    ],
    about: [
      'SYS_CONF // S SREE LEKSHMI CORE PROFILE',
      '==========================================',
      'Identity: S Sree Lekshmi',
      'Institution: College of Engineering Chengannur (CEC)',
      'University: APJ Abdul Kalam Technological University',
      'Education: B.Tech Computer Science (Graduate) | CGPA: 9.06 / 10',
      'Work: Freelance Software Developer delivering client solutions (full-stack + system design).',
      'Focus: Strengthening Machine Learning / AI models while deploying robust, elegant web platforms.'
    ],
    skills: [
      'INSTALLED CAPABILITIES INDEX:',
      '---------------------------------',
      '[LANGUAGES] : Python, C++, JavaScript, SQL, MySQL, PostgreSQL, HTML5, CSS3',
      '[FULL-STACK]: React.js, Next.js, Tailwind CSS, Flask, Node.js (basic), REST APIs, Firebase',
      '[MOBILE]    : Flutter, Cross-platform UI development',
      '[AI_ML]     : Python for ML, OpenCV, Chatbot systems, GenAI exploration, Model Training',
      '[TOOLS]     : Git, GitHub, Linux, Figma, Docker, VS Code'
    ],
    projects: [
      'COMPILED SOFTWARE PACKAGES (FEATURED):',
      '---------------------------------',
      '* TPC Connect          - Placement Cell Automation System. College placement cell operations (React, db).',
      '* Mindboom             - AI Mental Health Chatbot & wellness system (React, Flask, Python, Firebase).',
      '* EcoLife              - Sustainable agriculture digital farmer ecosystem platform.',
      '* VaultTalk            - Secure anonymous encrypted messaging platform.',
      '* Form Generator       - Automation system extracting data from inputs via Python + OpenCV.',
      '* TeamUp               - Flutter task & group coordination application (Flutter, Firebase).'
    ],
    logs: [
      'SYSTEM LOG COMMIT REGISTRY:',
      '---------------------------------',
      'commit 03a48e7 - [2026-05] EXP: Freelance software delivery - major client validation pending',
      'commit b21d9f2 - [2026-01] MENT: Mentored student cohorts in IEEE C and FOCES Java bootcamps',
      'commit f97e21a - [2024-12] WIN: Conferred 3rd Prize in IEEE State-Level Hackathon',
      'commit c38d12e - [2024-07] CERT: Google Solution Challenge Certificate of Achievement & GenAI badges',
      'commit d2140eb - [2023-03] CERT: Acquired IBM GenAI and NPTEL Database Management credentials',
      'commit e51b901 - [2022-09] ACAD: Graduated B.Tech CSE at College of Engineering Chengannur'
    ],
    'sudo hire': [
      'ACCESS GRANTED: INITIALIZING CONNECTION PORT...',
      'Executing shell command: connect --email sreelxmi73@gmail.com',
      'Correspondence registry active. Redirecting to connect module below.'
    ]
  };

  const handleCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    const newHistory = [...history, { text: `guest@s-sree-lekshmi-core:~$ ${cmd}`, type: 'input' }];

    if (trimmed === 'clear') {
      setHistory([]);
      return;
    }

    if (trimmed === 'sudo hire') {
      setTimeout(() => {
        const element = document.getElementById('contact');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 1000);
    }

    if (trimmed in commands) {
      const outputLines = commands[trimmed];
      outputLines.forEach((line) => {
        newHistory.push({ text: line, type: 'output' });
      });
    } else if (trimmed === '') {
      // Empty input
    } else {
      newHistory.push({ text: `sys: command not found: '${trimmed}'. Type 'help' for available options.`, type: 'error' });
    }

    newHistory.push({ text: '', type: 'empty' });
    setHistory(newHistory);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    }
  };

  const focusTerminal = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    if (terminalEndRef.current && terminalEndRef.current.parentNode) {
      terminalEndRef.current.parentNode.scrollTop = terminalEndRef.current.parentNode.scrollHeight;
    }
  }, [history]);

  return (
    <section id="terminal" className="py-8 relative overflow-hidden bg-[#050505] asym-border-bottom select-none">
      <div className="w-full px-2 sm:px-6 md:px-16 relative z-10">
        
        {/* Module Header */}
        <div className="flex items-center justify-between mb-2 border-b border-zinc-800 pb-2">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
            <span className="text-xs font-mono tracking-widest text-[#8FA3B8] uppercase font-bold">
              SYS_SHELL // INTERACTIVE CONTROL PANEL
            </span>
          </div>
          <span className="text-[10px] font-mono text-zinc-550 uppercase">
            TTY_PORT_24
          </span>
        </div>

        {/* User-Friendly Clickable Quick Shortcuts Toolbar */}
        <div className="flex flex-wrap gap-2 mb-4 py-2 border-b border-zinc-800/40 justify-start items-center">
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest flex items-center pr-3 border-r border-zinc-800 shrink-0">
            QUICK_SHORTCUTS:
          </span>
          <button 
            onClick={() => handleCommand('about')}
            className="px-3 py-1 bg-[#141414] hover:bg-[#8FA3B8] hover:text-[#050505] text-xs font-mono border border-zinc-800 text-white rounded-sm transition-colors duration-200 cursor-pointer"
          >
            [ 👤 about ]
          </button>
          <button 
            onClick={() => handleCommand('skills')}
            className="px-3 py-1 bg-[#141414] hover:bg-[#8FA3B8] hover:text-[#050505] text-xs font-mono border border-zinc-800 text-white rounded-sm transition-colors duration-200 cursor-pointer"
          >
            [ 🛠️ skills ]
          </button>
          <button 
            onClick={() => handleCommand('projects')}
            className="px-3 py-1 bg-[#141414] hover:bg-[#8FA3B8] hover:text-[#050505] text-xs font-mono border border-zinc-800 text-white rounded-sm transition-colors duration-200 cursor-pointer"
          >
            [ 🚀 projects ]
          </button>
          <button 
            onClick={() => handleCommand('logs')}
            className="px-3 py-1 bg-[#141414] hover:bg-[#8FA3B8] hover:text-[#050505] text-xs font-mono border border-zinc-800 text-white rounded-sm transition-colors duration-200 cursor-pointer"
          >
            [ 📝 milestones ]
          </button>
          <button 
            onClick={() => handleCommand('sudo hire')}
            className="px-3 py-1 bg-[#141414]/90 hover:bg-[#8FA3B8] hover:text-[#050505] text-xs font-mono border border-[#8FA3B8]/30 hover:border-[#8FA3B8] text-[#8FA3B8] rounded-sm transition-colors duration-200 cursor-pointer"
          >
            [ 📥 hire_me ]
          </button>
          <button 
            onClick={() => handleCommand('clear')}
            className="px-3 py-1 bg-[#141414]/60 hover:bg-red-950/30 hover:text-red-400 text-xs font-mono border border-zinc-800/80 hover:border-red-900/50 text-zinc-400 rounded-sm transition-colors duration-200 cursor-pointer md:ml-auto"
          >
            [ clear ]
          </button>
        </div>

        {/* Console Box */}
        <div 
          onClick={focusTerminal}
          className="w-full p-5 bg-[#0D0D0D] border border-zinc-800 rounded-sm font-mono text-sm text-[#A3A3A3] text-left min-h-[280px] max-h-[380px] overflow-y-auto cursor-text transition-all duration-300 hover:border-zinc-700 shadow-inner"
        >
          <div className="space-y-1.5 select-text">
            {history.map((line, idx) => {
              if (line.type === 'input') {
                return (
                  <div key={idx} className="text-white font-bold">
                    {line.text}
                  </div>
                );
              } else if (line.type === 'system') {
                return (
                  <div key={idx} className="text-[#8FA3B8]">
                    {line.text}
                  </div>
                );
              } else if (line.type === 'error') {
                return (
                  <div key={idx} className="text-red-400">
                    {line.text}
                  </div>
                );
              } else if (line.type === 'empty') {
                return <div key={idx} className="h-1" />;
              } else {
                return <div key={idx}>{line.text}</div>;
              }
            })}
          </div>

          {/* Interactive Prompt */}
          <div className="flex items-center gap-1.5 mt-2 text-white">
            <span className="shrink-0 font-bold">guest@s-sree-lekshmi-core:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full bg-transparent border-none outline-none text-white font-mono caret-[#8FA3B8] font-bold"
              autoComplete="off"
              spellCheck="false"
            />
          </div>
          <div ref={terminalEndRef} />
        </div>

        <div className="mt-3 text-[10px] font-mono text-zinc-550 text-right">
          CLICK INTERACTIVE BUTTONS OR TYPE COMMANDS DIRECTLY INTO PORT
        </div>

      </div>
    </section>
  );
};

export default Terminal;
