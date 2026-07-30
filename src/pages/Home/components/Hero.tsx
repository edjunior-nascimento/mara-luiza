import { ArrowDown, Download, Mail } from 'lucide-react';

const Hero = () => {
  
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden shadow-2xl">
              <img
                src={"/images/mara.jpg"}
                alt="Mara Luiza - UX/UI Designer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-blue-300">
              Mara Luiza
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-600 mb-8 font-light">
            UX/UI Designer & Product Designer
          </h2>

          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Criando experiências digitais memoráveis através de design centrado no usuário. 
            Especializada em transformar ideias complexas em interfaces intuitivas e elegantes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="bg-blue-300 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
             onClick={() => scrollToSection('contact')}>
              <Mail size={20} />
              Entre em Contato
            </button>
            <button className="border-2 border-blue-300 text-blue-400 px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                    onClick={() => window.open("data/mara_luiza_curriculo.pdf", "_blank")}>
              <Download size={20} />
              Currículo
            </button>
          </div>

          <button
            onClick={scrollToAbout}
            className="animate-bounce text-blue-400 hover:text-blue-600 transition-colors duration-300"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;