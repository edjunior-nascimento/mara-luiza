import {
  Users,
  BarChart3,
  Monitor,
  LightbulbIcon,
  UserRoundSearch,
  MonitorSmartphoneIcon,
  PencilRulerIcon,
  SparklesIcon,
  Wrench,
  TestTube2,
  LampDesk,
  Waypoints,
  Tag,
  UsersIcon,
  LucidePackageSearch,
  AlertTriangle,
  Workflow,
  Bookmark,
  BarChart3Icon,
  Milestone,
  UserRound,
  PanelsTopLeft,
  MousePointerClick,
  LayoutDashboard,
  AppWindow,
  Puzzle,
  Maximize2,
  Scaling,
  PersonStanding,
  Heart,
  Table,
} from 'lucide-react';
import { BsClaude, BsCursor } from 'react-icons/bs';
import { FaBolt, FaFigma } from 'react-icons/fa';
import { PiOpenAiLogo } from 'react-icons/pi';
import { SiGoogleforms, SiMiro } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: "UX Research",
      icon: <UserRoundSearch className="w-8 h-8" />,
      description: "Entendendo pessoas, comportamentos e necessidades para criar experiências relevantes",
      skills: [
        { name: "Entrevistas com usuários", level: 100, icon: <Users className="w-5 h-5" /> },
        { name: "Testes de usabilidade", level: 90, icon: <TestTube2 className="w-5 h-5" /> },
        { name: "Desk Research", level: 100, icon: <LampDesk className="w-5 h-5" /> },
        { name: "Jornada do usuário", level: 100, icon: <Waypoints className="w-5 h-5" /> },
        { name: "Análise de dados", level: 90, icon: <BarChart3 className="w-5 h-5" /> },
        { name: "Design Thinking", level: 90, icon: <LightbulbIcon className="w-5 h-5" /> },
        { name: "Personas", level: 100, icon: <UsersIcon className="w-5 h-5" /> }
      ]
    },
    {
      title: "UX Strategy",
      icon: <LightbulbIcon className="w-8 h-8" />,
      description: "Definindo a direção estratégica do produto com base em dados e insights",
      skills: [
        { name: "Product Discovery", level: 90, icon: <LucidePackageSearch className="w-5 h-5" /> },
        { name: "Roadmap de Produto", level: 90, icon: <Waypoints className="w-5 h-5" /> },
        { name: "Métricas & KPIs", level: 75, icon: <BarChart3Icon className="w-5 h-5" /> },
        { name: "Business Model Canvas", level: 90, icon: <Table className="w-5 h-5" /> },
        { name: "Benchmark Competitivo", level: 90, icon: <Tag className="w-5 h-5" /> },
      ]
    },
    {
      title: "UX Design",
      icon: <PencilRulerIcon className="w-8 h-8" />,
      description: "Estruturo o problema e crio soluções centradas no usuário",
      skills: [
        { name: "User Flows", level: 100, icon: <Milestone className="w-5 h-5" /> },
        { name: "Arquitetura da Informação", level: 90, icon: <Workflow className="w-5 h-5" /> },
        { name: "Wireframes", level: 90, icon: <PanelsTopLeft className="w-5 h-5" /> },
        { name: "Design de Interação", level: 90, icon: <MousePointerClick className="w-5 h-5" /> },
        { name: "Design Centrado no Usuário", level: 90, icon: <Monitor className="w-5 h-5" /> },
        { name: "Prototipação", level: 90, icon: <AppWindow className="w-5 h-5" /> }
      ]
    },
    {
      title: "UI Design",
      icon: <MonitorSmartphoneIcon className="w-8 h-8" />,
      description: "Crio interfaces visuais atraentes e funcionais, garantindo uma experiência de usuário consistente",
      skills: [
        { name: "Design System", level: 90, icon: <LayoutDashboard className="w-5 h-5" /> },
        { name: "Componentes", level: 90, icon: <Puzzle className="w-5 h-5" /> },
        { name: "Auto Layout", level: 75, icon: <Maximize2 className="w-5 h-5" /> },
        { name: "Responsividade", level: 75, icon: <Scaling className="w-5 h-5" /> },
        { name: "Acessibilidade (WCAG)", level: 75, icon: <PersonStanding className="w-5 h-5" /> }
      ]
    },
    {
      title: "IA",
      icon: <SparklesIcon className="w-8 h-8" />,
      description: "Utilização de inteligência artificial para otimizar o processo de design e criar soluções inovadoras",
      skills: [
        { name: "ChatGPT", level: 90, icon: <PiOpenAiLogo className="w-5 h-5" /> },
        { name: "Gemini", level: 75, icon: <SparklesIcon className="w-5 h-5" /> },
        { name: "Claude", level: 50, icon: <BsClaude className="w-5 h-5" /> },
        { name: "Bolt", level: 75, icon: <FaBolt className="w-5 h-5" /> },
        { name: "Cursor", level: 50, icon: <BsCursor className="w-5 h-5" /> },
        { name: "Figma AI", level: 75, icon: <FaFigma className="w-5 h-5" /> },
        { name: "Lovable", level: 75, icon: <Heart className="w-5 h-5" /> }
      ]
    }
  ];

  function nivelar(porcentagem: number): string {
    switch (true) {
      case porcentagem === 100:
        return "Expert";
      case porcentagem >= 90:
        return "Forte experiência";
      case porcentagem >= 75:
        return "Uso frequente";
      case porcentagem >= 50:
        return "Já usei";
      default:
        return "Iniciante";
    }
  }

  return (
    <section id="skills" className="bg-white/30 lg:p-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-blue-300 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-blue-300 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Conjunto abrangente de habilidades desenvolvidas ao longo de anos de experiência prática
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="text-blue-400 mr-4">
                  {category.icon}
                </div>
                <div className="flex flex-col mb-2">
                  <h3 className="text-2xl font-bold text-gray-800">{category.title}</h3>
                  <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    {category.description}
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="relative">
                    <div className="flex items-center w-full">
                      <div className="text-gray-600 mr-3">
                        {skill.icon}
                      </div>
                      <div className="flex flex-col w-full">
                        <span className="font-semibold text-gray-800">{skill.name}</span>
                        <div className="flex flex-row items-center justify-between w-full">
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-blue-400 h-2 rounded-full transition-all duration-1000 ease-out"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                          <div className="ml-3">
                            <span className="text-blue-400 font-semibold whitespace-nowrap">{nivelar(skill.level)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Sempre Aprendendo</h3>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              O design é uma área em constante evolução. Dedico tempo regular para me manter atualizada
              com as últimas tendências, ferramentas e metodologias do mercado, participando de cursos,
              workshops e comunidades de design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;