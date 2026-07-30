import {
  PencilRuler,
  LayoutPanelTop,
  Smartphone,
  Wand2,
} from "lucide-react";
import Topic from "../../../components/Topic";
import { CoresEnum } from "../../../enums/Cores.Enum";

const wireframes = [
  {
    title: "Tela Inicial",
    description:
      "Prioriza as tarefas do dia, mostrando lembretes, indicadores de saúde e acesso rápido às principais funcionalidades.",
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
      "Formulário reduzido para registrar pressão arterial e glicemia rapidamente.",
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
      className="bg-white py-28"
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

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {wireframes.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-[34px] border border-slate-200 bg-slate-50 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="aspect-[4/3] bg-white p-6">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full rounded-2xl border border-slate-200 object-contain"
                />
              </div>

              <div className="p-8">
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

        {/* Insight */}

        <div className="mt-24 rounded-[40px] bg-gradient-to-r from-emerald-600 to-sky-600 p-12 text-white shadow-2xl">
          <div className="flex items-center gap-3">
            <Smartphone size={30} />

            <h3 className="text-3xl font-bold">
              Aprendizado desta etapa
            </h3>
          </div>

          <p className="mt-8 max-w-5xl text-xl leading-9 text-emerald-50">
            Trabalhar inicialmente com wireframes permitiu validar a experiência
            antes do refinamento visual. Isso tornou o processo mais ágil,
            reduziu retrabalho e garantiu que as decisões de interface fossem
            guiadas pelas necessidades dos usuários, e não apenas pela estética.
          </p>
        </div>
      </div>
    </section>
  );
}