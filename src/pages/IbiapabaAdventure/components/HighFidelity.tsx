import {
  ArrowRight,
  CheckCircle2,
  MonitorSmartphone,
  Smartphone,
  TabletSmartphone,
} from "lucide-react";
import Topic from "../../../components/Topic";
import { CoresEnum } from "../../../enums/Cores.Enum";

const screens = [
  {
    title: "Home",
    image: "images/ibi_prototipo_1.png",
    description:
      "Tela inicial destacando os principais destinos, categorias e busca rápida.",
  },
  {
    title: "Explorar Local",
    image: "/images/high-fidelity/location.png",
    description:
      "Informações detalhadas do atrativo, fotos, mapa, avaliações e ações.",
  },
  {
    title: "Pacote",
    image: "/images/high-fidelity/package.png",
    description:
      "Detalhes completos do pacote turístico, guia responsável e cronograma.",
  },
  {
    title: "Meus Roteiros",
    image: "/images/high-fidelity/routes.png",
    description:
      "Área onde o usuário organiza os locais adicionados ao seu roteiro.",
  },
  {
    title: "Agendamento",
    image: "/images/high-fidelity/booking.png",
    description:
      "Fluxo simples para concluir o agendamento do passeio.",
  },
  {
    title: "Confirmação",
    image: "/images/high-fidelity/success.png",
    description:
      "Confirmação do agendamento com envio automático por e-mail.",
  },
];

const features = [
  "Interface Mobile First",
  "Componentização completa",
  "Design responsivo",
  "Acessibilidade",
  "Design System próprio",
  "Fluxo simplificado",
];

export default function HighFidelity() {
  return (
    <section
      id="high-fidelity"
      className="bg-white py-28 lg:p-20"
    >
      <div className="mx-auto container px-6">
        {/* Header */}
        <Topic
          topico={{ icone: MonitorSmartphone, nome: "High Fidelity", cor: CoresEnum.SKY }}
          titulo="Protótipo de Alta Fidelidade"
          descricao="Após validar os wireframes e estruturar o Design System,
            desenvolvemos o protótipo final com foco em uma experiência simples,
            intuitiva e consistente para dispositivos móveis."
        />

        {/* Mockups */}

        <div className="mt-24 grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {screens.map((screen) => (
            <article
              key={screen.title}
              className="group overflow-hidden rounded-[34px] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="bg-gradient-to-br from-slate-100 to-slate-50 p-2">
                <div className="mx-auto w-[240px] overflow-hidden  border-slate-900 bg-black shadow-xl">
                  <img
                    src={screen.image}
                    alt={screen.title}
                    className="w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900">
                  {screen.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {screen.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Características */}

        <div className="mt-24 grid gap-8 lg:grid-cols-2">
          <div className="rounded-[36px] border border-slate-200 bg-slate-50 p-10">
            <div className="flex items-center gap-3">
              <Smartphone className="text-sky-600" />

              <h3 className="text-3xl font-bold text-slate-900">
                Características do protótipo
              </h3>
            </div>

            <div className="mt-8 space-y-5">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-4"
                >
                  <CheckCircle2
                    size={20}
                    className="text-emerald-500"
                  />

                  <span className="text-slate-700">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[36px] bg-gradient-to-br from-sky-600 to-cyan-600 p-10 text-white shadow-xl">
            <div className="flex items-center gap-3">
              <TabletSmartphone />

              <h3 className="text-3xl font-bold">
                Objetivos do Design
              </h3>
            </div>

            <p className="mt-8 text-lg leading-8 text-sky-100">
              Todo o protótipo foi desenvolvido priorizando simplicidade,
              velocidade de navegação e clareza visual. O objetivo era permitir
              que qualquer usuário encontrasse um destino e concluísse um
              agendamento em poucos minutos.
            </p>

            <a
              href="#prototype"
              className="mt-10 inline-flex items-center gap-3 rounded-2xl bg-white px-7 py-4 font-medium text-slate-900 transition hover:bg-slate-100"
            >
              Ver Protótipo

              <ArrowRight size={18} />
            </a>
          </div>
        </div>

        {/* Resumo */}

        <div className="mt-24 rounded-[36px] bg-slate-900 p-12 text-white">
          <div className="grid gap-8 text-center md:grid-cols-4">
            <Metric
              value="30+"
              label="Telas"
            />

            <Metric
              value="100%"
              label="Responsivo"
            />

            <Metric
              value="1"
              label="Design System"
            />

            <Metric
              value="50+"
              label="Componentes"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

type MetricProps = {
  value: string;
  label: string;
};

function Metric({
  value,
  label,
}: MetricProps) {
  return (
    <div>
      <h3 className="text-5xl font-bold">
        {value}
      </h3>

      <p className="mt-3 uppercase tracking-widest text-slate-400">
        {label}
      </p>
    </div>
  );
}