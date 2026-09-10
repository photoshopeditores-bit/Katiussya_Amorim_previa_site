import { useState } from 'react';
import { Star, MessageCircle, MapPin, Sparkles, CheckCircle2, Award, HeartHandshake, ArrowRight, Camera } from 'lucide-react';
import { CLINIC_INFO, CLINIC_PHOTOS } from '../data/clinicData';

interface HeroProps {
  onOpenBooking: () => void;
  onScrollToScreener: () => void;
}

export function Hero({ onOpenBooking, onScrollToScreener }: HeroProps) {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
  const activePhoto = CLINIC_PHOTOS[selectedPhotoIndex];
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-teal-50/60 via-white to-stone-50">
      {/* Decorative subtle ambient circles */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none opacity-40 blur-3xl -z-10">
        <div className="w-96 h-96 rounded-full bg-teal-200/40 absolute -top-10 left-10" />
        <div className="w-80 h-80 rounded-full bg-amber-100/60 absolute top-20 right-10" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Copy and Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-2.5 mb-5">
              <a
                href={CLINIC_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-amber-900 text-xs font-semibold shadow-2xs hover:bg-amber-100/80 transition-colors"
              >
                <div className="flex text-amber-500">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                </div>
                <span>5.0 no Google Maps</span>
              </a>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold">
                <MapPin className="w-3.5 h-3.5 text-teal-600" />
                <span>Sinop - MT</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold">
                <Award className="w-3.5 h-3.5 text-slate-500" />
                <span>{CLINIC_INFO.crfa}</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-[1.15] mb-5">
              Comunicação com afeto, técnica e resultados reais para{' '}
              <span className="text-teal-700 underline decoration-teal-300 decoration-wavy decoration-2 underline-offset-4">
                quem você mais ama
              </span>
              .
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-7 max-w-2xl">
              Atendimento fonoaudiológico especializado com a fonoaudióloga{' '}
              <strong className="font-semibold text-slate-800">Katiussya Amorim</strong> em Sinop - MT.
              Referência em atrasos de linguagem, Autismo (TEA), TDAH, trocas na fala e reabilitação orofacial infantil e adulta.
            </p>

            {/* Quick action triggers */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-8">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3.5 rounded-xl bg-teal-700 hover:bg-teal-800 active:scale-[0.99] text-white font-semibold text-base shadow-lg shadow-teal-700/25 flex items-center justify-center gap-2.5 transition-all cursor-pointer group"
              >
                <MessageCircle className="w-5 h-5 text-emerald-300" />
                <span>Agendar Avaliação</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onScrollToScreener}
                className="px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-semibold text-base shadow-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Triagem Online Gratuita</span>
              </button>
            </div>

            {/* Trust checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-4 border-t border-slate-200/80 w-full text-xs sm:text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Atendimento lúdico e humanizado</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Plano terapêutico 100% individual</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Parceria com família e escola</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Emissão de laudos e recibos para convênio</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Real Photo & Verified Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Real Image Frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
                <img
                  key={activePhoto.id}
                  src={activePhoto.src}
                  alt={activePhoto.alt}
                  className="w-full h-84 sm:h-[420px] object-cover object-top transition-all duration-500 group-hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                />
                
                {/* Photo Tag Badge Top Left */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-xs font-semibold shadow-md border border-white/20">
                  <Camera className="w-3.5 h-3.5 text-teal-300" />
                  <span>{activePhoto.tag}</span>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent pointer-events-none" />
                
                {/* Floating Bottom Overlay with Photo Title and Details */}
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md rounded-xl p-3.5 shadow-lg border border-white/90">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-teal-800 block">
                        {activePhoto.subtitle}
                      </span>
                      <p className="text-sm font-bold text-slate-900 leading-tight">
                        {activePhoto.title}
                      </p>
                      <p className="text-xs text-slate-600 line-clamp-1 mt-0.5">
                        {activePhoto.description}
                      </p>
                    </div>
                    <a
                      href={CLINIC_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 bg-teal-700 hover:bg-teal-800 text-white text-xs font-medium rounded-lg transition-colors shrink-0 whitespace-nowrap shadow-xs"
                    >
                      Ver no Maps
                    </a>
                  </div>
                </div>
              </div>

              {/* Photo Selector Switcher (Dra. Katiussya | Consultório | Fachada) */}
              <div className="flex items-center justify-center gap-2 mt-4 p-1.5 bg-white rounded-2xl shadow-md border border-slate-200/80 max-w-sm mx-auto">
                {CLINIC_PHOTOS.map((photo, index) => {
                  const isActive = selectedPhotoIndex === index;
                  return (
                    <button
                      key={photo.id}
                      onClick={() => setSelectedPhotoIndex(index)}
                      className={`flex-1 py-2 px-2.5 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                        isActive
                          ? 'bg-teal-700 text-white shadow-xs'
                          : 'text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-current" />
                      <span className="truncate">{photo.tag}</span>
                    </button>
                  );
                })}
              </div>

              {/* Floating Google Rating Pill Top Right */}
              <div className="absolute -top-4 -right-2 sm:-right-4 bg-white rounded-2xl shadow-xl border border-slate-100 p-3.5 flex items-center gap-3 animate-bounce-subtle z-10">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0">
                  <Star className="w-5 h-5 fill-amber-400" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="font-extrabold text-slate-900 text-base leading-none">5.0</span>
                    <span className="text-xs text-slate-400 font-normal">/ 5.0</span>
                  </div>
                  <span className="text-xs text-slate-500 font-medium">Google Maps Sinop</span>
                </div>
              </div>

              {/* Floating Certified Pill Bottom Left */}
              <div className="hidden sm:flex absolute -bottom-5 -left-4 bg-white rounded-2xl shadow-xl border border-slate-100 p-3 items-center gap-3 z-10">
                <div className="w-9 h-9 rounded-xl bg-teal-600/10 flex items-center justify-center text-teal-700 shrink-0">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div className="pr-2">
                  <p className="text-xs font-bold text-slate-800">Atendimento Acolhedor</p>
                  <p className="text-[11px] text-slate-500">Crianças, Jovens e Adultos</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
