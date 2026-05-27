import React, { useState } from 'react';
import { Terminal as TerminalIcon, Send, AlertCircle, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    let err = {};
    if (!name.trim()) err.name = 'Full name is required';
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) err.email = 'Valid email address is required';
    if (!message.trim() || message.length < 10) err.message = 'Please provide a detailed message (>10 characters)';
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleTransmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setName('');
      setEmail('');
      setMessage('');
      setErrors({});
    }, 1500);
  };

  return (
    <section id="contact" className="py-14 relative overflow-hidden bg-[#050505] select-none">
      <div className="w-full px-2 sm:px-6 md:px-16 relative z-10">
        
        {/* Module Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-10 border-b border-zinc-800 pb-2">
          <div className="lg:col-span-3 text-left">
            <span className="text-xs sm:text-sm font-mono font-extrabold uppercase tracking-widest text-[#8FA3B8] flex items-center gap-1.5">
              <TerminalIcon className="w-4 h-4" />
              06 / CONTACT
            </span>
          </div>
          <div className="lg:col-span-9 text-left">
            <h2 className="font-sans text-xs font-bold text-zinc-400 uppercase tracking-widest">
              GET IN TOUCH // TRANSMISSION SHELL INTERFACE
            </h2>
          </div>
        </div>

        {/* Connection Port Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Side: Connection parameters info (5/12 width) */}
          <div className="reveal-item lg:col-span-5 p-6 bg-[#0D0D0D] border border-zinc-800 rounded-sm text-left flex flex-col justify-between hover:border-zinc-700 transition-colors">
            <div className="space-y-6">
              
              {/* Module Header */}
              <div className="flex items-center gap-2 text-zinc-500 border-b border-zinc-800 pb-2 font-mono text-xs">
                <span>CONTACT PORT // INFO</span>
                <span>STATUS: READY</span>
              </div>

              {/* Uptime description */}
              <div className="space-y-3">
                <h3 className="text-sm sm:text-base font-mono font-extrabold tracking-widest text-[#8FA3B8] uppercase">
                  Direct Correspondence
                </h3>
                <p className="text-base text-zinc-300 leading-relaxed font-normal">
                  Always open for collaborations, freelance client inquiries, project workloads, or student mentorship connections.
                </p>
              </div>

              {/* Email as an OS command */}
              <div className="p-4 bg-[#141414] border border-zinc-800 rounded-sm space-y-2">
                <span className="text-xs font-mono text-zinc-500 block">CONNECTION SHORTCUT</span>
                <code className="text-white font-mono text-sm sm:text-base font-bold block select-all">
                  sreelxmi73@gmail.com
                </code>
              </div>

              {/* Direct links presented as key value registries */}
              <div className="space-y-3 pt-2 font-mono text-sm">
                <div className="flex justify-between border-b border-zinc-800/40 pb-1.5">
                  <span className="text-zinc-500">LN // LINKEDIN</span>
                  <a href="https://www.linkedin.com/in/sree-lekshmi-65b757255/" target="_blank" rel="noreferrer" className="text-white hover:text-[#8FA3B8] transition-colors">linkedin.com/in/sree-lekshmi-65b757255/</a>
                </div>
                <div className="flex justify-between border-b border-zinc-800/40 pb-1.5">
                  <span className="text-zinc-500">GH // GITHUB</span>
                  <a href="https://github.com/sree-lekshmi" target="_blank" rel="noreferrer" className="text-white hover:text-[#8FA3B8] transition-colors">github.com/sree-lekshmi</a>
                </div>
              </div>

            </div>

            <div className="mt-8 text-xs font-mono text-zinc-500">
              SYS_NODE_ID: // COMMUNICATIONS_NODE_ACTIVE
            </div>
          </div>

          {/* Right Side: Ultra-minimal system command-style form (7/12 width) */}
          <div className="lg:col-span-7 w-full flex flex-col justify-between">
            <div className="reveal-item text-left p-6 bg-[#0D0D0D] border border-zinc-800 rounded-sm h-full flex flex-col justify-between hover:border-zinc-700 transition-colors">
              
              <form onSubmit={handleTransmit} className="space-y-6">
                
                {/* Form boot trigger */}
                <div className="flex items-center justify-between text-zinc-500 font-mono text-xs border-b border-zinc-800 pb-2">
                  <span>COMMUNICATION FORM // SEND</span>
                  <span>STATUS: AWAITING_INPUT</span>
                </div>

                {/* Name parameter Input */}
                <div className="space-y-1 relative">
                  <label htmlFor="name" className="text-xs sm:text-sm font-sans font-black uppercase tracking-wider text-zinc-400 block">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name..."
                    className="w-full py-2 bg-transparent border-b border-zinc-800 text-base font-sans text-white focus:border-[#8FA3B8] transition-colors duration-200 outline-none placeholder:text-zinc-600"
                    autoComplete="off"
                  />
                  {errors.name && (
                    <span className="flex items-center gap-1.5 text-sm text-red-455 font-mono pt-1.5">
                      <AlertCircle className="w-4 h-4" />
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Email parameter Input */}
                <div className="space-y-1 relative">
                  <label htmlFor="email" className="text-xs sm:text-sm font-sans font-black uppercase tracking-wider text-zinc-400 block">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    className="w-full py-2 bg-transparent border-b border-zinc-800 text-base font-sans text-white focus:border-[#8FA3B8] transition-colors duration-200 outline-none placeholder:text-zinc-600"
                    autoComplete="off"
                  />
                  {errors.email && (
                    <span className="flex items-center gap-1.5 text-sm text-red-455 font-mono pt-1.5">
                      <AlertCircle className="w-4 h-4" />
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* Message parameter Input */}
                <div className="space-y-1 relative">
                  <label htmlFor="message" className="text-xs sm:text-sm font-sans font-black uppercase tracking-wider text-zinc-400 block">
                    Message Outline
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows="3"
                    placeholder="Describe collaboration goals, inquiries, or opportunities..."
                    className="w-full py-2 bg-transparent border-b border-zinc-800 text-base font-sans text-white resize-none focus:border-[#8FA3B8] transition-colors duration-200 outline-none placeholder:text-zinc-600"
                  />
                  {errors.message && (
                    <span className="flex items-center gap-1.5 text-sm text-red-455 font-mono pt-1.5">
                      <AlertCircle className="w-4 h-4" />
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Success Transmission secured log banner */}
                {submitSuccess && (
                  <div className="p-4 border border-cyan-400/40 bg-slate-900 flex items-start gap-2.5 rounded-sm animate-fade-in text-white font-sans">
                    <CheckCircle2 className="w-4 h-4 text-[#8FA3B8] shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-extrabold uppercase tracking-widest text-[#8FA3B8]">MESSAGE_SENT</p>
                      <p className="font-normal mt-0.5 text-zinc-300 font-mono">Parameters verified. S Sree Lekshmi will connect shortly.</p>
                    </div>
                  </div>
                )}

                {/* Submit trigger button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center justify-center gap-2 text-sm sm:text-base font-sans font-bold uppercase tracking-widest text-slate-950 bg-[#8FA3B8] hover:bg-white disabled:bg-zinc-800 disabled:text-zinc-600 px-6 py-3.5 transition-all duration-300 w-full rounded-sm cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 rounded-full border-2 border-slate-950/30 border-t-slate-950 animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
