import { HelpCircle, Lightbulb } from "lucide-react";
import Topic from "../../../components/Topic";
import { CoresEnum } from "../../../enums/Cores.Enum";

export default function ProblemStatement() {
  return (
    <section className="mx-auto container px-6 py-24 lg:p-20">
      <Topic 
        topico={{icone: HelpCircle, nome: "Problem Statement", cor: CoresEnum.VIOLET}}
        titulo="O Desafio Central"
        descricao="A síntese de todos os insights encontrados condensada em uma pergunta orientadora."
      />

      <div className="mt-14 rounded-3xl bg-gradient-to-br from-violet-50 via-purple-50 to-white p-8 border border-violet-200">
        {/* Main Question */}
        <div className="mb-10">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-600 text-white">
              <Lightbulb size={28} />
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-violet-600 mb-2">
                Como Podemos?
              </h3>
              <p className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                Como podemos centralizar a experiência de adoção e doação, eliminando a dependência das redes sociais e aumentando a confiança dos usuários através de uma plataforma intuitiva e transparente?
              </p>
            </div>
          </div>
        </div>

        {/* Why This Problem */}
        <div className="border-t border-violet-200 pt-8">
          <h4 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-violet-600"></span>
            Por que esse é o problema prioritário?
          </h4>

          <div className="space-y-4 text-slate-700 leading-8">
            <p>
              Os insights da pesquisa revelaram que o maior obstáculo enfrentado pela ONG não é a falta de vontade dos usuários em ajudar, mas sim a <strong>fragmentação da experiência</strong>. 
              Doadores, adotantes e voluntários precisam navegar por múltiplas plataformas (WhatsApp, Instagram, Facebook, site desatualizado) para encontrar informações que frequentemente são repetidas ou contraditórias.
            </p>

            <p>
              Este é um problema de <strong>acessibilidade e confiança</strong> que afeta diretamente a receita da ONG e o sucesso de colocações de animais. 
              Ao resolver essa questão central — criando um único ponto de entrada confiável e intuitivo — resolvemos simultaneamente os quatro problemas identificados na pesquisa: 
              simplicidade de doação, informações detalhadas sobre animais, visibilidade e autonomia do usuário.
            </p>

            <p>
              Por isso, <strong>esta é a pergunta orientadora</strong> que guiará todas as decisões de design: qualquer solução proposta deve responder como centralizar, simplificar e 
              aumentar a confiança na experiência de interação com a ONG.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
