import {
  Activity,
  CalendarCheck,
  ChevronDown,
  HeartPulse,
  Pill,
  ShieldAlert,
  Sun,
} from "lucide-react";
import Topic from "../../../components/Topic";
import { CoresEnum } from "../../../enums/Cores.Enum";

const journey = [
  {
    time: "07:00",
    title: "Acordar",
    icon: Sun,
    emotion: "😐",
    pain: "Não lembra quais medições precisa fazer primeiro.",
    opportunity:
      "Exibir um resumo da rotina diária logo na tela inicial.",
  },
  {
    time: "07:15",
    title: "Registrar indicadores",
    icon: HeartPulse,
    emotion: "🙂",
    pain: "Anota pressão e glicemia em um caderno que pode ser perdido.",
    opportunity:
      "Registrar indicadores automaticamente em um histórico digital.",
  },
  {
    time: "08:00",
    title: "Medicamentos",
    icon: Pill,
    emotion: "😟",
    pain: "Esquece horários ou confunde medicamentos semelhantes.",
    opportunity:
      "Lembretes com foto do medicamento, quantidade e confirmação da tomada.",
  },
  {
    time: "12:30",
    title: "Alimentação e exercícios",
    icon: Activity,
    emotion: "🙂",
    pain: "Não consegue lembrar todas as recomendações médicas.",
    opportunity:
      "Plano alimentar e exercícios organizados em uma única tela.",
  },
  {
    time: "15:00",
    title: "Consultas",
    icon: CalendarCheck,
    emotion: "😕",
    pain: "Esquece datas e precisa ligar para familiares.",
    opportunity:
      "Agenda integrada com lembretes e histórico de consultas.",
  },
  {
    time: "Qualquer momento",
    title: "Emergência",
    icon: ShieldAlert,
    emotion: "😨",
    pain: "Demora para localizar contatos importantes.",
    opportunity:
      "Botão de emergência com acesso imediato aos familiares e serviços de saúde.",
  },
];

export default function Journey() {
  return (
    <section
      id="journey"
      className="bg-slate-50 py-28 lg:p-20"
    >
      <div className="mx-auto container px-6">
        {/* Header */}
        <Topic
          topico={{ icone: Activity, nome: "User Journey", cor: CoresEnum.SKY }}
          titulo="A jornada diária de quem precisa cuidar da própria saúde"
          descricao="A partir das entrevistas foi possível mapear toda a rotina de uma
            pessoa idosa. Cada etapa revelou dificuldades específicas e
            oportunidades para simplificar a experiência através do aplicativo."
        />

        {/* Timeline */}

        <div className="relative mt-24">
          <div className="absolute left-8 top-0 hidden h-full w-1 rounded-full bg-slate-200 lg:block" />

          <div className="space-y-10">
            {journey.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className="relative grid gap-8 rounded-[36px] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl lg:grid-cols-[110px_1fr]"
                >
                  {/* Time */}

                  <div className="relative flex flex-col items-center">
                    <div className="z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-100 text-sky-600">
                      <Icon size={28} />
                    </div>

                    {index !== journey.length - 1 && (
                      <ChevronDown className="mt-6 text-slate-300 lg:hidden" />
                    )}

                    <span className="mt-5 rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
                      {step.time}
                    </span>
                  </div>

                  {/* Content */}

                  <div>
                    <div className="flex flex-wrap items-center gap-4">
                      <h3 className="text-2xl font-bold text-slate-900">
                        {step.title}
                      </h3>

                      <span className="text-3xl">
                        {step.emotion}
                      </span>
                    </div>

                    <div className="mt-8 grid gap-6 lg:grid-cols-2">
                      <div className="rounded-2xl bg-red-50 p-6">
                        <p className="text-sm font-semibold uppercase tracking-wide text-red-600">
                          Dor encontrada
                        </p>

                        <p className="mt-3 leading-8 text-slate-700">
                          {step.pain}
                        </p>
                      </div>

                      <div className="rounded-2xl bg-emerald-50 p-6">
                        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
                          Oportunidade
                        </p>

                        <p className="mt-3 leading-8 text-slate-700">
                          {step.opportunity}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Insight */}

        <div className="mt-24 rounded-[40px] bg-gradient-to-r from-sky-600 to-emerald-600 p-12 text-white shadow-2xl">
          <h3 className="text-3xl font-bold">
            Principal aprendizado da jornada
          </h3>

          <p className="mt-8 max-w-4xl text-xl leading-9 text-sky-50">
            A rotina de cuidados é composta por pequenas tarefas distribuídas ao
            longo do dia. Individualmente parecem simples, mas juntas aumentam a
            carga cognitiva do usuário. O aplicativo deveria funcionar como um
            guia diário, organizando essas atividades de maneira intuitiva,
            reduzindo esquecimentos e promovendo mais autonomia.
          </p>
        </div>
      </div>
    </section>
  );
}