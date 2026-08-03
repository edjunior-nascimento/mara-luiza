import Conclusion from "./components/Conclusion";
import Header from "../../components/Header";
import HighFidelity from "./components/HighFidelity";
import Ideation from "./components/Ideation";
import Persona from "./components/Persona";
import Problems from "./components/Problems";
import ProblemStatement from "./components/ProblemStatement";
import Research from "./components/Research";
import Sitemap from "./components/Sitemap";
import Usability from "./components/Usability";
import Hero from "../../components/Hero";
import { CalendarDays, Figma, FileText, Globe, Heart, LayoutDashboard, Smartphone, Users, Wrench } from "lucide-react";
import Links from "../../components/Links";


const links = [
  {
    title: "Estudo de Caso Completo",
    description: "Veja toda a documentação do projeto em PDF.",
    href: "../../data/estudo_caso_protecao_animal.pdf",
    icon: FileText,
    color: "bg-red-100 text-red-600",
  },
  {
    title: "Projeto no Figma",
    description: "Arquivo completo com todas as telas.",
    href: "https://www.figma.com/design/xWfCGj3Y1obGwbw9LTfTMX/website_ong",
    icon: Figma,
    color: "bg-violet-100 text-violet-600",
  },
  {
    title: "Protótipo Web",
    description: "Versão navegável do site.",
    href: "https://www.figma.com/proto/xWfCGj3Y1obGwbw9LTfTMX/website_ong?node-id=997-2021&t=j5PkZvveQIZ50DQs-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=997%3A2021",
    icon: Globe,
    color: "bg-sky-100 text-sky-600",
  },
  {
    title: "Protótipo Mobile",
    description: "Fluxo mobile do usuário.",
    href: "https://www.figma.com/proto/xWfCGj3Y1obGwbw9LTfTMX/website_ong?node-id=1098-2744&t=j5PkZvveQIZ50DQs-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1012%3A2329",
    icon: Smartphone,
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    title: "Dashboard Web",
    description: "Painel administrativo da ONG.",
    href: "https://www.figma.com/proto/xWfCGj3Y1obGwbw9LTfTMX/website_ong?node-id=1082-3467&t=j5PkZvveQIZ50DQs-0&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1071%3A2611",
    icon: LayoutDashboard,
    color: "bg-orange-100 text-orange-600",
  },
  {
    title: "Dashboard Mobile",
    description: "Versão mobile do painel administrativo.",
    href: "https://www.figma.com/proto/xWfCGj3Y1obGwbw9LTfTMX/website_ong?node-id=1201-3049&t=j5PkZvveQIZ50DQs-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1012%3A2329",
    icon: Smartphone,
    color: "bg-pink-100 text-pink-600",
  },
];

export default function App() {
  //scroll to top on page load
  window.scrollTo(0, 0);
  return (
    <div className="min-h-screen">
      <Header />
      <Hero
        estudo={
          { icone: Heart, nome: "Estudo de Caso UX/UI" }}
        imagem="/images/capa-protecao-animal.png"
        titulo="Proteção Animal"
        descricao="Desenvolvimento de uma plataforma para facilitar adoções, arrecadações e gestão da ONG através de uma experiência mais intuitiva, transparente e centrada no usuário."
        tags={["UX Strategy", "UX Research", "Design Thinking", "UX/UI Design", "Prototipação"]}
      />
      <Research />
      <Problems />
      <ProblemStatement />
      <Persona />
      <Ideation />
      <Sitemap />
      <HighFidelity />
      <Usability />
      <Conclusion />
      <Links itens={links} />
    </div>
  );
}