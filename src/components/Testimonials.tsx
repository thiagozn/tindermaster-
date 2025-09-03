import React from 'react';
import { Star, MessageCircle } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos, 28 anos",
      text: "Em 3 dias usando as mensagens, consegui 15 respostas! Nunca tive tanto sucesso no Tinder.",
      matches: "15+ matches",
      avatar: "👨‍💼"
    },
    {
      name: "Ana, 25 anos",
      text: "As mensagens são geniais! Funciona mesmo. Já marquei 4 encontros essa semana.",
      matches: "12+ matches",
      avatar: "👩‍🎓"
    },
    {
      name: "Rafael, 32 anos", 
      text: "Cara, isso mudou minha vida no app! Antes ficava horas pensando no que escrever.",
      matches: "20+ matches",
      avatar: "👨‍🔧"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Veja o que nossos clientes estão dizendo
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12">
          Mais de 1.500+ pessoas já transformaram suas conversas
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-pink-50 to-orange-50 p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">{testimonial.avatar}</div>
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <div className="flex items-center">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="text-yellow-400 w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
              
              <div className="flex items-center bg-pink-100 rounded-full px-4 py-2 w-fit">
                <MessageCircle className="text-pink-500 w-4 h-4 mr-2" />
                <span className="text-pink-700 font-bold text-sm">{testimonial.matches}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 inline-block px-8 py-4 rounded-full">
            <p className="text-2xl font-bold text-gray-800">
              ⭐ 4.9/5 estrelas - Mais de 1.500 clientes satisfeitos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;