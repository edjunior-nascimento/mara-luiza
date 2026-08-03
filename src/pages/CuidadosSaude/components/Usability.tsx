import {
  CheckCircle2,
  ClipboardCheck,
  Lightbulb,
  Users,
} from "lucide-react";
import Topic from "../../../components/Topic";
import { CoresEnum } from "../../../enums/Cores.Enum";

const participants = [
  {
    title: "5 idosos",
    description:
      "Entre 60 e 75 anos, com diferentes níveis de familiaridade com smartphones.",
  },
  {
    title: "2 familiares",
    description:
      "Responsáveis por auxiliar os idosos no acompanhamento da saúde.",
  },
  {
    title: "1 profissional da saúde",
    description:
      "Participou avaliando a clareza das informações e do fluxo de acompanhamento.",
  },
];

const findings = [
  {
    title: "Lembretes foram facilmente compreendidos",
    type: "Positivo",
  },
  {
    title: "Os participantes encontraram rapidamente o botão de emergência",
    type: "Positivo",
  },
  {
    title: "Os gráficos de evolução precisavam ser mais simples",
    type: "Melhoria",
  },
  {
    title: "Alguns usuários solicitaram aumentar ainda mais a fonte",
    type: "Melhoria",
  },
  {
    title: "Foi sugerida confirmação por voz após registrar medicamentos",
    type: "Oportunidade",
  },
];

const improvements = [
  "Aumento da tipografia em telas de monitoramento.",
  "Simplificação dos gráficos utilizando indicadores visuais.",
  "Botões de confirmação maiores.",
  "Feedback sonoro opcional após ações importantes.",
  "Melhor destaque para notificações do dia.",
];

export default function Usability() {
  return (
    <section
      id="usability"
      className="bg-white py-28 px-20"
    >
      <div className="mx-auto container px-6">
        {/* Header */}
        <Topic
          topico={{ icone: ClipboardCheck, nome: "Testes de Usabilidade", cor: CoresEnum.EMERALD }}
          titulo="Validando a solução com usuários"
          descricao="Após a construção do protótipo de alta fidelidade, foram realizados
            testes de usabilidade para verificar se os principais fluxos eram
            compreendidos pelos usuários e identificar oportunidades de melhoria
            antes da implementação."
        />

        {/* Participantes */}

        <div className="mt-20">
          <div className="flex items-center gap-3">
            <Users className="text-emerald-600" />

            <h3 className="text-3xl font-bold text-slate-900">
              Participantes
            </h3>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {participants.map((item) => (
              <article
                key={item.title}
                className="rounded-[32px] border border-slate-200 bg-slate-50 p-8"
              >
                <h4 className="text-2xl font-bold text-slate-900">
                  {item.title}
                </h4>

                <p className="mt-5 leading-8 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Resultados */}

        <div className="mt-24 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="rounded-[36px] bg-gradient-to-br from-emerald-600 to-sky-600 p-10 text-white shadow-xl">
            <CheckCircle2 size={42} />

            <h3 className="mt-8 text-3xl font-bold">
              Principais aprendizados
            </h3>

            <p className="mt-6 text-lg leading-8 text-emerald-50">
              Os usuários conseguiram completar as tarefas principais sem ajuda,
              validando a arquitetura da informação e os fluxos definidos
              durante o processo de UX.
            </p>
          </div>

          <div className="rounded-[36px] border border-slate-200 bg-slate-50 p-10">
            <div className="space-y-5">
              {findings.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start justify-between gap-6 rounded-2xl bg-white p-5"
                >
                  <p className="leading-7 text-slate-700">
                    {item.title}
                  </p>

                  <span
                    className={`rounded-full px-4 py-2 text-sm font-semibold whitespace-nowrap ${
                      item.type === "Positivo"
                        ? "bg-emerald-100 text-emerald-700"
                        : item.type === "Melhoria"
                        ? "bg-amber-100 text-amber-700"
                        : "bg-sky-100 text-sky-700"
                    }`}
                  >
                    {item.type}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Melhorias */}

        <div className="mt-24 rounded-[40px] border border-slate-200 bg-slate-50 p-12">
          <div className="flex items-center gap-3">
            <Lightbulb className="text-amber-500" />

            <h3 className="text-3xl font-bold text-slate-900">
              Iterações realizadas
            </h3>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {improvements.map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm"
              >
                <div className="mt-2 h-3 w-3 rounded-full bg-emerald-500" />

                <p className="leading-7 text-slate-700">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Conclusão */}

        <div className="mt-24 rounded-[40px] bg-slate-900 p-12 text-white">
          <h3 className="text-3xl font-bold">
            Conclusão dos testes
          </h3>

          <p className="mt-8 max-w-5xl text-xl leading-9 text-slate-300">
            Os testes confirmaram que a solução atende às principais
            necessidades identificadas durante a pesquisa. Além de validar a
            facilidade de uso, o processo revelou pequenos ajustes que tornaram
            a experiência ainda mais acessível, reforçando a importância de
            iterar continuamente com base no feedback dos usuários.
          </p>
        </div>
      </div>
    </section>
  );
}