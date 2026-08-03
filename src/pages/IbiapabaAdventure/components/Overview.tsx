import {
  Target,
  Lightbulb,
  Mountain,
  MapPinned,
  Tent,
  Compass,
  UserCheck,
  AlertCircle,
} from "lucide-react";
import Topic from "../../../components/Topic";
import { CoresEnum } from "../../../enums/Cores.Enum";

const cards = [
  {
    icon: AlertCircle,
    title: "Problema",
    color: "bg-red-100 text-red-600",
    description:
      "Turistas dependiam de Instagram, WhatsApp e indicações para encontrar trilhas, guias e campings, tornando o planejamento demorado e desorganizado.",
  },
  {
    icon: Target,
    title: "Objetivo",
    color: "bg-sky-100 text-sky-600",
    description:
      "Criar uma plataforma centralizada para facilitar a descoberta de destinos, reserva de guias e organização das experiências na Serra da Ibiapaba.",
  },
  {
    icon: Lightbulb,
    title: "Solução",
    color: "bg-emerald-100 text-emerald-600",
    description:
      "Uma plataforma responsiva reunindo trilhas, campings, guias, filtros inteligentes e dashboard para gerenciamento das reservas.",
  },
];

const features = [
  {
    icon: Mountain,
    title: "Trilhas",
  },
  {
    icon: Tent,
    title: "Campings",
  },
  {
    icon: UserCheck,
    title: "Guias",
  },
  {
    icon: MapPinned,
    title: "Reservas",
  },
  {
    icon: Compass,
    title: "Roteiros",
  },
];

export default function Overview() {
  return (
    <section
      id="overview"
      className="mx-auto container px-20 py-24"
    >
      {/* Header */}

      <Topic
        topico={{ icone: Target, nome: "Visão Geral", cor: CoresEnum.SKY }}
        titulo="Transformando o planejamento de aventuras"
        descricao="O projeto nasceu da necessidade de organizar informações sobre
          ecoturismo na Serra da Ibiapaba. A proposta foi criar uma experiência
          única onde visitantes pudessem descobrir destinos, encontrar guias,
          reservar campings e planejar suas viagens de forma simples e segura."
      />
      
      {/* Cards */}

      <div className="mt-16 grid gap-6 lg:grid-cols-3">

        {cards.map((card) => {

          const Icon = card.icon;

          return (
            <div
              key={card.title}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${card.color}`}
              >
                <Icon size={24} />
              </div>

              <h3 className="text-xl font-semibold text-slate-900">
                {card.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {card.description}
              </p>

            </div>
          );
        })}

      </div>

      {/* Recursos */}

      <div className="mt-20 rounded-[32px] bg-gradient-to-r from-sky-600 to-emerald-600 p-10 text-white">

        <h3 className="text-3xl font-bold">
          O que a plataforma oferece
        </h3>

        <p className="mt-4 max-w-3xl leading-8 text-sky-100">
          A solução foi projetada para reunir todas as etapas do planejamento
          de uma aventura em um único ambiente digital, reduzindo a dependência
          de diferentes canais de comunicação.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">

          {features.map((feature) => {

            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">
                  <Icon size={22} />
                </div>

                <h4 className="font-semibold">
                  {feature.title}
                </h4>

              </div>
            );
          })}

        </div>

      </div>

      {/* Resumo */}

      <div className="mt-20 grid gap-8 lg:grid-cols-2">

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h3 className="text-2xl font-semibold text-slate-900">
            Público-alvo
          </h3>

          <p className="mt-5 leading-8 text-slate-600">
            Turistas, aventureiros, campistas e moradores interessados em
            explorar a Serra da Ibiapaba, além de guias locais e proprietários
            de campings que desejam divulgar seus serviços.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h3 className="text-2xl font-semibold text-slate-900">
            Resultado Esperado
          </h3>

          <p className="mt-5 leading-8 text-slate-600">
            Centralizar informações, facilitar reservas, aumentar a visibilidade
            dos prestadores de serviço locais e proporcionar uma experiência de
            planejamento mais intuitiva para quem deseja conhecer a região.
          </p>
        </div>

      </div>
    </section>
  );
}