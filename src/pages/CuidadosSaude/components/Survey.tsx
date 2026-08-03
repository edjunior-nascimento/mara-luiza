import React from "react";
import { BarChart3 } from "lucide-react";

type SurveyQuestion = {
  id: number;
  question: string;
  multiple?: boolean;
  answers: {
    label: string;
    value: number;
  }[];
};

const survey: SurveyQuestion[] = [
  {
    id: 1,
    question: "Com que frequência você acompanha sua saúde?",
    answers: [
      { label: "Todos os dias", value: 40 },
      { label: "Algumas vezes por semana", value: 26.7 },
      { label: "Apenas quando necessário", value: 26.7 },
      { label: "Raramente", value: 6.7 },
    ],
  },
  {
    id: 2,
    question: "Você utiliza medicamentos de uso contínuo?",
    answers: [
      { label: "Sim", value: 80 },
      { label: "Não", value: 20 },
    ],
  },
  {
    id: 3,
    question: "Você já esqueceu de tomar um medicamento?",
    answers: [
      { label: "Frequentemente", value: 20 },
      { label: "Algumas vezes", value: 53.3 },
      { label: "Nunca", value: 26.7 },
    ],
  },
  {
    id: 4,
    question: "Como você controla os horários dos medicamentos?",
    answers: [
      { label: "Memória", value: 33 },
      { label: "Alarmes do celular", value: 26.7 },
      { label: "Papel ou agenda", value: 20 },
      { label: "Familiar lembra", value: 13.3 },
      { label: "Aplicativo", value: 6.7 },
    ],
  },
  {
    id: 5,
    question: "Onde você costuma guardar informações de saúde?",
    multiple: true,
    answers: [
      { label: "Papel / receitas médicas", value: 40 },
      { label: "Agenda", value: 26.7 },
      { label: "WhatsApp", value: 20 },
      { label: "Aplicativo", value: 6.7 },
      { label: "Não organizo", value: 6.7 },
    ],
  },
  {
    id: 6,
    question: "Você já perdeu ou esqueceu uma consulta médica?",
    answers: [
      { label: "Sim", value: 46.7 },
      { label: "Não", value: 53.3 },
    ],
  },
  {
    id: 7,
    question: "Qual a maior dificuldade para acompanhar sua saúde?",
    multiple: true,
    answers: [
      { label: "Lembrar medicamentos", value: 33.3 },
      { label: "Organizar exames", value: 26.7 },
      { label: "Marcar consultas", value: 20 },
      { label: "Entender informações médicas", value: 13.3 },
      { label: "Acompanhar doenças crônicas", value: 6.7 },
    ],
  },
  {
    id: 8,
    question: "Você utiliza aplicativos relacionados à saúde?",
    answers: [
      { label: "Sim", value: 33.3 },
      { label: "Não", value: 66.7 },
    ],
  },
  {
    id: 9,
    question:
      "Você gostaria de reunir todas essas informações em um único aplicativo?",
    answers: [
      { label: "Sim", value: 93.3 },
      { label: "Talvez", value: 6.7 },
      { label: "Não", value: 0 },
    ],
  },
  {
    id: 10,
    question: "Qual funcionalidade seria mais útil?",
    multiple: true,
    answers: [
      { label: "Lembretes de medicamentos", value: 33.3 },
      { label: "Agenda médica", value: 26.7 },
      { label: "Histórico de exames", value: 20 },
      { label: "Contatos de emergência", value: 13.3 },
      { label: "Monitoramento de pressão/glicemia", value: 6.7 },
    ],
  },
];

export default function Survey() {
  return (
    <section className="space-y-8">
      <div className="grid gap-6">
        {survey.map((item) => (
          <article
            key={item.id}
            className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
          >
            <div className="mb-6 flex items-center justify-between">
              <h3 className="font-semibold text-zinc-900">
                {item.id}. {item.question}
              </h3>

              {item.multiple && (
                <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-500">
                  Múltipla escolha
                </span>
              )}
            </div>

            <div className="space-y-5">
              {item.answers.map((answer) => (
                <div key={answer.label}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-zinc-700">{answer.label}</span>

                    <span className="font-medium text-zinc-900">
                      {answer.value}%
                    </span>
                  </div>

                  <div className="h-3 overflow-hidden rounded-full bg-zinc-100">
                    <div
                      className="h-full rounded-full bg-blue-600 transition-all duration-700"
                      style={{
                        width: `${answer.value}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}