import React from 'react';
import { Check, MessageSquare, Lightbulb, Target, TrendingUp, Users } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "100 mensagens prontas testadas e aprovadas",
      description: "Pacote completo de frases que já foram testadas por milhares de usuários com sucesso comprovado"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Exemplos para diferentes situações",
      description: "Primeiro match, quando alguém some, humor, flerte - tudo coberto!"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Templates de copiar e colar",
      description: "Basta copiar, colar e adaptar para sua personalidade"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Dicas para manter a conversa fluindo",
      description: "Aprenda a transformar matches em encontros reais"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Estratégias para se destacar",
      description: "Seja único entre centenas de mensagens entediantes"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
          O que você vai descobrir
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Um guia completo que vai transformar suas conversas no Tinder para sempre
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-gradient-to-r from-red-500 to-pink-500 p-3 rounded-full w-fit mb-4">
                <div className="text-white">
                  {benefit.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;