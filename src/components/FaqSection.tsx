import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Search, MessageCircle } from 'lucide-react';
import { FAQ_DATA, CLINIC_INFO } from '../data/clinicData';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFaqs = FAQ_DATA.filter((faq) => {
    const q = faq.question.toLowerCase();
    const a = faq.answer.toLowerCase();
    const term = searchTerm.toLowerCase();
    return q.includes(term) || a.includes(term);
  });

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-800 text-xs font-semibold uppercase tracking-wider mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-teal-600" />
            Tire Suas Dúvidas
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-900 tracking-tight mb-3">
            Perguntas Frequentes
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
            Respostas claras para as principais dúvidas sobre consultas, encaminhamentos, laudos e metodologia.
          </p>

          {/* Search filter */}
          <div className="relative max-w-md mx-auto mt-6">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar dúvida (ex: plano, autismo, primeira consulta)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-teal-600 shadow-2xs"
            />
          </div>
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`rounded-2xl border transition-all ${
                    isOpen ? 'border-teal-300 bg-teal-50/20 shadow-2xs' : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="font-heading font-bold text-sm sm:text-base text-slate-900">
                      {faq.question}
                    </span>
                    <span className="p-1 rounded-lg bg-slate-100 text-slate-500 shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-150">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-8 text-slate-500 text-sm">
              Nenhuma dúvida encontrada para &ldquo;{searchTerm}&rdquo;. Fale diretamente conosco pelo WhatsApp!
            </div>
          )}
        </div>

        {/* Still have questions? */}
        <div className="mt-10 p-6 rounded-2xl bg-stone-50 border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-bold text-sm sm:text-base text-slate-900">Ainda ficou alguma dúvida?</h4>
            <p className="text-xs sm:text-sm text-slate-600">
              Estamos à disposição para esclarecer qualquer questão pelo WhatsApp da clínica.
            </p>
          </div>
          <a
            href={`https://wa.me/${CLINIC_INFO.phoneRaw}?text=${encodeURIComponent('Olá Dra. Katiussya, estou com uma dúvida que gostaria de tirar antes de agendar a consulta.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 shrink-0 shadow-xs"
          >
            <MessageCircle className="w-4 h-4 text-emerald-300" />
            <span>Tirar Dúvida no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
