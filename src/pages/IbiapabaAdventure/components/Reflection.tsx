import {
  ArrowRight,
  Brain,
  Compass,
  Lightbulb,
  Sparkles,
  Target,
} from "lucide-react";
import Topic from "../../../components/Topic";
import { CoresEnum } from "../../../enums/Cores.Enum";

const learnings = [
  {
    icon: Brain,
    title: "Pesquisa antes da interface",
    description:
      "Entender os problemas reais dos usuários foi essencial para evitar decisões baseadas em suposições.",
  },
  {
    icon: Compass,
    title: "UX é um processo iterativo",
    description:
      "Os testes mostraram que pequenas mudanças na navegação podem gerar grandes melhorias na experiência.",
  },
  {
    icon: Lightbulb,
    title: "Simplicidade gera confiança",
    description:
      "Reduzir etapas e destacar as ações principais tornou a plataforma mais intuitiva para todos os perfis de usuários.",
  },
];

const challenges = [
  "Transformar informações espalhadas em diferentes canais em uma experiência única.",
  "Atender necessidades de turistas, guias e proprietários na mesma plataforma.",
  "Criar uma arquitetura simples para usuários com diferentes níveis de experiência digital.",
];

const nextSteps = [
  "Implementar reservas e pagamentos online.",
  "Adicionar avaliações e comentários dos visitantes.",
  "Criar recomendações personalizadas utilizando o histórico do usuário.",
  "Disponibilizar modo offline para consulta de roteiros durante as trilhas.",
  "Desenvolver um painel administrativo para guias e empreendedores.",
];

export default function Reflection() {
  return (
    <section
      id="reflection"
      className="bg-slate-50 py-28 lg:p-20"
    >
      <div className="mx-auto container px-6">
        {/* Header */}

        <Topic
          topico={{ icone: Sparkles, nome: "Reflection", cor: CoresEnum.VIOLET }}
          titulo="Reflexões e aprendizados"
          descricao="Este projeto reforçou a importância de construir soluções centradas
            nas pessoas. Mais do que desenhar interfaces, o desafio foi entender
            necessidades reais e transformá-las em uma experiência simples,
            acessível e consistente."
        />

        {/* Learnings */}

        <div className="mt-24 grid gap-8 lg:grid-cols-3">
          {learnings.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
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

        {/* Challenges & Next Steps */}

        <div className="mt-24 grid gap-8 lg:grid-cols-2">
          <div className="rounded-[36px] border border-slate-200 bg-white p-10 shadow-sm">
            <div className="flex items-center gap-3">
              <Target className="text-amber-500" />

              <h3 className="text-3xl font-bold text-slate-900">
                Principais desafios
              </h3>
            </div>

            <div className="mt-8 space-y-6">
              {challenges.map((challenge) => (
                <div
                  key={challenge}
                  className="flex items-start gap-4"
                >
                  <div className="mt-2 h-2 w-2 rounded-full bg-amber-500" />

                  <p className="leading-8 text-slate-600">
                    {challenge}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[36px] border border-slate-200 bg-white p-10 shadow-sm">
            <div className="flex items-center gap-3">
              <ArrowRight className="text-emerald-500" />

              <h3 className="text-3xl font-bold text-slate-900">
                Próximos passos
              </h3>
            </div>

            <div className="mt-8 space-y-6">
              {nextSteps.map((step) => (
                <div
                  key={step}
                  className="flex items-start gap-4"
                >
                  <ArrowRight
                    size={18}
                    className="mt-2 text-emerald-500"
                  />

                  <p className="leading-8 text-slate-600">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final Message */}

        <div className="mt-24 overflow-hidden rounded-[40px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-14 text-white shadow-2xl">
          <div className="mx-auto max-w-4xl text-center">
            <h3 className="text-4xl font-bold leading-tight">
              Todo grande produto nasce da combinação entre empatia,
              experimentação e aprendizado contínuo.
            </h3>

            <p className="mt-8 text-xl leading-9 text-slate-300">
              O Ibiapaba Adventure demonstrou como uma abordagem baseada em
              pesquisa e validação pode transformar um processo fragmentado em
              uma experiência digital organizada. Mais do que entregar uma
              interface, este projeto consolidou conhecimentos sobre UX
              Research, Arquitetura da Informação, Design System,
              Prototipação e Testes de Usabilidade, reforçando a importância
              de evoluir continuamente com base no feedback dos usuários.
            </p>

            <div className="mt-12 inline-flex items-center gap-3 rounded-full bg-white/10 px-6 py-3 text-sm font-medium backdrop-blur">
              ✨ Obrigado por acompanhar este estudo de caso.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}