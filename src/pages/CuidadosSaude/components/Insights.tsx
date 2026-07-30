import {
  AlertCircle,
  HeartHandshake,
  Lightbulb,
  Pill,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import Topic from "../../../components/Topic";
import { CoresEnum } from "../../../enums/Cores.Enum";

const insights = [
  {
    icon: Pill,
    title: "Medicamentos são a maior preocupação",
    description:
      "Esquecer horários, confundir dosagens e administrar diversos medicamentos ao longo do dia foram as dificuldades mais recorrentes entre os participantes.",
  },
  {
    icon: Smartphone,
    title: "Informações estão espalhadas",
    description:
      "Receitas, exames, consultas e registros de saúde ficam distribuídos entre papéis, aplicativos diferentes e conversas no WhatsApp.",
  },
  {
    icon: HeartHandshake,
    title: "Família faz parte da jornada",
    description:
      "Filhos e cuidadores desempenham um papel fundamental no acompanhamento da rotina, principalmente quando o idoso possui doenças crônicas.",
  },
  {
    icon: ShieldCheck,
    title: "Simplicidade gera confiança",
    description:
      "Interfaces limpas, linguagem clara e poucos passos aumentam a sensação de segurança e reduzem o receio de utilizar tecnologia.",
  },
];

const opportunities = [
  "Centralizar todas as informações de saúde em um único aplicativo.",
  "Automatizar lembretes de medicamentos e consultas.",
  "Facilitar o compartilhamento de informações com familiares e profissionais.",
  "Reduzir a quantidade de informações exibidas em cada tela.",
  "Projetar uma interface baseada em princípios de acessibilidade.",
];

export default function Insights() {
  return (
    <section
      id="insights"
      className="bg-white py-28"
    >
      <div className="mx-auto container px-6">
        {/* Header */}
        <Topic
          topico={{ icone: Lightbulb, nome: "Insights", cor: CoresEnum.AMBER }}
          titulo="Transformando dados em oportunidades de design"
          descricao="Após consolidar os resultados da pesquisa, organizei os principais
            padrões encontrados para identificar quais problemas realmente
            impactavam a rotina dos usuários. Esses insights direcionaram todas
            as decisões tomadas nas próximas etapas do projeto."
        />

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {insights.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-[32px] border border-slate-200 bg-slate-50 p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 text-amber-600">
                  <Icon size={30} />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>

        {/* Síntese */}

        <div className="mt-24 grid gap-10 lg:grid-cols-[1.5fr_1fr]">
          <div className="rounded-[40px] bg-gradient-to-br from-amber-500 to-orange-500 p-12 text-white shadow-2xl">
            <div className="flex items-center gap-3">
              <AlertCircle size={30} />

              <h3 className="text-3xl font-bold">
                Principal aprendizado
              </h3>
            </div>

            <p className="mt-8 text-xl leading-9 text-amber-50">
              O maior problema não era a ausência de recursos digitais, mas sim
              a fragmentação das informações. Os usuários precisavam alternar
              entre diferentes ferramentas para acompanhar medicamentos,
              consultas, alimentação e indicadores de saúde, tornando a rotina
              mais cansativa e suscetível a erros.
            </p>
          </div>

          <div className="rounded-[36px] border border-slate-200 bg-slate-50 p-10">
            <h3 className="text-2xl font-bold text-slate-900">
              Oportunidades identificadas
            </h3>

            <ul className="mt-8 space-y-5">
              {opportunities.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-4"
                >
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-emerald-500" />

                  <p className="leading-7 text-slate-600">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}