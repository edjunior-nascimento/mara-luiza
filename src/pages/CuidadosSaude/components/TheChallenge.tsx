import {
  Activity,
  AlertTriangle,
  HeartPulse,
  Pill,
  Users,
} from "lucide-react";
import Topic from "../../../components/Topic";
import { CoresEnum } from "../../../enums/Cores.Enum";

const challenges = [
  {
    icon: Pill,
    title: "Múltiplos medicamentos",
    description:
      "Muitos idosos precisam administrar diversos medicamentos diariamente, aumentando o risco de esquecimentos, erros de dosagem e baixa adesão ao tratamento.",
  },
  {
    icon: Activity,
    title: "Monitoramento constante",
    description:
      "Doenças crônicas como diabetes e hipertensão exigem registros frequentes, mas essas informações costumam ficar espalhadas em papéis ou aplicativos diferentes.",
  },
  {
    icon: Users,
    title: "Dependência de familiares",
    description:
      "Grande parte dos idosos depende de filhos ou cuidadores para organizar consultas, acompanhar exames e controlar a rotina de saúde.",
  },
];

const numbers = [
  {
    value: "65+",
    label: "Anos",
    description: "Faixa etária considerada idosa pela OMS.",
  },
  {
    value: "2+",
    label: "Doenças",
    description: "É comum idosos conviverem com múltiplas doenças crônicas.",
  },
  {
    value: "5+",
    label: "Medicamentos",
    description: "Muitos utilizam diversos medicamentos diariamente.",
  },
];

export default function TheChallenge() {
  return (
    <section
      id="challenge"
      className="bg-white py-28"
    >
      <div className="mx-auto container px-6">
        {/* Header */}
        <Topic
          topico={{ icone: AlertTriangle, nome: "O Desafio", cor: CoresEnum.RED }}
          titulo="Cuidar da saúde deveria ser simples, mas nem sempre é."
          descricao="Com o avanço da idade, aumenta também a necessidade de acompanhar
            consultas, exames, medicamentos, alimentação e exercícios físicos.
            No entanto, essas informações costumam estar distribuídas em
            diferentes lugares, tornando a rotina mais complexa tanto para o
            idoso quanto para seus familiares."
        />  

        {/* Destaque */}

        <div className="mt-20 overflow-hidden rounded-[40px] bg-gradient-to-br from-red-500 via-rose-500 to-orange-500 p-12 text-white shadow-2xl">
          <div className="grid gap-10 lg:grid-cols-[2fr_1fr] lg:items-center">
            <div>
              <div className="flex items-center gap-3">
                <HeartPulse size={32} />

                <h3 className="text-3xl font-bold">
                  O problema vai além da tecnologia.
                </h3>
              </div>

              <p className="mt-8 text-xl leading-9 text-red-50">
                Esquecer um medicamento, perder uma consulta ou não acompanhar a
                evolução de uma doença crônica pode comprometer a qualidade de
                vida e aumentar riscos à saúde. O desafio não era criar apenas
                mais um aplicativo, mas desenvolver uma solução que reduzisse a
                complexidade da rotina de cuidados.
              </p>
            </div>

            <div className="rounded-[32px] bg-white/10 p-8 backdrop-blur">
              <h4 className="text-xl font-semibold">
                Pergunta norteadora
              </h4>

              <p className="mt-6 text-lg leading-8 text-red-50">
                Como podemos ajudar pessoas idosas a gerenciar sua saúde de
                maneira simples, acessível e segura, promovendo maior autonomia
                sem aumentar sua carga cognitiva?
              </p>
            </div>
          </div>
        </div>

        {/* Cards */}

        <div className="mt-24 grid gap-8 lg:grid-cols-3">
          {challenges.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-[32px] border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-100 text-red-600">
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

        {/* Indicadores */}

        <div className="mt-24 rounded-[36px] border border-slate-200 bg-slate-50 p-10">
          <div className="grid gap-10 text-center md:grid-cols-3">
            {numbers.map((item) => (
              <div key={item.label}>
                <h3 className="text-5xl font-bold text-emerald-600">
                  {item.value}
                </h3>

                <p className="mt-3 text-lg font-semibold text-slate-900">
                  {item.label}
                </p>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}