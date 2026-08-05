import {
  ArrowDown,
  FolderTree,
  Layers3,
  LayoutDashboard,
  Map,
  Smartphone,
} from "lucide-react";
import Topic from "../../../components/Topic";
import { CoresEnum } from "../../../enums/Cores.Enum";

const architecture = [
  {
    title: "Página Inicial",
    description:
      "Resumo da saúde, lembretes do dia e acesso rápido às principais funcionalidades.",
  },
  {
    title: "Medicamentos",
    description:
      "Lista de medicamentos, alarmes, histórico e confirmação da administração.",
  },
  {
    title: "Saúde",
    description:
      "Registro de pressão arterial, glicemia e histórico dos indicadores.",
  },
  {
    title: "Hábitos",
    description:
      "Plano alimentar, exercícios físicos e recomendações dos especialistas.",
  },
  {
    title: "Emergência",
    description:
      "Contatos rápidos, hospitais, SAMU e informações médicas importantes.",
  },
];

const principles = [
  {
    icon: Layers3,
    title: "Menor carga cognitiva",
    description:
      "Agrupar funcionalidades relacionadas reduz o esforço mental durante a navegação.",
  },
  {
    icon: Smartphone,
    title: "Poucos níveis",
    description:
      "As tarefas mais importantes podem ser realizadas em no máximo dois níveis de navegação.",
  },
  {
    icon: LayoutDashboard,
    title: "Prioridade para a rotina",
    description:
      "As ações realizadas diariamente aparecem primeiro, enquanto funcionalidades secundárias ficam em áreas específicas.",
  },
];

export default function InformationArchitecture() {
  return (
    <section
      id="information-architecture"
      className="bg-white py-28 lg:p-20"
    >
      <div className="mx-auto container px-6 ">
        {/* Header */}

        <Topic
          topico={{ icone: FolderTree, nome: "Arquitetura da Informação", cor: CoresEnum.SKY }}
          titulo="Organizando informações para reduzir a complexidade"
          descricao="Antes de desenhar as telas, foi necessário definir como as
            informações seriam estruturadas. O objetivo era criar uma navegação
            intuitiva, permitindo que pessoas idosas encontrassem rapidamente o
            que precisavam, sem precisar memorizar caminhos complexos."
        />

        {/* Princípios */}

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {principles.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-[32px] border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-100 text-sky-600">
                  <Icon size={30} />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>

        {/* Fluxo */}

        <div className="mt-24 rounded-[40px] border border-slate-200 bg-slate-50 p-12">
          <div className="text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-emerald-100 text-emerald-600">
              <Map size={40} />
            </div>

            <h3 className="mt-6 text-3xl font-bold text-slate-900">
              Estrutura da navegação
            </h3>

            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600">
              Todas as funcionalidades foram organizadas a partir da rotina
              diária do usuário, evitando menus profundos e reduzindo o número
              de decisões durante a navegação.
            </p>
          </div>

          <div className="mt-16 flex flex-col items-center">
            <div className="rounded-3xl bg-emerald-600 px-10 py-6 text-xl font-semibold text-white shadow-xl">
              Aplicativo
            </div>

            <ArrowDown
              className="my-6 text-slate-300"
              size={36}
            />

            <div className="grid w-full gap-6 md:grid-cols-5">
              {architecture.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[28px] bg-white p-6 shadow-md"
                >
                  <h4 className="text-lg font-bold text-slate-900">
                    {item.title}
                  </h4>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Insight */}

        <div className="mt-24 overflow-hidden rounded-[40px] bg-gradient-to-r from-sky-600 to-emerald-600 p-12 text-white shadow-2xl">
          <h3 className="text-3xl font-bold">
            Decisão de arquitetura
          </h3>

          <p className="mt-8 max-w-5xl text-xl leading-9 text-sky-50">
            Em vez de organizar o aplicativo por categorias técnicas, a
            arquitetura foi construída seguindo a rotina do usuário. Assim, as
            funcionalidades mais utilizadas diariamente permanecem sempre
            acessíveis na tela inicial, enquanto conteúdos menos frequentes são
            encontrados de forma previsível e consistente.
          </p>
        </div>
      </div>
    </section>
  );
}