import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 pl-4 pr-1 py-1 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] transition-all duration-300 transform hover:scale-105 group"
    >
      <span className="font-bold text-sm hidden md:block">Falar com Especialista</span>
      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#25D366]">
        <MessageCircle className="w-6 h-6 fill-current" />
      </div>
    </a>
  );
};

export default WhatsAppButton;