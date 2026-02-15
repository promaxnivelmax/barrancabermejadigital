import React from 'react';
import { ChevronDown, Briefcase, FileText, Printer, Search, Globe } from 'lucide-react';
import playSound from '../utils/sound';

export const Hero: React.FC = () => {
  const scrollToServices = () => {
    playSound();
    const element = document.getElementById('services');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-blue text-white">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 z-0 opacity-20" 
           style={{
             backgroundImage: 'radial-gradient(#fbbf24 1.5px, transparent 1.5px)',
             backgroundSize: '40px 40px',
             animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite'
           }}>
      </div>

      {/* Animated Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-red/20 rounded-full mix-blend-screen filter blur-3xl opacity-60 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-brand-yellow/20 rounded-full mix-blend-screen filter blur-3xl opacity-60 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-60 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center relative flex flex-col items-center">
        
        {/* Custom Service Design (Replaces Image) */}
        <div className="mb-12 relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center scale-90 md:scale-100">
            {/* Outer Ring */}
            <div className="absolute inset-0 border border-brand-yellow/20 rounded-full animate-[spin_20s_linear_infinite]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-brand-yellow rounded-full shadow-[0_0_15px_#fbbf24]"></div>
            </div>
            
            {/* Middle Ring */}
            <div className="absolute inset-12 border border-brand-red/20 rounded-full animate-[spin_15s_linear_infinite_reverse]">
                 <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-brand-red rounded-full shadow-[0_0_15px_#ef4444]"></div>
            </div>

            {/* Inner Circle Glow */}
            <div className="absolute inset-24 bg-brand-blue/50 backdrop-blur-sm rounded-full border border-white/10 z-0"></div>
            
            {/* Central Hub */}
            <div className="relative z-10 flex flex-col items-center justify-center animate-float">
                <div className="w-24 h-24 bg-gradient-to-br from-brand-yellow to-orange-500 rounded-2xl rotate-45 flex items-center justify-center shadow-2xl mb-4 group transition-transform duration-500 hover:rotate-90 cursor-pointer">
                    <Globe className="w-12 h-12 text-white -rotate-45 group-hover:-rotate-90 transition-transform duration-500" />
                </div>
            </div>

            {/* Floating Service Icons */}
            {/* Top Right - Briefcase */}
            <div className="absolute top-10 right-10 animate-bounce delay-700">
                <div className="bg-white text-brand-blue p-3 rounded-lg shadow-xl border-l-4 border-brand-blue transform hover:scale-110 transition-transform">
                    <Briefcase className="w-6 h-6" />
                </div>
            </div>

             {/* Bottom Left - Documents */}
             <div className="absolute bottom-10 left-10 animate-bounce delay-1000">
                <div className="bg-white text-brand-red p-3 rounded-lg shadow-xl border-l-4 border-brand-red transform hover:scale-110 transition-transform">
                    <FileText className="w-6 h-6" />
                </div>
            </div>

            {/* Top Left - Tools */}
             <div className="absolute top-16 left-4 animate-pulse">
                <div className="bg-brand-blue/80 backdrop-blur text-brand-yellow p-2 rounded-full border border-brand-yellow/30 shadow-lg">
                    <Search className="w-5 h-5" />
                </div>
            </div>

             {/* Bottom Right - Printer */}
             <div className="absolute bottom-16 right-4 animate-pulse delay-500">
                <div className="bg-brand-blue/80 backdrop-blur text-white p-2 rounded-full border border-white/30 shadow-lg">
                    <Printer className="w-5 h-5" />
                </div>
            </div>
        </div>

        {/* Title Text */}
        <div className="mb-10 relative">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight drop-shadow-2xl">
            BARRANCABERMEJA
          </h1>
          <h2 className="text-3xl md:text-5xl font-light text-brand-yellow tracking-wide mt-2">
            DIGITAL
          </h2>
          {/* Underline decoration */}
          <div className="w-32 h-2 bg-gradient-to-r from-brand-red to-brand-yellow mx-auto mt-4 rounded-full"></div>
        </div>

        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-gray-300 font-light leading-relaxed">
          Espacio dedicado a compartir información general, vacantes de empleo y servicios digitales en <strong className="text-brand-yellow">Barrancabermeja</strong>. Nuestro objetivo es dar a conocer las oportunidades a quienes más lo necesitan.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center w-full">
          <a 
            href="https://wa.me/3123377832" 
            target="_blank"
            rel="noreferrer"
            onClick={playSound}
            className="px-8 py-4 bg-brand-yellow text-brand-blue font-bold rounded-full shadow-[0_0_20px_rgba(251,191,36,0.5)] hover:shadow-[0_0_30px_rgba(251,191,36,0.8)] hover:scale-105 transition-all duration-300 w-full md:w-auto"
          >
            Contáctanos WhatsApp
          </a>
          <button 
            onClick={scrollToServices}
            className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-brand-blue transition-all duration-300 w-full md:w-auto"
          >
            Ver Servicios
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={scrollToServices}>
        <ChevronDown className="w-8 h-8 text-white opacity-70" />
      </div>
    </div>
  );
};