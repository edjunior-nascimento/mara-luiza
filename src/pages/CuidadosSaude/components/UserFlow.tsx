import {
  Activity,
  ArrowDown,
  ArrowRight,
  Bell,
  HeartPulse,
  Home,
  LayoutDashboard,
  Pill,
  ShieldAlert,
  Utensils,
} from "lucide-react";
import Topic from "../../../components/Topic";
import { CoresEnum } from "../../../enums/Cores.Enum";

const flow = [
  {
    icon: Home,
    title: "Tela Inicial",
    color: "bg-emerald-100 text-emerald-600",
    description:
      "Resumo da saúde, lembretes do dia e acesso rápido às principais funcionalidades.",
  },
  {
    icon: Bell,
    title: "Lembrete",
    color: "bg-amber-100 text-amber-600",
    description:
      "O usuário recebe uma notificação no horário programado.",
  },
  {
    icon: Pill,
    title: "Medicamento",
    color: "bg-sky-100 text-sky-600",
    description:
      "Visualiza foto, dosagem e confirma que tomou o medicamento.",
  },
  {
    icon: HeartPulse,
    title: "Registrar Saúde",
    color: "bg-red-100 text-red-600",
    description:
      "Registra pressão arterial ou glicemia com poucos toques.",
  },
  {
    icon: Activity,
    title: "Acompanhar Histórico",
    color: "bg-violet-100 text-violet-600",
    description:
      "Consulta gráficos simples com a evolução dos indicadores.",
  },
  {
    icon: Utensils,
    title: "Plano Diário",
    color: "bg-green-100 text-green-600",
    description:
      "Consulta dieta, exercícios e demais recomendações dos profissionais.",
  },
  {
    icon: ShieldAlert,
    title: "Emergência",
    color: "bg-rose-100 text-rose-600",
    description:
      "Caso necessário, acessa rapidamente os contatos de emergência.",
  },
];

export default function UserFlow() {
  return (
    <section
      id="user-flow"
      className="bg-slate-50 py-28 px-20"
    >
      <div className="mx-auto container px-6">
        {/* Header */}
        <Topic
          topico={{ icone: ArrowRight, nome: "User Flow", cor: CoresEnum.INDIGO }}
          titulo="Fluxo principal da experiência"
          descricao="O fluxo foi desenhado para acompanhar a rotina natural do usuário.
            Em vez de navegar por diversos menus, o aplicativo conduz cada etapa
            da jornada de forma simples, previsível e intuitiva."
        />

        {/* Fluxo */}

        <div className="mt-20 rounded-[40px] border border-slate-200 bg-white p-10 shadow-lg">
          <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between">
            <img src="images/senior-health/userflow.png" alt="" />
          </div>
        </div>
        
        {/* Insight */}

        <div className="mt-24 rounded-[40px] bg-gradient-to-r from-indigo-600 to-sky-600 p-12 text-white shadow-2xl">
          <h3 className="text-3xl font-bold">
            Princípio utilizado
          </h3>

          <p className="mt-8 max-w-5xl text-xl leading-9 text-indigo-50">
            Cada etapa do fluxo foi construída para responder a uma necessidade
            real da rotina do usuário. O aplicativo deixa de funcionar como um
            conjunto de funcionalidades e passa a atuar como um guia diário,
            conduzindo a pessoa idosa durante todo o cuidado com sua saúde.
          </p>
        </div>
      </div>
    </section>
  );
}