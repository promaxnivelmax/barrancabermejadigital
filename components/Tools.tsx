import React, { useState } from 'react';
import { FileText, Image as ImageIcon, FileArchive, ArrowRight, Upload, Download, RefreshCw } from 'lucide-react';

const ToolCard: React.FC<{ 
  title: string; 
  icon: React.ReactNode; 
  active: boolean; 
  onClick: () => void 
}> = ({ title, icon, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`flex items-center gap-2 p-3 rounded-lg transition-all duration-300 w-full md:w-auto
      ${active 
        ? 'bg-brand-blue text-white shadow-lg scale-105' 
        : 'bg-white text-gray-600 hover:bg-gray-50 hover:shadow'}`}
  >
    {icon}
    <span className="font-semibold">{title}</span>
  </button>
);

export const DigitalTools: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'pdf' | 'img' | 'compress'>('pdf');
  const [isProcessing, setIsProcessing] = useState(false);
  const [processed, setProcessed] = useState(false);

  const handleSimulateProcess = () => {
    setIsProcessing(true);
    setProcessed(false);
    setTimeout(() => {
      setIsProcessing(false);
      setProcessed(true);
    }, 2500);
  };

  return (
    <section id="tools" className="py-20 bg-gray-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-yellow/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-blue mb-4">
            Herramientas <span className="text-brand-red">Digitales</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Convierte, comprime y gestiona tus documentos. Para trámites complejos, contáctanos directamente.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="flex flex-wrap gap-2 p-4 bg-gray-50 border-b">
            <ToolCard 
              title="PDF a Word/Excel" 
              icon={<FileText className="w-5 h-5"/>} 
              active={activeTab === 'pdf'} 
              onClick={() => { setActiveTab('pdf'); setProcessed(false); }}
            />
            <ToolCard 
              title="Conversor Imagen" 
              icon={<ImageIcon className="w-5 h-5"/>} 
              active={activeTab === 'img'} 
              onClick={() => { setActiveTab('img'); setProcessed(false); }}
            />
            <ToolCard 
              title="Comprimir PDF" 
              icon={<FileArchive className="w-5 h-5"/>} 
              active={activeTab === 'compress'} 
              onClick={() => { setActiveTab('compress'); setProcessed(false); }}
            />
          </div>

          <div className="p-8 md:p-12 text-center min-h-[400px] flex flex-col justify-center items-center">
            {!processed ? (
              <>
                <div className="w-20 h-20 bg-brand-blue/5 rounded-full flex items-center justify-center mb-6">
                  {activeTab === 'pdf' && <FileText className="w-10 h-10 text-brand-blue" />}
                  {activeTab === 'img' && <ImageIcon className="w-10 h-10 text-brand-blue" />}
                  {activeTab === 'compress' && <FileArchive className="w-10 h-10 text-brand-blue" />}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {activeTab === 'pdf' ? 'Convertir PDF a Documento Editable' : 
                   activeTab === 'img' ? 'Convertir Formatos de Imagen' : 
                   'Comprimir Archivos PDF'}
                </h3>
                <p className="text-gray-500 mb-8 max-w-md">
                  Arrastra tu archivo aquí o haz clic para seleccionar.
                  Soporta: {activeTab === 'pdf' ? '.pdf' : activeTab === 'img' ? '.jpg, .png, .webp' : '.pdf'}
                </p>

                <div 
                  className="border-2 border-dashed border-gray-300 rounded-xl p-8 w-full max-w-md cursor-pointer hover:border-brand-yellow hover:bg-brand-yellow/5 transition-colors group"
                  onClick={handleSimulateProcess}
                >
                  {isProcessing ? (
                    <div className="flex flex-col items-center">
                      <RefreshCw className="w-8 h-8 text-brand-blue animate-spin mb-4" />
                      <span className="text-brand-blue font-semibold">Procesando archivo...</span>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center">
                      <Upload className="w-8 h-8 text-gray-400 group-hover:text-brand-yellow mb-4 transition-colors" />
                      <span className="text-gray-600 font-medium">Subir Archivo</span>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <Download className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-green-700 mb-2">¡Archivo Listo!</h3>
                <p className="text-gray-600 mb-6">Tu documento ha sido procesado exitosamente.</p>
                <button 
                  onClick={() => setProcessed(false)}
                  className="bg-brand-blue text-white px-8 py-3 rounded-full font-bold hover:bg-brand-yellow hover:text-brand-blue transition-colors flex items-center gap-2"
                >
                  Descargar Ahora <ArrowRight className="w-4 h-4" />
                </button>
                <p className="mt-4 text-xs text-gray-400">
                  *Esta es una demostración. Para servicios profesionales, contáctanos.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};