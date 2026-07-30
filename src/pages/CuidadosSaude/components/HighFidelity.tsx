import {
  ArrowRight,
  MonitorSmartphone,
  Smartphone,
  Sparkles,
} from "lucide-react";
import Topic from "../../../components/Topic";
import { CoresEnum } from "../../../enums/Cores.Enum";

const screens = [
  {
    title: "Dashboard",
    image: "/images/senior-health/dashboard.png",
  },
  {
    title: "Medicamentos",
    image: "/images/senior-health/medications.png",
  },
  {
    title: "Pressão Arterial",
    image: "/images/senior-health/blood-pressure.png",
  },
  {
    title: "Glicemia",
    image: "/images/senior-health/glucose.png",
  },
  {
    title: "Plano Alimentar",
    image: "/images/senior-health/diet.png",
  },
  {
    title: "Exercícios",
    image: "/images/senior-health/exercises.png",
  },
  {
    title: "Contato de Emergência",
    image: "/images/senior-health/emergency.png",
  },
  {
    title: "Perfil",
    image: "/images/senior-health/profile.png",
  },
];

const principles = [
  "Interface minimalista com foco na leitura.",
  "Hierarquia visual baseada nas tarefas diárias.",
  "Botões grandes e fáceis de tocar.",
  "Poucas ações por tela para reduzir a carga cognitiva.",
  "Cores suaves com alto contraste.",
  "Ícones sempre acompanhados de texto.",
];

export default function HighFidelity() {
  return (
    <section
      id="high-fidelity"
      className="bg-white py-28"
    >
      <div className="mx-auto container px-6">
        {/* Header */}
        <Topic
          topico={{ icone: Sparkles, nome: "High Fidelity Prototype", cor: CoresEnum.EMERALD }}
          titulo="Transformando estratégia em uma experiência real"
          descricao="Após validar a arquitetura da informação, os fluxos e os wireframes,
            foi desenvolvido um protótipo de alta fidelidade simulando a
            experiência completa do aplicativo. O foco foi construir uma
            interface clara, acessível e preparada para usuários idosos."
        />

        {/* Hero Image */}

        <div className="mt-20 overflow-hidden rounded-[40px] border border-slate-200 bg-slate-50 p-8 shadow-xl">
          <img
            src="/images/senior-health/high-fidelity-overview.png"
            alt="Protótipo de alta fidelidade"
            className="w-full rounded-3xl"
          />
        </div>

        {/* Screens */}

        <div className="mt-24">
          <div className="flex items-center gap-3">
            <Smartphone className="text-emerald-600" />

            <h3 className="text-3xl font-bold text-slate-900">
              Principais telas
            </h3>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {screens.map((screen) => (
              <article
                key={screen.title}
                className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="aspect-[9/18] bg-slate-100 p-4">
                  <img
                    src={screen.image}
                    alt={screen.title}
                    className="h-full w-full rounded-2xl object-cover"
                  />
                </div>

                <div className="border-t border-slate-100 p-5">
                  <h4 className="font-semibold text-slate-900">
                    {screen.title}
                  </h4>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Design Decisions */}

        <div className="mt-24 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="rounded-[36px] bg-gradient-to-br from-emerald-600 to-sky-600 p-10 text-white shadow-xl">
            <MonitorSmartphone size={42} />

            <h3 className="mt-8 text-3xl font-bold">
              Decisões de interface
            </h3>

            <p className="mt-6 text-lg leading-8 text-emerald-50">
              Cada componente foi refinado pensando nas limitações visuais,
              motoras e cognitivas identificadas durante a pesquisa com idosos.
              O objetivo era criar uma experiência acolhedora, previsível e de
              fácil aprendizado.
            </p>
          </div>

          <div className="rounded-[36px] border border-slate-200 bg-slate-50 p-10">
            <div className="space-y-6">
              {principles.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4"
                >
                  <ArrowRight
                    size={18}
                    className="mt-1 text-emerald-600"
                  />

                  <p className="leading-7 text-slate-700">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Closing */}

        <div className="mt-24 rounded-[40px] bg-slate-900 p-12 text-white">
          <h3 className="text-3xl font-bold">
            Resultado
          </h3>

          <p className="mt-8 max-w-5xl text-xl leading-9 text-slate-300">
            O protótipo final reúne todos os aprendizados obtidos durante a
            pesquisa, transformando uma rotina fragmentada de cuidados em uma
            experiência simples e integrada. A interface prioriza autonomia,
            acessibilidade e confiança, permitindo que o usuário acompanhe sua
            saúde de forma prática e segura.
          </p>
        </div>
      </div>
    </section>
  );
}