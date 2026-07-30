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
    description:
      "O processo dependia das redes sociais e exigia copiar a chave PIX manualmente, gerando atrito e desistências.",
    solution:
      "Criar um botão fixo de doação com QR Code PIX e informações claras sobre o impacto das contribuições.",
  },
  {
    icon: Search,
    title: "Informações insuficientes",
    description:
      "Os animais possuíam poucas informações, dificultando a tomada de decisão durante a adoção.",
    solution:
      "Adicionar histórico, temperamento, estado de saúde e características comportamentais.",
  },
  {
    icon: EyeOff,
    title: "Baixa visibilidade",
    description:
      "A chave PIX e outras informações importantes ficavam perdidas entre diversas publicações nas redes sociais.",
    solution:
      "Centralizar todas as informações em uma plataforma organizada e de fácil acesso.",
  },
  {
    icon: HeartHandshake,
    title: "Dependência da equipe",
    description:
      "Grande parte das dúvidas exigia contato direto com voluntários antes que o usuário pudesse doar ou adotar.",
    solution:
      "Disponibilizar informações completas e fluxos mais autônomos para reduzir a necessidade de suporte.",
  },
];

export default function Problems() {
  return (
    <section className="mx-auto container px-6 py-24">

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
                className="rounded-3xl bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-red-600">
                  <Icon size={22} />
                </div>

                <h4 className="text-xl font-semibold text-slate-900">
                  {problem.title}
                </h4>

                <p className="mt-4 leading-7 text-slate-600">
                  {problem.description}
                </p>

                <div className="mt-6 rounded-2xl bg-violet-50 p-4">
                  <span className="text-sm font-semibold text-violet-700">
                    Oportunidade
                  </span>

                  <p className="mt-2 text-slate-600 leading-7">
                    {problem.solution}
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