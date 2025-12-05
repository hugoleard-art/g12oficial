import React from 'react';

const Navbar: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-g12-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
          <div className="w-10 h-10 bg-gradient-to-br from-g12-gold to-g12-goldDark rounded-sm flex items-center justify-center font-display font-black text-g12-black text-xl">
            G12
          </div>
        </div>
        
        <div className="flex items-center gap-6">
           <button 
            onClick={() => scrollToSection('services')}
            className="text-sm text-gray-300 hover:text-white transition-colors font-medium hidden md:block"
           >
             Serviços
           </button>
           <button 
            onClick={() => scrollToSection('careers')}
            className="text-sm text-gray-300 hover:text-g12-gold transition-colors font-medium flex items-center gap-2"
           >
             Trabalhe Conosco
           </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;