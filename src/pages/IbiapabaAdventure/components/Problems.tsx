import {
  AlertTriangle,
  BadgeAlert,
  Clock3,
  Filter,
  MessageCircleOff,
  Navigation,
} from "lucide-react";
import Topic from "../../../components/Topic";
import { CoresEnum } from "../../../enums/Cores.Enum";

const problems = [
  {
    icon: MessageCircleOff,
    title: "Reservas descentralizadas",
    severity: "Alta",
    color: "bg-red-100 text-red-600",
    description:
      "A maioria das reservas acontece por WhatsApp, gerando demora nas respostas e falta de controle.",

    impact:
      "Usuários abandonam a reserva por falta de retorno ou insegurança.",

    solution:
      "Criar um fluxo de reserva digital com confirmação automática.",
  },
  {
    icon: Navigation,
    title: "Informações dispersas",
    severity: "Alta",
    color: "bg-orange-100 text-orange-600",
    description:
      "As informações sobre trilhas, campings e atrativos estão espalhadas em diferentes redes sociais.",

    impact:
      "O turista perde tempo procurando informações e pode desistir da viagem.",

    solution:
      "Centralizar todo o conteúdo em uma única plataforma.",
  },
  {
    icon: Clock3,
    title: "Planejamento demorado",
    severity: "Média",
    color: "bg-amber-100 text-amber-700",
    description:
      "Planejar um roteiro exige consultar diversos sites e entrar em contato com vários prestadores.",

    impact:
      "Maior esforço para organizar a viagem.",

    solution:
      "Permitir comparar destinos, roteiros e disponibilidade em poucos cliques.",
  },
  {
    icon: Filter,
    title: "Pouca personalização",
    severity: "Média",
    color: "bg-sky-100 text-sky-700",
    description:
      "Não existem filtros eficientes para encontrar passeios conforme perfil, dificuldade ou duração.",

    impact:
      "O usuário encontra opções pouco relevantes.",

    solution:
      "Adicionar filtros inteligentes e recomendações personalizadas.",
  },
];

const summary = [
  {
    label: "Problemas encontrados",
    value: "12",
  },
  {
    label: "Prioridade alta",
    value: "4",
  },
  {
    label: "Prioridade média",
    value: "5",
  },
  {
    label: "Prioridade baixa",
    value: "3",
  },
];

export default function Problems() {
  return (
    <section
      id="problems"
      className="bg-slate-50 py-28"
    >
      <div className="mx-auto container px-6">
        {/* Header */}
        <Topic
          topico={{ icone: BadgeAlert, nome: "Problemas Identificados", cor: CoresEnum.RED }}
          titulo="Principais dores encontradas"
          descricao="A pesquisa revelou diversos obstáculos durante a jornada do usuário.
            Estes problemas foram priorizados conforme frequência, impacto e
            oportunidade de melhoria."
        />

        {/* Resumo */}

        <div className="mt-16 grid gap-5 md:grid-cols-4">
          {summary.map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="text-sm uppercase tracking-wider text-slate-500">
                {item.label}
              </p>

              <h3 className="mt-3 text-4xl font-bold text-slate-900">
                {item.value}
              </h3>
            </div>
          ))}
        </div>

        {/* Problemas */}

        <div className="mt-20 space-y-8">
          {problems.map((problem) => {
            const Icon = problem.icon;

            return (
              <article
                key={problem.title}
                className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex flex-col gap-8 lg:flex-row">
                  {/* Esquerda */}

                  <div className="lg:w-72">
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl ${problem.color}`}
                    >
                      <Icon size={30} />
                    </div>

                    <h3 className="mt-6 text-2xl font-bold text-slate-900">
                      {problem.title}
                    </h3>

                    <span className="mt-4 inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                      Prioridade {problem.severity}
                    </span>
                  </div>

                  {/* Conteúdo */}

                  <div className="grid flex-1 gap-6 lg:grid-cols-3">
                    <ProblemCard
                      title="Problema"
                      color="bg-red-50"
                    >
                      {problem.description}
                    </ProblemCard>

                    <ProblemCard
                      title="Impacto"
                      color="bg-amber-50"
                    >
                      {problem.impact}
                    </ProblemCard>

                    <ProblemCard
                      title="Oportunidade"
                      color="bg-emerald-50"
                    >
                      {problem.solution}
                    </ProblemCard>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Insight */}

        <div className="mt-20 rounded-[32px] bg-slate-900 p-10 text-white shadow-2xl">
          <div className="flex items-start gap-5">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500/20 text-red-300">
              <AlertTriangle size={30} />
            </div>

            <div>
              <h3 className="text-2xl font-bold">
                Principal Insight
              </h3>

              <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-300">
                O maior desafio não era a falta de atrações na Serra da
                Ibiapaba, mas sim a dificuldade de encontrar informações
                confiáveis e concluir uma reserva de forma simples. A solução
                deveria reduzir o esforço do usuário e concentrar toda a jornada
                em uma única plataforma.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type ProblemCardProps = {
  title: string;
  color: string;
  children: React.ReactNode;
};

function ProblemCard({
  title,
  color,
  children,
}: ProblemCardProps) {
  return (
    <div className={`rounded-3xl p-6 ${color}`}>
      <h4 className="text-lg font-semibold text-slate-900">
        {title}
      </h4>

      <p className="mt-4 leading-7 text-slate-700">
        {children}
      </p>
    </div>
  );
}