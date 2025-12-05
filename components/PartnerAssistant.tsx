import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { generateSalesPitch } from '../services/geminiService';
import { Bot, Sparkles, MessageCircle, Copy, Check } from 'lucide-react';

const PartnerAssistant: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string>(SERVICES[0].title);
  const [pitchData, setPitchData] = useState<{ pitch: string; strategy: string } | null>(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    setPitchData(null);
    try {
      const data = await generateSalesPitch(selectedService);
      setPitchData(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (pitchData) {
      navigator.clipboard.writeText(pitchData.pitch);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="assistant" className="py-24 bg-[#080808] border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 text-g12-gold mb-4">
              <Bot className="w-6 h-6" />
              <span className="font-bold tracking-widest uppercase text-sm">IA do Parceiro G12</span>
            </div>
            <h2 className="font-display font-black text-3xl md:text-4xl text-white mb-6">
              Venda mais rápido com <br /> nossa <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Inteligência Artificial</span>
            </h2>
            <p className="text-gray-400 mb-8">
              Não sabe como oferecer os serviços? Selecione um produto abaixo e nossa IA (Powered by Gemini) criará um script de vendas persuasivo para você enviar no WhatsApp do seu cliente agora mesmo.
            </p>

            <div className="bg-gray-900/50 p-6 rounded-xl border border-white/10">
              <label className="block text-sm font-medium text-gray-300 mb-2">Escolha o serviço para vender:</label>
              <select 
                className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-g12-gold outline-none mb-4"
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
              >
                {SERVICES.map(s => (
                  <option key={s.id} value={s.title}>{s.title}</option>
                ))}
              </select>

              <button
                onClick={handleGenerate}
                disabled={loading}
                className="w-full py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loading ? (
                  <span className="animate-pulse">Gerando Estratégia...</span>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" /> Gerar Pitch de Vendas
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="flex-1 w-full">
            <div className="relative min-h-[300px] bg-g12-dark rounded-2xl border border-white/10 p-6 flex flex-col shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-g12-gold to-g12-goldDark flex items-center justify-center">
                    <Bot className="w-4 h-4 text-black" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">Mentor de Vendas G12</p>
                    <p className="text-xs text-g12-gold">Online Agora</p>
                  </div>
                </div>
              </div>

              {pitchData ? (
                <div className="flex-1 flex flex-col gap-4 animate-fade-in">
                  <div className="bg-black/40 p-4 rounded-lg border border-white/5">
                    <p className="text-xs text-gray-500 uppercase font-bold mb-2">Estratégia Relâmpago</p>
                    <p className="text-sm text-g12-gold italic">"{pitchData.strategy}"</p>
                  </div>
                  
                  <div className="bg-[#1f2c34] p-4 rounded-lg rounded-tl-none relative group">
                    <p className="text-gray-200 text-sm whitespace-pre-wrap leading-relaxed">
                      {pitchData.pitch}
                    </p>
                    <button 
                      onClick={copyToClipboard}
                      className="absolute top-2 right-2 p-2 bg-black/20 hover:bg-black/40 rounded-full transition-colors text-white/50 hover:text-white"
                      title="Copiar texto"
                    >
                      {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                  
                  <div className="mt-auto pt-4 flex justify-end">
                    <button onClick={copyToClipboard} className="text-xs text-gray-500 hover:text-white flex items-center gap-1">
                      <MessageCircle className="w-3 h-3" /> Copiar para WhatsApp
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex-1 flex flex-col items-center justify-center text-center p-8 opacity-30">
                  <Bot className="w-16 h-16 mb-4" />
                  <p className="text-sm">Selecione um serviço e clique em gerar para receber seu script.</p>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PartnerAssistant;