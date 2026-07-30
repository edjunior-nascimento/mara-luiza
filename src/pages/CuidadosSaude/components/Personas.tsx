import {
  Heart,
  Pill,
  Shield,
  UserRound,
  Users,
} from "lucide-react";
import Topic from "../../../components/Topic";
import { CoresEnum } from "../../../enums/Cores.Enum";

const personas = [
  {
    name: "Maria Aparecida",
    age: "72 anos",
    role: "Aposentada",
    image: "/images/senior-health/persona-maria.png",
    icon: Heart,
    bio: "Mora sozinha, possui diabetes e hipertensão e busca manter sua independência, mas sente dificuldade em organizar toda a rotina de cuidados com a saúde.",
    goals: [
      "Lembrar de tomar os medicamentos",
      "Controlar pressão e glicemia",
      "Encontrar todas as informações em um único lugar",
    ],
    frustrations: [
      "Esquece horários dos remédios",
      "Guarda exames e receitas em locais diferentes",
      "Tem dificuldade com aplicativos complexos",
    ],
    quote:
      "Quero cuidar da minha saúde sem depender dos meus filhos o tempo todo.",
  },
  {
    name: "Juliana Oliveira",
    age: "42 anos",
    role: "Filha e Cuidadora",
    image: "/images/senior-health/persona-juliana.png",
    icon: Users,
    bio: "Acompanha diariamente a rotina da mãe, ajudando na organização de consultas, medicamentos e exames, mesmo conciliando trabalho e família.",
    goals: [
      "Acompanhar a saúde da mãe à distância",
      "Receber alertas importantes",
      "Evitar esquecimentos e emergências",
    ],
    frustrations: [
      "Precisa ligar diversas vezes ao dia",
      "Não sabe se os medicamentos foram tomados",
      "Falta acesso rápido ao histórico médico",
    ],
    quote:
      "Gostaria de acompanhar minha mãe sem precisar estar presente o tempo inteiro.",
  },
];

export default function Personas() {
  return (
    <section
      id="personas"
      className="bg-slate-50 py-28"
    >
      <div className="mx-auto container px-6">
        {/* Header */}
        <Topic
          topico={{ icone: UserRound, nome: "Personas", cor: CoresEnum.VIOLET }}
          titulo="Quem são as pessoas para quem estamos projetando?"
          descricao="A partir das entrevistas e dos padrões identificados durante a
            pesquisa, foram construídas duas personas representando os principais
            usuários do ecossistema: a pessoa idosa e sua principal cuidadora.
            Elas serviram como referência para todas as decisões de design ao
            longo do projeto."
        />

        {/* Personas */}

        <div className="mt-20 space-y-16">
          {personas.map((persona) => {
            const Icon = persona.icon;

            return (
              <article
                key={persona.name}
                className="overflow-hidden rounded-[40px] border border-slate-200 bg-white shadow-lg"
              >
                <div className="grid lg:grid-cols-[320px_1fr]">
                  {/* Perfil */}

                  <div className="bg-gradient-to-br from-emerald-600 to-sky-600 p-10 text-white">
                    <div className="mx-auto overflow-hidden rounded-3xl bg-white p-2">
                      <img
                        src={persona.image}
                        alt={persona.name}
                        className="h-72 w-full rounded-2xl object-cover"
                      />
                    </div>

                    <div className="mt-8 flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20">
                        <Icon size={24} />
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold">
                          {persona.name}
                        </h3>

                        <p className="text-emerald-100">
                          {persona.age} • {persona.role}
                        </p>
                      </div>
                    </div>

                    <blockquote className="mt-8 rounded-2xl bg-white/10 p-6 italic leading-8 text-emerald-50">
                      "{persona.quote}"
                    </blockquote>
                  </div>

                  {/* Conteúdo */}

                  <div className="p-10 lg:p-12">
                    <p className="text-lg leading-8 text-slate-600">
                      {persona.bio}
                    </p>

                    <div className="mt-10 grid gap-10 md:grid-cols-2">
                      {/* Objetivos */}

                      <div>
                        <div className="flex items-center gap-3">
                          <Heart className="text-emerald-600" />

                          <h4 className="text-xl font-bold text-slate-900">
                            Objetivos
                          </h4>
                        </div>

                        <ul className="mt-6 space-y-4">
                          {persona.goals.map((goal) => (
                            <li
                              key={goal}
                              className="flex items-start gap-3"
                            >
                              <span className="mt-2 h-2.5 w-2.5 rounded-full bg-emerald-500" />

                              <p className="leading-7 text-slate-600">
                                {goal}
                              </p>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Frustrações */}

                      <div>
                        <div className="flex items-center gap-3">
                          <Pill className="text-red-500" />

                          <h4 className="text-xl font-bold text-slate-900">
                            Frustrações
                          </h4>
                        </div>

                        <ul className="mt-6 space-y-4">
                          {persona.frustrations.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-3"
                            >
                              <span className="mt-2 h-2.5 w-2.5 rounded-full bg-red-500" />

                              <p className="leading-7 text-slate-600">
                                {item}
                              </p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-10 rounded-3xl bg-slate-50 p-8">
                      <div className="flex items-center gap-3">
                        <Shield className="text-sky-600" />

                        <h4 className="text-xl font-bold text-slate-900">
                          Necessidade principal
                        </h4>
                      </div>

                      <p className="mt-5 text-lg leading-8 text-slate-600">
                        Ter uma solução simples, acessível e confiável que
                        centralize toda a rotina de cuidados com a saúde,
                        reduzindo esquecimentos, aumentando a autonomia do idoso
                        e facilitando o acompanhamento pelos familiares.
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}