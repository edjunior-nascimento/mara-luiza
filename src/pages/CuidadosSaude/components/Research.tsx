import { useState } from "react";
import {
  BarChart3,
  ClipboardList,
  FileSearch,
  Lightbulb,
  MessagesSquare,
  Search,
  Users,
} from "lucide-react";
import Topic from "../../../components/Topic";
import { CoresEnum } from "../../../enums/Cores.Enum";
import Survey from "./Survey";
import InterviewCard from "./InterviewCard";
import Articles from "./Articles";
import Benchmark from "./Benchmark";

const methods = [
  {
    icon: ClipboardList,
    title: "Questionário",
    value: "15 participantes",
    description:
      "Aplicado para compreender hábitos de saúde, dificuldades diárias, uso de tecnologia e relacionamento com profissionais da saúde.",
    content: <Survey />
  },
  {
    icon: MessagesSquare,
    title: "Entrevistas",
    value: "15 participantes",
    description:
      "Conversas em profundidade com idosos e familiares para entender comportamentos, necessidades e expectativas.",
    content: <div className="flex flex-col gap-4"><InterviewCard
      interview={{
        id: 1,
        name: "Maria",
        age: 68,
        role: "Hipertensão e diabetes",
        summary:
          "Maria convive com hipertensão e diabetes há mais de dez anos. Utiliza cinco medicamentos diariamente e depende de anotações em papel para lembrar horários e consultas. Relata dificuldade para localizar exames antigos.",

        highlights: [
          "Às vezes eu esqueço se já tomei o remédio.",
          "Guardo meus exames em uma pasta, mas nunca acho rápido.",
          "Se o aplicativo tiver muita informação, eu desisto.",
        ],

        observations: [
          "Grande dependência de lembretes manuais.",
          "Baixa confiança em aplicativos complexos.",
          "Necessidade de centralizar informações de saúde.",
        ],
      }}

    />
      <InterviewCard
        interview={{
          id: 4,
          name: "Fernanda",
          age: 46,
          role: "Filha e cuidadora familiar",

          summary:
            "Fernanda acompanha a rotina de saúde da mãe, de 78 anos, que convive com hipertensão e diabetes. Ela é responsável por organizar consultas, exames e medicamentos, utilizando WhatsApp, agenda e documentos impressos. Relata insegurança quando não consegue acompanhar a mãe presencialmente e afirma que grande parte do tempo é gasta procurando informações espalhadas em diferentes lugares.",

          highlights: [
            "Minha mãe sempre pergunta qual remédio precisa tomar.",
            "Cada exame está em um lugar diferente.",
            "Quando ela vai ao médico, preciso procurar receitas antigas.",
            "Tenho medo de esquecer alguma consulta importante.",
            "Seria muito mais fácil se tudo estivesse em um único aplicativo."
          ],

          observations: [
            "Grande parte da organização depende do cuidador.",
            "Informações distribuídas entre papéis, WhatsApp e receitas médicas.",
            "Necessidade de compartilhamento seguro entre familiares.",
            "Busca constante por histórico de consultas e exames.",
            "Maior tranquilidade quando consegue acompanhar a rotina à distância."
          ],
        }}
      />

    </div>

  },
  {
    icon: Search,
    title: "Desk Research",
    value: "12 artigos",
    description:
      "Pesquisa sobre envelhecimento, doenças crônicas, acessibilidade digital e boas práticas em produtos para saúde.",
    content: <Articles />
  },
  {
    icon: FileSearch,
    title: "Benchmark",
    value: "8 aplicativos",
    description:
      "Avaliação de soluções existentes para identificar oportunidades de inovação e diferenciação.",
  content: <Benchmark />
  },
];

const findings = [
  {
    title: "Esquecimento de medicamentos",
    description:
      "Grande parte dos participantes relatou esquecer horários ou doses dos medicamentos.",
  },
  {
    title: "Informações descentralizadas",
    description:
      "Exames, receitas e registros ficam distribuídos entre papéis, aplicativos e mensagens.",
  },
  {
    title: "Dependência de familiares",
    description:
      "Filhos e cuidadores participam constantemente da organização da rotina de saúde.",
  },
  {
    title: "Interfaces complexas",
    description:
      "Aplicativos existentes apresentam excesso de informações e navegação pouco intuitiva.",
  },
];

export default function Research() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
      id="research"
      className="bg-slate-50 py-28 lg:p-20"
    >
      <div className="mx-auto container px-6">
        {/* Header */}
        <Topic
          topico={{ icone: Users, nome: "Pesquisa", cor: CoresEnum.EMERALD }}
          titulo="Entendendo a realidade antes de propor qualquer solução"
          descricao="A pesquisa teve como objetivo compreender como pessoas idosas
            administram sua saúde atualmente, quais desafios enfrentam e como
            familiares e profissionais participam desse processo. As descobertas
            serviram como base para todas as decisões de design tomadas durante
            o projeto."
        />
        {/* Métodos */}

        <div className="mt-20 grid gap-8 md:grid-cols-1">
          {methods.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
                    <Icon size={30} />
                  </div>

                  <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
                    {item.value}
                  </span>
                </div>

                <h3 className="mt-8 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  {item.description}
                </p>

                {item.content ? (
                  <div className="mt-6">
                    <button
                      type="button"
                      onClick={() => toggleExpand(index)}
                      className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                    >
                      {expandedIndex === index ? "Ocultar detalhes" : "Ver detalhes"}
                    </button>

                    {expandedIndex === index ? (
                      <div className="mt-5 rounded-3xl border border-slate-200 bg-slate-50 p-6">
                        {item.content}
                      </div>
                    ) : null}
                  </div>
                ) : null}

              </article>
            );
          })}
        </div>

        {/* Processo */}

        <div className="mt-24 rounded-[40px] bg-gradient-to-r from-emerald-600 to-sky-600 p-12 text-white shadow-2xl">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <h3 className="text-3xl font-bold">
                Como a pesquisa foi conduzida
              </h3>

              <p className="mt-6 text-xl leading-9 text-emerald-50">
                A estratégia combinou métodos qualitativos e quantitativos para
                entender tanto o comportamento dos usuários quanto o contexto em
                que suas decisões acontecem. O objetivo não era validar uma
                ideia, mas descobrir quais problemas realmente precisavam ser
                resolvidos.
              </p>
            </div>

            <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-white/15 backdrop-blur">
              <BarChart3 size={42} />
            </div>
          </div>
        </div>

        {/* Descobertas */}

        <div className="mt-24">
          <div className="flex items-center gap-3">
            <Lightbulb className="text-amber-500" />

            <h3 className="text-3xl font-bold text-slate-900">
              Principais descobertas
            </h3>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {findings.map((item) => (
              <div
                key={item.title}
                className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm"
              >
                <h4 className="text-xl font-bold text-slate-900">
                  {item.title}
                </h4>

                <p className="mt-4 leading-8 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}