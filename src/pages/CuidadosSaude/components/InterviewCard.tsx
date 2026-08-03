import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  FileText,
  Lightbulb,
  Search,
} from "lucide-react";

export interface Interview {
  id: number;
  name: string;
  age?: number;
  role?: string;
  summary: string;
  highlights: string[];
  observations: string[];
}

interface InterviewCardProps {
  interview: Interview;
  defaultOpen?: boolean;
}

export default function InterviewCard({
  interview,
  defaultOpen = false,
}: InterviewCardProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-all duration-300 hover:shadow-lg">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between p-6 text-left transition hover:bg-zinc-50"
      >
        <div>
          <h3 className="text-xl font-semibold text-zinc-900">
            {interview.name}
          </h3>

          {(interview.age || interview.role) && (
            <p className="mt-1 text-sm text-zinc-500">
              {[interview.age && `${interview.age} anos`, interview.role]
                .filter(Boolean)
                .join(" • ")}
            </p>
          )}
        </div>

        {open ? (
          <ChevronUp className="h-5 w-5 text-zinc-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-zinc-500" />
        )}
      </button>

      <div
        className={`grid transition-all duration-300 ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="space-y-6 border-t border-zinc-100 p-6">
            {/* Resumo */}
            <section className="rounded-xl bg-sky-50 p-5">
              <div className="mb-3 flex items-center gap-2">
                <FileText className="h-5 w-5 text-sky-600" />
                <h4 className="font-semibold text-sky-900">
                  Resumo da entrevista
                </h4>
              </div>

              <p className="leading-7 text-zinc-700">
                {interview.summary}
              </p>
            </section>

            {/* Highlights */}
            <section className="rounded-xl bg-amber-50 p-5">
              <div className="mb-3 flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-amber-600" />
                <h4 className="font-semibold text-amber-900">
                  Principais falas
                </h4>
              </div>

              <ul className="space-y-3">
                {interview.highlights.map((item, index) => (
                  <li
                    key={index}
                    className="rounded-lg border border-amber-100 bg-white p-3 italic text-zinc-700"
                  >
                    "{item}"
                  </li>
                ))}
              </ul>
            </section>

            {/* Observações */}
            <section className="rounded-xl bg-emerald-50 p-5">
              <div className="mb-3 flex items-center gap-2">
                <Search className="h-5 w-5 text-emerald-600" />
                <h4 className="font-semibold text-emerald-900">
                  Observações da pesquisa
                </h4>
              </div>

              <ul className="space-y-2">
                {interview.observations.map((item, index) => (
                  <li
                    key={index}
                    className="flex gap-3 text-zinc-700"
                  >
                    <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}