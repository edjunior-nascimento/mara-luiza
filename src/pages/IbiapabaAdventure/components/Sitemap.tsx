import {
  CalendarCheck,
  CheckCircle2,
  Compass,
  Home,
  MapPinned,
  Package,
  Search,
  UserCircle2,
} from "lucide-react";
import Topic from "../../../components/Topic";
import { CoresEnum } from "../../../enums/Cores.Enum";

export default function UserFlow() {
  return (
    <section
      id="user-flow"
      className="bg-white py-28 px-20"
    >
      <div className="mx-auto container px-6">
        
        <Topic
          topico={{ icone: MapPinned, nome: "User Flow", cor: CoresEnum.SKY }}
          titulo="Fluxo principal do usuário"
          descricao="O fluxo foi definido para representar todas as possibilidades de
            navegação do usuário, desde a descoberta dos destinos até a
            confirmação do agendamento."
        />

        <div className="mt-20 p-6">

          <img src="/images/ibi_fluxograma.png" alt="Fluxo principal do usuário" className="w-full border border-slate-200 bg-white p-7 shadow-sm" />

        </div>

        <div className="mt-24 rounded-[36px] bg-gradient-to-r from-slate-900 to-slate-800 p-12 text-white">

          <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">

            <div className="max-w-3xl">

              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm">

                <CalendarCheck size={16} />

                Objetivo do fluxo

              </span>

              <h3 className="mt-6 text-3xl font-bold">

                Guiar o usuário até o agendamento de maneira simples e intuitiva.

              </h3>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                O fluxo elimina dúvidas durante a navegação e permite que o
                turista encontre um local, monte seu roteiro e realize o
                agendamento em poucos passos.
              </p>

            </div>

            <div className="grid grid-cols-2 gap-5">

              <Metric value="5" label="Fluxos" />

              <Metric value="17+" label="Telas" />

              <Metric value="2" label="Decisões" />

              <Metric value="1" label="Objetivo final" />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

type MetricProps = {
  value: string;
  label: string;
};

function Metric({ value, label }: MetricProps) {
  return (
    <div className="rounded-3xl bg-white/10 p-6 text-center backdrop-blur">
      <h4 className="text-4xl font-bold">{value}</h4>

      <p className="mt-2 text-sm uppercase tracking-widest text-slate-300">
        {label}
      </p>
    </div>
  );
}