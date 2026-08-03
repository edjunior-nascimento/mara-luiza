import {
  HeartPulse,
  Smartphone,
  Activity,
  Pill,
  ShieldCheck,
  CheckCircle2,
  Lightbulb,
} from "lucide-react";

type BenchmarkApp = {
  name: string;
  icon: React.ReactNode;
  strengths: string[];
  opportunities: string[];
};

const apps: BenchmarkApp[] = [
  {
    name: "Meu SUS Digital",
    icon: <HeartPulse className="w-5 h-5 text-blue-600" />,
    strengths: [
      "Histórico de vacinação",
      "Acesso a serviços públicos",
      "Integração com o SUS",
    ],
    opportunities: [
      "Pouco apoio à rotina diária",
      "Não centraliza medicamentos",
    ],
  },
  {
    name: "Apple Health",
    icon: <Activity className="w-5 h-5 text-red-500" />,
    strengths: [
      "Centralização de dados de saúde",
      "Integração com dispositivos",
      "Visualização de indicadores",
    ],
    opportunities: [
      "Interface complexa para idosos",
      "Pouco foco em cuidadores",
    ],
  },
  {
    name: "Google Fit",
    icon: <Activity className="w-5 h-5 text-green-600" />,
    strengths: [
      "Monitoramento de exercícios",
      "Metas de atividade física",
      "Boa integração Android",
    ],
    opportunities: [
      "Não acompanha medicamentos",
      "Pouco suporte a consultas",
    ],
  },
  {
    name: "Samsung Health",
    icon: <Smartphone className="w-5 h-5 text-sky-600" />,
    strengths: [
      "Sono e exercícios",
      "Monitoramento corporal",
      "Integração com wearables",
    ],
    opportunities: [
      "Foco reduzido em doenças crônicas",
      "Não organiza documentos médicos",
    ],
  },
  {
    name: "Medisafe",
    icon: <Pill className="w-5 h-5 text-purple-600" />,
    strengths: [
      "Excelente lembrete de medicamentos",
      "Controle de doses",
      "Alertas inteligentes",
    ],
    opportunities: [
      "Não reúne consultas e exames",
      "Pouca visão geral da saúde",
    ],
  },
  {
    name: "MyTherapy",
    icon: <ShieldCheck className="w-5 h-5 text-indigo-600" />,
    strengths: [
      "Adesão ao tratamento",
      "Registro de sintomas",
      "Histórico de medicamentos",
    ],
    opportunities: [
      "Fluxos longos",
      "Excesso de informações",
    ],
  },
  {
    name: "Pill Reminder",
    icon: <Pill className="w-5 h-5 text-emerald-600" />,
    strengths: [
      "Simplicidade",
      "Lembretes eficientes",
      "Configuração rápida",
    ],
    opportunities: [
      "Poucas funcionalidades",
      "Sem histórico clínico",
    ],
  },
  {
    name: "CareClinic",
    icon: <HeartPulse className="w-5 h-5 text-pink-600" />,
    strengths: [
      "Gestão completa da saúde",
      "Diário de sintomas",
      "Registro clínico",
    ],
    opportunities: [
      "Complexidade elevada",
      "Curva de aprendizado longa",
    ],
  },
];

const opportunities = [
  "Centralizar medicamentos, consultas e exames em um único lugar.",
  "Criar uma experiência realmente simples para pessoas idosas.",
  "Facilitar o compartilhamento de informações com familiares e cuidadores.",
  "Apresentar informações com maior clareza visual.",
];

export default function Benchmark() {
  return (
    <section className="w-full py-10">
      <div className="max-w-7xl mx-auto px-2">

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {apps.map((app) => (
            <article
              key={app.name}
              className="rounded-2xl border border-zinc-200 bg-white p-6 hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-zinc-100 flex items-center justify-center">
                  {app.icon}
                </div>

                <h3 className="font-semibold text-zinc-900">
                  {app.name}
                </h3>
              </div>

              <div className="space-y-5">

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span className="font-medium text-sm">
                      Pontos fortes
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {app.strengths.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-zinc-600 flex gap-2"
                      >
                        <span className="text-green-600 mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Lightbulb className="w-4 h-4 text-amber-500" />
                    <span className="font-medium text-sm">
                      Oportunidades
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {app.opportunities.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-zinc-600 flex gap-2"
                      >
                        <span className="text-amber-500 mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-3xl border border-blue-100 bg-blue-50 p-8">
          <div className="flex items-center gap-3 mb-6">
            <Lightbulb className="w-6 h-6 text-blue-600" />
            <h3 className="text-2xl font-semibold text-zinc-900">
              Principais oportunidades identificadas
            </h3>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {opportunities.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl bg-white p-5 border border-blue-100"
              >
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />

                <p className="text-zinc-700 leading-7">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}