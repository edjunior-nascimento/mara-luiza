import Header from "../../components/Header";
import TheChallenge from "./components/TheChallenge";
import Research from "./components/Research";
import WhyItMatters from "./components/WhyItMatters";
import ProjectOverview from "./components/ProjectOverview";
import Hero from "../../components/Hero";
import { Accessibility, CalendarDays, FolderGit2, Globe, HeartPulse, Users, Wrench } from "lucide-react";
import Insights from "./components/Insights";
import Personas from "./components/Personas";
import EmpathyMap from "./components/EmpathyMap";
import Journey from "./components/Journey";
import ProblemStatement from "./components/ProblemStatement";
import HMW from "./components/HMW";
import SolutionConcept from "./components/SolutionConcept";
import FeaturePrioritization from "./components/FeaturePrioritization";
import InformationArchitecture from "./components/InformationArchitecture";
import UserFlow from "./components/UserFlow";
import Wireframes from "./components/Wireframes";
import DesignSystem from "./components/DesignSystem";
import HighFidelity from "./components/HighFidelity";
import Prototype from "./components/Prototype";
import Usability from "./components/Usability";
import Results from "./components/Results";
import Reflection from "./components/Reflection";
import { FiFigma } from "react-icons/fi";
import Links from "../../components/Links";


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
                estudo={{ icone: HeartPulse, nome: "Estudo de Caso UX/UI" }}
                imagem="/images/ibiapaba_explore_main.png"
                titulo="Cuidados com a Saúde do Idoso All-in-One"
                descricao="Uma plataforma mobile desenvolvida para promover autonomia, segurança e qualidade de vida para pessoas idosas, conectando pacientes, familiares e profissionais da saúde em uma experiência simples, acessível e centrada no cuidado contínuo."
                tags={["UX Strategy", "UX Research", "Design Thinking", "UX/UI Design", "Prototipação"]}
                estatisticas={[
                    { label: "Entrevistas", valor: "15+", icone: Users },
                    { label: "Duração", valor: "5 semanas", icone: CalendarDays },
                    { label: "Ferramentas", valor: "Figma • FigJam • Google Forms", icone: Wrench }
                ]}
            />
            <TheChallenge />
            <WhyItMatters />
            <ProjectOverview />
            <Research />
            <Insights />
            <Personas />
            <EmpathyMap />
            <Journey />
            <ProblemStatement />
            <HMW />
            <SolutionConcept />
            <FeaturePrioritization />
            <InformationArchitecture />
            <UserFlow />
            <Wireframes />
            <DesignSystem />
            <Accessibility />
            <HighFidelity />
            <Prototype />
            <Usability />
            <Results />
            <Reflection />
            <Links itens={links} />

        </div>
    );
}