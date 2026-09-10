import { useState } from 'react';
import { Star, CheckCircle, ExternalLink, Quote } from 'lucide-react';
import { REVIEWS_DATA, CLINIC_INFO } from '../data/clinicData';

export function ReviewsSection() {
  const [activeTag, setActiveTag] = useState<string>('all');

  const tags = [
    { id: 'all', label: 'Todas as Avaliações' },
    { id: 'Autismo e Desenvolvimento', label: 'Autismo & TEA' },
    { id: 'Atraso de Fala', label: 'Atraso de Fala' },
    { id: 'Articulação e Fala', label: 'Articulação' },
    { id: 'Alimentação e Motricidade', label: 'Seletividade Alimentar' },
  ];

  const filteredReviews = REVIEWS_DATA.filter((rev) => {
    if (activeTag === 'all') return true;
    return rev.category === activeTag;
  });

  return (
    <section id="avaliacoes" className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold uppercase tracking-wider mb-2">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              Avaliações Verificadas no Google Maps
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-900 tracking-tight">
              O que dizem as famílias e pacientes
            </h2>
          </div>

          {/* Rating Summary Card */}
          <div className="flex items-center gap-4 bg-stone-50 border border-stone-200 px-4 py-3 rounded-2xl shrink-0">
            <div className="flex flex-col items-center justify-center pr-3 border-r border-stone-200">
              <span className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 leading-none">5.0</span>
              <div className="flex text-amber-400 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
            </div>
            <div className="text-xs text-slate-600">
              <p className="font-bold text-slate-800">Classificação Máxima</p>
              <p>Perfil no Google Maps Sinop</p>
              <a
                href={CLINIC_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-700 font-semibold hover:underline inline-flex items-center gap-1 mt-0.5"
              >
                <span>Conferir no Google</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {tags.map((tag) => (
            <button
              key={tag.id}
              onClick={() => setActiveTag(tag.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                activeTag === tag.id
                  ? 'bg-teal-700 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {tag.label}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="bg-stone-50/70 rounded-2xl border border-stone-200 p-5 sm:p-6 flex flex-col justify-between relative hover:border-teal-200 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-400">{review.date}</span>
                </div>

                <div className="relative mb-4">
                  <Quote className="w-6 h-6 text-teal-600/15 absolute -top-2 -left-1" />
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-3 italic">
                    &ldquo;{review.comment}&rdquo;
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-200/60 flex items-center justify-between gap-3">
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-slate-900 leading-tight">
                    {review.author}
                  </h4>
                  <span className="text-[11px] text-teal-700 font-medium">
                    {review.role}
                  </span>
                </div>

                {review.verifiedGoogle && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200 shrink-0">
                    <CheckCircle className="w-3 h-3" />
                    Google Maps
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Link to Google */}
        <div className="mt-8 text-center">
          <a
            href={CLINIC_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold text-xs sm:text-sm transition-all"
          >
            <span>Ver perfil completo e avaliações no Google Maps</span>
            <ExternalLink className="w-4 h-4 text-teal-600" />
          </a>
        </div>

      </div>
    </section>
  );
}
