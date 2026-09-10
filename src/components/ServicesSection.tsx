import { useState } from 'react';
import { Sparkles, Baby, MessageSquareText, Smile, Utensils, ClipboardCheck, ArrowRight, ChevronDown, ChevronUp, Check, MessageCircle } from 'lucide-react';
import { SERVICES_DATA, CLINIC_INFO } from '../data/clinicData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectServiceForBooking: (serviceTitle: string) => void;
}

export function ServicesSection({ onSelectServiceForBooking }: ServicesSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'Todas as Áreas' },
    { id: 'neuro', label: 'Autismo (TEA) & TDAH' },
    { id: 'speech', label: 'Fala & Linguagem' },
    { id: 'motor', label: 'Mastigação & Deglutição' },
    { id: 'eval', label: 'Avaliação & Laudos' },
  ];

  const filteredServices = SERVICES_DATA.filter((service) => {
    if (activeCategory === 'all') return true;
    return service.category === activeCategory;
  });

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-teal-600" />;
      case 'Baby':
        return <Baby className="w-5 h-5 text-teal-600" />;
      case 'MessageSquareText':
        return <MessageSquareText className="w-5 h-5 text-teal-600" />;
      case 'Smile':
        return <Smile className="w-5 h-5 text-teal-600" />;
      case 'Utensils':
        return <Utensils className="w-5 h-5 text-teal-600" />;
      case 'ClipboardCheck':
      default:
        return <ClipboardCheck className="w-5 h-5 text-teal-600" />;
    }
  };

  const toggleExpand = (id: string) => {
    setExpandedServiceId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="servicos" className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold tracking-wider uppercase text-teal-700 bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-100">
            Fonoaudiologia Integrada
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-900 tracking-tight mt-3 mb-4">
            Áreas de Atuação e Especialidades Clínicas
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Metodologias estruturadas e humanizadas, baseadas em evidências científicas para reabilitar, estimular e transformar a comunicação e a saúde orofacial.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-teal-700 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service: ServiceItem) => {
            const isExpanded = expandedServiceId === service.id;

            return (
              <div
                key={service.id}
                className={`rounded-2xl border transition-all duration-200 flex flex-col justify-between ${
                  isExpanded
                    ? 'border-teal-400 bg-teal-50/20 shadow-md ring-1 ring-teal-300'
                    : 'border-slate-200 hover:border-teal-300 bg-white hover:shadow-sm'
                }`}
              >
                <div className="p-5 sm:p-6">
                  {/* Top Bar inside card */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-teal-100/70 flex items-center justify-center">
                      {getIcon(service.iconName)}
                    </div>
                    {service.badge && (
                      <span className="text-[11px] font-semibold text-teal-800 bg-teal-50 border border-teal-200 px-2.5 py-0.5 rounded-full">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="font-heading font-bold text-lg text-slate-900 mb-2 leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>

                  {/* Expandable Deep Dive */}
                  {isExpanded && (
                    <div className="pt-4 border-t border-slate-100 space-y-3.5 animate-in fade-in duration-150">
                      <div>
                        <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block mb-1">
                          Sobre o Atendimento:
                        </span>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {service.fullDescription}
                        </p>
                      </div>

                      <div>
                        <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block mb-1.5">
                          Principais Indicações:
                        </span>
                        <ul className="space-y-1.5">
                          {service.indications.map((ind, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                              <Check className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                              <span>{ind}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-3 rounded-xl bg-white border border-teal-100 text-xs text-slate-600">
                        <strong className="text-teal-900 block mb-0.5">Como trabalhamos:</strong>
                        {service.howItWorks}
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Footer Actions */}
                <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between gap-3 mt-auto bg-slate-50/50 rounded-b-2xl">
                  <button
                    onClick={() => toggleExpand(service.id)}
                    className="text-xs font-semibold text-slate-600 hover:text-teal-700 flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>{isExpanded ? 'Menos detalhes' : 'Ver indicações'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  <button
                    onClick={() => onSelectServiceForBooking(service.title)}
                    className="px-3.5 py-1.5 rounded-lg bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Agendar</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-teal-800 to-teal-700 text-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div>
            <h3 className="font-heading font-bold text-xl sm:text-2xl mb-1.5">
              Não tem certeza de qual especialidade você precisa?
            </h3>
            <p className="text-sm text-teal-100 max-w-xl">
              Nossa primeira sessão é exatamente para isso: ouvir suas queixas, avaliar o caso de forma acolhedora e traçar o melhor direcionamento.
            </p>
          </div>
          <a
            href={`https://wa.me/${CLINIC_INFO.phoneRaw}?text=${encodeURIComponent('Olá Dra. Katiussya, gostaria de conversar para entender qual especialidade fonoaudiológica é a mais recomendada para o meu caso.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-white text-teal-900 hover:bg-teal-50 font-bold text-sm shrink-0 flex items-center gap-2 shadow-sm transition-all"
          >
            <MessageCircle className="w-4 h-4 text-teal-700" />
            <span>Falar com a Fonoaudióloga</span>
          </a>
        </div>

      </div>
    </section>
  );
}
