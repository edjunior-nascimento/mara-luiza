import {
  Check,
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
    hex: "#0EA5E9",
    className: "bg-sky-500",
  },
  {
    name: "Secondary",
    hex: "#10B981",
    className: "bg-emerald-500",
  },
  {
    name: "Accent",
    hex: "#F59E0B",
    className: "bg-amber-500",
  },
  {
    name: "Background",
    hex: "#F8FAFC",
    className: "bg-slate-100",
  },
  {
    name: "Surface",
    hex: "#FFFFFF",
    className: "bg-white border",
  },
  {
    name: "Text",
    hex: "#0F172A",
    className: "bg-slate-900",
  },
];

const typography = [
  {
    title: "Heading XL",
    className: "text-5xl font-bold",
  },
  {
    title: "Heading",
    className: "text-3xl font-bold",
  },
  {
    title: "Subtitle",
    className: "text-xl font-semibold",
  },
  {
    title: "Body",
    className: "text-base",
  },
];

const buttons = [
  {
    title: "Primary",
    className:
      "bg-slate-900 text-white hover:bg-slate-800",
  },
  {
    title: "Secondary",
    className:
      "border border-slate-300 bg-white hover:bg-slate-50",
  },
  {
    title: "Success",
    className:
      "bg-emerald-500 text-white hover:bg-emerald-600",
  },
];

const spacing = [
  "8px",
  "16px",
  "24px",
  "32px",
  "48px",
  "64px",
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
          topico={{ icone: Palette, nome: "Design System", cor: CoresEnum.SKY }}
          titulo="Construindo uma interface consistente"
          descricao="Após validar os fluxos e wireframes foi criado um Design System
            simples, escalável e focado em manter consistência visual durante
            todo o desenvolvimento da plataforma."
        />

        {/* Colors */}

        <div className="mt-24">

          <div className="mb-10 flex items-center gap-3">

            <Palette className="text-sky-600" />

            <h3 className="text-3xl font-bold text-slate-900">
              Paleta de cores
            </h3>

          </div>

          <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-6">

            {colors.map((color) => (

              <div
                key={color.name}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
              >

                <div className={`h-32 ${color.className}`} />

                <div className="p-6">

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

        <div className="mt-24">

          <div className="mb-10 flex items-center gap-3">

            <Type className="text-sky-600" />

            <h3 className="text-3xl font-bold text-slate-900">
              Tipografia
            </h3>

          </div>

          <div className="space-y-5 rounded-[32px] border border-slate-200 bg-white p-10 shadow-sm">

            {typography.map((item) => (

              <div
                key={item.title}
                className="flex items-center justify-between border-b border-slate-100 pb-5 last:border-none"
              >

                <div>

                  <p className="text-sm uppercase tracking-wider text-slate-500">
                    {item.title}
                  </p>

                  <h4 className={`${item.className} mt-2 text-slate-900`}>
                    The quick brown fox jumps over the lazy dog
                  </h4>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* Components */}

        <div className="mt-24">

          <div className="mb-10 flex items-center gap-3">

            <Component className="text-sky-600" />

            <h3 className="text-3xl font-bold text-slate-900">
              Componentes
            </h3>

          </div>

          <div className="grid gap-8 lg:grid-cols-2">

            <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">

              <h4 className="text-xl font-bold text-slate-900">
                Botões
              </h4>

              <div className="mt-8 flex flex-wrap gap-4">

                {buttons.map((button) => (

                  <button
                    key={button.title}
                    className={`rounded-2xl px-6 py-4 font-medium transition ${button.className}`}
                  >
                    {button.title}
                  </button>

                ))}

              </div>

            </div>

            <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">

              <h4 className="text-xl font-bold text-slate-900">
                Chips
              </h4>

              <div className="mt-8 flex flex-wrap gap-4">

                {[
                  "Camping",
                  "Trilhas",
                  "Cachoeiras",
                  "Guias",
                ].map((chip) => (

                  <span
                    key={chip}
                    className="rounded-full bg-sky-100 px-5 py-3 text-sm font-medium text-sky-700"
                  >
                    {chip}
                  </span>

                ))}

              </div>

            </div>

          </div>

        </div>

        {/* Grid */}

        <div className="mt-24 grid gap-8 lg:grid-cols-2">

          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">

            <div className="mb-6 flex items-center gap-3">

              <Smartphone className="text-sky-600" />

              <h3 className="text-2xl font-bold">
                Grid & Spacing
              </h3>

            </div>

            <div className="space-y-4">

              {spacing.map((space) => (

                <div
                  key={space}
                  className="flex items-center justify-between"
                >

                  <span>{space}</span>

                  <div
                    style={{ width: space }}
                    className="h-4 rounded-full bg-sky-500"
                  />

                </div>

              ))}

            </div>

          </div>

          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">

            <div className="mb-6 flex items-center gap-3">

              <Check className="text-emerald-600" />

              <h3 className="text-2xl font-bold">
                Princípios
              </h3>

            </div>

            <ul className="space-y-5">

              {[
                "Consistência visual",
                "Mobile First",
                "Acessibilidade",
                "Hierarquia clara",
                "Componentização",
                "Escalabilidade",
              ].map((item) => (

                <li
                  key={item}
                  className="flex items-center gap-3"
                >

                  <Check className="text-emerald-500" size={18} />

                  <span className="text-slate-700">
                    {item}
                  </span>

                </li>

              ))}

            </ul>

          </div>

        </div>

      </div>
    </section>
  );
}