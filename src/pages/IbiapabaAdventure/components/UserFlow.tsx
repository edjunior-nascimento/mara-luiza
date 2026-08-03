import {
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  MapPinned,
  Search,
  Smartphone,
  Ticket,
  UserRound,
} from "lucide-react";
import Topic from "../../../components/Topic";
import { CoresEnum } from "../../../enums/Cores.Enum";

const flow = [
  {
    title: "Descoberta",
    icon: Search,
    color: "bg-sky-100 text-sky-700",
    steps: [
      "Acessa a plataforma",
      "Pesquisa um destino",
      "Explora atrações",
    ],
  },
  {
    title: "Planejamento",
    icon: MapPinned,
    color: "bg-emerald-100 text-emerald-700",
    steps: [
      "Aplica filtros",
      "Visualiza detalhes",
      "Escolhe roteiro",
    ],
  },
  {
    title: "Reserva",
    icon: Ticket,
    color: "bg-amber-100 text-amber-700",
    steps: [
      "Seleciona data",
      "Escolhe guia",
      "Confirma reserva",
    ],
  },
  {
    title: "Experiência",
    icon: Smartphone,
    color: "bg-violet-100 text-violet-700",
    steps: [
      "Consulta mapa",
      "Segue a trilha",
      "Salva favoritos",
    ],
  },
  {
    title: "Pós viagem",
    icon: UserRound,
    color: "bg-rose-100 text-rose-700",
    steps: [
      "Avalia passeio",
      "Compartilha fotos",
      "Planeja nova aventura",
    ],
  },
];

export default function UserFlow() {
  return (
    <section
      id="user-flow"
      className="bg-white py-28 px-20"
    >
      <div className="mx-auto container px-6">
        {/* Header */}
        <Topic
          topico={{ icone: ArrowRight, nome: "User Flow", cor: CoresEnum.SKY }}
          titulo="Fluxo principal do usuário"
          descricao="Após a etapa de ideação, foi definido o fluxo principal da aplicação.
            O objetivo foi reduzir etapas desnecessárias e permitir que o
            usuário encontrasse e reservasse uma experiência com poucos cliques."
        />

        {/* Fluxo */}

        <div className="mt-24 hidden items-center justify-between gap-6 xl:flex">
          {flow.map((item, index) => {
            const Icon = item.icon;

            return (
              <>
                <div
                  key={item.title}
                  className="flex w-full flex-col items-center"
                >
                  {/* Nó */}

                  <div
                    className={`flex h-20 w-20 items-center justify-center rounded-3xl shadow-lg ${item.color}`}
                  >
                    <Icon size={34} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <div className="mt-6 w-full rounded-3xl border border-slate-200 bg-slate-50 p-6">
                    <ul className="space-y-4">
                      {item.steps.map((step) => (
                        <li
                          key={step}
                          className="flex items-start gap-3 text-slate-600"
                        >
                          <CheckCircle2
                            size={18}
                            className="mt-1 text-emerald-500"
                          />

                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {index !== flow.length - 1 && (
                  <ArrowRight
                    className="shrink-0 text-slate-300"
                    size={38}
                  />
                )}
              </>
            );
          })}
        </div>

        {/* Mobile */}

        <div className="mt-20 space-y-8 xl:hidden">
          {flow.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex flex-col items-center"
              >
                <article className="w-full rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
                  <div className="flex items-center gap-5">
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl ${item.color}`}
                    >
                      <Icon size={28} />
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-slate-500">
                        Etapa {index + 1}
                      </p>
                    </div>
                  </div>

                  <ul className="mt-8 space-y-4">
                    {item.steps.map((step) => (
                      <li
                        key={step}
                        className="flex items-start gap-3 text-slate-600"
                      >
                        <CheckCircle2
                          size={18}
                          className="mt-1 text-emerald-500"
                        />

                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </article>

                {index !== flow.length - 1 && (
                  <ArrowDown
                    size={34}
                    className="my-6 text-slate-300"
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Insight */}

        <div className="mt-24 rounded-[36px] bg-gradient-to-r from-slate-900 to-slate-800 p-12 text-white shadow-2xl">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium">
                <Search size={16} />
                Objetivo do fluxo
              </span>

              <h3 className="mt-6 text-3xl font-bold">
                Encontrar uma experiência e concluir uma reserva em menos de
                cinco minutos.
              </h3>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                O fluxo foi desenhado para eliminar etapas desnecessárias,
                reduzir a troca de mensagens e tornar a experiência intuitiva,
                desde a descoberta do destino até a confirmação da reserva.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
              <Metric value="5" label="Etapas" />
              <Metric value="1" label="Fluxo Principal" />
              <Metric value="100%" label="Mobile First" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type MetricProps = {
  value: string;
  label: string;
};

function Metric({ value, label }: MetricProps) {
  return (
    <div className="rounded-3xl bg-white/10 px-8 py-6 text-center backdrop-blur">
      <h4 className="text-4xl font-bold">{value}</h4>

      <p className="mt-2 text-sm uppercase tracking-widest text-slate-300">
        {label}
      </p>
    </div>
  );
}