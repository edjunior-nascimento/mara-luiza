import { useState, useEffect } from 'react';
import { ChevronLeft, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

    const navigation = useNavigate();


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button>
            <ChevronLeft size={42} className="text-gray-700" onClick={() => navigation("/")} />
          </button>
          <img
            src={"/icons/logo.png"}
            alt="Mara Luiza"
            className="w-28 h-full object-cover"
          />
        </div>  
      </nav>
    </header>
  );
};

export default Header;