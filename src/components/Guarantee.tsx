import React from 'react';
import { Shield, Clock, RefreshCw } from 'lucide-react';

const Guarantee = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-green-50 to-teal-50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <Shield className="text-green-500 w-16 h-16" />
        </div>
        
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          🛡️ Garantia Total de 7 dias
        </h2>
        
        <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-green-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            100% Livre de Risco
          </h3>
          
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Se você aplicar o curso e as mensagens e não tiver <strong>nenhuma resposta no Tinder em até 7 dias</strong>, devolvemos 100% do seu dinheiro, sem perguntas, sem burocracia!
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <Clock className="text-blue-500 w-8 h-8 mx-auto mb-3" />
              <h4 className="font-bold text-gray-800 mb-2">7 Dias</h4>
              <p className="text-gray-600 text-sm">Para testar sem pressa</p>
            </div>
            <div className="text-center">
              <RefreshCw className="text-purple-500 w-8 h-8 mx-auto mb-3" />
              <h4 className="font-bold text-gray-800 mb-2">Sem Burocracia</h4>
              <p className="text-gray-600 text-sm">Reembolso em 24h</p>
            </div>
            <div className="text-center">
              <Shield className="text-green-500 w-8 h-8 mx-auto mb-3" />
              <h4 className="font-bold text-gray-800 mb-2">100% Seguro</h4>
              <p className="text-gray-600 text-sm">Zero risco para você</p>
            </div>
          </div>
          
          <div className="bg-green-100 rounded-xl p-6">
            <p className="text-green-800 font-bold text-lg mb-2">
              Por que oferecemos essa garantia?
            </p>
            <p className="text-green-700">
              Porque sabemos que nosso curso e mensagens funcionam! Mais de 1.500 pessoas já conseguiram resultados incríveis. Agora é sua vez!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;