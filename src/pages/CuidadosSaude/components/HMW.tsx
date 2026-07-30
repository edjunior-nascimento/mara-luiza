import {
  ArrowRight,
  Lightbulb,
  Sparkles,
  Target,
} from "lucide-react";
import Topic from "../../../components/Topic";
import { CoresEnum } from "../../../enums/Cores.Enum";

const hmw = [
  {
    problem: "Os idosos esquecem de tomar medicamentos.",
    question:
      "Como poderíamos lembrar o usuário dos medicamentos de forma simples, sem gerar ansiedade ou excesso de notificações?",
  },
  {
    problem: "As informações de saúde ficam espalhadas.",
    question:
      "Como poderíamos centralizar consultas, exames, medicamentos e indicadores em uma única experiência?",
  },
  {
    problem: "Os familiares precisam acompanhar a rotina à distância.",
    question:
      "Como poderíamos manter familiares informados sem comprometer a autonomia do idoso?",
  },
  {
    problem: "Aplicativos existentes são complexos.",
    question:
      "Como poderíamos criar uma interface intuitiva que pudesse ser utilizada por pessoas com pouca familiaridade com tecnologia?",
  },
  {
    problem: "Há dificuldades durante situações de emergência.",
    question:
      "Como poderíamos facilitar o acesso rápido aos contatos de emergência e informações importantes?",
  },
];

export default function HMW() {
  return (
    <section
      id="hmw"
      className="bg-slate-50 py-28"
    >
      <div className="mx-auto container px-6">
        {/* Header */}
        <Topic
          topico={{ icone: Lightbulb, nome: "How Might We", cor: CoresEnum.INDIGO }}
          titulo="Transformando problemas em oportunidades"
          descricao="Depois de compreender os principais desafios enfrentados pelos
            usuários, reformulei cada problema em perguntas abertas utilizando a
            metodologia How Might We (HMW). Essa abordagem
            ajudou a direcionar a fase de ideação, incentivando soluções focadas
            nas necessidades reais das pessoas."
        />

        {/* Fluxo */}

        <div className="mt-20 rounded-[40px] bg-gradient-to-r from-indigo-600 to-sky-600 p-12 text-white shadow-2xl">
          <div className="grid gap-8 md:grid-cols-3 md:items-center">
            <div className="rounded-3xl bg-white/10 p-8 backdrop-blur">
              <h3 className="text-2xl font-bold">
                Problema
              </h3>

              <p className="mt-4 text-indigo-50 leading-8">
                Dificuldades identificadas durante a pesquisa.
              </p>
            </div>

            <div className="flex justify-center">
              <ArrowRight size={42} />
            </div>

            <div className="rounded-3xl bg-white/10 p-8 backdrop-blur">
              <h3 className="text-2xl font-bold">
                Oportunidade
              </h3>

              <p className="mt-4 text-indigo-50 leading-8">
                Perguntas que direcionaram a criação das soluções.
              </p>
            </div>
          </div>
        </div>

        {/* Perguntas */}

        <div className="mt-24 space-y-8">
          {hmw.map((item, index) => (
            <article
              key={index}
              className="overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="grid lg:grid-cols-[1fr_auto_1.2fr]">
                {/* Problema */}

                <div className="p-8 lg:p-10">
                  <div className="flex items-center gap-3">
                    <Target className="text-red-500" />

                    <h3 className="text-xl font-bold text-slate-900">
                      Problema identificado
                    </h3>
                  </div>

                  <p className="mt-6 leading-8 text-slate-600">
                    {item.problem}
                  </p>
                </div>

                {/* Arrow */}

                <div className="hidden items-center justify-center px-6 lg:flex">
                  <ArrowRight className="text-slate-300" size={34} />
                </div>

                {/* HMW */}

                <div className="bg-slate-50 p-8 lg:p-10">
                  <div className="flex items-center gap-3">
                    <Sparkles className="text-indigo-600" />

                    <h3 className="text-xl font-bold text-slate-900">
                      How Might We...
                    </h3>
                  </div>

                  <blockquote className="mt-6 border-l-4 border-indigo-500 pl-6 text-lg leading-8 text-slate-700">
                    {item.question}
                  </blockquote>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Insight */}

        <div className="mt-24 rounded-[40px] border border-indigo-200 bg-indigo-50 p-12">
          <h3 className="text-3xl font-bold text-slate-900">
            Principal aprendizado
          </h3>

          <p className="mt-8 max-w-4xl text-lg leading-9 text-slate-600">
            Em vez de buscar soluções para funcionalidades isoladas, as
            perguntas HMW permitiram enxergar oportunidades de design centradas
            no usuário. Esse exercício serviu como ponte entre os problemas
            encontrados na pesquisa e a fase de ideação, garantindo que cada
            funcionalidade proposta tivesse um propósito claro.
          </p>
        </div>
      </div>
    </section>
  );
}