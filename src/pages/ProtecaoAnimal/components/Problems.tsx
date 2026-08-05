import {
  AlertTriangle,
  CreditCard,
  EyeOff,
  HeartHandshake,
  Search,
} from "lucide-react";
import { CoresEnum } from "../../../enums/Cores.Enum";
import Topic from "../../../components/Topic";
import { CgInsights } from "react-icons/cg";

const problems = [
  {
    icon: CreditCard,
    title: "Doações complexas",
    problema: "Processo de doação fragmentado e inacessível",
    evidencia: "8 em 12 entrevistados (67%) mencionaram dificuldade em encontrar informações sobre como contribuir. 5 abandonaram a intenção de doar por complexidade.",
    citacao: "Eu nunca sei se o dinheiro realmente chega até a ONG. Tive que chamar no WhatsApp três vezes para descobrir como fazer uma doação.",
    impacto: "Perda de receita recorrente, redução de doadores potenciais e diminuição da confiança nas iniciativas financeiras.",
    decisaoDesign: "Criar um botão fixo de doação com QR Code PIX, confirmação de recebimento automática e visualização transparente do impacto da contribuição.",
    resultadoEsperado: "Aumentar taxa de conversão de doadores em 40% e criar fluxo de doação em menos de 2 cliques.",
  },
  {
    icon: Search,
    title: "Informações insuficientes",
    problema: "Falta de detalhes sobre animais disponíveis para adoção",
    evidencia: "6 dos 6 adotantes potenciais relataram não ter informações suficientes. 73% do formulário respondeu 'preciso saber mais sobre o comportamento do animal'.",
    citacao: "Gostaria de saber se o cachorro é agressivo com crianças, se já foi vacinado e como ele é no dia a dia. As fotos não mostram nada disso.",
    impacto: "Possíveis adotantes perdem confiança, aumentam devoluções e reduz-se o sucesso de colocações permanentes.",
    decisaoDesign: "Expandir perfil de cada animal com histórico médico, teste comportamental, galeria completa e depoimentos de cuidadores.",
    resultadoEsperado: "Reduzir taxa de devolução em 30% e aumentar confiança do adotante no processo de decisão.",
  },
  {
    icon: EyeOff,
    title: "Baixa visibilidade",
    problema: "Informações críticas dispersas em múltiplas redes sociais",
    evidencia: "Em benchmark de 5 ONGs: chaves PIX mudavam a cada semana no feed. 9 em 12 entrevistados não sabiam onde encontrar informações básicas.",
    citacao: "Tenho que ficar scrollando o Instagram procurando a chave PIX. Às vezes é no story, às vezes num post de mês passado. É bem frustrante.",
    impacto: "Usuários desistem de interagir, voluntários recebem mesmas perguntas repetidamente e informação importante é perdida no tempo.",
    decisaoDesign: "Centralizar todas as informações (PIX, processo de adoção, horários, voluntariado) em uma plataforma navegável e sempre atualizada.",
    resultadoEsperado: "Reduzir perguntas repetitivas ao suporte em 50% e melhorar SEO e discoverabilidade organicamente.",
  },
  {
    icon: HeartHandshake,
    title: "Dependência da equipe",
    problema: "Processos manuais e sobrecarga de contato direto com voluntários",
    evidencia: "Observação de 2 semanas: 34 perguntas respondidas via WhatsApp (média de 4.8 por dia). Voluntários reportaram saturação.",
    citacao: "Sempre que quero saber algo sobre adoção, preciso mandar mensagem. Ninguém responde rápido porque todo mundo tem trabalho além da ONG.",
    impacto: "Experiência lenta do usuário, voluntários esgotados, perda de doações e adoções por falta de resposta oportuna.",
    decisaoDesign: "Implementar FAQ interativa, fluxos de self-service para inscrição em voluntariado e formulário automatizado para prospecção de adotantes.",
    resultadoEsperado: "Reduzir tempo médio de resposta de 24h para instant e melhorar satisfação do usuário em 50%.",
  },
];

export default function Problems() {
  return (
    <section className="mx-auto container px-6 py-24 lg:p-20">

      <Topic 
        topico={{icone: CgInsights, nome: "Insights", cor: CoresEnum.RED}}
        titulo="Principais Problemas Encontrados"
        descricao=" Após consolidar entrevistas, benchmark e observações, foi possível
          identificar padrões de comportamento que estavam prejudicando a
          experiência dos usuários durante os processos de doação e adoção."
      />

      {/* Painel */}

      <div className="mt-14 rounded-3xl border border-red-100 bg-gradient-to-br from-red-50 via-white to-violet-50 p-8">

        <div className="mb-10 flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-100 text-red-600">
            <AlertTriangle size={28} />
          </div>

          <div>
            <h3 className="text-2xl font-semibold">
              Síntese dos Insights
            </h3>

            <p className="text-slate-600">
              Os principais desafios estavam relacionados à confiança,
              facilidade de uso e acesso às informações.
            </p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">

          {problems.map((problem) => {
            const Icon = problem.icon;

            return (
              <div
                key={problem.title}
                className="rounded-3xl bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl border border-slate-100"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-red-600">
                  <Icon size={22} />
                </div>

                <h4 className="text-xl font-bold text-slate-900">
                  {problem.title}
                </h4>

                {/* Problema */}
                <div className="mt-6 mb-5">
                  <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Problema
                  </span>
                  <p className="mt-2 text-slate-700 font-medium">
                    {problem.problema}
                  </p>
                </div>

                {/* Evidência */}
                <div className="mb-5 pb-5 border-b border-slate-100">
                  <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Evidência da Pesquisa
                  </span>
                  <p className="mt-2 text-sm text-slate-600 leading-6">
                    {problem.evidencia}
                  </p>
                </div>

                {/* Citação */}
                <blockquote className="mb-5 pl-4 border-l-4 border-red-300 bg-red-50 p-4 rounded-lg italic text-slate-700 text-sm">
                  "{problem.citacao}"
                </blockquote>

                {/* Impacto */}
                <div className="mb-5 pb-5 border-b border-slate-100">
                  <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Impacto no Usuário
                  </span>
                  <p className="mt-2 text-sm text-slate-600 leading-6">
                    {problem.impacto}
                  </p>
                </div>

                {/* Decisão de Design */}
                <div className="mb-5 rounded-2xl bg-violet-50 p-4 border border-violet-100">
                  <span className="text-xs font-semibold uppercase tracking-wide text-violet-700">
                    Decisão de Design
                  </span>
                  <p className="mt-2 text-sm text-violet-900 leading-6">
                    {problem.decisaoDesign}
                  </p>
                </div>

                {/* Resultado Esperado */}
                <div className="rounded-2xl bg-green-50 p-4 border border-green-100">
                  <span className="text-xs font-semibold uppercase tracking-wide text-green-700">
                    Resultado Esperado
                  </span>
                  <p className="mt-2 text-sm text-green-900 leading-6">
                    {problem.resultadoEsperado}
                  </p>
                </div>
              </div>
            );
          })}

        </div>
      </div>

      {/* Resumo */}

      <div className="mt-16 grid gap-6 md:grid-cols-4">

        <Stat value="4" label="Problemas Prioritários" />

        <Stat value="3" label="Métodos de Pesquisa" />

        <Stat value="100%" label="Baseado em Usuários" />

        <Stat value="UX" label="Decisões Orientadas por Dados" />

      </div>

    </section>
  );
}

type StatProps = {
  value: string;
  label: string;
};

function Stat({ value, label }: StatProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
      <h3 className="text-4xl font-bold text-violet-600">
        {value}
      </h3>

      <p className="mt-3 text-slate-600">
        {label}
      </p>
    </div>
  );
}