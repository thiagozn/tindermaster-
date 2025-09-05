import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Heart className="text-pink-500 w-8 h-8 fill-current" />
            <span className="text-2xl font-bold">TinderMaster</span>
          </div>
          <p className="text-gray-300 text-lg">
            Transformando vidas no mundo dos relacionamentos digitais
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h4 className="font-bold text-lg mb-4">Contato</h4>
            <p className="text-gray-300 mb-2">📧 suporte@tindermaster.com</p>
            <p className="text-gray-300">📱 WhatsApp: (11) 99999-9999</p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Garantias</h4>
            <p className="text-gray-300 mb-2">✅ 7 dias de garantia</p>
            <p className="text-gray-300 mb-2">🔒 Pagamento seguro</p>
            <p className="text-gray-300">🚀 Entrega imediata</p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Sobre</h4>
            <p className="text-gray-300 mb-2">🏆 +1.500 clientes</p>
            <p className="text-gray-300 mb-2">⭐ 4.9/5 de avaliação</p>
            <p className="text-gray-300">🔥 94% de taxa de sucesso</p>
            <p className="text-gray-300">🔥 te amo micka pretinha ❤️</p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 mt-8 text-center text-gray-400">
          <p>&copy; 2024 TinderMaster. Todos os direitos reservados.</p>
          <p className="text-sm mt-2">
            Este produto não possui vínculo com o Tinder Inc. Todos os direitos das marcas mencionadas pertencem aos seus respectivos proprietários.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;