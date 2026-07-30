import { CoresEnum } from "../enums/Cores.Enum";

interface TopicProps {
  topico: { icone: any; nome: string; cor: CoresEnum; };
  titulo: string;
  descricao: string;
}

export default function Topic(topicProps: TopicProps) {
  return (
    <div className="mb-14">
      <span className={`inline-flex items-center gap-2 rounded-full bg-${topicProps.topico.cor}-100 px-4 py-2 text-sm font-medium text-${topicProps.topico.cor}-700`}>
        <topicProps.topico.icone size={18} />
        {topicProps.topico.nome}
      </span>

      <h2 className="mt-5 text-4xl font-bold text-slate-900">
        {topicProps.titulo}
      </h2>

      <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
        {topicProps.descricao}
      </p>
    </div>
  );
}