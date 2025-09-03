import React from 'react';
import { Heart } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-red-500 via-pink-500 to-orange-500 p-4 shadow-lg">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Heart className="text-white w-8 h-8 fill-current" />
          <span className="text-white text-xl font-bold">TinderMaster</span>
        </div>
        <div className="text-white text-sm">
          ✨ Oferta limitada - apenas hoje!
        </div>
      </div>
    </header>
  );
};

export default Header;