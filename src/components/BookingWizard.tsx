import { useState, useEffect } from 'react';
import { X, Calendar, User, Phone, MessageCircle, Clock, Sparkles, Check, Send } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { BookingState } from '../types';

interface BookingWizardProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedService?: string;
}

export function BookingWizard({ isOpen, onClose, preSelectedService }: BookingWizardProps) {
  const [form, setForm] = useState<BookingState>({
    patientType: 'child',
    patientName: '',
    patientAge: '',
    contactName: '',
    phone: '',
    primaryConcern: preSelectedService || 'Atraso de Fala',
    preferredShift: 'afternoon',
    additionalNotes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preSelectedService) {
      setForm((prev) => ({ ...prev, primaryConcern: preSelectedService }));
    }
  }, [preSelectedService]);

  if (!isOpen) return null;

  const concernsList = [
    'Atraso no Desenvolvimento da Fala',
    'Autismo (TEA) ou Suspeita',
    'TDAH e Atenção na Comunicação',
    'Troca de Sons / Letras (R, L, S)',
    'Seletividade Alimentar Infantil',
    'Mastigação e Deglutição Atípica',
    'Gagueira ou Disfluência',
    'Avaliação e Laudo Fonoaudiológico',
    'Outro Motivo',
  ];

  const handleInputChange = (field: keyof BookingState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const getFormattedMessage = () => {
    const patientTypeLabel =
      form.patientType === 'child'
        ? 'Criança'
        : form.patientType === 'teen'
        ? 'Adolescente'
        : form.patientType === 'adult'
        ? 'Adulto'
        : 'Idoso';

    const shiftLabel =
      form.preferredShift === 'morning'
        ? 'Manhã'
        : form.preferredShift === 'afternoon'
        ? 'Tarde'
        : 'Flexível / Qualquer horário';

    let msg = `Olá Dra. Katiussya Amorim, gostaria de agendar uma consulta fonoaudiológica em Sinop.\n\n`;
    msg += `📋 *Dados para o Agendamento:*\n`;
    if (form.contactName) msg += `• *Responsável/Contato:* ${form.contactName}\n`;
    if (form.phone) msg += `• *Telefone:* ${form.phone}\n`;
    if (form.patientName) msg += `• *Paciente:* ${form.patientName} (${patientTypeLabel}${form.patientAge ? `, ${form.patientAge}` : ''})\n`;
    msg += `• *Motivo Principal:* ${form.primaryConcern}\n`;
    msg += `• *Turno de Preferência:* ${shiftLabel}\n`;
    if (form.additionalNotes) msg += `• *Observações:* ${form.additionalNotes}\n`;
    msg += `\nPoderia me passar os próximos horários disponíveis?`;

    return msg;
  };

  const handleWhatsAppSend = () => {
    const text = getFormattedMessage();
    const url = `https://wa.me/${CLINIC_INFO.phoneRaw}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
      <div 
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8 animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-teal-800 to-teal-700 text-white p-5 sm:p-6 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1 text-teal-200 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Agendamento Interativo</span>
            </div>
            <h3 className="font-heading font-bold text-xl sm:text-2xl text-white">
              Agende sua Consulta com Katiussya Amorim
            </h3>
            <p className="text-xs sm:text-sm text-teal-100 mt-1">
              Preencha os detalhes e envie diretamente para o WhatsApp oficial da clínica.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-teal-200 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 space-y-5">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <Check className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">Mensagem Enviada!</h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Sua solicitação de horário foi direcionada para o WhatsApp de <strong>Dra. Katiussya Amorim ({CLINIC_INFO.phoneDisplay})</strong>. Responderemos o mais breve possível para confirmar o melhor dia e hora.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 border border-slate-200 text-slate-700 rounded-xl text-xs font-semibold hover:bg-slate-50"
                >
                  Novo Agendamento
                </button>
                <button
                  onClick={onClose}
                  className="px-5 py-2 bg-teal-700 text-white rounded-xl text-xs font-semibold hover:bg-teal-800"
                >
                  Concluir
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Patient Type Select */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Quem será o paciente?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'child', label: 'Criança' },
                    { id: 'teen', label: 'Adolescente' },
                    { id: 'adult', label: 'Adulto' },
                    { id: 'senior', label: 'Idoso' },
                  ].map((type) => (
                    <button
                      type="button"
                      key={type.id}
                      onClick={() => handleInputChange('patientType', type.id)}
                      className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                        form.patientType === type.id
                          ? 'bg-teal-50 border-teal-600 text-teal-800 shadow-2xs'
                          : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      {type.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Names & Contact Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-slate-400" />
                    <span>Nome do Paciente:</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Theo, Arthur, Maria..."
                    value={form.patientName}
                    onChange={(e) => handleInputChange('patientName', e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-teal-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>Idade do Paciente:</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: 3 anos, 7 anos, 32 anos..."
                    value={form.patientAge}
                    onChange={(e) => handleInputChange('patientAge', e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-teal-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Nome do Responsável / Solicitante:
                  </label>
                  <input
                    type="text"
                    placeholder="Seu nome completo"
                    value={form.contactName}
                    onChange={(e) => handleInputChange('contactName', e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-teal-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-slate-400" />
                    <span>Seu WhatsApp:</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="(65) 99999-9999"
                    value={form.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-teal-600"
                  />
                </div>
              </div>

              {/* Primary Concern */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Motivo Principal da Procura:
                </label>
                <select
                  value={form.primaryConcern}
                  onChange={(e) => handleInputChange('primaryConcern', e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm bg-white focus:outline-hidden focus:ring-2 focus:ring-teal-600"
                >
                  {concernsList.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              {/* Preferred Shift */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>Turno de Preferência:</span>
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'morning', label: 'Manhã (08h-12h)' },
                    { id: 'afternoon', label: 'Tarde (13h-18h)' },
                    { id: 'flexible', label: 'Qualquer Horário' },
                  ].map((shift) => (
                    <button
                      type="button"
                      key={shift.id}
                      onClick={() => handleInputChange('preferredShift', shift.id)}
                      className={`py-2 px-2 rounded-xl text-xs font-semibold border text-center transition-all cursor-pointer ${
                        form.preferredShift === shift.id
                          ? 'bg-teal-50 border-teal-600 text-teal-800'
                          : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      {shift.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Algum detalhe importante que queira compartilhar antes da consulta? (Opcional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Ex: Já possui laudo de neuropediatra, ou encaminhamento da escola..."
                  value={form.additionalNotes}
                  onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-teal-600"
                />
              </div>

              {/* Submit to WhatsApp */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleWhatsAppSend}
                  className="w-full py-3.5 px-4 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm shadow-md shadow-teal-700/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 text-emerald-300" />
                  <span>Enviar Agendamento via WhatsApp</span>
                  <Send className="w-4 h-4 ml-1" />
                </button>
                <p className="text-[11px] text-center text-slate-500 mt-2">
                  Atendimento oficial no número <strong>{CLINIC_INFO.phoneDisplay}</strong> em Sinop - MT.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
