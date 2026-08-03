import {
  Activity,
  AlertTriangle,
  File,
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
    value: "60+",
    label: "Anos",
    description: "Faixa etária considerada idosa no Brasil.",
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
      className="bg-white py-28 px-20"
    >
      <div className="mx-auto container px-6">
        {/* Header */}
        <Topic
          topico={{ icone: File, nome: "Contexto", cor: CoresEnum.GREEN }}
          titulo="Contexto"
          descricao="Com o avanço da idade, acompanhar consultas, exames, medicamentos 
          e outros cuidados com a saúde torna-se uma tarefa cada vez mais 
          complexa. Como essas informações costumam estar dispersas em 
          diferentes lugares, idosos e familiares enfrentam dificuldades 
          para manter uma rotina organizada, o que pode resultar em 
          esquecimentos, falhas no tratamento e perda de autonomia. 
          Diante desse cenário, o desafio foi projetar uma solução simples,
           acessível e segura que centralizasse essas informações e
            reduzisse a carga cognitiva dos usuários."
        />

        {/* Pergunta norteadora */}
        <div className="rounded-[32px] p-8  bg-yellow-50">
          <h4 className="text-xl font-semibold">
            Pergunta norteadora
          </h4>

          <p className="mt-6 text-lg leading-8 text-black-50">
            Como podemos ajudar pessoas idosas a gerenciar sua saúde de
            maneira simples, acessível e segura, promovendo maior autonomia
            sem tornar a rotina mais complexa?
          </p>
        </div>

        {/* Cards */}
        <div className="mt-24">
          <h3 className="text-2xl font-bold text-slate-900 mb-12">Cenário atual</h3>

          <div className=" grid gap-8 lg:grid-cols-3">
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

        {/* Referências */}


        {/* Referências */}

        <div className="mt-10 rounded-[36px] border border-slate-200 bg-white p-10">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Artigos e Pesquisas</h3>
          <ul className="space-y-4 text-slate-600">
            <li>
              <a
                href="https://www.who.int/news-room/fact-sheets/detail/ageing-and-health"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-slate-900 hover:text-emerald-600"
              >
                OMS – Envelhecimento e saúde
              </a>
              <p className="text-sm text-slate-500">Panorama global sobre envelhecimento saudável e desafios de saúde na terceira idade.</p>
            </li>
            <li>
              <a
                href="https://www.scielo.br/j/csc/a/jzvXWbSfq8L7vsWcW4BwVdB/?format=html&lang=pt"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-slate-900 hover:text-emerald-600"
              >
                Fatores associados a doenças crônicas em idosos atendidos pela Estratégia de Saúde da Família
              </a>
              <p className="text-sm text-slate-500">Descreve-se no estudo o perfil da população idosa e urbana assistida pela Estratégia de Saúde da Família em Teófilo Otoni, MG, 385 idosos foram entrevistados com base na Ficha A e Ficha do Idoso do Sistema de Informação de Atenção Básica.</p>
            </li>
            <li>
              <a
                href="https://www.sciencedirect.com/science/article/pii/S0104423013001796"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-slate-900 hover:text-emerald-600"
              >
                Estudo sobre adesão a medicamentos em idosos
              </a>
              <p className="text-sm text-slate-500">Pesquisa que aponta as principais barreiras e soluções para melhorar a adesão ao tratamento farmacológico.</p>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}