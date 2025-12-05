import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pb-12 pt-24 md:pt-0">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center bg-no-repeat animate-zoom-slow"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-g12-black via-g12-black/40 to-black/80"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center md:text-left h-full flex flex-col justify-center">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          <div className="flex-1 space-y-8 animate-fade-in-up">
            
            <h1 className="font-display font-black text-5xl sm:text-6xl md:text-6xl lg:text-7xl leading-[1.1] text-white drop-shadow-2xl">
              Recupere Sua <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gold-gradient gold-text-glow">Liberdade Financeira</span> <br className="hidden md:block" />
              Imediatamente.
            </h1>
            
            <h2 className="font-sans text-lg md:text-2xl text-gray-300 font-light max-w-2xl leading-relaxed">
              Consultoria especializada G12 para resolver pendências no <strong className="text-white font-bold">BACEN</strong>, 
              limpar seu nome e garantir seu crédito de volta.
            </h2>

            <div className="flex flex-col sm:flex-row gap-5 pt-6 justify-center md:justify-start items-center">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto group relative px-8 py-5 bg-gold-gradient text-g12-black font-extrabold text-lg rounded shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 overflow-hidden"
              >
                {/* Shine Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-10"></div>
                
                <span className="relative z-20">FALAR COM CONSULTOR GRATUITO</span>
                <ArrowRight className="relative z-20 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <div className="flex flex-col justify-center text-left text-sm text-gray-400 gap-2 px-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-g12-gold" /> 
                  <span className="font-medium text-gray-300">Análise de Score Grátis</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-g12-gold" /> 
                  <span className="font-medium text-gray-300">Resultado Rápido</span>
                </div>
              </div>
            </div>
          </div>

          {/* Abstract Visual Representation of Success - Animated */}
          <div className="hidden md:flex flex-1 justify-center relative animate-float">
            <div className="relative w-80 lg:w-96 glass-card rounded-3xl p-8 border-t border-l border-white/20 flex flex-col justify-between shadow-2xl backdrop-blur-xl">
              {/* Background Glow */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-g12-gold/10 rounded-full blur-[80px]"></div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <p className="text-g12-gold text-xs font-bold tracking-widest uppercase">Seu Score Hoje</p>
                  <div className="px-2 py-1 rounded bg-green-500/20 text-green-400 text-xs font-bold">Excelente</div>
                </div>
                
                <div className="flex items-end gap-2 mb-1">
                    <p className="text-6xl font-display font-bold text-white tracking-tight">850</p>
                    <p className="text-green-400 text-lg font-bold mb-2">▲ +420</p>
                </div>
                <p className="text-gray-400 text-sm mb-8">Potencial de Crédito: Alto</p>
              </div>

              <div className="space-y-5 relative z-10">
                <div>
                  <div className="flex justify-between text-xs text-gray-400 mb-1">
                    <span>Nome Limpo</span>
                    <span className="text-green-400 font-bold flex items-center gap-1"><CheckCircle2 className="w-3 h-3"/> Aprovado</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 w-full shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                  </div>
                </div>
                
                <div>
                   <div className="flex justify-between text-xs text-gray-400 mb-1">
                    <span>Probabilidade de Aprovação</span>
                    <span className="text-white font-bold">98%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                     <div className="h-full bg-g12-gold w-[98%] shadow-[0_0_10px_rgba(212,175,55,0.5)]"></div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-800 to-black border border-white/10 flex items-center justify-center shadow-lg">
                  <span className="font-display font-black text-g12-gold text-sm">G12</span>
                </div>
                <div className="text-xs">
                  <p className="text-white font-bold text-sm">Garantia G12</p>
                  <p className="text-gray-400">Regularização Segura</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;