import React from 'react';
import { ShieldCheck, TrendingUp, Building2, BarChart3, Car, Scale, SearchCheck, Baby } from 'lucide-react';

export const WHATSAPP_NUMBER = "5511963557412";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1%2C%20quero%20conhecer%20os%20servi%C3%A7os%20da%20G12%20para%20limpeza%20de%20nome%20e%20aumento%20de%20score.`;

export const SERVICES = [
  {
    id: 'limpa-nome',
    title: 'Limpa Nome',
    description: 'Solução definitiva para remover restrições no SPC e Serasa. Volte a ter crédito no mercado.',
    icon: <ShieldCheck className="w-8 h-8 text-g12-gold" />,
    isBonus: false
  },
  {
    id: 'rating',
    title: 'Atualização de Rating',
    description: 'Melhore sua classificação interna nos bancos e consiga limites maiores.',
    icon: <TrendingUp className="w-8 h-8 text-g12-gold" />,
    isBonus: false
  },
  {
    id: 'bacen',
    title: 'Regularização BACEN',
    description: 'Removemos os apontamentos de prejuízo do Registrato que bloqueiam seu financiamento.',
    icon: <Building2 className="w-8 h-8 text-g12-gold" />,
    isBonus: false
  },
  {
    id: 'score',
    title: 'Aumento de Score',
    description: 'Consultoria estratégica para elevar sua pontuação de crédito rapidamente.',
    icon: <BarChart3 className="w-8 h-8 text-g12-gold" />,
    isBonus: false
  },
  {
    id: 'cnh',
    title: 'CNH e Multas',
    description: 'Recupere sua CNH cassada ou suspensa e recorra de multas indevidas.',
    icon: <Car className="w-8 h-8 text-g12-gold" />,
    isBonus: false
  },
  {
    id: 'processos',
    title: 'Privacidade Digital',
    description: 'Remoção de seus processos de sites públicos como Jusbrasil e Escavador.',
    icon: <Scale className="w-8 h-8 text-g12-gold" />,
    isBonus: false
  },
  {
    id: 'revisional',
    title: 'Revisional Veicular',
    description: 'Análise para redução de juros abusivos em financiamentos de carros e motos.',
    icon: <SearchCheck className="w-8 h-8 text-white" />,
    isBonus: true
  },
  {
    id: 'maternidade',
    title: 'Auxílio Maternidade',
    description: 'Assessoria completa para você receber o benefício que tem direito.',
    icon: <Baby className="w-8 h-8 text-white" />,
    isBonus: true
  }
];