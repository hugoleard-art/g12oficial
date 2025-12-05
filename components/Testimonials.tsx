import React from 'react';
import { Quote, Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 1,
    name: "Mariana Souza",
    role: "Empresária",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=crop&w=200&h=200&q=80",
    content: "Eu estava com o nome sujo há 3 anos e não conseguia crédito pra minha loja. A G12 resolveu tudo em menos de 1 mês. Hoje meu score é 900!",
    stars: 5
  },
  {
    id: 2,
    name: "Ricardo Oliveira",
    role: "Engenheiro",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=200&h=200&q=80",
    content: "Os juros do meu financiamento eram abusivos. A equipe da G12 fez a revisional e reduziu minha parcela pela metade. Recomendo demais.",
    stars: 5
  },
  {
    id: 3,
    name: "Carla Mendes",
    role: "Autônoma",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?fit=crop&w=200&h=200&q=80",
    content: "Tinha apontamentos no BACEN que eu nem sabia e isso travava meu financiamento imobiliário. A G12 limpou meu registrato e consegui minha casa.",
    stars: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-[#080808] border-t border-white/5 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-g12-gold/20 to-transparent"></div>
      <div className="absolute -left-20 top-40 w-80 h-80 bg-g12-gold/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-blue-900/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <span className="text-g12-gold font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-4 block animate-pulse-slow">
            Histórias Reais
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white mb-6">
            Quem confia, <span className="text-transparent bg-clip-text bg-gold-gradient gold-text-glow">realiza</span>.
          </h2>
          <p className="text-gray-400 text-base md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Veja como nossos clientes transformaram suas vidas financeiras com a ajuda da G12.
          </p>
        </div>

        {/* Carousel / Grid Layout - Optimized for Mobile */}
        <div className="
          flex md:grid md:grid-cols-3 
          overflow-x-auto md:overflow-visible 
          gap-5 md:gap-8 
          snap-x snap-mandatory 
          pb-12 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0
          scrollbar-hide
        ">
          {TESTIMONIALS.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="min-w-[85vw] sm:min-w-[400px] md:min-w-0 snap-center relative group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="h-full animate-fade-in-up">
                {/* Card Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-b from-g12-gold/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"></div>
                
                <div className="relative h-full p-8 rounded-2xl bg-[#0c0c0c] border border-white/10 group-hover:border-g12-gold/40 transition-all duration-300 flex flex-col transform group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,1)]">
                  
                  {/* Quote Icon */}
                  <div className="mb-6 relative">
                    <Quote className="w-10 h-10 text-g12-gold opacity-20 group-hover:opacity-100 transition-opacity duration-500 fill-g12-gold" />
                    <div className="absolute top-0 right-0 flex gap-1">
                      {[...Array(testimonial.stars)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-g12-gold fill-g12-gold" />
                      ))}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <p className="text-gray-300 text-lg leading-relaxed mb-8 flex-grow italic font-light group-hover:text-white transition-colors">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 mt-auto border-t border-white/5 pt-6 group-hover:border-white/10 transition-colors">
                    <div className="relative">
                      <div className="absolute inset-0 bg-g12-gold rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity"></div>
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="relative w-14 h-14 rounded-full object-cover border-2 border-white/10 group-hover:border-g12-gold transition-colors"
                      />
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-white text-base group-hover:text-g12-gold transition-colors">{testimonial.name}</h4>
                      <p className="text-gray-500 text-xs font-medium uppercase tracking-wider group-hover:text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile Swipe Indicator */}
        <div className="md:hidden flex justify-center gap-2 mt-2">
          {TESTIMONIALS.map((_, i) => (
             <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === 0 ? 'w-8 bg-g12-gold' : 'w-2 bg-gray-800'}`}></div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;