import {
  Brain,
  CheckCircle2,
  Lightbulb,
  PenTool,
  Sparkles,
  Target,
} from "lucide-react";
import Topic from "../../../components/Topic";
import { CoresEnum } from "../../../enums/Cores.Enum";

const stages = [
  {
    icon: Brain,
    title: "Brainstorm",
    color: "bg-sky-100 text-sky-700",
    description:
      "Sessão de ideação para gerar o maior número possível de soluções sem restrições.",

    highlights: [
      "Mais de 40 ideias levantadas",
      "Discussão colaborativa",
      "Sem julgamentos iniciais",
    ],
  },
  {
    icon: PenTool,
    title: "Crazy 8's",
    color: "bg-violet-100 text-violet-700",
    description:
      "Exploração rápida de diferentes abordagens para a experiência do usuário.",

    highlights: [
      "8 alternativas por funcionalidade",
      "Layouts variados",
      "Fluxos simplificados",
    ],
  },
  {
    icon: Target,
    title: "Priorização",
    color: "bg-amber-100 text-amber-700",
    description:
      "As ideias foram organizadas considerando impacto para o usuário e esforço de implementação.",

    highlights: [
      "Impacto × Esforço",
      "Valor para o usuário",
      "Viabilidade técnica",
    ],
  },
];

const selectedIdeas = [
  {
    title: "Busca inteligente",
    description:
      "Permitir encontrar trilhas, hospedagens e guias utilizando filtros por localização, dificuldade e categoria.",
  },
  {
    title: "Reserva integrada",
    description:
      "Centralizar reservas e disponibilidade em um único fluxo, reduzindo dependência do WhatsApp.",
  },
  {
    title: "Perfis de guias",
    description:
      "Exibir avaliações, experiência, fotos e disponibilidade dos guias locais.",
  },
  {
    title: "Favoritos",
    description:
      "Salvar passeios e criar um roteiro personalizado para futuras viagens.",
  },
  {
    title: "Mapa interativo",
    description:
      "Visualizar atrações próximas e planejar o deslocamento durante a viagem.",
  },
  {
    title: "Conteúdo offline",
    description:
      "Disponibilizar informações essenciais mesmo em regiões sem internet.",
  },
];

export default function Ideation() {
  return (
    <section
      id="ideation"
      className="bg-slate-50 py-28 lg:p-20"
    >
      <div className="mx-auto container px-6">
        {/* Header */}
        <Topic
          topico={{ icone: Lightbulb, nome: "Ideação", cor: CoresEnum.AMBER }}
          titulo="Explorando possíveis soluções"
          descricao="Com base nas perguntas do How Might We  , iniciamos
            uma etapa de exploração para gerar ideias, validar possibilidades e
            selecionar as soluções com maior potencial para o projeto."
        />

        {/* Processo */}

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {stages.map((stage) => {
            const Icon = stage.icon;

            return (
              <article
                key={stage.title}
                className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl ${stage.color}`}
                >
                  <Icon size={30} />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-slate-900">
                  {stage.title}
                </h3>

                <p className="mt-5 leading-7 text-slate-600">
                  {stage.description}
                </p>

                <ul className="mt-8 space-y-4">
                  {stage.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2
                        size={18}
                        className="mt-1 text-emerald-500"
                      />

                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        {/* Ideias Selecionadas */}

        <div className="mt-24">
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
              <Sparkles size={26} />
            </div>

            <div>
              <h3 className="text-3xl font-bold text-slate-900">
                Ideias selecionadas
              </h3>

              <p className="mt-2 text-slate-600">
                Funcionalidades priorizadas para o MVP.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {selectedIdeas.map((idea) => (
              <article
                key={idea.title}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-sky-300 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
                  <Lightbulb size={22} />
                </div>

                <h4 className="mt-6 text-xl font-semibold text-slate-900">
                  {idea.title}
                </h4>

                <p className="mt-4 leading-7 text-slate-600">
                  {idea.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Destaque */}

        <div className="mt-24 rounded-[36px] bg-gradient-to-r from-sky-600 to-cyan-600 p-12 text-white shadow-2xl">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
                <Brain size={16} />
                Resultado da Ideação
              </span>

              <h3 className="mt-6 text-3xl font-bold">
                Das dezenas de ideias levantadas, apenas as que entregavam maior
                valor ao usuário e menor complexidade foram priorizadas para a
                primeira versão do produto.
              </h3>

              <p className="mt-6 text-lg leading-8 text-sky-100">
                Esse processo permitiu manter o foco em funcionalidades
                essenciais, evitando desperdício de tempo e aumentando as
                chances de validação do MVP.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <StatCard value="40+" label="Ideias" />
              <StatCard value="6" label="Selecionadas" />
              <StatCard value="3" label="Workshops" />
              <StatCard value="1" label="MVP" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type StatCardProps = {
  value: string;
  label: string;
};

function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="rounded-3xl bg-white/10 p-6 text-center backdrop-blur">
      <h4 className="text-4xl font-bold">{value}</h4>

      <p className="mt-2 text-sm uppercase tracking-widest text-sky-100">
        {label}
      </p>
    </div>
  );
}