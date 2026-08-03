import {
  FileText,
  Figma,
  Globe,
  Smartphone,
  LayoutDashboard,
  ArrowUpRight,
} from "lucide-react";
import { CoresEnum } from "../enums/Cores.Enum";
import Topic from "./Topic";

type LinkType = {
  itens: {
    title: string;
    description: string;
    href: string;
    icon: any;
    color: string;
  }[];
}

export default function Links(links: LinkType) {
  return (
    <section className="mx-auto container px-6 py-24 px-20">

      <Topic
        topico={{ icone: FileText, nome: "Recursos", cor: CoresEnum.VIOLET }}
        titulo="Explore o Projeto"
        descricao="Todos os artefatos desenvolvidos durante o projeto estão disponíveis
          para consulta, incluindo arquivos do Figma e protótipos navegáveis."
      />

      <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {links.itens.map((item) => {

          const Icon = item.icon;

          return (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-violet-300 hover:shadow-xl"
            >

              <div
                className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${item.color}`}
              >
                <Icon size={26} />
              </div>

              <h3 className="text-xl font-semibold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {item.description}
              </p>

              <div className="mt-8 flex items-center gap-2 font-medium text-violet-600">

                Abrir recurso

                <ArrowUpRight
                  size={18}
                  className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                />

              </div>

            </a>
          );
        })}

      </div>

      {/* CTA */}

      <div className="mt-20 rounded-[32px] bg-sky-500 p-10 text-white">

        <h3 className="text-3xl font-bold">
          Obrigado por acompanhar este estudo de caso!
        </h3>

        <p className="mt-5 max-w-3xl leading-8 text-sky-100">
          Este projeto representa meu processo de UX/UI Design, desde a pesquisa
          com usuários até a prototipação e validação das soluções. Caso queira
          conversar sobre o projeto ou conhecer outros trabalhos, fique à
          vontade para entrar em contato.
        </p>

      </div>

    </section>
  );
}