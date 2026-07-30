import {
  ArrowDownRight,
  ArrowUpRight,
  CheckCircle2,
  Layers3,
  Target,
} from "lucide-react";
import Topic from "../../../components/Topic";
import { CoresEnum } from "../../../enums/Cores.Enum";

const features = [
  {
    title: "Lembrete de medicamentos",
    priority: "Must Have",
    impact: "Alto",
    effort: "Baixo",
    description:
      "Notificações com foto do medicamento, dosagem e confirmação da administração.",
  },
  {
    title: "Registro de pressão e glicemia",
    priority: "Must Have",
    impact: "Alto",
    effort: "Médio",
    description:
      "Permite acompanhar indicadores de saúde e visualizar a evolução ao longo do tempo.",
  },
  {
    title: "Contato de emergência",
    priority: "Must Have",
    impact: "Alto",
    effort: "Baixo",
    description:
      "Acesso rápido aos familiares e serviços de emergência em situações críticas.",
  },
  {
    title: "Plano alimentar",
    priority: "Should Have",
    impact: "Médio",
    effort: "Baixo",
    description:
      "Visualização das refeições e recomendações do nutricionista.",
  },
  {
    title: "Plano de exercícios",
    priority: "Should Have",
    impact: "Médio",
    effort: "Baixo",
    description:
      "Exercícios recomendados por profissionais de Educação Física.",
  },
  {
    title: "Compartilhamento com familiares",
    priority: "Should Have",
    impact: "Alto",
    effort: "Médio",
    description:
      "Permite compartilhar indicadores e histórico com cuidadores.",
  },
  {
    title: "Histórico de consultas",
    priority: "Could Have",
    impact: "Médio",
    effort: "Alto",
    description:
      "Organização de consultas, exames e receitas médicas.",
  },
  {
    title: "Chat com profissionais",
    priority: "Won't Have",
    impact: "Baixo",
    effort: "Alto",
    description:
      "Funcionalidade identificada como interessante, porém fora do escopo inicial do projeto.",
  },
];

const priorities = [
  {
    title: "Must Have",
    color: "bg-red-100 text-red-700",
    description: "Essencial para que o produto resolva o problema principal.",
  },
  {
    title: "Should Have",
    color: "bg-amber-100 text-amber-700",
    description: "Importante, mas não impede o uso do produto.",
  },
  {
    title: "Could Have",
    color: "bg-sky-100 text-sky-700",
    description: "Agrega valor e pode ser implementado futuramente.",
  },
  {
    title: "Won't Have",
    color: "bg-slate-200 text-slate-700",
    description: "Fora do escopo desta primeira versão.",
  },
];

export default function FeaturePrioritization() {
  return (
    <section
      id="feature-prioritization"
      className="bg-slate-50 py-28"
    >
      <div className="mx-auto container px-6">
        {/* Header */}
        <Topic
          topico={{ icone: Layers3, nome: "Priorização de Funcionalidades", cor: CoresEnum.INDIGO }}
          titulo="Nem toda ideia precisava entrar na primeira versão"
          descricao="Durante a fase de ideação surgiram diversas possibilidades. Para
            definir o escopo do MVP utilizei a metodologia MoSCoW,
            priorizando funcionalidades com maior impacto para os usuários e
            menor esforço de implementação."
        />

        {/* Prioridades */}

        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {priorities.map((item) => (
            <div
              key={item.title}
              className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm"
            >
              <span
                className={`inline-flex rounded-full px-4 py-2 text-sm font-semibold ${item.color}`}
              >
                {item.title}
              </span>

              <p className="mt-5 leading-7 text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Tabela */}

        <div className="mt-24 overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-lg">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="px-8 py-5 text-left">Funcionalidade</th>
                  <th className="px-8 py-5 text-left">Prioridade</th>
                  <th className="px-8 py-5 text-left">Impacto</th>
                  <th className="px-8 py-5 text-left">Esforço</th>
                </tr>
              </thead>

              <tbody>
                {features.map((feature) => (
                  <tr
                    key={feature.title}
                    className="border-t border-slate-100"
                  >
                    <td className="px-8 py-6">
                      <h4 className="font-semibold text-slate-900">
                        {feature.title}
                      </h4>

                      <p className="mt-2 text-sm leading-6 text-slate-500">
                        {feature.description}
                      </p>
                    </td>

                    <td className="px-8 py-6">
                      <span
                        className={`rounded-full px-4 py-2 text-sm font-semibold ${
                          feature.priority === "Must Have"
                            ? "bg-red-100 text-red-700"
                            : feature.priority === "Should Have"
                            ? "bg-amber-100 text-amber-700"
                            : feature.priority === "Could Have"
                            ? "bg-sky-100 text-sky-700"
                            : "bg-slate-200 text-slate-700"
                        }`}
                      >
                        {feature.priority}
                      </span>
                    </td>

                    <td className="px-8 py-6">
                      <div className="flex items-center gap-2 font-medium text-emerald-600">
                        <ArrowUpRight size={18} />
                        {feature.impact}
                      </div>
                    </td>

                    <td className="px-8 py-6">
                      <div className="flex items-center gap-2 font-medium text-orange-500">
                        <ArrowDownRight size={18} />
                        {feature.effort}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Insight */}

        <div className="mt-24 rounded-[40px] bg-gradient-to-r from-indigo-600 to-sky-600 p-12 text-white shadow-2xl">
          <div className="flex items-center gap-3">
            <Target size={30} />

            <h3 className="text-3xl font-bold">
              Resultado da priorização
            </h3>
          </div>

          <p className="mt-8 max-w-5xl text-xl leading-9 text-indigo-50">
            O MVP foi construído concentrando esforços nas funcionalidades mais
            críticas para o usuário: gerenciamento de medicamentos,
            monitoramento da saúde, acessibilidade e segurança. Recursos de
            menor impacto foram planejados para futuras iterações, garantindo um
            produto mais enxuto, focado e alinhado às necessidades identificadas
            durante a pesquisa.
          </p>

          <div className="mt-10 inline-flex items-center gap-3 rounded-2xl bg-white/10 px-6 py-4 backdrop-blur">
            <CheckCircle2 size={22} />

            <span className="text-lg font-medium">
              O foco deixou de ser construir muitas funcionalidades e passou a
              ser resolver os problemas certos.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}