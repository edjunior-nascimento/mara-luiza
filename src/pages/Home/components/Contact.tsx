import { Mail, MapPin, Linkedin } from 'lucide-react';
import { BsWhatsapp } from 'react-icons/bs';

const Contact = () => {

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "maramarinho027@gmail.com",
      href: "mailto:maramarinho027@gmail.com"
    },
    {
      icon: <BsWhatsapp className="w-6 h-6" />,
      title: "Whatsapp",
      content: "+55 (88) 988506700",
      href: "https://wa.me/5588988506700"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Localização",
      content: "Ceará, Brasil",
      href: "#"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn",
      content: "Mara Luiza",
      href: "https://www.linkedin.com/in/mara-luiza/"
    }
  ];

  return (
    <section id="contact" className="py-20 px-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-blue-300 bg-clip-text text-transparent">
            Vamos Conversar?
          </h2>
          <div className="w-24 h-1 bg-blue-300 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Estou sempre aberta a novos desafios e oportunidades. Entre em contato para discutirmos seu próximo projeto!
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-8">Informações de Contato</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href}
                className="flex items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="text-blue-400 mr-4 group-hover:scale-110 transition-transform duration-300">
                  {info.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{info.title}</h4>
                  <p className="text-gray-600">{info.content}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;