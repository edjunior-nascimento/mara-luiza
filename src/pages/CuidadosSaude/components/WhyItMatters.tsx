import {
  CalendarClock,
  HeartHandshake,
  Pill,
  ShieldAlert,
  Smartphone,
  UserRound,
} from "lucide-react";
import Topic from "../../../components/Topic";
import { CoresEnum } from "../../../enums/Cores.Enum";

const routine = [
  {
    time: "07:00",
    title: "Início do dia",
    description:
      "Dona Maria mede a pressão arterial e a glicemia antes do café da manhã.",
    icon: HeartHandshake,
  },
  {
    time: "08:00",
    title: "Medicamentos",
    description:
      "Precisa lembrar quais remédios tomar, em qual quantidade e horário.",
    icon: Pill,
  },
  {
    time: "14:00",
    title: "Consultas e exames",
    description:
      "A filha ajuda a organizar consultas, exames e receitas médicas.",
    icon: CalendarClock,
  },
  {
    time: "20:00",
    title: "Fim do dia",
    description:
      "Nem sempre consegue registrar as medições ou lembrar se tomou todos os medicamentos.",
    icon: ShieldAlert,
  },
];

export default function WhyItMatters() {
  return (
    <section
      id="why-it-matters"
      className="bg-slate-50 py-28"
    >
      <div className="mx-auto container px-6">
        {/* Header */}
        <Topic
          topico={{ icone: UserRound, nome: "Por que isso importa?", cor: CoresEnum.SKY }}
          titulo="Mais do que um aplicativo, uma rotina de cuidados."
          descricao="Antes de pensar em telas e funcionalidades, era necessário entender
            como a saúde faz parte do cotidiano de uma pessoa idosa. Cada
            consulta, medicamento e exame representa uma responsabilidade que,
            quando mal organizada, pode comprometer a qualidade de vida."
        />    

        {/* Story */}

        <div className="mt-24 rounded-[40px] bg-white p-12 shadow-lg">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
              Uma história inspirada em situações reais
            </span>

            <h3 className="mt-4 text-3xl font-bold text-slate-900">
              Um dia na rotina da Dona Maria
            </h3>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Dona Maria tem 72 anos, convive com diabetes e hipertensão e mora
              sozinha. Todos os dias ela precisa medir seus indicadores de
              saúde, tomar diferentes medicamentos, seguir uma alimentação
              específica e lembrar das consultas médicas. Quando esquece alguma
              dessas etapas, seus filhos precisam ajudá-la a reorganizar toda a
              rotina.
            </p>
          </div>

          {/* Timeline */}

          <div className="mt-16 space-y-8">
            {routine.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.time}
                  className="flex gap-6"
                >
                  <div className="flex flex-col items-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
                      <Icon size={26} />
                    </div>

                    <div className="mt-2 h-full w-px bg-slate-200" />
                  </div>

                  <div className="pb-8">
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-600">
                      {item.time}
                    </span>

                    <h4 className="mt-4 text-2xl font-bold text-slate-900">
                      {item.title}
                    </h4>

                    <p className="mt-4 max-w-2xl leading-8 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Insight */}

        <div className="mt-24 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          <div className="rounded-[36px] bg-gradient-to-br from-emerald-600 to-sky-600 p-12 text-white shadow-2xl">
            <h3 className="text-3xl font-bold">
              O verdadeiro problema não era a falta de informação.
            </h3>

            <p className="mt-8 text-xl leading-9 text-emerald-50">
              As informações já existiam, mas estavam espalhadas entre papéis,
              receitas médicas, aplicativos diferentes e lembretes improvisados.
              Isso aumentava a carga mental do idoso e dificultava o
              acompanhamento por familiares e profissionais da saúde.
            </p>
          </div>

          <div className="rounded-[36px] border border-slate-200 bg-white p-10 shadow-sm">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
              <Smartphone size={30} />
            </div>

            <h3 className="mt-8 text-2xl font-bold text-slate-900">
              Oportunidade
            </h3>

            <p className="mt-5 leading-8 text-slate-600">
              Centralizar toda a rotina de cuidados em uma única plataforma,
              reduzindo o esforço necessário para acompanhar a saúde e
              promovendo mais autonomia para idosos e tranquilidade para seus
              familiares.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}