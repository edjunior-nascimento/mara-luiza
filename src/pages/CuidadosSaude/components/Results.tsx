import {
  ArrowUpRight,
  CheckCircle2,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import Topic from "../../../components/Topic";
import { CoresEnum } from "../../../enums/Cores.Enum";

const outcomes = [
  {
    icon: HeartPulse,
    title: "Centralização dos cuidados",
    description:
      "Todas as atividades relacionadas à saúde foram reunidas em um único aplicativo, reduzindo a necessidade de alternar entre diferentes ferramentas.",
  },
  {
    icon: ShieldCheck,
    title: "Mais autonomia",
    description:
      "O fluxo simplificado permite que pessoas idosas realizem tarefas do dia a dia com menor dependência de familiares ou cuidadores.",
  },
  {
    icon: Users,
    title: "Acompanhamento familiar",
    description:
      "O compartilhamento de informações fortalece a comunicação entre idosos, familiares e profissionais da saúde.",
  },
];

const metrics = [
  {
    value: "100%",
    label: "Conseguiram localizar o botão de emergência",
  },
  {
    value: "90%",
    label: "Completaram o fluxo de medicamentos sem ajuda",
  },
  {
    value: "< 2 min",
    label: "Tempo médio para concluir a rotina diária",
  },
  {
    value: "8/10",
    label: "Satisfação média durante os testes",
  },
];

const impacts = [
  "Redução da carga cognitiva durante a navegação.",
  "Maior confiança para utilizar o aplicativo diariamente.",
  "Menor risco de esquecer medicamentos.",
  "Melhor acompanhamento da evolução da saúde.",
  "Experiência acessível para usuários com pouca familiaridade digital.",
  "Base preparada para futuras integrações com profissionais da saúde.",
];

export default function Results() {
  return (
    <section
      id="results"
      className="bg-slate-50 py-28 px-20"
    >
      <div className="mx-auto container px-6">
        {/* Header */}
        <Topic
          topico={{ icone: Sparkles, nome: "Resultados", cor: CoresEnum.EMERALD }}
          titulo="O impacto da solução"
          descricao="O projeto demonstrou que pequenas decisões de UX podem gerar um
            impacto significativo na rotina de pessoas idosas. Ao simplificar a
            experiência e centralizar os cuidados em um único lugar, o
            aplicativo tornou tarefas complexas mais acessíveis e previsíveis."
        />

        {/* Outcomes */}

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {outcomes.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-[34px] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
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

        {/* Metrics */}

        <div className="mt-24 rounded-[40px] border border-slate-200 bg-white p-12 shadow-lg">
          <h3 className="text-3xl font-bold text-slate-900">
            Principais indicadores
          </h3>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {metrics.map((item) => (
              <div
                key={item.label}
                className="rounded-3xl bg-slate-50 p-8 text-center"
              >
                <h4 className="text-5xl font-bold text-emerald-600">
                  {item.value}
                </h4>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-sm leading-7 text-slate-500">
            * Indicadores baseados nos testes de usabilidade realizados durante
            o desenvolvimento deste projeto conceitual.
          </p>
        </div>

        {/* Impact */}

        <div className="mt-24 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="rounded-[40px] bg-gradient-to-br from-emerald-600 to-sky-600 p-10 text-white shadow-xl">
            <ArrowUpRight size={42} />

            <h3 className="mt-8 text-3xl font-bold">
              Valor entregue
            </h3>

            <p className="mt-6 text-lg leading-8 text-emerald-50">
              O maior resultado do projeto não foi apenas criar um aplicativo,
              mas transformar uma rotina fragmentada em uma experiência simples,
              contínua e centrada nas necessidades das pessoas idosas.
            </p>
          </div>

          <div className="rounded-[40px] border border-slate-200 bg-white p-10">
            <div className="space-y-6">
              {impacts.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4"
                >
                  <CheckCircle2
                    size={20}
                    className="mt-1 text-emerald-600"
                  />

                  <p className="leading-7 text-slate-700">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Closing */}

        <div className="mt-24 rounded-[40px] bg-slate-900 p-12 text-white">
          <h3 className="text-3xl font-bold">
            Resultado final
          </h3>

          <p className="mt-8 max-w-5xl text-xl leading-9 text-slate-300">
            Este projeto demonstrou como um processo estruturado de UX Design,
            apoiado por pesquisa, testes e iterações, pode transformar um
            problema complexo em uma solução acessível e humanizada. Mais do que
            organizar informações de saúde, o aplicativo busca promover
            autonomia, segurança e qualidade de vida para pessoas idosas e seus
            familiares.
          </p>
        </div>
      </div>
    </section>
  );
}