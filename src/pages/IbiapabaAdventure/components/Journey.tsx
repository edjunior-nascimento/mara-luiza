import {
  CalendarRange,
  Camera,
  CheckCircle2,
  Compass,
  Map,
  Search,
  Star,
} from "lucide-react";
import Topic from "../../../components/Topic";
import { CoresEnum } from "../../../enums/Cores.Enum";

const journey = [
  {
    icon: Search,
    title: "Descoberta",
    emotion: "😊",
    color: "bg-emerald-100 text-emerald-700",
    description:
      "O usuário procura destinos para conhecer na Serra da Ibiapaba.",

    actions: [
      "Pesquisa no Google",
      "Busca vídeos nas redes sociais",
      "Pergunta a amigos",
    ],

    pain: "Informações espalhadas em diversos sites e perfis.",
    opportunity:
      "Centralizar atrações, trilhas e experiências em um único lugar.",
  },
  {
    icon: Map,
    title: "Planejamento",
    emotion: "😐",
    color: "bg-amber-100 text-amber-700",
    description:
      "Compara roteiros, preços e escolhe quais passeios realizar.",

    actions: [
      "Analisa avaliações",
      "Verifica localização",
      "Escolhe roteiro",
    ],

    pain: "Poucos detalhes sobre os passeios disponíveis.",
    opportunity:
      "Exibir mapas, fotos, duração, dificuldade e recomendações.",
  },
  {
    icon: CalendarRange,
    title: "Reserva",
    emotion: "😕",
    color: "bg-red-100 text-red-600",
    description:
      "Entra em contato para reservar hospedagem ou contratar um guia.",

    actions: [
      "Envia mensagens",
      "Confirma disponibilidade",
      "Negocia horários",
    ],

    pain: "Processo manual pelo WhatsApp demora e gera insegurança.",
    opportunity:
      "Disponibilizar reservas online e confirmação imediata.",
  },
  {
    icon: Compass,
    title: "Experiência",
    emotion: "🤩",
    color: "bg-sky-100 text-sky-700",
    description:
      "Realiza a trilha e utiliza o aplicativo como apoio durante o passeio.",

    actions: [
      "Segue mapas",
      "Consulta informações",
      "Registra fotos",
    ],

    pain: "Pode faltar sinal de internet em algumas regiões.",
    opportunity:
      "Disponibilizar conteúdo offline e navegação simplificada.",
  },
  {
    icon: Camera,
    title: "Compartilhar",
    emotion: "😍",
    color: "bg-violet-100 text-violet-700",
    description:
      "Após a viagem, compartilha fotos e avalia a experiência.",

    actions: [
      "Publica nas redes sociais",
      "Avalia o passeio",
      "Recomenda aos amigos",
    ],

    pain: "Não existe um histórico das viagens realizadas.",
    opportunity:
      "Criar perfil com avaliações, favoritos e histórico de aventuras.",
  },
];

export default function Journey() {
  return (
    <section
      id="journey"
      className="bg-white py-28 px-20"
    >
      <div className="mx-auto container px-6">
        {/* Header */}
        <Topic
          topico={{ icone: Compass, nome: "User Journey", cor: CoresEnum.SKY }}
          titulo="Jornada do usuário"
          descricao="A jornada representa o caminho percorrido pelos turistas desde o
            primeiro contato com o destino até o compartilhamento da experiência,
            evidenciando oportunidades para melhorar cada etapa."
        />
        
        {/* Timeline */}

        <div className="relative mt-24">
          <div className="absolute left-8 top-0 hidden h-full w-px bg-slate-200 lg:block" />

          <div className="space-y-10">
            {journey.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className="relative flex flex-col gap-6 lg:flex-row"
                >
                  {/* Timeline */}

                  <div className="relative z-10 flex items-start lg:w-24 lg:justify-center">
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg ${step.color}`}
                    >
                      <Icon size={28} />
                    </div>
                  </div>

                  {/* Card */}

                  <div className="flex-1 rounded-[32px] border border-slate-200 bg-slate-50 p-8 shadow-sm transition hover:shadow-xl">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <p className="text-sm font-medium uppercase tracking-wider text-sky-600">
                          Etapa {index + 1}
                        </p>

                        <h3 className="mt-2 text-2xl font-bold text-slate-900">
                          {step.title}
                        </h3>
                      </div>

                      <span className="text-4xl">{step.emotion}</span>
                    </div>

                    <p className="mt-6 leading-8 text-slate-600">
                      {step.description}
                    </p>

                    <div className="mt-8 grid gap-6 lg:grid-cols-3">
                      {/* Ações */}

                      <InfoCard
                        title="Ações"
                        icon={<CheckCircle2 size={18} />}
                      >
                        <ul className="space-y-3">
                          {step.actions.map((action) => (
                            <li
                              key={action}
                              className="flex items-start gap-3"
                            >
                              <div className="mt-2 h-2 w-2 rounded-full bg-sky-500" />

                              <span>{action}</span>
                            </li>
                          ))}
                        </ul>
                      </InfoCard>

                      {/* Dor */}

                      <InfoCard
                        title="Dor"
                        icon={<Star size={18} />}
                      >
                        <p>{step.pain}</p>
                      </InfoCard>

                      {/* Oportunidade */}

                      <InfoCard
                        title="Oportunidade"
                        icon={<Compass size={18} />}
                      >
                        <p>{step.opportunity}</p>
                      </InfoCard>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

type InfoCardProps = {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
};

function InfoCard({
  title,
  icon,
  children,
}: InfoCardProps) {
  return (
    <div className="rounded-2xl bg-white p-6">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
          {icon}
        </div>

        <h4 className="font-semibold text-slate-900">
          {title}
        </h4>
      </div>

      <div className="leading-7 text-slate-600">{children}</div>
    </div>
  );
}