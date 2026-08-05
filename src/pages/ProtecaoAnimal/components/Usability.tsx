import {
  TestTube2,
  Users,
  Clock3,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Topic from "../../../components/Topic";
import { CoresEnum } from "../../../enums/Cores.Enum";

const improvements = [
  {
    before: "Botão 'Quero Ajudar' gerava dúvidas sobre sua função.",
    after: "Alterado para 'Quero Doar', tornando a ação mais clara.",
  },
  {
    before: "Poucas informações sobre os animais disponíveis.",
    after: "Adicionados temperamento, histórico, saúde e observações.",
  },
  {
    before: "Busca limitada apenas pelo nome do animal.",
    after: "Inclusão de filtros por espécie, sexo, porte e localização.",
  },
  {
    before: "Não existia confirmação após concluir ações.",
    after: "Criação de uma modal de sucesso após envio e doação.",
  },
];

const images = [
  "/assets/images/pa_mudanca_menu.png",
  "/assets/images/pa_mudanca_dados_adocao.png",
  "/assets/images/pa_mudanca_filtro.png",
  "/assets/images/pa_mudanca_feedback.png",
];

export default function Usability() {
  return (
    <section className="mx-auto container py-24 lg:p-20">

      {/* Header */}

      <Topic
        topico={{ icone: TestTube2, nome: "Validação", cor: CoresEnum.VIOLET }}
        titulo="Testes de Usabilidade"
        descricao="Após finalizar o protótipo de alta fidelidade, realizei testes de
          usabilidade para validar a experiência dos usuários e identificar
          oportunidades de melhoria antes da entrega da solução."
      />

      {/* Cards */}

      <div className="mt-16 grid gap-6 lg:grid-cols-4">

        <InfoCard
          icon={<Users size={26} />}
          title="Participantes"
          text="Usuários com perfil semelhante ao público da ONG."
        />

        <InfoCard
          icon={<Clock3 size={26} />}
          title="Formato"
          text="Sessões remotas utilizando um protótipo navegável."
        />

        <InfoCard
          icon={<TestTube2 size={26} />}
          title="Tarefa"
          text="Realizar uma doação simulando um cenário real."
        />

        <InfoCard
          icon={<MessageCircle size={26} />}
          title="Método"
          text="Think Aloud para compreender dúvidas e decisões durante a navegação."
        />

      </div>

      {/* Evidência */}

      <div className="mt-20 overflow-hidden rounded-[32px] bg-white p-6 shadow-xl">

        <img
          src="/assets/images/pa_teste_usabilidade.png"
          alt="Teste de usabilidade"
          className="rounded-3xl"
        />

      </div>

      {/* Aprendizados */}

      <div className="mt-20">

        <h3 className="text-3xl font-bold text-slate-900">
          O que aprendemos
        </h3>

        <p className="mt-4 max-w-3xl leading-8 text-slate-600">
          Os testes mostraram que pequenos ajustes de conteúdo,
          navegação e feedback visual poderiam reduzir dúvidas e
          tornar o fluxo muito mais intuitivo.
        </p>

      </div>

      {/* Melhorias */}

      <div className="mt-12 space-y-8">

        {improvements.map((item, index) => (

          <div
            key={index}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
          >

            <div className="grid gap-8 lg:grid-cols-2">

              <div>

                <span className="text-sm font-semibold uppercase tracking-wide text-rose-600">
                  Antes
                </span>

                <p className="mt-4 leading-8 text-slate-600">
                  {item.before}
                </p>

              </div>

              <div>

                <span className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
                  Depois
                </span>

                <div className="mt-4 flex gap-4">

                  <CheckCircle2
                    size={22}
                    className="mt-1 text-emerald-500"
                  />

                  <p className="leading-8 text-slate-600">
                    {item.after}
                  </p>

                </div>

              </div>

            </div>

            <div className="mt-8 overflow-hidden rounded-2xl border">

              <img
                src={images[index]}
                alt=""
                className="w-full"
              />

            </div>

          </div>

        ))}

      </div>

      {/* Resumo */}

      <div className="mt-20 rounded-[32px] bg-gradient-to-r from-violet-600 to-sky-500 p-10 text-white">

        <div className="flex items-start gap-5">

          <ArrowRight className="mt-1" size={28} />

          <div>

            <h3 className="text-2xl font-semibold">
              Resultado das Iterações
            </h3>

            <p className="mt-4 max-w-4xl leading-8 text-violet-100">
              Os ajustes realizados após os testes reduziram ambiguidades,
              aumentaram a clareza das informações e tornaram os fluxos de
              adoção e doação mais simples, reforçando uma experiência
              centrada nas necessidades dos usuários.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

type CardProps = {
  icon: React.ReactNode;
  title: string;
  text: string;
};

function InfoCard({ icon, title, text }: CardProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-violet-600">
        {icon}
      </div>

      <h3 className="text-lg font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-600">
        {text}
      </p>

    </div>
  );
}