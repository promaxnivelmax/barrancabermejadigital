import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-blue text-white py-12 border-t-8 border-brand-yellow">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
            <h4 className="font-black text-xl mb-2">BARRANCABERMEJA DIGITAL</h4>
            <p className="text-gray-400 text-sm">Conectando oportunidades con la comunidad.</p>
        </div>
        
        <div className="flex gap-4">
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-brand-red transition-colors">
                <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-brand-red transition-colors">
                <Instagram className="w-6 h-6" />
            </a>
        </div>

        <div className="text-center md:text-right text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Ciber 1 Mayo.</p>
            <p>Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};