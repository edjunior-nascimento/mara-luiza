import { Heart, Users, Lightbulb, Target } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Paixão pelo Design",
      description: "Cada projeto é uma oportunidade de criar algo único e significativo"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Foco no Usuário",
      description: "Sempre coloco as necessidades e experiências dos usuários em primeiro lugar"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Inovação",
      description: "Busco constantemente novas formas de resolver problemas complexos"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Objetivos Claros",
      description: "Cada decisão de design é orientada por objetivos mensuráveis"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white/30 px-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-300 bg-clip-text ">
            Sobre Mim
          </h2>
          <div className="w-24 h-1 bg-blue-300 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="relative">
              <div className="w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/mara.jpg"
                  alt="Mara trabalhando"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-60"></div>
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full opacity-60"></div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Transformando ideias em experiências incríveis
            </h3>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Com mais de 5 anos de experiência em UX/UI Design, tenho dedicado minha carreira 
              a criar produtos digitais que não apenas funcionam perfeitamente, mas também 
              encantam os usuários em cada interação.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Especializada em research, prototipagem e design systems, trabalho com equipes 
              multidisciplinares para entregar soluções que combinam estética, funcionalidade 
              e estratégia de negócio.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="text-blue-300 mt-1">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">{value.title}</h4>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;