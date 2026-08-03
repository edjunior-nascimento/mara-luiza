import {
  Briefcase,
  Heart,
  Smartphone,
  Target,
  Users,
} from "lucide-react";
import Topic from "../../../components/Topic";
import { CoresEnum } from "../../../enums/Cores.Enum";

const personas = [
  {
    name: "Lucas Andrade",
    age: "27 anos",
    role: "Turista Aventureiro",
    avatar: "/images/personas/persona-tourist.png",
    description:
      "Busca novas trilhas e experiências na natureza, mas sente dificuldade em encontrar informações confiáveis e centralizadas.",

    goals: [
      "Descobrir novos destinos",
      "Reservar passeios rapidamente",
      "Encontrar avaliações confiáveis",
    ],

    frustrations: [
      "Informações espalhadas",
      "Poucos contatos dos guias",
      "Reservas feitas apenas pelo WhatsApp",
    ],

    behavior: [
      "Usa o celular durante toda a viagem",
      "Pesquisa avaliações antes de decidir",
      "Compartilha experiências nas redes sociais",
    ],
  },
  {
    name: "Mariana Sousa",
    age: "35 anos",
    role: "Guia Local",
    avatar: "/images/personas/persona-guide.png",
    description:
      "Trabalha conduzindo trilhas e passeios, mas depende principalmente de indicações e redes sociais para conseguir clientes.",

    goals: [
      "Receber mais reservas",
      "Divulgar seus roteiros",
      "Organizar agenda",
    ],

    frustrations: [
      "Pouca visibilidade",
      "Muitas mensagens repetidas",
      "Agenda desorganizada",
    ],

    behavior: [
      "Utiliza WhatsApp diariamente",
      "Publica fotos no Instagram",
      "Atende turistas de diferentes cidades",
    ],
  },
];

export default function Personas() {
  return (
    <section
      id="personas"
      className="bg-slate-50 py-28 px-20"
    >
      <div className="mx-auto container px-6">
        {/* Header */}

        <Topic
          topico={{ icone: Users, nome: "Personas", cor: CoresEnum.SKY }}
          titulo="Conhecendo nossos usuários"
          descricao="A partir das entrevistas e pesquisas foi possível identificar dois
            perfis principais que representam a maior parte dos usuários da
            plataforma."
        />

        {/* Cards */}

        <div className="mt-20 grid gap-10 lg:grid-cols-2">
          {personas.map((persona) => (
            <article
              key={persona.name}
              className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Topo */}

              <div className="flex flex-col items-center bg-gradient-to-br from-sky-50 to-white px-8 py-10">
                <img
                  src={persona.avatar}
                  alt={persona.name}
                  className="h-32 w-32 rounded-full border-4 border-white object-cover shadow-lg"
                />

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {persona.name}
                </h3>

                <p className="mt-2 text-slate-500">
                  {persona.age} • {persona.role}
                </p>

                <p className="mt-6 max-w-md text-center leading-7 text-slate-600">
                  {persona.description}
                </p>
              </div>

              {/* Conteúdo */}

              <div className="space-y-8 p-8">
                <Section
                  icon={<Target size={18} />}
                  title="Objetivos"
                  color="bg-emerald-100 text-emerald-700"
                  items={persona.goals}
                />

                <Section
                  icon={<Heart size={18} />}
                  title="Frustrações"
                  color="bg-red-100 text-red-600"
                  items={persona.frustrations}
                />

                <Section
                  icon={<Smartphone size={18} />}
                  title="Comportamento"
                  color="bg-sky-100 text-sky-700"
                  items={persona.behavior}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

type SectionProps = {
  title: string;
  items: string[];
  color: string;
  icon: React.ReactNode;
};

function Section({
  title,
  items,
  color,
  icon,
}: SectionProps) {
  return (
    <div>
      <div className="mb-4 flex items-center gap-3">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-xl ${color}`}
        >
          {icon}
        </div>

        <h4 className="text-lg font-semibold text-slate-900">
          {title}
        </h4>
      </div>

      <ul className="space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 text-slate-600"
          >
            <div className="mt-2 h-2 w-2 rounded-full bg-sky-500" />

            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function UsersIcon() {
  return <Briefcase size={18} />;
}