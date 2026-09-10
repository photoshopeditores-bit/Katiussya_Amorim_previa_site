import { useState } from 'react';
import { Camera, Maximize2, X, ExternalLink, Sparkles, MapPin, Star, MessageCircle } from 'lucide-react';
import { CLINIC_INFO, CLINIC_PHOTOS } from '../data/clinicData';

interface ClinicGalleryProps {
  onOpenBooking: () => void;
}

export function ClinicGallery({ onOpenBooking }: ClinicGalleryProps) {
  const [activeModalPhoto, setActiveModalPhoto] = useState<typeof CLINIC_PHOTOS[0] | null>(null);

  return (
    <section id="fotos" className="py-16 sm:py-20 bg-white border-t border-stone-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-teal-800 bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-200">
              <Camera className="w-3.5 h-3.5" />
              <span>Fotos Reais da Clínica</span>
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-900 tracking-tight mt-3">
              Conheça o Espaço de Atendimento em Sinop
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl">
              Ambiente planejado com carinho e técnica para acolher crianças com atraso na fala, TEA, TDAH e pacientes em reabilitação da comunicação.
            </p>
          </div>

          <a
            href={CLINIC_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 bg-stone-50 hover:bg-stone-100 text-slate-700 text-xs sm:text-sm font-semibold transition-colors shrink-0"
          >
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span>Ver perfil no Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>

        {/* 3 Photos Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CLINIC_PHOTOS.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setActiveModalPhoto(photo)}
              className="group relative rounded-2xl overflow-hidden bg-slate-900 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-slate-200/80 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-72 sm:h-80 overflow-hidden bg-slate-950">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />

                {/* Badge Tag */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-semibold flex items-center gap-1.5 border border-white/20">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  <span>{photo.tag}</span>
                </div>

                {/* Enlarge Trigger */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-slate-800 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Overlay Text */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[11px] text-teal-300 font-medium block">
                    {photo.subtitle}
                  </span>
                  <h3 className="font-heading font-bold text-base text-white">
                    {photo.title}
                  </h3>
                </div>
              </div>

              {/* Card Footer Details */}
              <div className="p-4 bg-white flex-1 flex flex-col justify-between">
                <p className="text-xs text-slate-600 leading-relaxed">
                  {photo.description}
                </p>
                <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-teal-700 font-medium">
                  <span>Clique para ampliar</span>
                  <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Highlight Banner */}
        <div className="mt-10 p-5 rounded-2xl bg-gradient-to-r from-teal-50 via-emerald-50 to-teal-50 border border-teal-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-teal-700 text-white flex items-center justify-center shrink-0 shadow-sm">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">
                Rua das Aroeiras, 1557 • Setor Comercial • Sinop - MT
              </p>
              <p className="text-xs text-slate-600">
                Atendimento particular com hora marcada e emissão de recibo para reembolso.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shrink-0 shadow-xs cursor-pointer transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-emerald-300" />
            <span>Agendar Visita / Avaliação</span>
          </button>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeModalPhoto && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-3xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl flex flex-col">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-800 text-white">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-teal-900/80 text-teal-300 text-xs font-semibold border border-teal-700">
                  {activeModalPhoto.tag}
                </span>
                <span className="text-sm font-bold text-slate-100">{activeModalPhoto.title}</span>
              </div>
              <button
                onClick={() => setActiveModalPhoto(null)}
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Photo Frame */}
            <div className="relative max-h-[65vh] flex items-center justify-center bg-black">
              <img
                src={activeModalPhoto.src}
                alt={activeModalPhoto.alt}
                className="max-h-[65vh] w-auto object-contain mx-auto"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Modal Footer Description */}
            <div className="p-4 sm:p-5 bg-slate-900 border-t border-slate-800 text-slate-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-white">{activeModalPhoto.subtitle}</p>
                <p className="text-xs text-slate-400 mt-0.5">{activeModalPhoto.description}</p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={CLINIC_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium flex items-center gap-1.5 transition-colors"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <button
                  onClick={() => {
                    setActiveModalPhoto(null);
                    onOpenBooking();
                  }}
                  className="px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-xs cursor-pointer transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-200" />
                  <span>Agendar Consulta</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
