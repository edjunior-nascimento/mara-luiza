import {
  ClipboardList,
  Search,
  MessageSquare,
  FileText,
} from "lucide-react";
import Topic from "../../../components/Topic";
import { CoresEnum } from "../../../enums/Cores.Enum";

export default function Research() {
  return (
    <section
      id="pesquisa"
      className="mx-auto container px-6 py-24"
    >

      <Topic 
        topico={{icone: Search, nome: "Discovery", cor: CoresEnum.VIOLET}}
        titulo="Pesquisa & Descobertas"
        descricao=" Antes de propor qualquer solução, foi necessário entender como
          voluntários, doadores e possíveis adotantes interagiam com a ONG.
          A pesquisa permitiu identificar dificuldades reais e direcionar as
          decisões de design."
      />
      {/* Imagens */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="overflow-hidden rounded-3xl bg-white p-4 shadow-lg">
          <img
            src="/assets/images/pa_pesquisas_2.png"
            alt="Pesquisa"
            className="rounded-2xl"
          />
        </div>

        <div className="grid gap-6">
          <div className="overflow-hidden rounded-3xl bg-white p-4 shadow-lg">
            <img
              src="/assets/images/pa_pesquisas_1.png"
              alt="Pesquisa"
              className="rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl bg-white p-4 shadow-lg">
            <img
              src="/assets/images/pa_pesquisas_3.png"
              alt="Pesquisa"
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="mt-14 grid gap-6 lg:grid-cols-2">

        <Card
          icon={<Search size={22} />}
          title="Métodos utilizados"
        >
          <ul className="space-y-3">
            <li>• Entrevistas presenciais com perguntas abertas.</li>
            <li>• Benchmark de sites de outras ONGs.</li>
            <li>
              • Observação do processo atual de adoção e doação através das
              redes sociais.
            </li>
          </ul>
        </Card>

        <Card
          icon={<ClipboardList size={22} />}
          title="Ferramentas"
        >
          <ul className="space-y-3">
            <li>• Google Forms</li>
            <li>• Entrevistas presenciais</li>
            <li>• Registro de observações</li>
            <li>• Benchmark competitivo</li>
          </ul>
        </Card>

        <Card
          icon={<MessageSquare size={22} />}
          title="Perguntas da pesquisa"
        >
          <ul className="space-y-3">
            <li>• Como você conheceu a ONG?</li>
            <li>• O que dificulta doar?</li>
            <li>• Como gostaria de realizar uma doação?</li>
            <li>• O que motiva uma adoção?</li>
            <li>• Já pensou em ser voluntário?</li>
          </ul>
        </Card>

        <Card
          icon={<FileText size={22} />}
          title="Objetivo da pesquisa"
        >
          <p className="leading-8 text-slate-600">
            Identificar barreiras no processo de adoção e doação,
            compreender o comportamento dos usuários e levantar
            oportunidades para criar uma experiência mais intuitiva,
            transparente e acessível.
          </p>
        </Card>
      </div>
    </section>
  );
}

type CardProps = {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
};

function Card({ icon, title, children }: CardProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-violet-600">
        {icon}
      </div>

      <h3 className="mb-5 text-xl font-semibold text-slate-900">
        {title}
      </h3>

      <div className="text-slate-600">{children}</div>
    </div>
  );
}