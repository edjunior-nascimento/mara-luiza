import {
  Briefcase,
  Clock3,
  Flag,
  Smartphone,
  Target,
  UserRound,
} from "lucide-react";
import Topic from "../../../components/Topic";
import { CoresEnum } from "../../../enums/Cores.Enum";

const overview = [
  {
    icon: Target,
    title: "Objetivo",
    description:
      "Projetar uma solução digital que simplifique o acompanhamento da saúde da pessoa idosa, reunindo monitoramento, medicamentos, alimentação, exercícios físicos e contatos de emergência em um único aplicativo.",
  },
  {
    icon: Smartphone,
    title: "Plataforma",
    description:
      "Aplicativo mobile desenvolvido para acompanhar o usuário durante toda sua rotina, permitindo acesso rápido às informações em qualquer momento do dia.",
  },
  {
    icon: UserRound,
    title: "Público-alvo",
    description:
      "Pessoas idosas com doenças crônicas, familiares, cuidadores e profissionais da saúde envolvidos no acompanhamento contínuo do paciente.",
  },
];

const projectInfo = [
  {
    label: "Categoria",
    value: "UX/UI Design",
  },
  {
    label: "Tipo de projeto",
    value: "Estudo de Caso",
  },
  {
    label: "Duração",
    value: "5 semanas",
  },
  {
    label: "Ferramentas",
    value: "Figma • FigJam • Google Forms",
  },
  {
    label: "Meu papel",
    value: "UX Research • UX/UI • Prototipação",
  },
];

export default function ProjectOverview() {
  return (
    <section
      id="overview"
      className="bg-white py-28"
    >
      <div className="mx-auto container px-6">
        {/* Header */}
       <Topic
          topico={{ icone: Briefcase, nome: "Visão Geral", cor: CoresEnum.EMERALD }}
          titulo="Sobre o projeto"
          descricao="Este estudo de caso surgiu a partir da necessidade de compreender os
            desafios enfrentados por pessoas idosas no gerenciamento da própria
            saúde e transformar essa rotina em uma experiência mais simples,
            acessível e segura por meio de uma solução digital centrada no
            usuário."
        />

        {/* Cards */}

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {overview.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-[32px] border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-2 hover:shadow-xl"
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

        {/* Informações */}

        <div className="mt-24 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-[36px] bg-gradient-to-br from-slate-900 to-slate-800 p-12 text-white shadow-2xl">
            <div className="flex items-center gap-3">
              <Flag size={28} />

              <h3 className="text-3xl font-bold">
                Desafio do projeto
              </h3>
            </div>

            <p className="mt-8 text-xl leading-9 text-slate-300">
              Desenvolver uma experiência capaz de reduzir a complexidade da
              rotina de cuidados com a saúde, centralizando informações que
              normalmente estão distribuídas entre diferentes aplicativos,
              cadernos, receitas médicas e lembretes informais.
            </p>

            <div className="mt-10 rounded-2xl bg-white/10 p-6 backdrop-blur">
              <p className="text-lg leading-8 text-slate-200">
                A proposta foi criar uma plataforma que ajudasse pessoas idosas
                a manter hábitos saudáveis de forma preventiva, promovendo maior
                autonomia e facilitando o acompanhamento por familiares e
                profissionais da saúde.
              </p>
            </div>
          </div>

          <aside className="rounded-[36px] border border-slate-200 bg-white p-10 shadow-sm">
            <div className="flex items-center gap-3">
              <Clock3 className="text-emerald-600" />

              <h3 className="text-2xl font-bold text-slate-900">
                Informações
              </h3>
            </div>

            <div className="mt-8 space-y-6">
              {projectInfo.map((item) => (
                <div
                  key={item.label}
                  className="border-b border-slate-100 pb-5 last:border-none last:pb-0"
                >
                  <p className="text-sm uppercase tracking-wide text-slate-500">
                    {item.label}
                  </p>

                  <p className="mt-2 font-semibold text-slate-900">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}