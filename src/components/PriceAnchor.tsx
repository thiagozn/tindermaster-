import React from 'react';
import { X } from 'lucide-react';

const PriceAnchor = () => {
  return (
    <section id="price-section" className="py-16 px-4 bg-gradient-to-r from-red-500 via-pink-500 to-orange-500">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-8">
          Quanto vale ter sucesso no Tinder?
        </h2>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-2">Curso Completo</h3>
              <p className="text-white/80 mb-4">Dominar Conversas no Tinder</p>
              <div className="flex items-center justify-center">
                <span className="text-3xl font-bold text-white line-through opacity-75">R$ 297</span>
              </div>
            </div>
            
            <div className="bg-white/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-2">100 Mensagens Prontas</h3>
              <p className="text-white/80 mb-4">Pacote Completo de Aberturas</p>
              <div className="flex items-center justify-center">
                <span className="text-3xl font-bold text-white line-through opacity-75">R$ 97</span>
              </div>
            </div>
            
            <div className="bg-white/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-2">Bônus #1</h3>
              <p className="text-white/80 mb-4">Checklist do Perfil Magnético</p>
              <div className="flex items-center justify-center">
                <span className="text-3xl font-bold text-white line-through opacity-75">R$ 67</span>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-1 gap-6 mb-8">
            <div className="bg-white/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-2">Bônus #2</h3>
              <p className="text-white/80 mb-4">10 Gatilhos de Humor</p>
              <div className="flex items-center justify-center">
                <span className="text-3xl font-bold text-white line-through opacity-75">R$ 47</span>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-6">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <span className="text-2xl text-white">Valor total:</span>
              <span className="text-4xl font-bold text-white line-through">R$ 508</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl p-8 shadow-2xl">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            🔥 Oferta Especial - Apenas Hoje!
          </h3>
          <div className="flex items-center justify-center space-x-4 mb-6">
            <span className="text-6xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              R$ 19,90
            </span>
            <div className="text-left">
              <p className="text-gray-500 line-through text-xl">R$ 211</p>
              <p className="text-green-600 font-bold text-lg">Economia de 91%!</p>
            </div>
          </div>
          <p className="text-lg text-gray-600 mb-6">
            Menos que o preço de uma pizza! 🍕
          </p>
          
          <button 
            onClick={() => window.open('https://pay.kiwify.com.br/Fmbo7pi', '_blank')}
            className="w-full bg-gradient-to-r from-red-500 via-pink-500 to-orange-500 text-white text-2xl font-bold py-6 px-8 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            Quero acessar o curso completo!
          </button>
        </div>
      </div>
    </section>
  );
};

export default PriceAnchor;