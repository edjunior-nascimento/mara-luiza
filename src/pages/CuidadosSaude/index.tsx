import Header from "../../components/Header";
import TheChallenge from "./components/TheChallenge";
import Research from "./components/Research";
import ProjectOverview from "./components/ProjectOverview";
import Hero from "../../components/Hero";
import { Globe, HeartPulse} from "lucide-react";
import Personas from "./components/Personas";
import EmpathyMap from "./components/EmpathyMap";
import Journey from "./components/Journey";
import HMW from "./components/HMW";
import SolutionConcept from "./components/SolutionConcept";
import InformationArchitecture from "./components/InformationArchitecture";
import UserFlow from "./components/UserFlow";
import Wireframes from "./components/Wireframes";
import DesignSystem from "./components/DesignSystem";
import HighFidelity from "./components/HighFidelity";
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
    href: "https://www.figma.com/proto/ObqXLcFceuZuUB8kH7Zpd2/Cuidado-com-a-saude-de-idosos-All-in-one?node-id=3-2&viewport=3124%2C1893%2C0.33&t=NyIK7D7fYidONIJV-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=3%3A2&show-proto-sidebar=1&page-id=0%3A1",
    color: "bg-violet-100 text-violet-700",
  },
  {
    title: "Portfólio",
    description:
      "Conheça outros estudos de caso e projetos desenvolvidos.",
    icon: Globe,
    href: "https://maraluiza.com.br/",
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
                imagem="/images/senior-health/wirefrime.png"
                titulo="Cuidados com a Saúde do Idoso All-in-One"
                descricao="Uma plataforma mobile desenvolvida para promover autonomia, segurança e qualidade de vida para pessoas idosas, conectando pacientes, familiares e profissionais da saúde em uma experiência simples, acessível e centrada no cuidado contínuo."
                tags={["UX Strategy", "UX Research", "Design Thinking", "UX/UI Design", "Prototipação"]}
            />             
            <TheChallenge />
            <ProjectOverview />
            <Research />
            <Personas />
            <EmpathyMap />
            <Journey />
            <HMW />
            <SolutionConcept />
            <InformationArchitecture />
            <UserFlow />
            <Wireframes />
            <DesignSystem />
            <HighFidelity />
            <Usability />
            <Results />
            <Reflection />
            <Links itens={links} />

        </div>
    );
}