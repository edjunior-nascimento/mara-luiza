import {
  PencilRuler,
  LayoutPanelTop,
  Smartphone,
  Wand2,
  ExternalLink,
} from "lucide-react";
import Topic from "../../../components/Topic";
import { CoresEnum } from "../../../enums/Cores.Enum";

const wireframes = [
  {
    title: "Tela Inicial",
    description:
      "Prioriza as tarefas do dia, mostra indicadores de saúde e acesso rápido às principais funcionalidades.",
    image: "/images/senior-health/wireframe-home.png",
  },
  {
    title: "Medicamentos",
    description:
      "Fluxo simplificado para confirmar a administração do medicamento com poucos toques.",
    image: "/images/senior-health/wireframe-medicines.png",
  },
  {
    title: "Registro de Saúde",
    description:
      "Tela simples para registrar pressão arterial/glicemia rapidamente.",
    image: "/images/senior-health/wireframe-health.png",
  },
  {
    title: "Emergência",
    description:
      "Tela dedicada para acesso imediato aos contatos e serviços essenciais.",
    image: "/images/senior-health/wireframe-emergency.png",
  },
];

const decisions = [
  "Botões grandes para facilitar a interação.",
  "Poucas opções por tela para reduzir a carga cognitiva.",
  "Hierarquia visual baseada nas tarefas mais frequentes.",
  "Navegação consistente entre todas as telas.",
  "Campos simplificados para reduzir digitação.",
  "Elementos posicionados dentro da área de alcance do polegar.",
];

export default function Wireframes() {
  return (
    <section
      id="wireframes"
      className="bg-white py-28 lg:p-20"
    >
      <div className="mx-auto container px-6">
        {/* Header */}
        <Topic
          topico={{ icone: PencilRuler, nome: "Wireframes", cor: CoresEnum.SLATE }}
          titulo="Transformando ideias em estrutura"
          descricao="Antes de explorar cores e identidade visual, desenvolvi wireframes
            de baixa fidelidade para validar a arquitetura da informação, os
            fluxos de navegação e a disposição dos elementos na interface."
        />

        {/* Wireframes */}

        <div className="mt-20 grid gap-2 md:grid-cols-4">
          {wireframes.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-[34px] border border-slate-200 bg-lime-100 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="aspect-[9/16] bg-white p-6">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full rounded-2xl border border-slate-200 object-contain"
                />
              </div>

              <div className="p-8 bg-lime-100">
                <h3 className="text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}

        <div className="mt-10 flex justify-center">
          <a
            href="https://www.figma.com/design/ObqXLcFceuZuUB8kH7Zpd2/Cuidado-com-a-saude-de-idosos-All-in-one?node-id=150-2626&t=f5DKySyWsRw8G2Ob-1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-2xl bg-slate-900 px-8 py-4 font-medium text-white transition hover:bg-slate-800"
          >
            Abrir Wireframe Completono Figma

            <ExternalLink size={18} />
          </a>
        </div>

        {/* Design Decisions */}

        <div className="mt-24 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="rounded-[36px] bg-gradient-to-br from-slate-900 to-slate-700 p-10 text-white">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">
              <LayoutPanelTop size={30} />
            </div>

            <h3 className="mt-8 text-3xl font-bold">
              Principais decisões
            </h3>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Os wireframes permitiram testar rapidamente diferentes
              possibilidades de layout antes de investir tempo na interface de
              alta fidelidade.
            </p>
          </div>

          <div className="rounded-[36px] border border-slate-200 bg-slate-50 p-10">
            <ul className="space-y-6">
              {decisions.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-4"
                >
                  <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                    <Wand2 size={18} />
                  </div>

                  <p className="leading-7 text-slate-700">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}