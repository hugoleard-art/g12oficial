import React from 'react';
import { Briefcase, ArrowRight } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const WorkWithUs: React.FC = () => {
  // Creating a specific link for careers
  const careerWhatsAppLink = `https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20sobre%20as%20vagas%20abertas%20na%20G12.`;

  return (
    <section id="careers" className="py-24 bg-g12-dark relative overflow-hidden">
      {/* Background Image/Overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="bg-gradient-to-r from-g12-black to-gray-900 border border-white/10 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl">
          
          <div className="flex-1 space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-g12-gold mb-2 justify-center md:justify-start">
              <Briefcase className="w-5 h-5" />
              <span className="font-bold tracking-widest uppercase text-sm">Carreiras</span>
            </div>
            
            <h2 className="font-display font-black text-3xl md:text-5xl text-white leading-tight">
              Venha Fazer Parte <br />
              da <span className="text-g12-gold">Equipe G12</span>
            </h2>
            
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
              Desenvolva seu potencial em uma das empresas que mais cresce no setor de crédito e regularização financeira. Buscamos talentos para transformar vidas.
            </p>
          </div>

          <div className="flex-shrink-0">
             <a 
               href={careerWhatsAppLink}
               target="_blank"
               rel="noopener noreferrer"
               className="group flex items-center gap-3 bg-white text-black px-8 py-4 rounded-lg font-bold hover:bg-g12-gold hover:text-black transition-all duration-300 shadow-lg transform hover:-translate-y-1"
             >
               <span>VER VAGAS ABERTAS</span>
               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
             </a>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default WorkWithUs;