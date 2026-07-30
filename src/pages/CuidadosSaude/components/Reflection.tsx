import {
  BookOpen,
  Brain,
  HeartHandshake,
  Lightbulb,
  Target,
} from "lucide-react";
import Topic from "../../../components/Topic";
import { CoresEnum } from "../../../enums/Cores.Enum";

const learnings = [
  {
    icon: Brain,
    title: "UX começa antes da interface",
    description:
      "A pesquisa mostrou que o maior problema não era a falta de aplicativos de saúde, mas a dificuldade de utilizá-los. Compreender o contexto dos idosos foi muito mais importante do que pensar em funcionalidades.",
  },
  {
    icon: HeartHandshake,
    title: "Empatia gera melhores decisões",
    description:
      "Conversar com usuários e entender suas limitações físicas, cognitivas e emocionais mudou completamente a forma como as telas foram projetadas.",
  },
  {
    icon: Target,
    title: "Menos é mais",
    description:
      "Remover elementos desnecessários foi tão importante quanto adicionar novas funcionalidades. Cada decisão buscou reduzir a carga cognitiva durante a navegação.",
  },
];

const nextSteps = [
  "Realizar novos testes com um número maior de idosos.",
  "Validar a solução em diferentes faixas etárias e níveis de alfabetização digital.",
  "Desenvolver uma área exclusiva para familiares e cuidadores.",
  "Integrar o aplicativo com dispositivos vestíveis e medidores inteligentes.",
  "Adicionar teleconsulta e comunicação direta com profissionais da saúde.",
  "Implementar notificações inteligentes baseadas no histórico do usuário.",
];

export default function Reflection() {
  return (
    <section
      id="reflection"
      className="bg-white py-28"
    >
      <div className="mx-auto container px-6">
        {/* Header */}
        <Topic
          topico={{ icone: BookOpen, nome: "Reflexões", cor: CoresEnum.AMBER }}
          titulo="Aprendizados e próximos passos"
          descricao="Mais do que desenvolver uma solução para acompanhamento da saúde,
            este projeto reforçou a importância de projetar experiências
            verdadeiramente centradas nas pessoas. Cada etapa revelou novos
            aprendizados que influenciaram diretamente as decisões de design."
        />

        {/* Learnings */}

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {learnings.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-[34px] border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-2 hover:shadow-xl"
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

        {/* Próximos passos */}

        <div className="mt-24 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="rounded-[40px] bg-gradient-to-br from-amber-500 to-orange-500 p-10 text-white shadow-xl">
            <Lightbulb size={42} />

            <h3 className="mt-8 text-3xl font-bold">
              Se este projeto continuasse...
            </h3>

            <p className="mt-6 text-lg leading-8 text-amber-50">
              Embora o MVP tenha validado os principais fluxos, diversas
              oportunidades surgiram durante os testes. As próximas iterações
              ampliariam ainda mais o ecossistema de cuidados, envolvendo
              familiares, profissionais e dispositivos conectados.
            </p>
          </div>

          <div className="rounded-[40px] border border-slate-200 bg-slate-50 p-10">
            <div className="space-y-6">
              {nextSteps.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4"
                >
                  <div className="mt-2 h-3 w-3 rounded-full bg-amber-500" />

                  <p className="leading-7 text-slate-700">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Encerramento */}

        <div className="mt-24 rounded-[40px] bg-slate-900 p-12 text-white shadow-2xl">
          <h3 className="text-3xl font-bold">
            Considerações finais
          </h3>

          <p className="mt-8 max-w-5xl text-xl leading-9 text-slate-300">
            Este projeto consolidou minha compreensão sobre a importância da
            pesquisa, da acessibilidade e da validação contínua no processo de
            UX Design. Mais do que desenhar interfaces, o desafio consistiu em
            criar uma experiência capaz de promover autonomia, segurança e
            qualidade de vida para pessoas idosas. Essa experiência reforçou que
            boas soluções surgem quando decisões de design são fundamentadas em
            necessidades reais, e não apenas em tendências visuais.
          </p>
        </div>
      </div>
    </section>
  );
}