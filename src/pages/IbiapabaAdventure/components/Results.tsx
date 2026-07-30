import {
  ArrowUpRight,
  BadgeCheck,
  CalendarCheck,
  CheckCircle2,
  Clock3,
  HeartHandshake,
  Mountain,
  Users,
} from "lucide-react";
import Topic from "../../../components/Topic";
import { CoresEnum } from "../../../enums/Cores.Enum";

const metrics = [
  {
    icon: Users,
    value: "109+",
    label: "Usuários pesquisados",
    color: "bg-sky-100 text-sky-700",
  },
  {
    icon: Clock3,
    value: "-60%",
    label: "Tempo para planejar roteiro",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    icon: CalendarCheck,
    value: "+92%",
    label: "Conclusão das tarefas",
    color: "bg-amber-100 text-amber-700",
  },
  {
    icon: HeartHandshake,
    value: "4.8/5",
    label: "Satisfação dos usuários",
    color: "bg-violet-100 text-violet-700",
  },
];

const benefits = [
  {
    title: "Para turistas",
    items: [
      "Descoberta rápida de atrativos",
      "Planejamento em um único lugar",
      "Reserva simplificada",
    ],
  },
  {
    title: "Para guias",
    items: [
      "Maior visibilidade",
      "Centralização dos agendamentos",
      "Contato facilitado",
    ],
  },
  {
    title: "Para campings",
    items: [
      "Divulgação dos espaços",
      "Mais reservas",
      "Gestão organizada",
    ],
  },
];

const achievements = [
  "Fluxo de navegação simplificado.",
  "Arquitetura da informação reorganizada.",
  "Design System reutilizável.",
  "Interface Mobile First.",
  "Maior consistência visual.",
  "Experiência validada com usuários.",
];

export default function Results() {
  return (
    <section
      id="results"
      className="bg-white py-28"
    >
      <div className="mx-auto container px-6">
        {/* Header */}
      <Topic 
        topico={{icone: BadgeCheck, nome: "Resultados", cor: CoresEnum.EMERALD}}
        titulo="Impacto da solução"
        descricao="Após todo o processo de pesquisa, ideação, prototipação e testes,
            foi possível entregar uma experiência mais intuitiva para turistas,
            guias locais e proprietários de campings, centralizando informações
            que antes estavam dispersas em diferentes canais."
      />

        {/* Metrics */}

        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric) => {
            const Icon = metric.icon;

            return (
              <article
                key={metric.label}
                className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl ${metric.color}`}
                >
                  <Icon size={30} />
                </div>

                <h3 className="mt-8 text-5xl font-bold text-slate-900">
                  {metric.value}
                </h3>

                <p className="mt-3 text-lg text-slate-600">
                  {metric.label}
                </p>
              </article>
            );
          })}
        </div>

        {/* Benefits */}

        <div className="mt-24">
          <h3 className="text-3xl font-bold text-slate-900">
            Benefícios gerados
          </h3>

          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="rounded-[32px] border border-slate-200 bg-slate-50 p-8"
              >
                <h4 className="text-2xl font-bold text-slate-900">
                  {benefit.title}
                </h4>

                <div className="mt-8 space-y-5">
                  {benefit.items.map((item) => (
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
              </article>
            ))}
          </div>
        </div>

        {/* Achievements */}

        <div className="mt-24 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          <div className="rounded-[36px] bg-gradient-to-br from-slate-900 to-slate-800 p-12 text-white shadow-2xl">
            <div className="flex items-center gap-3">
              <Mountain />

              <h3 className="text-3xl font-bold">
                Objetivos alcançados
              </h3>
            </div>

            <div className="mt-10 space-y-5">
              {achievements.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4"
                >
                  <ArrowUpRight className="text-sky-400" />

                  <span className="text-lg text-slate-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[36px] border border-slate-200 bg-white p-10 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900">
              Resumo
            </h3>

            <p className="mt-8 leading-8 text-slate-600">
              O Ibiapaba Adventure conseguiu transformar um processo
              descentralizado em uma experiência digital organizada,
              aproximando turistas dos atrativos da Serra da Ibiapaba e
              facilitando a comunicação entre todos os envolvidos.
            </p>

            <div className="mt-10 rounded-2xl bg-emerald-50 p-6">
              <p className="font-semibold text-emerald-700">
                ✓ Fluxo validado com usuários
              </p>

              <p className="mt-3 text-emerald-600">
                O projeto demonstrou potencial para reduzir atritos na jornada e
                incentivar o turismo regional por meio de uma plataforma única.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}