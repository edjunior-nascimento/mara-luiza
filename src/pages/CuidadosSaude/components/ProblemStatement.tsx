import {
  AlertTriangle,
  ArrowRight,
  Brain,
  AlertCircle,
  Target,
} from "lucide-react";
import Topic from "../../../components/Topic";
import { CoresEnum } from "../../../enums/Cores.Enum";

const problems = [
  {
    title: "Informações descentralizadas",
    description:
      "Medicamentos, exames, consultas e registros de saúde ficam distribuídos entre papéis, aplicativos e conversas, dificultando o acompanhamento.",
  },
  {
    title: "Alta carga cognitiva",
    description:
      "A rotina exige lembrar horários, dosagens, consultas e medições diariamente, aumentando a chance de esquecimentos.",
  },
  {
    title: "Baixa autonomia",
    description:
      "Muitos idosos dependem constantemente de familiares para organizar tarefas relacionadas à saúde.",
  },
];

const opportunities = [
  "Centralizar toda a rotina de cuidados em um único aplicativo.",
  "Automatizar lembretes e registros sempre que possível.",
  "Projetar uma experiência simples, acessível e intuitiva.",
  "Facilitar o compartilhamento de informações com familiares e profissionais.",
];

export default function ProblemStatement() {
  return (
    <section
      id="problem-statement"
      className="bg-white py-28"
    >
      <div className="mx-auto container px-6">
        {/* Header */}
        <Topic
          topico={{ icone: AlertCircle, nome: "Dashboard", cor: CoresEnum.RED }}
          titulo="Definindo claramente o problema"
          descricao="Após analisar os dados da pesquisa, ficou evidente que o desafio não
            estava na falta de informações sobre saúde, mas na dificuldade de
            organizá-las e transformá-las em uma rotina simples de acompanhar."
        />

        {/* Statement */}

        <div className="mt-20 rounded-[40px] bg-gradient-to-br from-red-600 via-rose-600 to-orange-500 p-12 text-white shadow-2xl">
          <div className="flex items-center gap-4">
            <AlertTriangle size={34} />

            <h3 className="text-3xl font-bold">
              Declaração do problema
            </h3>
          </div>

          <blockquote className="mt-10 border-l-4 border-white/40 pl-8 text-3xl font-semibold leading-relaxed">
            Como podemos ajudar pessoas idosas a gerenciar sua saúde de maneira
            simples, acessível e segura, reduzindo a carga cognitiva e
            promovendo maior autonomia no dia a dia?
          </blockquote>
        </div>

        {/* Problemas */}

        <div className="mt-24 grid gap-8 lg:grid-cols-3">
          {problems.map((item) => (
            <article
              key={item.title}
              className="rounded-[32px] border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-2 hover:shadow-xl"
            >
              <h3 className="text-2xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        {/* Transformação */}

        <div className="mt-24 grid gap-8 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
          <div className="rounded-[36px] border border-red-200 bg-red-50 p-10">
            <div className="flex items-center gap-3">
              <Brain className="text-red-600" />

              <h3 className="text-2xl font-bold text-slate-900">
                Situação atual
              </h3>
            </div>

            <p className="mt-6 leading-8 text-slate-700">
              O usuário precisa lembrar de diversas tarefas diariamente,
              consultar diferentes fontes de informação e depender de terceiros
              para manter sua rotina de cuidados.
            </p>
          </div>

          <ArrowRight
            size={40}
            className="mx-auto hidden text-slate-300 lg:block"
          />

          <div className="rounded-[36px] border border-emerald-200 bg-emerald-50 p-10">
            <div className="flex items-center gap-3">
              <Target className="text-emerald-600" />

              <h3 className="text-2xl font-bold text-slate-900">
                Oportunidade de design
              </h3>
            </div>

            <ul className="mt-6 space-y-4">
              {opportunities.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3"
                >
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-emerald-500" />

                  <p className="leading-7 text-slate-700">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}