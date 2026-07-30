import {
  Accessibility,
  Ear,
  Eye,
  Hand,
  ScanEye,
  Type,
} from "lucide-react";

const features = [
  {
    icon: Type,
    title: "Tipografia ampliada",
    description:
      "Todos os textos utilizam tamanhos acima do padrão para melhorar a leitura e reduzir o esforço visual.",
  },
  {
    icon: Eye,
    title: "Alto contraste",
    description:
      "Paleta de cores cuidadosamente escolhida para garantir contraste adequado entre texto e fundo.",
  },
  {
    icon: Hand,
    title: "Áreas de toque maiores",
    description:
      "Botões e componentes possuem dimensões ampliadas para facilitar a interação e reduzir erros de toque.",
  },
  {
    icon: Ear,
    title: "Audiodescrição",
    description:
      "As telas podem ser interpretadas por leitores de tela, permitindo maior independência para pessoas com deficiência visual.",
  },
  {
    icon: ScanEye,
    title: "Hierarquia visual",
    description:
      "As informações mais importantes recebem maior destaque, orientando naturalmente a atenção do usuário.",
  },
  {
    icon: Accessibility,
    title: "Baixa carga cognitiva",
    description:
      "Poucas ações por tela, linguagem simples e navegação previsível reduzem o esforço mental durante o uso.",
  },
];

const principles = [
  "Ícones sempre acompanhados de texto.",
  "Máximo de duas ações principais por tela.",
  "Linguagem simples e objetiva.",
  "Feedback visual após cada interação.",
  "Fluxos curtos para tarefas frequentes.",
  "Consistência entre todas as telas.",
];

export default function AccessibilitySection() {
  return (
    <section
      id="accessibility"
      className="bg-white py-28"
    >
      <div className="mx-auto container px-6">
        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700">
            <Accessibility size={18} />
            Acessibilidade
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Projetando para autonomia e inclusão
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Como o aplicativo é destinado principalmente ao público idoso, a
            acessibilidade deixou de ser uma funcionalidade adicional e passou a
            ser um requisito de projeto. Todas as decisões de interface foram
            guiadas pelo objetivo de reduzir barreiras físicas, cognitivas e
            visuais.
          </p>
        </div>

        {/* Recursos */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-[34px] border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
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

        {/* Diretrizes */}

        <div className="mt-24 grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <div className="rounded-[40px] bg-gradient-to-br from-emerald-600 to-sky-600 p-10 text-white shadow-xl">
            <h3 className="text-3xl font-bold">
              Princípio central
            </h3>

            <p className="mt-8 text-xl leading-9 text-emerald-50">
              O objetivo não era criar um aplicativo para idosos, mas criar uma
              experiência que qualquer pessoa pudesse utilizar com facilidade,
              independentemente da idade ou familiaridade com tecnologia.
            </p>
          </div>

          <div className="rounded-[40px] border border-slate-200 bg-slate-50 p-10">
            <h3 className="text-3xl font-bold text-slate-900">
              Diretrizes adotadas
            </h3>

            <div className="mt-8 space-y-5">
              {principles.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4"
                >
                  <div className="mt-2 h-3 w-3 rounded-full bg-emerald-500" />

                  <p className="leading-7 text-slate-700">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Insight */}

        <div className="mt-24 rounded-[40px] bg-slate-900 p-12 text-white">
          <h3 className="text-3xl font-bold">
            Resultado esperado
          </h3>

          <p className="mt-8 max-w-5xl text-xl leading-9 text-slate-300">
            Ao reduzir a complexidade da interface, ampliar elementos visuais e
            tornar cada interação mais previsível, o aplicativo promove maior
            autonomia para pessoas idosas, reduz a dependência de familiares e
            aumenta a confiança durante toda a rotina de cuidados com a saúde.
          </p>
        </div>
      </div>
    </section>
  );
}