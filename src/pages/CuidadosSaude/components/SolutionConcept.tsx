import {
  Activity,
  Bell,
  HeartHandshake,
  LayoutDashboard,
  LayoutGrid,
  Pill,
  Shield,
  Smartphone,
  Users,
} from "lucide-react";
import Topic from "../../../components/Topic";
import { CoresEnum } from "../../../enums/Cores.Enum";

const pillars = [
  {
    icon: Pill,
    title: "Gerenciamento de medicamentos",
    description:
      "Lembretes inteligentes com foto do medicamento, dosagem, horário e confirmação da administração.",
  },
  {
    icon: Activity,
    title: "Monitoramento da saúde",
    description:
      "Registro de pressão arterial, glicemia e outros indicadores, permitindo acompanhar a evolução ao longo do tempo.",
  },
  {
    icon: HeartHandshake,
    title: "Hábitos saudáveis",
    description:
      "Plano alimentar, exercícios físicos e orientações personalizadas em um único ambiente.",
  },
  {
    icon: Shield,
    title: "Segurança",
    description:
      "Acesso rápido aos contatos de emergência, histórico médico e informações importantes em situações críticas.",
  },
];

const ecosystem = [
  {
    icon: Users,
    title: "Idoso",
    description:
      "Gerencia sua rotina diária com autonomia através de uma experiência simples e acessível.",
  },
  {
    icon: HeartHandshake,
    title: "Familiar",
    description:
      "Acompanha a evolução da saúde, recebe alertas importantes e oferece suporte quando necessário.",
  },
  {
    icon: Activity,
    title: "Profissionais",
    description:
      "Utilizam o histórico compartilhado para acompanhar tratamentos e orientar o paciente.",
  },
];

export default function SolutionConcept() {
  return (
    <section
      id="solution-concept"
      className="bg-white py-28"
    >
      <div className="mx-auto container px-6">
        {/* Header */}

        <Topic
          topico={{ icone: LayoutGrid, nome: "Conceito da Solução", cor: CoresEnum.SKY }}
          titulo="Uma única plataforma para cuidar da saúde de forma simples"
          descricao="Em vez de criar mais um aplicativo isolado, a proposta foi
            desenvolver um ecossistema capaz de centralizar toda a rotina de
            cuidados da pessoa idosa. O objetivo era reduzir a carga cognitiva,
            aumentar a autonomia e facilitar o acompanhamento por familiares e
            profissionais da saúde."
        />

        {/* Conceito */}

        <div className="mt-20 overflow-hidden rounded-[40px] bg-gradient-to-br from-emerald-600 via-teal-600 to-sky-600 p-12 text-white shadow-2xl">
          <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:items-center">
            <div>
              <h3 className="text-4xl font-bold">
                All-in-One Health
              </h3>

              <p className="mt-8 text-xl leading-9 text-emerald-50">
                Um aplicativo que acompanha o usuário durante toda a sua rotina,
                reunindo medicamentos, indicadores de saúde, alimentação,
                exercícios físicos, consultas e contatos de emergência em uma
                experiência única, intuitiva e acessível.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                {[
                  "Autonomia",
                  "Acessibilidade",
                  "Prevenção",
                  "Monitoramento",
                  "Segurança",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <div className="flex h-72 w-72 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur">
                <Smartphone size={120} />
              </div>
            </div>
          </div>
        </div>

        {/* Pilares */}

        <div className="mt-24">
          <h3 className="text-center text-3xl font-bold text-slate-900">
            Os quatro pilares da solução
          </h3>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {pillars.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-[32px] border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
                    <Icon size={30} />
                  </div>

                  <h4 className="mt-8 text-2xl font-bold text-slate-900">
                    {item.title}
                  </h4>

                  <p className="mt-5 leading-8 text-slate-600">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        {/* Ecossistema */}

        <div className="mt-24 rounded-[40px] border border-slate-200 bg-slate-50 p-12">
          <h3 className="text-center text-3xl font-bold text-slate-900">
            Um ecossistema conectado
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-slate-600">
            O aplicativo não foi pensado apenas para o idoso, mas para conectar
            todos os envolvidos no cuidado com sua saúde.
          </p>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {ecosystem.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[32px] bg-white p-8 shadow-sm"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-100 text-sky-600">
                    <Icon size={30} />
                  </div>

                  <h4 className="mt-8 text-2xl font-bold text-slate-900">
                    {item.title}
                  </h4>

                  <p className="mt-5 leading-8 text-slate-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Valor */}

        <div className="mt-24 rounded-[40px] bg-slate-900 p-12 text-white">
          <div className="flex items-center gap-3">
            <Bell size={28} />

            <h3 className="text-3xl font-bold">
              Proposta de valor
            </h3>
          </div>

          <p className="mt-8 max-w-5xl text-xl leading-9 text-slate-300">
            A solução foi projetada para transformar uma rotina fragmentada e
            complexa em uma experiência organizada, previsível e acessível.
            Centralizando informações e automatizando tarefas repetitivas, o
            aplicativo reduz esquecimentos, fortalece a autonomia do usuário e
            promove maior tranquilidade para toda a rede de cuidados.
          </p>
        </div>
      </div>
    </section>
  );
}