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
    <section className="mx-auto container px-6 py-24 px-20">

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
          Wireframes de Baixa Fidelidade
        </h3>

        <p className="mt-4 max-w-3xl leading-8 text-slate-600">
          Os wireframes são o <strong>ponto de transição crítico</strong> entre ideação e design visual. 
          Nessa etapa, validamos hipóteses sobre arquitetura da informação, hierarquia visual e usabilidade 
          <strong> sem nos prender a cores, tipografia ou detalhes estéticos</strong>. Isso permite iterar rapidamente 
          e fazer ajustes fundamentais antes de investir tempo no design de alta fidelidade.
        </p>

        {/* Hipóteses Validadas */}
        <div className="mt-10 rounded-3xl bg-gradient-to-br from-amber-50 to-orange-50 p-8 border border-amber-200">
          <h4 className="text-xl font-bold text-slate-900 mb-6">Hipóteses Validadas</h4>
          
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-white rounded-2xl p-5 border border-amber-100">
              <div className="font-semibold text-amber-700 mb-2">H1: Ações Principais Sempre Visíveis</div>
              <p className="text-sm text-slate-600">
                Se os botões de "Adotar", "Doar" e "Voluntariar" forem sempre acessíveis (topo ou sticky), 
                os usuários terão menos dificuldade em encontrar as ações principais.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-amber-100">
              <div className="font-semibold text-amber-700 mb-2">H2: Busca de Animais Simplificada</div>
              <p className="text-sm text-slate-600">
                Um sistema de filtros simples (tamanho, idade, tipo) permite que adotantes encontrem 
                animais compatíveis em menos cliques do que antes.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-amber-100">
              <div className="font-semibold text-amber-700 mb-2">H3: Informações Detalhadas Centralizadas</div>
              <p className="text-sm text-slate-600">
                Agrupando histórico, saúde, comportamento e fotos em uma única página de perfil do animal 
                reduz dúvidas e aumenta confiança na decisão de adoção.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-amber-100">
              <div className="font-semibold text-amber-700 mb-2">H4: FAQ Reduz Contato Direto</div>
              <p className="text-sm text-slate-600">
                Uma seção de perguntas frequentes bem estruturada diminui a necessidade de contato 
                direto com voluntários.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-amber-100">
              <div className="font-semibold text-amber-700 mb-2">H5: Doação com PIX Deve Ser 1-2 Cliques</div>
              <p className="text-sm text-slate-600">
                Um botão flutuante ou sticky com QR Code PIX é mais eficaz que procurar a chave 
                em posts antigos nas redes sociais.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-amber-100">
              <div className="font-semibold text-amber-700 mb-2">H6: Transparência Aumenta Confiança</div>
              <p className="text-sm text-slate-600">
                Mostrar onde as doações vão, quantos animais foram resgatados e depoimentos de adotantes 
                reduz ceticismo.
              </p>
            </div>
          </div>
        </div>

        {/* Evolução dos Wireframes */}
        <div className="mt-10">
          <h4 className="text-xl font-bold text-slate-900 mb-6">Evolução: O que Mudou entre as Versões</h4>
          
          <div className="space-y-6">
            <div className="rounded-2xl bg-white border border-slate-200 p-6">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-bold">V1</div>
                <div className="flex-1">
                  <h5 className="font-semibold text-slate-900 mb-2">Versão 1: Menu Tradicional (Rejeitada)</h5>
                  <p className="text-slate-600 text-sm mb-3">
                    Primeira abordagem seguiu padrão de e-commerce comum: menu horizontal com categorias, 
                    grid de produtos, lateral de filtros.
                  </p>
                  <p className="text-sm text-red-600 font-medium">❌ Problema: Muito similar ao que usuários já viam em redes sociais. Não diferenciava a ONG como plataforma confiável.</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-slate-200 p-6">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">V2</div>
                <div className="flex-1">
                  <h5 className="font-semibold text-slate-900 mb-2">Versão 2: Hero Central (Versão Final)</h5>
                  <p className="text-slate-600 text-sm mb-3">
                    Redesenho focou em: (1) CTA de doação bem visível no topo, (2) Seção de animais com destaque, 
                    (3) Info sobre a ONG e impacto, (4) FAQ integrada, (5) Formulário de adoção simplificado.
                  </p>
                  <div className="text-sm space-y-2 mt-3">
                    <p className="text-green-600 font-medium">✅ Menu fixo (sticky) com ações principais</p>
                    <p className="text-green-600 font-medium">✅ Hero com valor proposição e CTA principal (Adotar)</p>
                    <p className="text-green-600 font-medium">✅ Cards com perfis de animais + filtros</p>
                    <p className="text-green-600 font-medium">✅ Seção "Por que confiar em nós" com transparência</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Elementos Principais Definidos */}
        <div className="mt-10 rounded-3xl bg-white border border-slate-200 p-8">
          <h4 className="text-xl font-bold text-slate-900 mb-6">Decisões Estruturais Antes do UI Design</h4>
          
          <div className="space-y-6">
            <div className="pb-6 border-b border-slate-200">
              <h5 className="font-semibold text-slate-900 mb-2">1. Navegação: Menu Sticky + CTAs Flutuantes</h5>
              <p className="text-slate-600 text-sm">
                Decidimos manter um menu fixo com botões de ação (Adotar, Doar, Voluntariar). 
                Em mobile, adicionar botão flutuante para doação PIX com acesso rápido ao QR Code.
              </p>
            </div>

            <div className="pb-6 border-b border-slate-200">
              <h5 className="font-semibold text-slate-900 mb-2">2. Hierarquia de Informações: 3 Níveis</h5>
              <p className="text-slate-600 text-sm">
                Página inicial → Listagem de animais com filtros → Perfil detalhado do animal (com histórico, saúde, comportamento, fotos).
              </p>
            </div>

            <div className="pb-6 border-b border-slate-200">
              <h5 className="font-semibold text-slate-900 mb-2">3. Formulário de Adoção: Multi-Step vs Single Page</h5>
              <p className="text-slate-600 text-sm">
                Testamos multi-step (reduz sensação de sobrecarga) vs single page (mais rápido). 
                <strong> Decisão final: Multi-step em 3 etapas (Dados pessoais → Info do animal → Revisão).</strong>
              </p>
            </div>

            <div className="pb-6 border-b border-slate-200">
              <h5 className="font-semibold text-slate-900 mb-2">4. Visualização de Impacto: Painel de Estatísticas</h5>
              <p className="text-slate-600 text-sm">
                Adicionar cards mostrando "X animais resgatados", "Y doações recebidas", "Z adoções bem-sucedidas" 
                para aumentar confiança e transparência.
              </p>
            </div>

            <div className="">
              <h5 className="font-semibold text-slate-900 mb-2">5. FAQ Integrada: Reduzir Chat Direto</h5>
              <p className="text-slate-600 text-sm">
                Seção de "Perguntas Frequentes" expandível logo após hero, com respostas a "Como adotar?", 
                "Como funciona a doação?", "Posso ser voluntário?", etc.
              </p>
            </div>
          </div>
        </div>

        {/* Imagens dos Wireframes */}
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
              alt="Instruções dos Wireframes"
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