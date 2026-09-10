import { useState, useMemo } from 'react';
import { Sparkles, CheckCircle2, AlertTriangle, AlertCircle, MessageCircle, RotateCcw, Info, ArrowRight } from 'lucide-react';
import { MILESTONES_DATA, CLINIC_INFO } from '../data/clinicData';

interface InteractiveScreenerProps {
  onOpenBooking: () => void;
}

export function InteractiveScreener({ onOpenBooking }: InteractiveScreenerProps) {
  const [selectedAgeBand, setSelectedAgeBand] = useState<string>('1-2y');
  const [checkedSigns, setCheckedSigns] = useState<Record<string, boolean>>({});

  const currentGroup = useMemo(() => {
    return MILESTONES_DATA.find((g) => g.ageBand === selectedAgeBand) || MILESTONES_DATA[1];
  }, [selectedAgeBand]);

  const toggleSign = (signId: string) => {
    setCheckedSigns((prev) => ({
      ...prev,
      [signId]: !prev[signId],
    }));
  };

  const handleAgeChange = (ageBand: string) => {
    setSelectedAgeBand(ageBand);
  };

  const handleReset = () => {
    setCheckedSigns({});
  };

  // Calculate alert level based on checked signs in current age group
  const activeSignsInGroup = useMemo(() => {
    return currentGroup.warningSigns.filter((sign) => checkedSigns[sign.id]);
  }, [currentGroup, checkedSigns]);

  const alertStatus = useMemo(() => {
    const count = activeSignsInGroup.length;
    const hasHighSeverity = activeSignsInGroup.some((s) => s.severity === 'high');

    if (count === 0) {
      return {
        level: 'normal',
        title: 'Nenhum sinal de alerta marcado',
        description: 'Os comportamentos descritos parecem compatíveis com o desenvolvimento esperado para essa faixa etária.',
        badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
        icon: CheckCircle2,
        actionPrompt: 'Deseja tirar dúvidas pontuais ou fazer um acompanhamento preventivo?',
      };
    } else if (count === 1 && !hasHighSeverity) {
      return {
        level: 'attention',
        title: '1 sinal de atenção observado',
        description: 'Recomenda-se observação atenta e estímulos orientados. Cada indivíduo tem seu próprio ritmo, mas uma avaliação precoce previne atrasos maiores.',
        badgeColor: 'bg-amber-50 text-amber-800 border-amber-200',
        icon: AlertTriangle,
        actionPrompt: 'Agende uma conversa com a Dra. Katiussya para orientações personalizadas.',
      };
    } else {
      return {
        level: 'recommended',
        title: 'Recomendada Avaliação Fonoaudiológica',
        description: `${count} sinal(is) de alerta identificado(s). A intervenção precoce é fundamental para o desenvolvimento da fala e para o bem-estar do paciente.`,
        badgeColor: 'bg-rose-50 text-rose-800 border-rose-200',
        icon: AlertCircle,
        actionPrompt: 'Envie esse resultado para a Dra. Katiussya no WhatsApp para agendar uma avaliação clínica completa.',
      };
    }
  }, [activeSignsInGroup]);

  // Format WhatsApp message with screening details
  const generateWhatsAppUrl = () => {
    const signsList = activeSignsInGroup.map((s) => `• ${s.text}`).join('\n');
    const message = `Olá Dra. Katiussya Amorim, fiz a Triagem Online no seu site para a faixa etária *${currentGroup.label}*.\n\n` +
      (activeSignsInGroup.length > 0
        ? `Notei os seguintes sinais de atenção:\n${signsList}\n\n`
        : `Gostaria de agendar uma consulta de avaliação preventiva.\n\n`) +
      `Gostaria de agendar uma consulta em Sinop. Poderia me informar os próximos horários disponíveis?`;

    return `https://wa.me/${CLINIC_INFO.phoneRaw}?text=${encodeURIComponent(message)}`;
  };

  const StatusIcon = alertStatus.icon;

  return (
    <section id="triagem" className="py-16 sm:py-20 bg-stone-50 border-y border-stone-200/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100/80 text-teal-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            Ferramenta Interativa Gratuita
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-900 tracking-tight mb-4">
            Triagem dos Marcos de Fala e Comunicação
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Selecione a faixa etária abaixo e faça um teste rápido para saber se a fala, compreensão e comunicação estão dentro do esperado ou se há sinais de alerta.
          </p>
        </div>

        {/* Age Bands Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {MILESTONES_DATA.map((group) => {
            const isSelected = group.ageBand === selectedAgeBand;
            return (
              <button
                key={group.ageBand}
                onClick={() => handleAgeChange(group.ageBand)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-teal-700 text-white shadow-md shadow-teal-700/20 scale-[1.02]'
                    : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                }`}
              >
                {group.label}
              </button>
            );
          })}
        </div>

        {/* Main Screener Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: Expected Milestones & Checklist */}
          <div className="md:col-span-7 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs">
            
            {/* Age Header & Expected Milestones */}
            <div className="mb-6 pb-6 border-b border-slate-100">
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">
                  Faixa Etária Selecionada
                </span>
                <span className="px-2.5 py-1 bg-teal-50 text-teal-800 text-xs font-semibold rounded-md">
                  {currentGroup.label}
                </span>
              </div>
              <h3 className="font-heading font-bold text-slate-900 text-lg mb-3">
                Marcos esperados para esta fase:
              </h3>
              <ul className="space-y-2">
                {currentGroup.expectedMilestones.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Warning Signs Checklist */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-heading font-bold text-slate-900 text-base flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-500" />
                  <span>Você nota algum desses sinais? (Marque se presente)</span>
                </h3>
                {activeSignsInGroup.length > 0 && (
                  <button
                    onClick={handleReset}
                    className="text-xs text-slate-400 hover:text-slate-600 flex items-center gap-1 cursor-pointer"
                  >
                    <RotateCcw className="w-3 h-3" />
                    Limpar
                  </button>
                )}
              </div>

              <div className="space-y-2.5">
                {currentGroup.warningSigns.map((sign) => {
                  const isChecked = !!checkedSigns[sign.id];
                  return (
                    <label
                      key={sign.id}
                      onClick={() => toggleSign(sign.id)}
                      className={`flex items-start gap-3 p-3 rounded-xl border transition-all cursor-pointer select-none ${
                        isChecked
                          ? 'bg-rose-50/70 border-rose-300 text-rose-900'
                          : 'bg-slate-50/70 border-slate-200 text-slate-700 hover:bg-slate-100/70'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => {}}
                        className="mt-0.5 w-4 h-4 rounded border-slate-300 text-teal-700 focus:ring-teal-600 cursor-pointer"
                      />
                      <span className="text-xs sm:text-sm font-medium leading-relaxed">
                        {sign.text}
                      </span>
                    </label>
                  );
                })}
              </div>

              <div className="mt-4 flex items-center gap-2 text-slate-400 text-xs">
                <Info className="w-4 h-4 shrink-0" />
                <span>Esta triagem é um instrumento informativo preliminar e não substitui a consulta fonoaudiológica clínica formal.</span>
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Analysis Card */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Resultado Dinâmico da Triagem
              </h3>

              {/* Status Badge */}
              <div className={`p-4 rounded-xl border flex items-start gap-3 mb-4 ${alertStatus.badgeColor}`}>
                <StatusIcon className="w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm leading-snug">{alertStatus.title}</h4>
                  <p className="text-xs mt-1 leading-relaxed opacity-90">{alertStatus.description}</p>
                </div>
              </div>

              {/* Summary of checked items */}
              {activeSignsInGroup.length > 0 ? (
                <div className="mb-5 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                  <span className="font-semibold text-slate-700 block mb-1">
                    Sinais selecionados para avaliação:
                  </span>
                  <ul className="list-disc list-inside space-y-1 text-slate-600">
                    {activeSignsInGroup.map((s) => (
                      <li key={s.id}>{s.text}</li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="mb-5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-600">
                  Nenhum sinal marcado para a faixa de <strong className="font-semibold text-slate-800">{currentGroup.label}</strong>. Se você tiver qualquer dúvida ou intuição sobre o desenvolvimento, uma conversa com um profissional sempre traz clareza e tranquilidade.
                </div>
              )}

              {/* WhatsApp direct dispatch with pre-filled test result */}
              <div className="space-y-2.5">
                <a
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-teal-700/20 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-300" />
                  <span>Enviar Triagem via WhatsApp</span>
                </a>

                <button
                  onClick={onOpenBooking}
                  className="w-full py-2.5 px-4 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-medium text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <span>Preencher Formulário de Agendamento</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-slate-500 text-xs">
                <span>Atendimento presencial em Sinop - MT</span>
                <span className="font-semibold text-teal-700">{CLINIC_INFO.crfa}</span>
              </div>
            </div>

            {/* Doctor Note Box */}
            <div className="bg-teal-900 text-white rounded-2xl p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-teal-300 mb-1">
                Dica da Fonoaudióloga
              </p>
              <p className="text-xs sm:text-sm leading-relaxed text-teal-50">
                &ldquo;A plasticidade cerebral nos primeiros 5 anos de vida é a maior de toda a nossa vida. Não espere a criança completar 3 ou 4 anos para buscar ajuda se você sente que algo não está no tempo certo.&rdquo;
              </p>
              <p className="text-xs font-bold text-teal-200 mt-2">
                — Dra. Katiussya Amorim
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
