import React from 'react';
import { SERVICES } from '../constants';
import { Star } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-g12-black relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-g12-gold/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <span className="text-g12-gold font-bold tracking-[0.2em] uppercase text-xs md:text-sm animate-pulse-slow block mb-4">
            Como Podemos Ajudar
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white leading-tight">
            Nossos Serviços <span className="text-g12-gold inline-block transform hover:scale-105 transition-transform duration-300 cursor-default">Para Você</span>
          </h2>
          <p className="mt-6 text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Soluções completas para regularizar sua vida financeira. Volte a ter crédito, limpe seu nome e realize seus sonhos com a segurança da G12.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={service.id}
              className={`
                group relative p-8 rounded-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02]
                flex flex-col h-full
                ${service.isBonus 
                  ? 'bg-gradient-to-b from-[#0f172a] to-black border border-g12-gold/30 hover:border-g12-gold hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]' 
                  : 'bg-[#0A0A0A] border border-white/5 hover:bg-[#111] hover:border-white/20 hover:shadow-2xl'
                }
              `}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {service.isBonus && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-g12-gold text-g12-black text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-[0_0_15px_rgba(212,175,55,0.5)] z-20">
                  <Star className="w-3 h-3 fill-black" /> Especial
                </div>
              )}

              {/* Icon Container */}
              <div className={`
                mb-8 p-4 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-2xl border transition-all duration-500 group-hover:rotate-3
                ${service.isBonus
                    ? 'bg-g12-gold/10 border-g12-gold/20 group-hover:bg-g12-gold/20'
                    : 'bg-white/5 border-white/10 group-hover:bg-white/10 group-hover:border-white/20'
                }
              `}>
                <div className="transform transition-transform duration-500 group-hover:scale-110">
                    {service.icon}
                </div>
              </div>
              
              {/* Text Content */}
              <div className="flex-grow">
                <h3 className={`font-display font-bold text-2xl md:text-2xl mb-4 leading-tight ${service.isBonus ? 'text-g12-gold drop-shadow-sm' : 'text-white'}`}>
                  {service.title}
                </h3>
                
                <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light group-hover:text-gray-300 transition-colors">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;