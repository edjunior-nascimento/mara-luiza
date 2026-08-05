import {
  ArrowRight,
  Lightbulb,
  Sparkles,
  Target,
} from "lucide-react";
import Topic from "../../../components/Topic";
import { CoresEnum } from "../../../enums/Cores.Enum";

const hmwItems = [
  {
    problem: "As informações sobre atrativos estão espalhadas em diferentes canais.",
    question:
      "Como poderíamos centralizar todas as informações da Serra da Ibiapaba em uma única plataforma?",
    insight:
      "Criar um catálogo completo de destinos, trilhas, hospedagens e guias locais.",
  },
  {
    problem: "As reservas acontecem manualmente pelo WhatsApp.",
    question:
      "Como poderíamos tornar o processo de reserva rápido e confiável?",
    insight:
      "Permitir reservas digitais com confirmação imediata e acompanhamento do status.",
  },
  {
    problem: "Os usuários têm dificuldade em escolher passeios compatíveis com seu perfil.",
    question:
      "Como poderíamos ajudar cada turista a encontrar a experiência ideal?",
    insight:
      "Utilizar filtros inteligentes e recomendações personalizadas.",
  },
  {
    problem: "Guias e campings possuem pouca visibilidade online.",
    question:
      "Como poderíamos conectar melhor turistas e prestadores de serviços locais?",
    insight:
      "Disponibilizar perfis completos com avaliações, fotos e disponibilidade.",
  },
];

export default function HMW() {
  return (
    <section
      id="hmw"
      className="bg-white py-28 lg:p-20"
    >
      <div className="mx-auto container px-6">
        {/* Header */}
        <Topic
          topico={{ icone: Lightbulb, nome: "How Might We", cor: CoresEnum.VIOLET }}
          titulo="Transformando problemas em oportunidades"
          descricao="Após sintetizar os principais achados da pesquisa, utilizamos a
            técnica How Might We (HMW) para transformar dores
            reais dos usuários em perguntas que orientaram a ideação das
            soluções."
        />
        
        {/* Fluxo */}

        <div className="mt-20 space-y-8">
          {hmwItems.map((item, index) => (
            <article
              key={index}
              className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="grid lg:grid-cols-3">
                {/* Problema */}

                <div className="border-b border-slate-200 bg-slate-50 p-8 lg:border-b-0 lg:border-r">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-100 text-red-600">
                      <Target size={22} />
                    </div>

                    <h3 className="font-semibold text-slate-900">
                      Problema
                    </h3>
                  </div>

                  <p className="mt-6 leading-7 text-slate-600">
                    {item.problem}
                  </p>
                </div>

                {/* HMW */}

                <div className="border-b border-slate-200 bg-gradient-to-br from-sky-50 to-white p-8 lg:border-b-0 lg:border-r">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
                      <ArrowRight size={22} />
                    </div>

                    <h3 className="font-semibold text-slate-900">
                      How Might We...
                    </h3>
                  </div>

                  <p className="mt-6 text-lg font-medium leading-8 text-slate-800">
                    "{item.question}"
                  </p>
                </div>

                {/* Insight */}

                <div className="bg-emerald-50 p-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                      <Sparkles size={22} />
                    </div>

                    <h3 className="font-semibold text-slate-900">
                      Direção da solução
                    </h3>
                  </div>

                  <p className="mt-6 leading-7 text-slate-700">
                    {item.insight}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Destaque */}

        <div className="mt-24 rounded-[36px] bg-gradient-to-r from-slate-900 to-slate-800 p-12 text-white shadow-2xl">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium">
                <Lightbulb size={16} />
                Principal oportunidade
              </span>

              <h3 className="mt-6 text-3xl font-bold">
                Como criar uma experiência única para explorar a Serra da
                Ibiapaba?
              </h3>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                A principal oportunidade identificada foi desenvolver uma
                plataforma capaz de reunir descoberta, planejamento, reservas e
                compartilhamento da experiência em um único ecossistema digital,
                reduzindo a complexidade da jornada e valorizando o turismo
                local.
              </p>
            </div>

            <div className="rounded-3xl bg-white/10 p-8 backdrop-blur">
              <p className="text-sm uppercase tracking-widest text-slate-300">
                Perguntas HMW
              </p>

              <h4 className="mt-3 text-5xl font-bold">
                {hmwItems.length}
              </h4>

              <p className="mt-3 text-slate-300">
                oportunidades exploradas durante a ideação.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}