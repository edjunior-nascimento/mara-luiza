import {
  Lightbulb,
  PencilRuler,
  LayoutTemplate,
  Route,
  ArrowRight,
} from "lucide-react";
import Topic from "../../../components/Topic";
import { CoresEnum } from "../../../enums/Cores.Enum";

const decisions = [
  {
    icon: Route,
    title: "Fluxos simplificados",
    description:
      "As principais ações (Doar, Adotar e Ser Voluntário) passaram a estar sempre acessíveis, reduzindo etapas desnecessárias.",
  },
  {
    icon: LayoutTemplate,
    title: "Arquitetura da Informação",
    description:
      "Os conteúdos foram reorganizados para facilitar a descoberta de informações importantes e reduzir dúvidas durante a navegação.",
  },
  {
    icon: PencilRuler,
    title: "Wireframes",
    description:
      "Criados inicialmente em baixa fidelidade para validar estrutura, hierarquia visual e posicionamento dos elementos antes do design final.",
  },
];

export default function Ideation() {
  return (
    <section className="mx-auto container px-6 py-24">

      {/* Header */}

      <Topic
        topico={{ icone: Lightbulb, nome: "Ideação", cor: CoresEnum.AMBER }}
        titulo="Transformando Insights em Soluções"
        descricao="Após compreender as necessidades dos usuários, iniciei a etapa de
          ideação explorando diferentes possibilidades de solução. O objetivo
          era criar uma experiência simples, intuitiva e acolhedora para quem
          desejava doar, adotar ou apoiar a ONG."
      />

      {/* Processo */}

      <div className="mt-16 grid gap-6 md:grid-cols-4">

        <Step
          number="01"
          title="Pesquisa"
          color="bg-violet-500"
        />

        <Arrow />

        <Step
          number="02"
          title="Insights"
          color="bg-blue-500"
        />

        <Arrow />

        <Step
          number="03"
          title="Ideação"
          color="bg-amber-500"
        />

        <Arrow />

        <Step
          number="04"
          title="Wireframes"
          color="bg-emerald-500"
        />

      </div>

      {/* Cards */}

      <div className="mt-16 grid gap-6 lg:grid-cols-3">

        <div className="rounded-3xl border border-amber-100 bg-gradient-to-br from-amber-50 to-white p-8 shadow-sm">

          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-600">
            <Lightbulb size={28} />
          </div>

          <h3 className="text-2xl font-semibold">
            Objetivos da Solução
          </h3>

          <ul className="mt-6 space-y-4 leading-7 text-slate-600">
            <li>• Facilitar o processo de doação.</li>
            <li>• Destacar as ações principais.</li>
            <li>• Reduzir dúvidas durante a adoção.</li>
            <li>• Melhorar a organização das informações.</li>
            <li>• Criar uma experiência acessível e acolhedora.</li>
          </ul>

        </div>

        <div className="lg:col-span-2 grid gap-6">

          {decisions.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="rounded-3xl bg-white border border-slate-200 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >

                <div className="flex gap-5">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-violet-600">
                    <Icon size={24} />
                  </div>

                  <div>

                    <h3 className="text-xl font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      {item.description}
                    </p>

                  </div>

                </div>

              </div>

            );
          })}

        </div>

      </div>

      {/* Wireframes */}

      <div className="mt-20">

        <h3 className="text-3xl font-bold text-slate-900">
          Wireframes Digitais
        </h3>

        <p className="mt-4 max-w-3xl leading-8 text-slate-600">
          Os wireframes permitiram validar a estrutura da interface antes do
          desenvolvimento visual. Nessa etapa foram definidos hierarquia,
          posicionamento dos elementos e fluxo das principais tarefas.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">

          <div className="overflow-hidden rounded-3xl bg-white p-5 shadow-lg">

            <img
              src="/assets/images/pa_baixa_fidelidade.png"
              alt="Wireframes"
              className="rounded-2xl"
            />

          </div>

          <div className="overflow-hidden rounded-3xl bg-white p-5 shadow-lg">

            <img
              src="/assets/images/pa_baixa_fidelidade_instrucao.png"
              alt="Instruções"
              className="rounded-2xl"
            />

          </div>

        </div>

      </div>

    </section>
  );
}

function Step({
  number,
  title,
  color,
}: {
  number: string;
  title: string;
  color: string;
}) {
  return (
    <div className="flex items-center gap-4">

      <div
        className={`flex h-14 w-14 items-center justify-center rounded-2xl text-white ${color}`}
      >
        {number}
      </div>

      <span className="font-semibold text-slate-700">
        {title}
      </span>

    </div>
  );
}

function Arrow() {
  return (
    <div className="hidden items-center justify-center lg:flex">
      <ArrowRight className="text-slate-300" size={28} />
    </div>
  );
}