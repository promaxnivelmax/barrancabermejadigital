import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import playSound from '../utils/sound';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#' },
    { name: 'Documentos Gratis', href: '#auto-docs' },
    { name: 'Servicios', href: '#services' },
    { name: 'Herramientas', href: '#tools' },
    { name: 'Relax', href: '#games' },
    { name: 'Contacto', href: '#contact' },
  ];

  const handleNavClick = () => {
    playSound();
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-blue shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo Text */}
        <div className="font-black text-xl md:text-2xl tracking-tighter text-white flex flex-col leading-none">
            <span>BARRANCA</span>
            <span className="text-brand-yellow">BERMEJA <span className="font-light text-white">Digital</span></span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={playSound}
              className="text-white hover:text-brand-yellow font-semibold text-sm uppercase tracking-wide transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-yellow transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-brand-blue border-t border-brand-blue/50 shadow-xl md:hidden flex flex-col p-4 animate-in slide-in-from-top-5">
           {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={handleNavClick}
              className="text-white py-3 border-b border-white/10 hover:text-brand-yellow transition-colors font-semibold"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};