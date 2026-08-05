import {
  Network,
  FolderTree,
  Route,
  LayoutDashboard,
  Workflow,
} from "lucide-react";
import Topic from "../../../components/Topic";
import { CoresEnum } from "../../../enums/Cores.Enum";

const structure = [
  {
    icon: FolderTree,
    title: "Arquitetura da Informação",
    description:
      "Organização dos conteúdos para facilitar a navegação e reduzir o esforço cognitivo.",
  },
  {
    icon: Route,
    title: "Fluxos Definidos",
    description:
      "Mapeamento das principais jornadas como adoção, doação e cadastro de voluntários.",
  },
  {
    icon: LayoutDashboard,
    title: "Hierarquia",
    description:
      "Priorização das ações mais importantes para aumentar conversão e usabilidade.",
  },
];

export default function Sitemap() {
  return (
    <section className="mx-auto container px-6 py-24 lg:p-20">

      {/* Header */}

      <Topic 
        topico={{icone: Workflow, nome: "Arquitetura da Informação", cor: CoresEnum.SKY}}
        titulo="Sitemap"
        descricao="Antes do design visual, organizei toda a estrutura do produto para
          garantir uma navegação intuitiva. O sitemap serviu como base para
          validar a hierarquia das informações e definir os principais fluxos
          do usuário."
      />

      {/* Cards */}

      <div className="mt-16 grid gap-6 lg:grid-cols-3">

        {structure.map((item) => {

          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-sky-600">
                <Icon size={26} />
              </div>

              <h3 className="text-xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {item.description}
              </p>
            </div>
          );
        })}

      </div>

      {/* Imagem */}

      <div className="mt-20 overflow-hidden rounded-[32px] border border-slate-200 bg-white p-6 shadow-xl">

        <div className="mb-8 flex items-center gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-violet-600">
            <Network size={28} />
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-slate-900">
              Estrutura do Produto
            </h3>

            <p className="text-slate-600">
              Organização das páginas e relações entre os conteúdos antes da
              criação da interface.
            </p>
          </div>

        </div>

        <img
          src="/assets/images/sitemap.png"
          alt="Sitemap do projeto"
          className="w-full rounded-2xl"
        />

      </div>

      {/* Insight */}

      <div className="mt-16 rounded-3xl bg-gradient-to-r from-violet-600 to-sky-500 p-10 text-white">

        <h3 className="text-2xl font-semibold">
          Decisão de Design
        </h3>

        <p className="mt-4 max-w-4xl leading-8 text-violet-100">
          A reorganização da arquitetura da informação permitiu destacar as
          principais ações do projeto — doar, adotar e ser voluntário —
          reduzindo o número de cliques necessários para concluir cada tarefa e
          tornando a experiência mais intuitiva para novos usuários.
        </p>

      </div>

    </section>
  );
}