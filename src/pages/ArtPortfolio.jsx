import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, MoveRight, Palette } from 'lucide-react';

// Exhibition artworks
const artworks = [
  { id: 1, title: 'Lord Krishna', category: 'Kerala Mural', src: '/krishna-mural.jpeg', height: 'h-[32rem]' },
  { id: 2, title: 'Lord Ganesha', category: 'Kerala Mural', src: '/ganesha-mural.jpeg', height: 'h-[32rem]' },
];

const ArtPortfolio = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-mural-charcoal min-h-screen text-mural-ivory font-sans overflow-x-hidden selection:bg-mural-gold selection:text-mural-charcoal">
      
      {/* Immersive Particle Background (CSS driven) */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-mural-gold/5 rounded-full mix-blend-screen filter blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-mural-red/5 rounded-full mix-blend-screen filter blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-mural-charcoal/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
          <Link to="/art" className="font-cinzel text-xl lg:text-2xl text-mural-gold tracking-widest font-bold">
            SREE LEKSHMI
          </Link>
          <div className="flex gap-6 items-center">
            <Link to="/" className="text-sm font-sans tracking-widest uppercase text-mural-ivory/70 hover:text-mural-gold transition-colors flex items-center gap-2 group">
              <MoveRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              Tech Portfolio
            </Link>
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        
        {/* HERO SECTION */}
        <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-12 pt-20">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-mural-charcoal/10 via-transparent to-mural-charcoal/40"></div>
            {/* Using a subtle textured pattern over a hero image placeholder */}
            <img 
              src="/kerala1.png" 
              alt="Mural Texture Background" 
              className="w-full h-full object-cover object-[center_25%] opacity-20 mix-blend-luminosity"
            />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
            
            {/* Left Side: Big Circular Profile Image */}
            <div className="flex-shrink-0 relative p-3 bg-mural-black/60 border border-mural-gold/40 rounded-full shadow-[0_15px_50px_rgba(0,0,0,0.6)] backdrop-blur-md transition-transform duration-700 hover:scale-105 group">
              <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-[26rem] md:h-[26rem] lg:w-[30rem] lg:h-[30rem] rounded-full overflow-hidden border-[4px] border-mural-gold/80 relative">
                <img src="/kerala2.png" alt="Mohiniyattam Mural Profile" className="w-full h-full object-cover group-hover:scale-105 grayscale-[15%] group-hover:grayscale-0 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-mural-black/80 via-transparent to-transparent opacity-40"></div>
              </div>
            </div>

            {/* Right Side: Writing */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 lg:max-w-xl">
              
              <div className="inline-flex items-center gap-3 border border-mural-gold/30 px-5 py-2 rounded-full bg-mural-charcoal/50 backdrop-blur-sm z-10">
                <Palette className="w-4 h-4 text-mural-gold" />
                <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-mural-gold font-bold">Mohiniyattam & Mural Artist</span>
              </div>
              
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-7xl text-mural-ivory leading-tight pb-2 drop-shadow-2xl">
                Where Tradition <br className="hidden xl:block"/> Breathes Through <span className="text-mural-gold">Color</span>
              </h1>
              
              <p className="text-lg md:text-xl text-mural-ivory/80 font-light leading-relaxed">
                Exploring the sacred intersection of Kerala mural heritage, the grace of Mohiniyattam, and modern digital canvas. A journey balancing ancient stories and technological precision.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-5 pt-4">
                <a href="#gallery" className="px-8 py-4 bg-mural-red text-mural-ivory font-serif tracking-widest hover:bg-mural-vermilion transition-all duration-300 shadow-[0_0_20px_rgba(227,66,52,0.3)]">
                  ENTER GALLERY
                </a>
                <Link to="/" className="px-8 py-4 border border-mural-gold/50 text-mural-gold font-serif tracking-widest hover:bg-mural-gold hover:text-mural-charcoal transition-all duration-300 whitespace-nowrap">
                  TECH PORTFOLIO
                </Link>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="text-mural-gold/50 w-8 h-8" />
          </div>
        </section>

        {/* GALLERY SECTION */}
        <section id="gallery" className="py-32 px-6 lg:px-12 max-w-7xl mx-auto relative">
          <div className="text-center mb-20 space-y-4">
            <h2 className="font-cinzel text-3xl md:text-5xl text-mural-gold">The Exhibition</h2>
            <div className="w-24 h-0.5 bg-mural-red mx-auto"></div>
            <p className="text-mural-ivory/60 uppercase tracking-widest text-sm pt-4">Curated Works & Sketches</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {artworks.map((art) => (
              <div key={art.id} className="group relative overflow-hidden cursor-pointer border border-mural-gold/20 hover:border-mural-gold/60 transition-colors duration-500 rounded-sm shadow-xl">
                <img 
                  src={art.src} 
                  alt={art.title} 
                  className={`w-full object-cover ${art.height} transition-transform duration-700 group-hover:scale-105 grayscale-[10%] group-hover:grayscale-0`} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mural-black/90 via-mural-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <span className="text-mural-gold text-xs uppercase tracking-widest mb-2 font-medium">{art.category}</span>
                  <h3 className="font-serif text-2xl text-mural-ivory">{art.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-mural-gold/10 bg-mural-black py-12 px-6 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-mural-gold to-transparent"></div>
        <div className="max-w-4xl mx-auto flex flex-col items-center space-y-6">
          <Link to="/" className="font-cinzel text-2xl text-mural-ivory/80 hover:text-mural-gold transition-colors">
            SREE LEKSHMI
          </Link>
          <div className="flex gap-8 text-sm uppercase tracking-widest text-mural-ivory/50">
            <a href="https://www.instagram.com/_t_he_ph_il_o_ca_li_st_?igsh=MWN6MDg5ZGFweDc2NQ==" target="_blank" rel="noreferrer" className="hover:text-mural-gold transition-colors">Instagram</a>
            <Link to="/" className="hover:text-mural-gold transition-colors">Tech Portfolio</Link>
          </div>
          <p className="text-mural-ivory/30 text-xs font-mono pt-8">
            &copy; {new Date().getFullYear()} Sree Lekshmi. Handcrafted with Code & Color.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ArtPortfolio;
