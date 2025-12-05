import { GoogleGenAI, Type } from "@google/genai";

// Initialize the client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateSalesPitch = async (serviceName: string): Promise<{ pitch: string; strategy: string }> => {
  try {
    const model = 'gemini-2.5-flash';
    
    const prompt = `
      Atue como um Diretor Comercial Sênior da G12, uma empresa de elite em regularização financeira.
      
      O usuário é um revendedor/parceiro que precisa vender o serviço: "${serviceName}".
      
      Gere um "Pitch de Vendas" curto e impactante (máximo 300 caracteres) que ele pode enviar no WhatsApp para um cliente potencial, e uma "Estratégia Relâmpago" de uma frase para fechar a venda.
      
      Use tom autoritário, seguro e focado em solução de dor.
      
      Responda EXATAMENTE neste formato JSON:
      {
        "pitch": "texto do pitch aqui",
        "strategy": "texto da estratégia aqui"
      }
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            pitch: { type: Type.STRING },
            strategy: { type: Type.STRING },
          },
        },
      },
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");

    return JSON.parse(text);

  } catch (error) {
    console.error("Error generating pitch:", error);
    return {
      pitch: "Garanta sua liberdade financeira hoje com a G12. Somos a fonte direta para resolver seu problema sem burocracia.",
      strategy: "Foque na exclusividade e na rapidez do serviço direto da fonte."
    };
  }
};