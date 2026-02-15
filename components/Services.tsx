import React from 'react';
import { Briefcase, FileText, Landmark, Monitor, Printer, CreditCard, Building2, UserCheck } from 'lucide-react';
import playSound from '../utils/sound';

const ServiceCard: React.FC<{
  title: string;
  items: string[];
  icon: React.ReactNode;
}> = ({ title, items, icon }) => (
  <div 
    className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-brand-blue hover:border-brand-yellow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 h-full"
    onMouseEnter={playSound}
  >
    <div className="flex items-center gap-3 mb-4">
      <div className="p-3 bg-brand-blue/5 rounded-full text-brand-blue">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
    </div>
    <ul className="space-y-2">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm">
          <span className="mt-1.5 w-1.5 h-1.5 bg-brand-red rounded-full flex-shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-blue mb-4">
            Nuestros <span className="text-brand-yellow">Servicios</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Ofrecemos asesoría personalizada y trámites ágiles. Presenciales y digitales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard 
              title="Empleo & Hojas de Vida" 
              icon={<Briefcase />}
              items={[
                "Redacción profesional de hojas de vida",
                "Registro en Servicio Público de Empleo",
                "Agencia Pública de Empleo (SENA)",
                "Computrabajo, El Empleo",
                "SIMO, Sistema Maestro",
                "Job Ecopetrol, Mon Québec (Canadá)",
                "Banco de instructores SENA"
              ]}
            />
            <ServiceCard 
              title="Certificados & Antecedentes" 
              icon={<FileText />}
              items={[
                "Policía Nacional, Procuraduría",
                "Contraloría, Personería",
                "Inhabilidad Delitos Sexuales",
                "Medidas Correctivas",
                "Salud (Fosyga/ADRES), Pensión",
                "Historia Laboral",
                "COPNIA, CONALTEL, Matrícula Prof."
              ]}
            />
            <ServiceCard 
              title="Impuestos & Trámites" 
              icon={<Landmark />}
              items={[
                "RUT (Inscripción/Actualización)",
                "Impuestos Vehiculares y Prediales",
                "Paz y Salvo Predial Barrancabermeja",
                "Industria y Comercio",
                "Declaración de bienes y rentas (SIGEP)",
                "Trámites de Nomenclatura",
                "SECOP II"
              ]}
            />
            <ServiceCard 
              title="Civil & Otros" 
              icon={<UserCheck />}
              items={[
                "Copias Registro Civil / Defunción",
                "Digitalización documentos civiles",
                "Cert. Libertad y Tradición",
                "Cert. Cámara de Comercio",
                "Consulta DataCrédito",
                "Trámites EPS (Traslados, Inclusión)",
                "Referencias Personales/Comerciales"
              ]}
            />
        </div>
        
        <div className="mt-12 bg-brand-blue rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between shadow-2xl">
            <div className="mb-6 md:mb-0">
                <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                    <Printer className="text-brand-yellow" /> Servicios Adicionales
                </h3>
                <p className="text-gray-300">
                    Impresiones al por mayor, fotocopias, digitación de textos, trabajos en computador y asesoría en trámites en línea.
                </p>
            </div>
            <a 
                href="https://wa.me/3052319414"
                target="_blank"
                rel="noreferrer" 
                className="bg-brand-red hover:bg-red-600 text-white px-8 py-3 rounded-full font-bold transition-colors whitespace-nowrap"
            >
                Cotizar Servicio
            </a>
        </div>
      </div>
    </section>
  );
};