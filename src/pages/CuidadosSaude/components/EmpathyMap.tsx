import {
  Brain,
  Ear,
  Eye,
  Frown,
  HeartHandshake,
  MessageCircle,
} from "lucide-react";
import Topic from "../../../components/Topic";
import { CoresEnum } from "../../../enums/Cores.Enum";

const empathySections = [
  {
    icon: Brain,
    title: "Pensa",
    color: "bg-violet-100 text-violet-700",
    items: [
      "Não quero depender dos meus filhos.",
      "Tenho medo de esquecer um remédio.",
      "Será que minha pressão está normal?",
      "Preciso cuidar melhor da minha saúde.",
    ],
  },
  {
    icon: HeartHandshake,
    title: "Sente",
    color: "bg-rose-100 text-rose-700",
    items: [
      "Insegurança ao usar aplicativos.",
      "Medo de passar mal quando está sozinho.",
      "Frustração por esquecer tarefas importantes.",
      "Desejo de manter sua independência.",
    ],
  },
  {
    icon: Eye,
    title: "Vê",
    color: "bg-sky-100 text-sky-700",
    items: [
      "Muitos aplicativos diferentes.",
      "Receitas e exames em papel.",
      "Informações espalhadas.",
      "Interfaces complexas e pouco acessíveis.",
    ],
  },
  {
    icon: Ear,
    title: "Ouve",
    color: "bg-amber-100 text-amber-700",
    items: [
      "Orientações de médicos.",
      "Conselhos de familiares.",
      "Lembretes dos filhos.",
      "Informações conflitantes na internet.",
    ],
  },
];

const pains = [
  "Esquece medicamentos.",
  "Perde receitas e exames.",
  "Tem dificuldade em utilizar tecnologia.",
  "Depende frequentemente de familiares.",
  "Fica inseguro durante emergências.",
];

const gains = [
  "Mais autonomia no dia a dia.",
  "Segurança para seguir tratamentos.",
  "Tudo organizado em um único lugar.",
  "Contato rápido com familiares.",
  "Maior tranquilidade e qualidade de vida.",
];

export default function EmpathyMap() {
  return (
    <section
      id="empathy-map"
      className="bg-white py-28 lg:p-20"
    >
      <div className="mx-auto container px-6 px-20">
        {/* Header */}
        <Topic
          topico={{ icone: MessageCircle, nome: "Empathy Map", cor: CoresEnum.VIOLET }}
          titulo="Enxergando o mundo pela perspectiva do usuário"
          descricao="Após consolidar as entrevistas e a pesquisa, foi construído um Mapa
            de Empatia para compreender não apenas o comportamento dos usuários,
            mas também seus sentimentos, motivações e dificuldades durante a
            rotina de cuidados com a saúde."
        />

        {/* Grid */}

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {empathySections.map((section) => {
            const Icon = section.icon;

            return (
              <article
                key={section.title}
                className="rounded-[34px] border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl ${section.color}`}
                >
                  <Icon size={30} />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-slate-900">
                  {section.title}
                </h3>

                <ul className="mt-6 space-y-4">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-emerald-500" />

                      <p className="leading-7 text-slate-600">{item}</p>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        {/* Pain x Gain */}

        <div className="mt-24 grid gap-8 lg:grid-cols-2">
          {/* Pain */}

          <div className="rounded-[36px] border border-red-200 bg-red-50 p-10">
            <div className="flex items-center gap-3">
              <Frown className="text-red-600" />

              <h3 className="text-2xl font-bold text-slate-900">
                Dores (Pains)
              </h3>
            </div>

            <ul className="mt-8 space-y-5">
              {pains.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3"
                >
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-red-500" />

                  <p className="leading-7 text-slate-700">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Gains */}

          <div className="rounded-[36px] border border-emerald-200 bg-emerald-50 p-10">
            <div className="flex items-center gap-3">
              <HeartHandshake className="text-emerald-600" />

              <h3 className="text-2xl font-bold text-slate-900">
                Ganhos (Gains)
              </h3>
            </div>

            <ul className="mt-8 space-y-5">
              {gains.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3"
                >
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-emerald-500" />

                  <p className="leading-7 text-slate-700">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Insight */}

        <div className="mt-24 rounded-[40px] bg-gradient-to-r from-violet-600 to-sky-600 p-12 text-white shadow-2xl">
          <h3 className="text-3xl font-bold">
            Principal insight obtido
          </h3>

          <p className="mt-8 max-w-4xl text-xl leading-9 text-violet-50">
            O maior desafio não era ensinar pessoas idosas a utilizar
            tecnologia, mas reduzir sua carga cognitiva. Quanto menos decisões
            elas precisassem tomar durante a rotina, maior seria a autonomia,
            confiança e adesão ao tratamento.
          </p>
        </div>
      </div>
    </section>
  );
}