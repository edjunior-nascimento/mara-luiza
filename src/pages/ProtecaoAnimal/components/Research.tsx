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
      className="mx-auto container px-6 py-24 px-20"
    >

      <Topic 
        topico={{icone: Search, nome: "Discovery", cor: CoresEnum.VIOLET}}
        titulo="Pesquisa & Descobertas"
        descricao="Antes de propor qualquer solução, foi necessário entender como
          voluntários, doadores e possíveis adotantes interagiam com a ONG.
          A pesquisa permitiu identificar dificuldades reais e direcionar as
          decisões de design."
      />

      {/* Participants Section */}
      <div className="mt-14 mb-10 rounded-3xl bg-gradient-to-br from-violet-50 to-purple-50 p-8 border border-violet-100">
        <h3 className="text-2xl font-bold text-slate-900 mb-6">Quem participou da pesquisa</h3>
        <div className="grid gap-6 md:grid-cols-3 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <p className="text-4xl font-bold text-violet-600 mb-2">6</p>
            <p className="text-slate-700 font-medium">Possíveis Adotantes</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <p className="text-4xl font-bold text-violet-600 mb-2">4</p>
            <p className="text-slate-700 font-medium">Doadores Ativos</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <p className="text-4xl font-bold text-violet-600 mb-2">2</p>
            <p className="text-slate-700 font-medium">Voluntários</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 mb-6">
          <h4 className="font-semibold text-slate-900 mb-3">Por que essas pessoas foram escolhidas?</h4>
          <ul className="space-y-2 text-slate-600">
            <li>• <strong>Possíveis adotantes:</strong> Selecionados entre pessoas que visitaram a ONG nos últimos 6 meses ou tiveram contato via redes sociais.</li>
            <li>• <strong>Doadores:</strong> Aqueles com histórico de doações regulares (mensais ou anuais) para garantir experiência real com o processo.</li>
            <li>• <strong>Voluntários:</strong> Membros ativos que conhecem profundamente os processos internos da ONG.</li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl p-6">
          <h4 className="font-semibold text-slate-900 mb-3">O que essa etapa permitiu descobrir</h4>
          <p className="text-slate-600 leading-7">
            O Discovery revelou que os principais desafios estão na <strong>falta de transparência</strong> sobre o destino de doações e <strong>processo de adoção confuso</strong>. 
            Identificamos também uma <strong>alta demanda por comunicação clara</strong> sobre o status dos animais disponíveis e uma <strong>oportunidade significativa</strong> para criar um 
            espaço centralizado onde todas essas informações estivessem acessíveis e bem organizadas.
          </p>
        </div>
      </div>
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
          title="Escala da pesquisa"
        >
          <ul className="space-y-3">
            <li>• <strong>12 entrevistas presenciais</strong> (6 adotantes, 4 doadores, 2 voluntários)</li>
            <li>• <strong>27 respostas</strong> via Google Forms</li>
            <li>• <strong>Duração média:</strong> 25 minutos por entrevista</li>
            <li>• <strong>Período:</strong> 4 semanas de coleta de dados</li>
          </ul>
        </Card>

        <Card
          icon={<MessageSquare size={22} />}
          title="Critérios de seleção dos participantes"
        >
          <ul className="space-y-3">
            <li>• Contato recente com a ONG (últimos 6 meses)</li>
            <li>• Experiência ativa no processo de adoção ou doação</li>
            <li>• Disposição em participar de entrevistas</li>
            <li>• Diversidade de contextos e motivações</li>
          </ul>
        </Card>

        <Card
          icon={<FileText size={22} />}
          title="Organização dos dados"
        >
          <p className="leading-8 text-slate-600 mb-3">
            Todos os dados coletados foram sistematizados seguindo:
          </p>
          <ul className="space-y-2 text-slate-600">
            <li>• Transcrição das entrevistas e categorização temática</li>
            <li>• Tabulação de respostas do formulário em planilha</li>
            <li>• Análise comparativa entre grupos de usuários</li>
            <li>• Identificação de padrões e insights recorrentes</li>
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