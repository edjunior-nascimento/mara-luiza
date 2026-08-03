import {
  Smartphone,
  Monitor,
  Palette,
  Heart,
  ShieldCheck,
  MousePointerClick,
  ChevronRight,
} from "lucide-react";
import Topic from "../../../components/Topic";
import { CoresEnum } from "../../../enums/Cores.Enum";

const decisions = [
  {
    category: "Cores",
    items: [
      {
        decision: "Paleta violet + tons neutros",
        reason: "Violeta transmite confiança e propósito social; neutros criam espaço respirável",
        benefit: "Aumenta percepção de credibilidade e reduz fadiga visual",
      },
      {
        decision: "Verde para confirmação, Vermelho para atenção",
        reason: "Segue padrões cognitivos esperados",
        benefit: "Usuários entendem status (sucesso/erro) instantaneamente",
      },
    ]
  },
  {
    category: "Tipografia",
    items: [
      {
        decision: "Headlines em bold (700+), corpo em regular (400)",
        reason: "Contraste claro entre títulos e conteúdo",
        benefit: "Hierarquia visual facilita escanear a página",
      },
      {
        decision: "Tamanho mínimo 16px em mobile",
        reason: "Acessibilidade e conforto de leitura",
        benefit: "Reduz necessidade de zoom; melhora experiência mobile",
      },
    ]
  },
  {
    category: "Espaçamento",
    items: [
      {
        decision: "Padding generoso em cards (32px+) e entre seções (96px)",
        reason: "Respirabilidade visual reduz sensação de poluição",
        benefit: "Interface menos intimidadora; convida à exploração",
      },
      {
        decision: "Gaps 16px entre elementos relacionados",
        reason: "Define agrupamentos visuais naturais",
        benefit: "Usuário entende relacionamento entre componentes",
      },
    ]
  },
  {
    category: "CTAs",
    items: [
      {
        decision: "Botões primários 48px+ de altura",
        reason: "Alvo maior em mobile; mais fácil de tocar",
        benefit: "Reduz erros de clique; aumenta taxa de conversão",
      },
      {
        decision: "CTA principal (Adotar) sempre visível (sticky + flutuante mobile)",
        reason: "Prioriza ação mais importante em qualquer ponto da navegação",
        benefit: "Usuário não precisa rolar ou buscar; diminui fricção",
      },
      {
        decision: "Botão secundário com border, não sólido",
        reason: "Diferencia ações primárias de secundárias visualmente",
        benefit: "Guia usuário para ação principal sem confundir",
      },
    ]
  },
  {
    category: "Cartões",
    items: [
      {
        decision: "Sombra suave + border 1px",
        reason: "Define elevação sem parecer artificial",
        benefit: "Cartões aparecem clicáveis; incentiva interação",
      },
      {
        decision: "Imagem 200px+ de altura em cards de animais",
        reason: "Detalhes visuais importantes para decisão de adoção",
        benefit: "Usuário vê expressão/características do animal; aumenta conexão emocional",
      },
      {
        decision: "Hover com -translate-y-1 + shadow maior",
        reason: "Feedback imediato que componente é interativo",
        benefit: "Usuário sente agência; aumenta engajamento",
      },
    ]
  },
  {
    category: "Filtros",
    items: [
      {
        decision: "Filtros acima da listagem (não lateral em mobile)",
        reason: "Economia de espaço e padrão mobile-first",
        benefit: "Menos scroll horizontal; navegação intuitiva em qualquer tamanho",
      },
      {
        decision: "Chips (tags selecionáveis) em vez de checkboxes",
        reason: "Chips são mais intuitivos e ocupam menos espaço",
        benefit: "Seleção múltipla sem parecer pesada",
      },
    ]
  },
  {
    category: "Formulários",
    items: [
      {
        decision: "Multi-step em vez de formulário único",
        reason: "Reduz sensação de sobrecarga; mostra progresso",
        benefit: "Usuário não desiste no meio; maior taxa de conclusão",
      },
      {
        decision: "Labels sempre visíveis, não placeholder",
        reason: "Accessibility + evita confusão ao preencher",
        benefit: "Usuário sabe exatamente o que preencher; menos erros",
      },
    ]
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
    <section className="mx-auto container px-6 py-24 px-20">

      {/* Header */}
      <Topic
        topico={{ icone: Palette, nome: "UI Design", cor: CoresEnum.EMERALD }}
        titulo="Protótipo de Alta Fidelidade"
        descricao="Após validar os wireframes e a arquitetura da informação, desenvolvi
          o protótipo de alta fidelidade priorizando clareza, acessibilidade e
          uma experiência emocionalmente acolhedora para incentivar doações e
          adoções."
      />

      {/* Decisões de Design */}

      <div className="mt-16 space-y-8">

        {decisions.map((section) => (
          <div key={section.category}>
            <h3 className="text-2xl font-bold text-slate-900 mb-5">{section.category}</h3>
            
            <div className="space-y-4">
              {section.items.map((item, idx) => (
                <div key={idx} className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-md transition">
                  
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center">
                      <ChevronRight size={18} />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-slate-900">{item.decision}</p>
                    </div>
                  </div>

                  <div className="ml-12 space-y-3 text-sm">
                    <div>
                      <span className="text-slate-500 font-medium">Motivo:</span>
                      <p className="text-slate-600 mt-1">{item.reason}</p>
                    </div>
                    <div className="bg-emerald-50 rounded-xl p-3 border border-emerald-100">
                      <span className="text-emerald-700 font-medium">Benefício:</span>
                      <p className="text-emerald-700 mt-1">{item.benefit}</p>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>
        ))}

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