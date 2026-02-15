import React, { useState, useEffect } from 'react';
import { Clock, Calendar as CalendarIcon } from 'lucide-react';

export const DateTimeWidget: React.FC = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed bottom-4 left-4 z-40 hidden md:flex flex-col gap-2">
      <div className="bg-brand-blue/90 text-white p-3 rounded-lg shadow-lg border-l-4 border-brand-yellow backdrop-blur-sm hover:scale-105 transition-transform duration-300">
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-brand-yellow" />
          <span className="font-mono text-xl font-bold">
            {date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
          </span>
        </div>
      </div>
      <div className="bg-white/90 text-brand-blue p-3 rounded-lg shadow-lg border-l-4 border-brand-red backdrop-blur-sm hover:scale-105 transition-transform duration-300">
        <div className="flex items-center gap-2">
          <CalendarIcon className="w-5 h-5 text-brand-red" />
          <span className="font-semibold text-sm">
            {date.toLocaleDateString('es-CO', { weekday: 'long', day: 'numeric', month: 'long' })}
          </span>
        </div>
      </div>
    </div>
  );
};