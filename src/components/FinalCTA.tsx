import React from 'react';
import { Clock, Users, TrendingUp } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section id="purchase-section" className="bg-gradient-to-br from-red-600 via-pink-600 to-orange-600 py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-white mb-6">
          ⏰ Última chance!
        </h2>
        <p className="text-2xl text-white/90 mb-8">
          Esta oferta especial termina em breve
        </p>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center text-white">
              <Users className="w-12 h-12 mx-auto mb-3" />
              <p className="text-3xl font-bold">1.500+</p>
              <p className="text-white/80">Clientes satisfeitos</p>
            </div>
            <div className="text-center text-white">
              <TrendingUp className="w-12 h-12 mx-auto mb-3" />
              <p className="text-3xl font-bold">94%</p>
              <p className="text-white/80">Taxa de sucesso</p>
            </div>
            <div className="text-center text-white">
              <Clock className="w-12 h-12 mx-auto mb-3" />
              <p className="text-3xl font-bold">24h</p>
              <p className="text-white/80">Para ver resultados</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl p-8 shadow-2xl">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            🔥 Não perca esta oportunidade única!
          </h3>
          
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="text-center">
              <p className="text-gray-500 line-through text-xl">De R$ 508</p>
              <p className="text-6xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                R$ 19,90
              </p>
              <p className="text-green-600 font-bold text-lg">Economia de 96%!</p>
            </div>
          </div>
          
          <button 
            onClick={() => window.open('https://pay.kiwify.com.br/Fmbo7pi', '_blank')}
            className="w-full bg-gradient-to-r from-red-500 via-pink-500 to-orange-500 text-white text-2xl font-bold py-6 px-8 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 mb-4"
          >
            Quero acessar o curso completo!
          </button>
          
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
            <span>✅ Acesso imediato</span>
            <span>✅ Garantia de 7 dias</span>
            <span>✅ Suporte incluído</span>
          </div>
        </div>
        
        <div className="mt-8 text-white/80 text-lg">
          <p className="mb-2">🔐 Pagamento 100% seguro</p>
          <p>💳 Aceitamos PIX, cartão e boleto</p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;