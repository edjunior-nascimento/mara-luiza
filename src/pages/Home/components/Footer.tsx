import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-50 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="mb-6">
            <div className="text-3xl font-bold bg-blue-400 bg-clip-text text-transparent">
              Mara Luiza
            </div>
          </div>
          
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Criando experiências digitais memoráveis através de design centrado no usuário.
          </p>

          <div className="flex items-center justify-center text-gray-600 text-sm">
            <span>© {currentYear} Mara Luiza. Feito com</span>
            <Heart className="w-4 h-4 text-red-400 mx-2 animate-pulse" />
            <span>e muito café ☕</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;