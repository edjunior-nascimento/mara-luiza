import { useState, useEffect } from 'react';
import { ChevronLeft, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button>
            <ChevronLeft size={42} className="text-gray-700" onClick={() => window.history.back()} />
          </button>
          <img
            src={"/icons/logo.png"}
            alt="Mara Luiza"
            className="w-28 h-full object-cover"
          />
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg">
            <div className="px-6 py-4 space-y-3">
              {['Início', 'Sobre', 'Projetos', 'Skills', 'Contato'].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(['hero', 'about', 'projects', 'skills', 'contact'][index])}
                  className="block w-full text-left text-gray-700 hover:text-purple-400 transition-colors duration-300 font-medium py-2"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;