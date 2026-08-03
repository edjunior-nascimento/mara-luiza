// src/components/research/Articles.tsx

import { ExternalLink } from "lucide-react";

type Article = {
  title: string;
  description: string;
  url: string;
};

const articles: Article[] = [
  {
    title: "OMS — Envelhecimento e Saúde",
    description:
      "Panorama global sobre envelhecimento saudável, qualidade de vida e desafios relacionados ao cuidado da população idosa.",
    url: "https://www.who.int/news-room/fact-sheets/detail/ageing-and-health",
  },
  {
    title: "OPAS — Década do Envelhecimento Saudável",
    description:
      "Iniciativa voltada para melhorar a qualidade de vida das pessoas idosas por meio de ações de saúde e inclusão.",
    url: "https://www.paho.org/pt/decada-do-envelhecimento-saudavel-nas-americas-2021-2030",
  },
  {
    title: "Caderneta de Saúde da Pessoa Idosa",
    description:
      "Material do Ministério da Saúde com orientações para acompanhamento contínuo da saúde da pessoa idosa.",
    url: "https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/s/saude-da-pessoa-idosa/caderneta-de-saude",
  },
  {
    title: "IBGE — Perfil da População Idosa",
    description:
      "Dados demográficos sobre envelhecimento da população brasileira e suas principais características.",
    url: "https://www.ibge.gov.br/estatisticas/sociais/populacao.html",
  },
  {
    title: "SciELO — Doenças Crônicas em Idosos",
    description:
      "Estudo sobre fatores associados às doenças crônicas em pessoas idosas atendidas na atenção básica.",
    url: "https://www.scielo.br",
  },
  {
    title: "SciELO — Polifarmácia em Idosos",
    description:
      "Pesquisa sobre o uso simultâneo de múltiplos medicamentos e seus impactos na saúde da pessoa idosa.",
    url: "https://www.scielo.br/j/rbgg/a/ZgQhrGBTwsWcZVHhrsLVYBm/?format=html&lang=pt",
  },
  {
    title: "PubMed — Medication Adherence in Older Adults",
    description:
      "Revisão científica sobre adesão ao tratamento medicamentoso e fatores que influenciam esse comportamento.",
    url: "https://pubmed.ncbi.nlm.nih.gov/41467772/",
  },
  {
    title: "PubMed — Digital Health for Older Adults",
    description:
      "Estudos sobre tecnologias digitais voltadas ao cuidado e monitoramento da saúde de pessoas idosas.",
    url: "https://pubmed.ncbi.nlm.nih.gov/40387720/",
  },
  {
    title: "Nielsen Norman Group — UX for Older Adults",
    description:
      "Boas práticas de experiência do usuário para produtos digitais destinados ao público idoso.",
    url: "https://www.nngroup.com/reports/senior-citizens-on-the-web/",
  },
  {
    title: "W3C — Web Content Accessibility Guidelines (WCAG)",
    description:
      "Diretrizes internacionais para desenvolvimento de interfaces digitais acessíveis.",
    url: "https://www.w3.org/WAI/standards-guidelines/wcag/",
  },
];

export default function Articles() {
  return (
    <div className="grid gap-4">
      {articles.map((article) => (
        <a
          key={article.title}
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-zinc-200 bg-white p-5 transition hover:border-blue-500 hover:shadow-md"
        >
          <div className="mb-2 flex items-start justify-between gap-3">
            <h3 className="font-semibold text-zinc-900">{article.title}</h3>

            <ExternalLink
              size={18}
              className="shrink-0 text-zinc-400"
            />
          </div>

          <p className="text-sm leading-6 text-zinc-600">
            {article.description}
          </p>
        </a>
      ))}
    </div>
  );
}