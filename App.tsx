import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import WorkWithUs from './components/WorkWithUs';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <div className="antialiased text-slate-100 bg-[#050505] min-h-screen selection:bg-g12-gold selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Testimonials />
        <WorkWithUs />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;