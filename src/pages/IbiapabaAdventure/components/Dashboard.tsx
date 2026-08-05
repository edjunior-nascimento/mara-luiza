import {
  BarChart3,
  CheckCircle2,
  Component,
  FileText,
  Layers3,
  LayoutDashboard,
  MonitorSmartphone,
  Users,
} from "lucide-react";
import Topic from "../../../components/Topic";
import { CoresEnum } from "../../../enums/Cores.Enum";

const metrics = [
  {
    icon: Users,
    label: "Participantes",
    value: "109+",
    description: "Questionários e entrevistas realizadas",
    color: "bg-sky-100 text-sky-700",
  },
  {
    icon: FileText,
    label: "Personas",
    value: "2",
    description: "Perfis principais identificados",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    icon: Layers3,
    label: "Fluxos",
    value: "5",
    description: "Fluxos principais mapeados",
    color: "bg-amber-100 text-amber-700",
  },
  {
    icon: MonitorSmartphone,
    label: "Telas",
    value: "30+",
    description: "Protótipos de alta fidelidade",
    color: "bg-violet-100 text-violet-700",
  },
  {
    icon: Component,
    label: "Componentes",
    value: "50+",
    description: "Componentes reutilizáveis",
    color: "bg-pink-100 text-pink-700",
  },
  {
    icon: CheckCircle2,
    label: "Testes",
    value: "15",
    description: "Sessões de usabilidade",
    color: "bg-cyan-100 text-cyan-700",
  },
];

const highlights = [
  "Pesquisa quantitativa e qualitativa",
  "Arquitetura da Informação",
  "User Flow completo",
  "Wireframes de baixa fidelidade",
  "Design System escalável",
  "Protótipo navegável",
  "Testes de usabilidade",
  "Iterações após feedback",
];

export default function Dashboard() {
  return (
    <section
      id="dashboard"
      className="bg-slate-50 py-28 lg:p-20"
    >
      <div className="mx-auto container px-6">
        {/* Header */}

        <Topic
          topico={{ icone: LayoutDashboard, nome: "Dashboard", cor: CoresEnum.SKY }}
          titulo="Panorama do projeto"
          descricao="Um resumo dos principais indicadores do processo de UX, desde a
            pesquisa inicial até a validação da solução proposta."
        />

        {/* Métricas */}

        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {metrics.map((metric) => {
            const Icon = metric.icon;

            return (
              <article
                key={metric.label}
                className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl ${metric.color}`}
                >
                  <Icon size={30} />
                </div>

                <h3 className="mt-8 text-5xl font-bold text-slate-900">
                  {metric.value}
                </h3>

                <h4 className="mt-3 text-xl font-semibold text-slate-800">
                  {metric.label}
                </h4>

                <p className="mt-4 leading-7 text-slate-600">
                  {metric.description}
                </p>
              </article>
            );
          })}
        </div>

        {/* Destaque */}

        <div className="mt-24 grid gap-8 lg:grid-cols-[2fr_1fr]">
          <div className="rounded-[36px] bg-gradient-to-br from-slate-900 to-slate-800 p-12 text-white shadow-2xl">
            <div className="flex items-center gap-3">
              <BarChart3 />

              <h3 className="text-3xl font-bold">
                Visão geral do processo
              </h3>
            </div>

            <p className="mt-8 text-lg leading-8 text-slate-300">
              O projeto foi desenvolvido seguindo uma abordagem centrada no
              usuário, iniciando pela pesquisa, passando pela definição do
              problema, ideação, arquitetura da informação, prototipação e
              validação da experiência.
            </p>

            <div className="mt-10 h-4 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[100%] rounded-full bg-sky-400" />
            </div>

            <div className="mt-4 flex justify-between text-sm text-slate-400">
              <span>Pesquisa</span>
              <span>Entrega Final</span>
            </div>
          </div>

          <div className="rounded-[36px] border border-slate-200 bg-white p-10 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900">
              Entregáveis
            </h3>

            <div className="mt-8 space-y-5">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    size={18}
                    className="mt-1 text-emerald-500"
                  />

                  <span className="text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}

        <div className="mt-24 rounded-[36px] border border-slate-200 bg-white p-12 shadow-sm">
          <div className="grid gap-10 text-center md:grid-cols-4">
            <div>
              <h3 className="text-5xl font-bold text-sky-600">
                4
              </h3>

              <p className="mt-3 uppercase tracking-wider text-slate-500">
                Semanas
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-emerald-600">
                109+
              </h3>

              <p className="mt-3 uppercase tracking-wider text-slate-500">
                Usuários
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-violet-600">
                30+
              </h3>

              <p className="mt-3 uppercase tracking-wider text-slate-500">
                Telas
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-amber-500">
                15
              </h3>

              <p className="mt-3 uppercase tracking-wider text-slate-500">
                Testes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}