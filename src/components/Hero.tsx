import React from 'react';
import { MessageCircle, Flame } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-red-50 via-pink-50 to-orange-50 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-gradient-to-r from-red-500 to-pink-500 p-3 rounded-full">
            <Flame className="text-white w-10 h-10" />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
          Curso Completo: Como transformar matches em encontros reais <span className="bg-gradient-to-r from-red-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">(+ 100 mensagens prontas de bônus)</span>.
        </h1>
        
        <p className="text-xl text-gray-600 mb-4">
          (mesmo que você ache que não tem criatividade!)
        </p>
        
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
          Pare de perder tempo com conversas que morrem logo no começo. Com esse guia prático, você vai aprender como iniciar qualquer chat de forma divertida, envolvente e irresistível.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md">
            <MessageCircle className="text-pink-500 w-5 h-5" />
            <span className="text-gray-700 font-medium">+100 mensagens testadas</span>
          </div>
          <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md">
            <span className="text-2xl">💬</span>
            <span className="text-gray-700 font-medium">100% de resposta garantida</span>
          </div>
        </div>
        
        <button 
          onClick={() => {
            document.getElementById('price-section')?.scrollIntoView({ 
              behavior: 'smooth' 
            });
          }}
          className="bg-gradient-to-r from-red-500 via-pink-500 to-orange-500 text-white text-xl font-bold py-4 px-8 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-pulse"
        >
          🔥 Quero acessar o curso completo e minhas 100 mensagens agora!
        </button>
        
        <p className="text-sm text-gray-500 mt-4">
          ⏰ Oferta especial termina em breve!
        </p>
      </div>
    </section>
  );
};

export default Hero;