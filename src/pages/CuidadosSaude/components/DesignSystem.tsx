import {
  Accessibility,
  Component,
  Palette,
  Smartphone,
  Type,
} from "lucide-react";
import Topic from "../../../components/Topic";
import { CoresEnum } from "../../../enums/Cores.Enum";

const colors = [
  {
    name: "Primary",
    hex: "#14B8A6",
    className: "bg-teal-500",
  },
  {
    name: "Secondary",
    hex: "#0EA5E9",
    className: "bg-sky-500",
  },
  {
    name: "Success",
    hex: "#22C55E",
    className: "bg-green-500",
  },
  {
    name: "Warning",
    hex: "#F59E0B",
    className: "bg-amber-500",
  },
  {
    name: "Danger",
    hex: "#EF4444",
    className: "bg-red-500",
  },
  {
    name: "Neutral",
    hex: "#334155",
    className: "bg-slate-700",
  },
];

const typography = [
  {
    title: "Heading",
    example: "Aa",
    size: "48px / Bold",
  },
  {
    title: "Subheading",
    example: "Aa",
    size: "32px / Semibold",
  },
  {
    title: "Body",
    example: "Aa",
    size: "18px / Regular",
  },
  {
    title: "Caption",
    example: "Aa",
    size: "14px / Medium",
  },
];

const principles = [
  "Contraste elevado para facilitar a leitura.",
  "Tipografia ampliada para melhor legibilidade.",
  "Botões grandes e áreas de toque confortáveis.",
  "Ícones sempre acompanhados de texto.",
  "Poucas ações por tela para reduzir carga cognitiva.",
  "Feedback visual imediato após cada interação.",
];

export default function DesignSystem() {
  return (
    <section
      id="design-system"
      className="bg-slate-50 py-28"
    >
      <div className="mx-auto container px-6">
        {/* Header */}
        <Topic
          topico={{ icone: Component, nome: "Design System", cor: CoresEnum.EMERALD }}
          titulo="Construindo uma interface consistente e acessível"
          descricao="O Design System foi desenvolvido para garantir consistência visual,
            facilitar a escalabilidade do produto e, principalmente, oferecer
            uma experiência acessível para pessoas idosas."
        />
  

        {/* Colors */}

        <div className="mt-20">
          <div className="flex items-center gap-3">
            <Palette className="text-emerald-600" />

            <h3 className="text-3xl font-bold text-slate-900">
              Paleta de cores
            </h3>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3 lg:grid-cols-6">
            {colors.map((color) => (
              <div
                key={color.name}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
              >
                <div className={`h-28 ${color.className}`} />

                <div className="p-5">
                  <h4 className="font-semibold text-slate-900">
                    {color.name}
                  </h4>

                  <p className="mt-2 text-sm text-slate-500">
                    {color.hex}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Typography */}

        <div className="mt-24 grid gap-8 lg:grid-cols-[1fr_1.3fr]">
          <div className="rounded-[36px] bg-white p-10 shadow-sm">
            <div className="flex items-center gap-3">
              <Type className="text-sky-600" />

              <h3 className="text-3xl font-bold text-slate-900">
                Tipografia
              </h3>
            </div>

            <p className="mt-6 leading-8 text-slate-600">
              Foram utilizados tamanhos maiores que o padrão para aumentar a
              legibilidade e reduzir o esforço visual durante o uso do
              aplicativo.
            </p>
          </div>

          <div className="rounded-[36px] border border-slate-200 bg-white p-10">
            <div className="space-y-8">
              {typography.map((item) => (
                <div
                  key={item.title}
                  className="flex items-center justify-between border-b border-slate-100 pb-6 last:border-none last:pb-0"
                >
                  <div>
                    <h4 className="font-semibold text-slate-900">
                      {item.title}
                    </h4>

                    <p className="mt-2 text-slate-500">
                      {item.size}
                    </p>
                  </div>

                  <span className="text-5xl font-bold text-slate-800">
                    {item.example}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Components */}

        <div className="mt-24 rounded-[40px] border border-slate-200 bg-white p-12 shadow-sm">
          <div className="flex items-center gap-3">
            <Smartphone className="text-indigo-600" />

            <h3 className="text-3xl font-bold text-slate-900">
              Componentes reutilizáveis
            </h3>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl bg-slate-50 p-8 text-center">
              <button className="rounded-2xl bg-emerald-600 px-8 py-4 font-semibold text-white">
                Botão Primário
              </button>
            </div>

            <div className="rounded-3xl bg-slate-50 p-8 text-center">
              <button className="rounded-2xl border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-700">
                Botão Secundário
              </button>
            </div>

            <div className="rounded-3xl bg-slate-50 p-8">
              <div className="rounded-2xl border border-slate-300 bg-white p-4">
                <label className="text-sm text-slate-500">
                  Pressão arterial
                </label>

                <input
                  type="text"
                  placeholder="120 / 80"
                  className="mt-2 w-full border-none bg-transparent text-lg outline-none"
                />
              </div>
            </div>

            <div className="rounded-3xl bg-slate-50 p-8">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h4 className="font-semibold text-slate-900">
                  Card de informação
                </h4>

                <p className="mt-2 text-sm text-slate-500">
                  Exemplo de componente reutilizável.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Accessibility */}

        <div className="mt-24 rounded-[40px] bg-gradient-to-r from-emerald-600 to-sky-600 p-12 text-white shadow-2xl">
          <div className="flex items-center gap-3">
            <Accessibility size={30} />

            <h3 className="text-3xl font-bold">
              Diretrizes de acessibilidade
            </h3>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {principles.map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-white/10 p-6 backdrop-blur"
              >
                <p className="leading-7 text-emerald-50">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-10 max-w-5xl text-lg leading-9 text-emerald-50">
            Mais do que criar uma interface bonita, o Design System foi pensado
            para garantir que usuários com limitações visuais, cognitivas ou
            pouca familiaridade com tecnologia consigam utilizar o aplicativo
            com autonomia e segurança.
          </p>
        </div>
      </div>
    </section>
  );
}