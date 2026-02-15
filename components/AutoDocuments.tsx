import React from 'react';
import { FileCheck, FileSignature, Users, AlertTriangle, FileWarning, ExternalLink } from 'lucide-react';
import playSound from '../utils/sound';

const DocLink: React.FC<{ 
  title: string; 
  url: string; 
  icon: React.ReactNode; 
  number: number 
}> = ({ title, url, icon, number }) => (
  <a 
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    onClick={() => playSound()}
    className="group relative bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:border-brand-yellow hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
  >
    <div className="absolute top-0 right-0 bg-brand-yellow text-brand-blue font-bold px-3 py-1 rounded-bl-lg text-xs">
      GRATIS
    </div>
    <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gray-50 rounded-full group-hover:bg-brand-blue/5 transition-colors"></div>
    
    <div className="flex items-start gap-4">
      <div className="bg-brand-blue/10 p-3 rounded-lg text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors">
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-lg text-gray-800 group-hover:text-brand-blue mb-1">
          {number}. {title}
        </h3>
        <p className="text-sm text-gray-500 mb-3">Generar automáticamente</p>
        <span className="text-xs font-semibold text-brand-red flex items-center gap-1">
          Diligenciar Formulario <ExternalLink className="w-3 h-3" />
        </span>
      </div>
    </div>
  </a>
);

export const AutoDocuments: React.FC = () => {
  return (
    <section id="auto-docs" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="bg-brand-red text-white px-4 py-1 rounded-full text-sm font-bold tracking-wider uppercase mb-4 inline-block">
            Autogestión Gratuita
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-brand-blue mb-6">
            Genere Automáticamente <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-orange-500">Sus Documentos</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Diligencia el formulario del servicio que necesita y le llegará al correo el archivo editable totalmente gratis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <DocLink 
            number={1}
            title="Hoja de Vida Sencilla"
            url="https://forms.gle/1FwfGs2Vkp96zcrj7"
            icon={<FileCheck className="w-6 h-6" />}
          />
          <DocLink 
            number={2}
            title="Renuncia Voluntaria"
            url="https://forms.gle/FhvhZXPkKXpub9M36"
            icon={<FileSignature className="w-6 h-6" />}
          />
          <DocLink 
            number={3}
            title="Referencias Personales"
            url="https://forms.gle/uZnDXK3gp1xhhBge9"
            icon={<Users className="w-6 h-6" />}
          />
          <DocLink 
            number={4}
            title="Prescripción Medida Correctiva"
            url="https://forms.gle/AvF3A5R4Epd1W5tp6"
            icon={<AlertTriangle className="w-6 h-6" />}
          />
          <DocLink 
            number={5}
            title="Prescripción Comparendo"
            url="https://forms.gle/USP8uDgYKb3Va6VD8"
            icon={<FileWarning className="w-6 h-6" />}
          />
        </div>
      </div>
    </section>
  );
};