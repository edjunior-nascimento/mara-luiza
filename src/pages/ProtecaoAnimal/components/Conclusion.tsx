import {
  Heart,
  GraduationCap,
  Target,
  ArrowUpRight,
  FileText,
  Figma,
  ExternalLink,
} from "lucide-react";
import Topic from "../../../components/Topic";
import { CoresEnum } from "../../../enums/Cores.Enum";

const learnings = [
  "Validar decisões com usuários gera soluções mais assertivas.",
  "Pequenas melhorias na arquitetura da informação reduzem dúvidas durante a navegação.",
  "Testes de usabilidade revelam problemas que não aparecem durante o processo de design.",
  "Projetos sociais exigem equilíbrio entre empatia, clareza e facilidade de uso.",
];

const nextSteps = [
  "Dashboard administrativo para gestão da ONG.",
  "Sistema de autenticação para voluntários.",
  "Integração com gateway de pagamento.",
  "Acompanhamento do status das adoções.",
];

export default function Conclusion() {
  return (
    <section className="mx-auto container px-6 py-24">

      {/* Header */}

      <Topic
        topico={{ icone: Target, nome: "Encerramento", cor: CoresEnum.SKY }}
        titulo="Conclusão"
        descricao="Este projeto demonstrou como uma abordagem centrada no usuário pode
          transformar processos manuais em uma experiência digital mais clara,
          acessível e eficiente para uma ONG de proteção animal."
      />

      {/* Resultado */}

      <div className="mt-16 rounded-[32px] bg-gradient-to-r from-violet-600 to-sky-500 p-10 text-white">

        <div className="flex gap-5">

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20">
            <Heart size={30} />
          </div>

          <div>

            <h3 className="text-3xl font-semibold">
              Resultado do Projeto
            </h3>

            <p className="mt-5 max-w-4xl leading-8 text-violet-100">
              A solução proposta simplificou os fluxos de doação e adoção,
              aumentou a transparência da ONG e organizou informações que antes
              estavam dispersas nas redes sociais. Além do site institucional,
              também foi projetado um dashboard para apoiar a equipe no
              gerenciamento de animais, adoções e doações.
            </p>

          </div>

        </div>

      </div>

      {/* Aprendizados */}

      <div className="mt-20 grid gap-8 lg:grid-cols-2">

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
            <GraduationCap size={26} />
          </div>

          <h3 className="text-2xl font-semibold">
            Principais Aprendizados
          </h3>

          <ul className="mt-6 space-y-4">

            {learnings.map((item) => (

              <li
                key={item}
                className="flex gap-3 text-slate-600 leading-7"
              >
                ✓ {item}
              </li>

            ))}

          </ul>

        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-sky-600">
            <Target size={26} />
          </div>

          <h3 className="text-2xl font-semibold">
            Próximos Passos
          </h3>

          <ul className="mt-6 space-y-4">

            {nextSteps.map((item) => (

              <li
                key={item}
                className="flex gap-3 text-slate-600 leading-7"
              >
                • {item}
              </li>

            ))}

          </ul>

        </div>

      </div>

      {/* Links */}

      <div className="mt-20">

        <h3 className="text-3xl font-bold text-slate-900">
          Explore o Projeto
        </h3>

        <p className="mt-3 text-slate-600">
          Consulte o estudo de caso completo e navegue pelos protótipos
          desenvolvidos durante o projeto.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">

          <a
            href="../../data/estudo_caso_protecao_animal.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-violet-300 hover:shadow-lg"
          >
            <div className="flex items-center gap-4">
              <FileText className="text-violet-600" />
              <div>
                <h4 className="font-semibold">
                  Estudo de Caso
                </h4>
                <p className="text-sm text-slate-500">
                  PDF completo
                </p>
              </div>
            </div>

            <ArrowUpRight />
          </a>

          <a
            href="https://www.figma.com/design/xWfCGj3Y1obGwbw9LTfTMX/website_ong"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-violet-300 hover:shadow-lg"
          >
            <div className="flex items-center gap-4">
              <Figma className="text-violet-600" />
              <div>
                <h4 className="font-semibold">
                  Projeto no Figma
                </h4>
                <p className="text-sm text-slate-500">
                  Wireframes e protótipos
                </p>
              </div>
            </div>

            <ExternalLink />
          </a>

        </div>

      </div>

    </section>
  );
}