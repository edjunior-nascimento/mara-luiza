import { Users, Target, AlertCircle, Heart, Zap } from "lucide-react";
import Topic from "../../../components/Topic";
import { CoresEnum } from "../../../enums/Cores.Enum";

export default function Persona() {
  return (
    <section className="mx-auto container px-6 py-24 lg:p-20">
      <Topic 
        topico={{icone: Users, nome: "Personas", cor: CoresEnum.BLUE}}
        titulo="Persona Principal"
        descricao="Representação sintetizada do usuário-chave que guiou as decisões de design."
      />

      <div className="mt-14 grid gap-8 lg:grid-cols-3">
        {/* Avatar e Info Básica */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          <div className="rounded-3xl bg-gradient-to-br from-blue-50 to-cyan-50 p-8 border border-blue-100 text-center">
            <div className="mb-6 mx-auto w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center text-white text-4xl font-bold">
              AM
            </div>
            
            <h3 className="text-2xl font-bold text-slate-900">Ana Maria</h3>
            <p className="text-slate-600 font-medium mt-1">32 anos</p>
            <p className="text-sm text-slate-500 mt-3">Arquiteta • Mora em São Paulo • Divorciada</p>
          </div>

          {/* Motivação Primária */}
          <div className="rounded-3xl bg-green-50 p-6 border border-green-100">
            <div className="flex items-start gap-3">
              <Zap className="text-green-600 flex-shrink-0 mt-1" size={20} />
              <div>
                <h4 className="font-bold text-green-900 mb-2">Motivação Principal</h4>
                <p className="text-sm text-green-800">
                  Combater a solidão após mudança de vida e dar lar a um animal que precisa.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Detalhes da Persona */}
        <div className="lg:col-span-2 space-y-6">
          {/* Objetivo */}
          <div className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-100 text-violet-600">
                <Target size={20} />
              </div>
              <h4 className="font-bold text-slate-900">Objetivo</h4>
            </div>
            <p className="text-slate-700 leading-7">
              Encontrar um animal para adoção que se adapte à sua rotina como profissional autônoma. 
              Quer um processo <strong>claro, confiável e sem burocracia</strong>.
            </p>
          </div>

          {/* Frustrações */}
          <div className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-100 text-red-600">
                <AlertCircle size={20} />
              </div>
              <h4 className="font-bold text-slate-900">Frustrações</h4>
            </div>
            <ul className="space-y-3 text-slate-700">
              <li>• <strong>Falta de informações:</strong> Não sabe o temperamento dos animais disponíveis</li>
              <li>• <strong>Processo confuso:</strong> Não entende quais são os próximos passos para adotar</li>
              <li>• <strong>Comunicação lenta:</strong> Tenta entrar em contato via WhatsApp e não recebe resposta rápida</li>
              <li>• <strong>Desconfiança:</strong> Preocupada com golpes e plataformas não confiáveis</li>
            </ul>
          </div>

          {/* Necessidades */}
          <div className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 text-amber-600">
                <Heart size={20} />
              </div>
              <h4 className="font-bold text-slate-900">Necessidades</h4>
            </div>
            <ul className="space-y-3 text-slate-700">
              <li>• Informações detalhadas sobre cada animal (histórico, vacinação, temperamento)</li>
              <li>• Filtros para buscar por tamanho, idade e características específicas</li>
              <li>• Processo de adoção transparente e passo-a-passo</li>
              <li>• Resposta rápida a perguntas e dúvidas sobre o animal</li>
              <li>• Confirmação de segurança e confiabilidade da ONG</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Jornada Resumida */}
      <div className="mt-12 rounded-3xl bg-gradient-to-r from-blue-50 to-cyan-50 p-8 border border-blue-100">
        <h3 className="text-2xl font-bold text-slate-900 mb-6">Jornada Típica</h3>
        <div className="grid gap-4 md:grid-cols-4">
          <div className="text-center">
            <div className="mx-auto w-12 h-12 rounded-full bg-blue-200 text-blue-700 flex items-center justify-center font-bold mb-3">
              1
            </div>
            <p className="font-semibold text-slate-900 mb-2">Busca</p>
            <p className="text-sm text-slate-600">Procura por ONGs de adoção no Google</p>
          </div>

          <div className="text-center flex flex-col justify-between">
            <div className="mx-auto w-12 h-12 rounded-full bg-blue-200 text-blue-700 flex items-center justify-center font-bold mb-3">
              2
            </div>
            <p className="font-semibold text-slate-900 mb-2">Exploração</p>
            <p className="text-sm text-slate-600">Navega pelas fotos dos animais</p>
          </div>

          <div className="text-center">
            <div className="mx-auto w-12 h-12 rounded-full bg-blue-200 text-blue-700 flex items-center justify-center font-bold mb-3">
              3
            </div>
            <p className="font-semibold text-slate-900 mb-2">Decisão</p>
            <p className="text-sm text-slate-600">Faz perguntas sobre o animal de interesse</p>
          </div>

          <div className="text-center">
            <div className="mx-auto w-12 h-12 rounded-full bg-blue-200 text-blue-700 flex items-center justify-center font-bold mb-3">
              4
            </div>
            <p className="font-semibold text-slate-900 mb-2">Ação</p>
            <p className="text-sm text-slate-600">Completa inscrição e leva o animal para casa</p>
          </div>
        </div>
      </div>
    </section>
  );
}
