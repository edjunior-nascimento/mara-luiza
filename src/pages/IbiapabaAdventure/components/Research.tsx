import {
  Search,
  Users,
  Map,
  Lightbulb,
  ClipboardList,
} from "lucide-react";
import { CoresEnum } from "../../../enums/Cores.Enum";
import Topic from "../../../components/Topic";

const researchItems = [
  {
    icon: Search,
    title: "Desk Research",
    description:
      "Levantamento de informações sobre turismo na Serra da Ibiapaba, aplicativos concorrentes e tendências do mercado.",
  },
  {
    icon: Users,
    title: "Entrevistas",
    description:
      "Conversas com turistas e moradores para entender dificuldades durante o planejamento e execução das viagens.",
  },
  {
    icon: Map,
    title: "Análise Competitiva",
    description:
      "Benchmark de aplicativos como Airbnb, Google Maps, TripAdvisor e plataformas regionais de turismo.",
  },
  {
    icon: Lightbulb,
    title: "Insights",
    description:
      "Identificação das principais necessidades, oportunidades e comportamentos observados durante a pesquisa.",
  },
];

const insights = [
  "Os usuários encontram informações espalhadas em diversas fontes.",
  "Existe dificuldade para montar roteiros personalizados.",
  "A maioria procura recomendações confiáveis antes de viajar.",
  "Poucas plataformas valorizam experiências locais e guias regionais.",
];

export default function Research() {
  return (
    <section
      id="research"
      className="bg-white py-24 px-20"
    >
      <div className="mx-auto container px-6">

        {/* Header */}

        <Topic
          topico={{ icone: Search, nome: "Descoberta", cor: CoresEnum.EMERALD }}
          titulo="Pesquisa com usuários"
          descricao="A etapa de pesquisa teve como objetivo compreender como turistas
            planejam viagens para a Serra da Ibiapaba, quais dificuldades
            enfrentam e quais oportunidades poderiam gerar uma experiência
            digital mais intuitiva."
        />

        {/* Processo */}

        <div className="mt-16 grid gap-6 md:grid-cols-2">

          {researchItems.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-2xl border border-gray-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-emerald-500 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-50">
                  <Icon className="h-7 w-7 text-emerald-600" />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>

        {/* Resumo */}

        <div className="mt-20 grid gap-10 lg:grid-cols-2">

          {/* Metodologia */}

          <div className="rounded-3xl bg-gray-50 p-8">

            <div className="flex items-center gap-3">
              <ClipboardList className="h-7 w-7 text-emerald-600" />

              <h3 className="text-2xl font-semibold">
                Metodologia
              </h3>
            </div>

            <ul className="mt-8 space-y-4 text-gray-700">

              <li>• Pesquisa exploratória</li>

              <li>• Benchmark competitivo</li>

              <li>• Entrevistas semiestruturadas</li>

              <li>• Organização dos insights</li>

              <li>• Priorização das oportunidades</li>

            </ul>
          </div>

          {/* Principais Insights */}

          <div className="rounded-3xl bg-emerald-600 p-8 text-white">

            <h3 className="text-2xl font-semibold">
              Principais descobertas
            </h3>

            <div className="mt-8 space-y-5">

              {insights.map((item) => (
                <div
                  key={item}
                  className="flex gap-4"
                >
                  <div className="mt-2 h-2 w-2 rounded-full bg-white" />

                  <p className="leading-7 opacity-95">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}