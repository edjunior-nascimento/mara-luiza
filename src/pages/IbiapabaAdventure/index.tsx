import { CalendarDays, FolderGit2, Globe, MapPinned, Users, Wrench } from "lucide-react";
import Header from "../../components/Header";
import Dashboard from "./components/Dashboard";
import DesignSystem from "./components/DesignSystem";
import HighFidelity from "./components/HighFidelity";
import HMW from "./components/HMW";
import Ideation from "./components/Ideation";
import Journey from "./components/Journey";
import Overview from "./components/Overview";
import Personas from "./components/Personas";
import Problems from "./components/Problems";
import Reflection from "./components/Reflection";
import Research from "./components/Research";
import Results from "./components/Results";
import Sitemap from "./components/Sitemap";
import Usability from "./components/Usability";
import UserFlow from "./components/UserFlow";
import Hero from "../../components/Hero";
import Links from "../../components/Links";
import { FiFigma } from "react-icons/fi";

const links = [
  {
    title: "Protótipo no Figma",
    description:
      "Explore o protótipo navegável desenvolvido durante o projeto.",
    icon: FiFigma,
    href: "https://www.figma.com/",
    color: "bg-violet-100 text-violet-700",
  },
  {
    title: "Repositório",
    description:
      "Código-fonte da aplicação e componentes desenvolvidos.",
    icon: FolderGit2,
    href: "https://github.com/",
    color: "bg-slate-200 text-slate-700",
  },
  {
    title: "Portfólio",
    description:
      "Conheça outros estudos de caso e projetos desenvolvidos.",
    icon: Globe,
    href: "https://seusite.com",
    color: "bg-sky-100 text-sky-700",
  },
];
export default function App() {
    //scroll to top on page load
    window.scrollTo(0, 0);
    return (
        <div className="min-h-screen">
            <Header />
            <Hero
                estudo={{ icone: MapPinned, nome: "Estudo de Caso UX/UI" }}
                imagem="/images/ibiapaba_explore_main.png"
                titulo="Ibiapaba Adventure"
                descricao="Plataforma digital criada para conectar turistas, guias e proprietários de campings da Serra da Ibiapaba, centralizando trilhas, reservas e informações em uma única experiência."
                tags={["UX Strategy", "UX Research", "Design Thinking", "UX/UI Design", "Prototipação"]}
                estatisticas={[
                    { label: "Entrevistas", valor: "109+", icone: Users },
                    { label: "Duração", valor: "4 semanas", icone: CalendarDays },
                    { label: "Ferramentas", valor: "Figma • FigJam • Google Forms", icone: Wrench }
                ]}
            />
            <Overview />
            <Research />
            <Personas />
            <Journey />
            <Problems />
            <HMW />
            <Ideation />
            <UserFlow />
            <Sitemap />
            <DesignSystem />
            <HighFidelity />
            <Dashboard />
            <Usability />
            <Results />
            <Reflection />
            <Links itens={links} />
        </div>
    );
}