import {
  Smartphone,
  Monitor,
  Palette,
  Heart,
  ShieldCheck,
  MousePointerClick,
} from "lucide-react";
import Topic from "../../../components/Topic";
import { CoresEnum } from "../../../enums/Cores.Enum";

const highlights = [
  {
    icon: Palette,
    title: "Interface acolhedora",
    description:
      "Cores suaves, bastante espaço em branco e hierarquia visual para transmitir confiança e incentivar a adoção.",
  },
  {
    icon: MousePointerClick,
    title: "CTA em destaque",
    description:
      "Os botões de Doar, Adotar e Ser Voluntário foram priorizados durante toda a navegação.",
  },
  {
    icon: ShieldCheck,
    title: "Transparência",
    description:
      "Informações detalhadas sobre os animais e impacto das doações aumentam a credibilidade da ONG.",
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description:
      "Layouts adaptados para smartphones e desktops garantindo uma experiência consistente.",
  },
];

const screens = [
  "/assets/images/pa_prototipo_alta_1.png",
  "/assets/images/pa_prototipo_alta_2.png",
  "/assets/images/pa_prototipo_alta_3.png",
  "/assets/images/pa_prototipo_alta_4.png",
  "/assets/images/pa_prototipo_alta_5.png",
  "/assets/images/pa_prototipo_alta_6.png",
  "/assets/images/pa_prototipo_alta_7.png",
];

export default function HighFidelity() {
  return (
    <section className="mx-auto container px-6 py-24">

      {/* Header */}
      <Topic
        topico={{ icone: Palette, nome: "UI Design", cor: CoresEnum.EMERALD }}
        titulo="Protótipo de Alta Fidelidade"
        descricao="Após validar os wireframes e a arquitetura da informação, desenvolvi
          o protótipo de alta fidelidade priorizando clareza, acessibilidade e
          uma experiência emocionalmente acolhedora para incentivar doações e
          adoções."
      />

      {/* Destaques */}

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

        {highlights.map((item) => {

          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
                <Icon size={24} />
              </div>

              <h3 className="text-lg font-semibold">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {item.description}
              </p>

            </div>
          );
        })}

      </div>

      {/* Showcase */}

      <div className="mt-20 rounded-[32px] bg-gradient-to-br from-violet-50 via-white to-sky-50 p-8">

        <div className="mb-12 flex items-center gap-5">

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-100 text-violet-600">
            <Monitor size={30} />
          </div>

          <div>

            <h3 className="text-3xl font-bold text-slate-900">
              Principais Telas
            </h3>

            <p className="mt-2 text-slate-600">
              Interface final desenvolvida no Figma.
            </p>

          </div>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {screens.map((image) => (

            <div
              key={image}
              className="group overflow-hidden rounded-3xl bg-white p-5 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <img
                src={image}
                alt=""
                className="rounded-2xl transition duration-500 group-hover:scale-[1.02]"
              />

            </div>

          ))}

        </div>

      </div>

      {/* Resultado */}

      <div className="mt-20 rounded-[32px] bg-gradient-to-r from-violet-600 to-sky-500 p-10 text-white">

        <div className="flex items-start gap-5">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20">
            <Heart size={28} />
          </div>

          <div>

            <h3 className="text-2xl font-semibold">
              Resultado Esperado
            </h3>

            <p className="mt-4 max-w-4xl leading-8 text-violet-100">
              O novo protótipo tornou os processos de adoção e doação mais
              simples, aumentando a transparência da ONG e reduzindo atritos
              durante a navegação. A organização das informações e a
              priorização das ações principais contribuem para uma experiência
              mais intuitiva e confiável.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}