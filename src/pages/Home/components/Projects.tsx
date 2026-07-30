import { useNavigate } from "react-router-dom";

const Projects = () => {

  const navigation = useNavigate();

  const projects = [
    {
      title: "ONG Proteção Animal",
      description: "Plataforma digital criada para facilitar doações e adoções, com QR Code PIX, catálogo filtrável de animais e dashboard interno para gestão da ONG.",
      image: "/images/protecao_animal_main.png",
      tags: ["UX Research", "Figma", "Usability Testing", "Responsive Design", "Dashboard Design" ],
      onClick: () => navigation("/protecao-animal"),
    },
    {
      title: "Ibiapaba Adventure",
      description: "Plataforma digital de ecoturismo que organiza trilhas, hospedagens e guias locais",
      image: "/images/ibiapaba_explore_main.png",
      tags: ["UX Research", "Usability Testing", "Figma", "Responsive Design", "Product Design"],
      onClick: () => navigation("/ibiapaba-adventure"),
    },
    {
      title: "Cuidados com a Saúde do Idoso All-in-One",
      description: "Desenvolver uma solução digital para auxiliar pessoas idosas no gerenciamento da saúde de forma simples, segura e acessível.",
      image: "/images/capa_xpzone.png",
      tags: ["UX/UI Design", "Figma", "Design System", "Prototyping", "Responsive Design"],
      onClick: () => navigation("/cuidados-saude"),
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-300 bg-clip-text">
            Projetos
          </h2>
          <div className="w-24 h-1 bg-blue-300 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Uma seleção dos meus projetos mais recentes, cada um com seus únicos desafios e soluções criativas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform cursor-pointer hover:-translate-y-2 overflow-hidden" onClick={project.onClick}>
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-br from-indigo-200 to-purple-200 opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;