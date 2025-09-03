import React from 'react';
import { Gift, CheckCircle, Zap } from 'lucide-react';

const Bonuses = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Gift className="text-pink-500 w-12 h-12" />
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Mas espera... tem mais! 🎁
          </h2>
          <p className="text-xl text-gray-600">
            Você vai receber esses bônus exclusivos GRÁTIS
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-pink-200">
            <div className="flex items-center mb-4">
              <CheckCircle className="text-pink-500 w-8 h-8 mr-3" />
              <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                BÔNUS #1
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Checklist do Perfil Magnético
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              5 passos simples para deixar seu perfil mais atraente e receber muito mais matches. Não adianta ter as melhores mensagens se seu perfil não chama atenção!
            </p>
            <div className="text-right">
              <span className="text-2xl font-bold text-pink-500">Valor: R$ 47</span>
              <p className="text-sm text-gray-500">Seu por apenas R$ 19,90</p>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-orange-200">
            <div className="flex items-center mb-4">
              <Zap className="text-orange-500 w-8 h-8 mr-3" />
              <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                BÔNUS #2
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              10 Gatilhos de Humor para usar no Tinder
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Frases engraçadas que sempre funcionam! O humor é uma das armas mais poderosas na conquista. Use essas frases testadas e aprovadas.
            </p>
            <div className="text-right">
              <span className="text-2xl font-bold text-orange-500">Valor: R$ 67</span>
              <p className="text-sm text-gray-500">Seu por apenas R$ 19,90</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            🎯 Recapitulando sua oferta
          </h3>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div>
              <p className="text-lg opacity-90">Curso Completo</p>
              <p className="text-2xl font-bold">R$ 297</p>
            </div>
            <div>
              <p className="text-lg opacity-90">100 Mensagens Prontas</p>
              <p className="text-2xl font-bold">R$ 97</p>
            </div>
            <div>
              <p className="text-lg opacity-90">Bônus #1</p>
              <p className="text-2xl font-bold">R$ 67</p>
            </div>
          </div>
          <div className="grid md:grid-cols-1 gap-4 mb-6">
            <div>
              <p className="text-lg opacity-90">Bônus #2</p>
              <p className="text-2xl font-bold">R$ 47</p>
            </div>
          </div>
          <div className="border-t border-white/20 pt-4">
            <p className="text-2xl mb-2">Valor total: <span className="line-through">R$ 508</span></p>
            <p className="text-4xl font-bold mb-4">Você paga apenas: R$ 19,90</p>
            <p className="text-xl">💰 Uma economia de R$ 488,10!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bonuses;