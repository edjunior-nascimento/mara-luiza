import {
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  MessageSquare,
  Smile,
  Users,
} from "lucide-react";
import Topic from "../../../components/Topic";
import { CoresEnum } from "../../../enums/Cores.Enum";

const metrics = [
  {
    icon: Users,
    value: "15",
    label: "Participantes",
    color: "bg-sky-100 text-sky-700",
  },
  {
    icon: ClipboardCheck,
    value: "8",
    label: "Tarefas",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    icon: Clock3,
    value: "92%",
    label: "Sucesso",
    color: "bg-amber-100 text-amber-700",
  },
  {
    icon: Smile,
    value: "4.8/5",
    label: "Satisfação",
    color: "bg-violet-100 text-violet-700",
  },
];

const tasks = [
  {
    title: "Encontrar um destino",
    success: "100%",
    observation:
      "Todos os participantes localizaram um atrativo rapidamente.",
  },
  {
    title: "Adicionar ao roteiro",
    success: "93%",
    observation:
      "Alguns usuários demoraram para identificar o botão de ação.",
  },
  {
    title: "Finalizar agendamento",
    success: "87%",
    observation:
      "Foi necessário simplificar o formulário de agendamento.",
  },
];

const improvements = [
  "Maior destaque para o botão 'Adicionar ao roteiro'.",
  "Redução das informações antes do formulário.",
  "Hierarquia visual mais clara nos detalhes do local.",
  "Padronização dos botões primários.",
  "Melhoria na navegação entre telas.",
  "Feedback visual após concluir uma ação.",
];

export default function Usability() {
  return (
    <section
      id="usability"
      className="bg-slate-50 py-28"
    >
      <div className="mx-auto container px-6">
        {/* Header */}

        <Topic
          topico={{ icone: ClipboardCheck, nome: "Usability Testing", cor: CoresEnum.EMERALD }}
          titulo="Testes de Usabilidade"
          descricao="Após finalizar o protótipo de alta fidelidade, realizamos testes com
            usuários para validar a experiência, identificar dificuldades e
            refinar a solução antes da entrega final."
        />

        {/* Metrics */}

        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric) => {
            const Icon = metric.icon;

            return (
              <article
                key={metric.label}
                className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl ${metric.color}`}
                >
                  <Icon size={30} />
                </div>

                <h3 className="mt-8 text-5xl font-bold text-slate-900">
                  {metric.value}
                </h3>

                <p className="mt-3 text-lg font-medium text-slate-600">
                  {metric.label}
                </p>
              </article>
            );
          })}
        </div>

        {/* Tasks */}

        <div className="mt-24">
          <h3 className="text-3xl font-bold text-slate-900">
            Cenários avaliados
          </h3>

          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {tasks.map((task) => (
              <article
                key={task.title}
                className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-xl font-bold text-slate-900">
                    {task.title}
                  </h4>

                  <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
                    {task.success}
                  </span>
                </div>

                <p className="mt-6 leading-7 text-slate-600">
                  {task.observation}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Feedback */}

        <div className="mt-24 grid gap-8 lg:grid-cols-2">
          <div className="rounded-[36px] bg-gradient-to-br from-slate-900 to-slate-800 p-10 text-white shadow-xl">
            <div className="flex items-center gap-3">
              <MessageSquare />

              <h3 className="text-3xl font-bold">
                Principais feedbacks
              </h3>
            </div>

            <blockquote className="mt-8 border-l-4 border-sky-400 pl-6 text-lg italic leading-8 text-slate-300">
              "Gostei da simplicidade da navegação. Ficou fácil montar um
              roteiro sem precisar procurar informações em vários sites."
            </blockquote>

            <blockquote className="mt-8 border-l-4 border-emerald-400 pl-6 text-lg italic leading-8 text-slate-300">
              "O formulário poderia ter menos campos para concluir o
              agendamento mais rapidamente."
            </blockquote>
          </div>

          <div className="rounded-[36px] border border-slate-200 bg-white p-10 shadow-sm">
            <h3 className="text-3xl font-bold text-slate-900">
              Melhorias implementadas
            </h3>

            <div className="mt-8 space-y-5">
              {improvements.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4"
                >
                  <CheckCircle2
                    size={20}
                    className="mt-1 text-emerald-500"
                  />

                  <span className="leading-7 text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Summary */}

        <div className="mt-24 rounded-[36px] bg-gradient-to-r from-sky-600 to-cyan-600 p-12 text-white shadow-2xl">
          <div className="mx-auto max-w-4xl text-center">
            <h3 className="text-3xl font-bold">
              O resultado dos testes confirmou que o fluxo principal era
              intuitivo, mas revelou oportunidades de simplificação no processo
              de agendamento e melhorias na hierarquia visual da interface.
            </h3>

            <p className="mt-8 text-lg leading-8 text-sky-100">
              As alterações implementadas aumentaram a clareza das ações,
              reduziram a quantidade de passos percebidos e proporcionaram uma
              experiência mais fluida para os usuários.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}