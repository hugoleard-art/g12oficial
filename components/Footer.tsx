import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 justify-between">
          <div className="max-w-lg">
            <div className="w-10 h-10 bg-g12-gold rounded-sm flex items-center justify-center font-display font-black text-g12-black text-xl mb-6">
              G12
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              A G12 é referência nacional em regularização financeira e crédito. Nossa missão é devolver sua tranquilidade financeira com soluções rápidas, seguras e definitivas.
            </p>
          </div>
          
          <div className="md:text-right">
            <h4 className="text-white font-bold mb-6">Atendimento ao Cliente</h4>
            <p className="text-gray-400 text-sm mb-2">Fale com um consultor:</p>
            <p className="text-g12-gold font-mono text-lg mb-4">+55 11 96355-7412</p>
            <p className="text-gray-500 text-xs">Atendimento de Seg. a Sex. das 9h às 18h.</p>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">© {new Date().getFullYear()} G12 Consultoria Financeira. Todos os direitos reservados.</p>
          <div className="text-gray-700 text-xs font-mono">
            SECURE & TRUSTED
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;