import {
  ExternalLink,
  PlayCircle,
  Smartphone,
  MousePointerClick,
} from "lucide-react";
import Topic from "../../../components/Topic";
import { CoresEnum } from "../../../enums/Cores.Enum";

const prototypeFeatures = [
  {
    title: "Fluxo completo",
    description:
      "O protótipo contempla toda a jornada principal do usuário, desde os lembretes diários até o acompanhamento dos indicadores de saúde.",
  },
  {
    title: "Interações reais",
    description:
      "Botões, navegação, transições e feedbacks foram prototipados para simular a experiência final do aplicativo.",
  },
  {
    title: "Validação de usabilidade",
    description:
      "O protótipo foi utilizado durante os testes com usuários para validar fluxos, acessibilidade e compreensão da interface.",
  },
];

export default function Prototype() {
  return (
    <section
      id="prototype"
      className="bg-slate-50 py-28"
    >
      <div className="mx-auto container px-6">
        {/* Header */}
        <Topic
          topico={{ icone: PlayCircle, nome: "Protótipo Interativo", cor: CoresEnum.VIOLET }}
          titulo="Experiência navegável no Figma"
          descricao="Para validar a experiência antes do desenvolvimento, foi criado um
            protótipo interativo de alta fidelidade reproduzindo os principais
            fluxos do aplicativo. Isso permitiu testar a navegação, identificar
            melhorias e avaliar a experiência dos usuários de forma próxima ao
            produto final."
        />

        {/* Preview */}

        <div className="mt-20 overflow-hidden rounded-[40px] border border-slate-200 bg-white shadow-xl">
          <div className="aspect-video">
            <iframe
              className="h-full w-full"
              src="https://www.figma.com/embed?embed_host=share&url=SEU_LINK_DO_PROTOTIPO"
              allowFullScreen
            />
          </div>
        </div>

        {/* CTA */}

        <div className="mt-10 flex justify-center">
          <a
            href="https://www.figma.com/proto/SEU_LINK_DO_PROTOTIPO"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-2xl bg-slate-900 px-8 py-4 font-medium text-white transition hover:bg-slate-800"
          >
            Abrir protótipo no Figma

            <ExternalLink size={18} />
          </a>
        </div>

        {/* Features */}

        <div className="mt-24 grid gap-8 lg:grid-cols-3">
          {prototypeFeatures.map((item) => (
            <article
              key={item.title}
              className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-100 text-violet-600">
                <Smartphone size={30} />
              </div>

              <h3 className="mt-8 text-2xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        {/* Final */}

        <div className="mt-24 rounded-[40px] bg-gradient-to-r from-violet-600 to-indigo-600 p-12 text-white shadow-2xl">
          <div className="flex items-center gap-3">
            <MousePointerClick size={30} />

            <h3 className="text-3xl font-bold">
              Navegue pelo protótipo
            </h3>
          </div>

          <p className="mt-8 max-w-5xl text-xl leading-9 text-violet-50">
            O protótipo representa a versão validada da solução proposta,
            permitindo explorar todos os fluxos principais da experiência. Ele
            foi utilizado para validar hipóteses, realizar testes de usabilidade
            e comunicar a solução antes da etapa de desenvolvimento.
          </p>
        </div>
      </div>
    </section>
  );
}