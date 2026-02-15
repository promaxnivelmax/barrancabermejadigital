import React from 'react';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

const LocationCard: React.FC<{
  title: string;
  address: string;
  email: string;
  phone: string;
  color: string;
}> = ({ title, address, email, phone, color }) => (
  <div className={`bg-white p-8 rounded-2xl shadow-xl border-l-8 ${color} relative overflow-hidden group`}>
    <div className={`absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity ${color.replace('border-', 'text-')}`}>
      <MapPin className="w-24 h-24" />
    </div>
    
    <h3 className="text-2xl font-bold text-brand-blue mb-6">{title}</h3>
    
    <div className="space-y-4">
      <div className="flex items-start gap-3">
        <MapPin className="w-5 h-5 text-brand-red flex-shrink-0 mt-1" />
        <p className="text-gray-600">{address}</p>
      </div>
      <div className="flex items-center gap-3">
        <Mail className="w-5 h-5 text-brand-yellow flex-shrink-0" />
        <a href={`mailto:${email}`} className="text-gray-600 hover:text-brand-blue transition-colors break-all">{email}</a>
      </div>
      <div className="flex items-center gap-3">
        <MessageCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
        <a 
            href={`https://wa.me/${phone.replace(/\D/g,'')}`} 
            target="_blank" 
            rel="noreferrer"
            className="text-gray-600 hover:text-green-600 font-bold transition-colors"
        >
            WhatsApp: {phone}
        </a>
      </div>
    </div>
  </div>
);

export const Locations: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-blue mb-4">
            Nuestras <span className="text-brand-red">Sedes</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Visítanos en Barrancabermeja o contáctanos digitalmente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <LocationCard 
            title="Sede Primero de Mayo"
            address="Calle 52 # 34 h 101 – Primero de Mayo"
            email="ciber1mayo@gmail.com"
            phone="305 224 5939"
            color="border-brand-blue"
          />
          <LocationCard 
            title="Sede Sector Comercial"
            address="Calle 5 Sector Comercial"
            email="serviciossectorcomercial@gmail.com"
            phone="312 337 7832"
            color="border-brand-yellow"
          />
        </div>

        {/* Ivan's Channel Link */}
        <div className="mt-16 text-center">
            <div className="inline-block bg-white p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300 border border-green-100">
                <h3 className="text-xl font-bold text-brand-blue mb-4">Canal Oficial de Novedades</h3>
                <p className="text-gray-500 mb-6">Únete al canal de Iván Rodríguez para recibir ofertas de empleo y novedades al instante.</p>
                <a 
                    href="https://www.whatsapp.com/channel/0029VayXoKp1XqufpYCZaB1Z"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-[#25D366] text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-green-500/40 transition-all flex items-center justify-center gap-2 mx-auto"
                >
                    <MessageCircle className="w-6 h-6" /> Unirme al Canal de WhatsApp
                </a>
            </div>
        </div>
      </div>
    </section>
  );
};