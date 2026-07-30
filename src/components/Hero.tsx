import {
  ArrowDown,
} from "lucide-react";

interface HeroProps {
  estudo: {icone: any; nome: string;};
  imagem: string;
  titulo: string;
  descricao: string;
  tags : string[];
  estatisticas: {label: string; valor: string; icone: any;}[];
}

export default function Hero(heroProps: HeroProps) {
  return (
    <section className={`relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-emerald-50`}>

      {/* Background */}

      <div className={`absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl`} />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-emerald-200/30 blur-3xl" />

      <div className="mx-auto flex container flex-col gap-20 px-6 py-24 lg:flex-row lg:items-center">

        {/* Texto */}

        <div className="flex-1">

          <div className={`inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700`}>
            {<heroProps.estudo.icone  size={18}/>}
            {heroProps.estudo.nome}
          </div>

          <h1 className="mt-8 text-5xl font-bold leading-tight text-slate-900 lg:text-6xl">

           {heroProps.titulo}

          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-600">
            {heroProps.descricao}
          </p>

          {/* Tags */}

          <div className="mt-10 flex flex-wrap gap-3">

            {heroProps.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
              >
                {tag}
              </span>
            ))}

          </div>

          {/* CTA */}

          <a
            href="#overview"
            className="mt-12 inline-flex items-center gap-3 rounded-2xl bg-slate-900 px-7 py-4 font-medium text-white transition hover:bg-slate-800"
          >
            Ver estudo de caso

            <ArrowDown size={18} />

          </a>

        </div>

        {/* Imagem */}

        <div className="flex-1">

          <div className="overflow-hidden rounded-[36px] bg-white p-5 shadow-2xl">

            <img
              src={heroProps.imagem}
              alt={heroProps.titulo}
              className="w-full rounded-3xl object-cover"
            />

          </div>

        </div>

      </div>

      {/* Estatísticas */}

      <div className="mx-auto -mt-8 max-w-6xl px-6 pb-24">

        <div className="grid gap-6 rounded-[32px] border border-slate-200 bg-white p-8 shadow-xl md:grid-cols-3">

          {heroProps.estatisticas.map((item) => {

            const Icon = item.icone;

            return (
              <div
                key={item.label}
                className="flex items-start gap-4"
              >
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600`}>

                  <Icon size={24} />

                </div>

                <div>

                  <p className="text-sm uppercase tracking-wide text-slate-500">
                    {item.label}
                  </p>

                  <h3 className="mt-1 text-xl font-semibold text-slate-900">
                    {item.valor}
                  </h3>

                </div>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}