import { useState } from 'react';
import { MapPin, Navigation, Copy, Check, Clock, Phone, ExternalLink, ShieldCheck, Building, Map as MapIcon, Sparkles } from 'lucide-react';
import { CLINIC_INFO, CLINIC_PHOTOS } from '../data/clinicData';

export function LocationSection() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'facade' | 'map'>('facade');

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(CLINIC_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const facadePhoto = CLINIC_PHOTOS.find((p) => p.id === 'fachada') || CLINIC_PHOTOS[2];

  return (
    <section id="localizacao" className="py-16 sm:py-24 bg-stone-50 border-t border-stone-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-wider uppercase text-teal-700 bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-100">
            Localização e Acesso
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-900 tracking-tight mt-3 mb-4">
            Como Chegar ao Consultório em Sinop - MT
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Localização privilegiada no Setor Comercial de Sinop, com facilidade de acesso, ambiente climatizado e preparado para o conforto de pacientes e familiares.
          </p>
        </div>

        {/* 2-Column Location Box */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Column: Info & Actions */}
          <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Address Header */}
              <div>
                <div className="flex items-center gap-2 text-teal-700 text-xs font-bold uppercase tracking-wider mb-2">
                  <MapPin className="w-4 h-4" />
                  <span>Endereço Oficial</span>
                </div>
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-slate-900">
                  {CLINIC_INFO.clinicName}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 mt-1">
                  Dra. Katiussya Amorim • {CLINIC_INFO.crfa}
                </p>
                <div className="mt-3 p-3.5 rounded-xl bg-stone-50 border border-stone-200 text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                  {CLINIC_INFO.address}
                </div>
              </div>

              {/* Action Buttons: Google Maps, Waze, Copy */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <a
                  href={CLINIC_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs transition-colors"
                >
                  <Navigation className="w-4 h-4 text-emerald-300" />
                  <span>Abrir no Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>

                <button
                  onClick={handleCopyAddress}
                  className="py-3 px-4 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-700">Endereço Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-500" />
                      <span>Copiar Endereço</span>
                    </>
                  )}
                </button>
              </div>

              {/* Operating Hours & Access details */}
              <div className="space-y-3 pt-4 border-t border-slate-100">
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-600">
                  <Clock className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800 block">Horário de Atendimento:</strong>
                    <span>{CLINIC_INFO.hours}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-600">
                  <Phone className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800 block">Telefone e WhatsApp:</strong>
                    <a 
                      href={`tel:${CLINIC_INFO.phoneRaw}`} 
                      className="text-teal-700 hover:underline font-semibold"
                    >
                      {CLINIC_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-600">
                  <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800 block">Comodidade e Estacionamento:</strong>
                    <span>Fácil estacionamento em frente e na Rua das Aroeiras. Acessibilidade e recepção acolhedora.</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom link to direct map */}
            <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 flex items-center justify-between">
              <span>Setor Comercial • Sinop - MT</span>
              <a
                href={CLINIC_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-700 hover:underline font-medium inline-flex items-center gap-1"
              >
                <span>Ver link do Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Right Column: Real Facade Photo & Interactive Map Preview */}
          <div className="lg:col-span-6 bg-slate-900 min-h-[380px] relative flex flex-col justify-between overflow-hidden">
            
            {/* View Mode Toggle Header */}
            <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-auto">
              <div className="inline-flex p-1 rounded-xl bg-slate-900/80 backdrop-blur-md border border-white/20 shadow-lg">
                <button
                  onClick={() => setActiveTab('facade')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                    activeTab === 'facade'
                      ? 'bg-teal-600 text-white shadow-xs'
                      : 'text-slate-200 hover:text-white'
                  }`}
                >
                  <Building className="w-3.5 h-3.5" />
                  <span>Fachada do Consultório</span>
                </button>
                <button
                  onClick={() => setActiveTab('map')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                    activeTab === 'map'
                      ? 'bg-teal-600 text-white shadow-xs'
                      : 'text-slate-200 hover:text-white'
                  }`}
                >
                  <MapIcon className="w-3.5 h-3.5" />
                  <span>Mapa & Rota</span>
                </button>
              </div>

              <div className="hidden sm:flex bg-white/95 backdrop-blur-md rounded-xl py-1.5 px-3 shadow-md border border-slate-200 items-center gap-1.5 text-xs font-semibold text-slate-800">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Atendimento Presencial</span>
              </div>
            </div>

            {/* Display Facade or Map */}
            {activeTab === 'facade' ? (
              <div className="relative w-full h-full min-h-[400px] flex items-center justify-center bg-slate-950 group">
                <img
                  src={facadePhoto.src}
                  alt={facadePhoto.alt}
                  className="w-full h-full min-h-[400px] max-h-[480px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-slate-950/40 pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                  <div className="bg-slate-900/85 backdrop-blur-md p-3.5 rounded-xl border border-white/15 shadow-xl">
                    <div className="flex items-center gap-2 mb-1">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      <span className="text-xs font-bold text-amber-300">Foto Real do Google Maps</span>
                    </div>
                    <p className="font-bold text-sm text-white">Rua das Aroeiras, 1557 • Sinop - MT</p>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Identifique a fachada ao chegar. Estacionamento facilitado e recepção climatizada.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-full h-full min-h-[400px]">
                <iframe
                  title="Mapa Google Maps - Katiussya Amorim Fonoaudióloga Sinop MT"
                  src="https://maps.google.com/maps?q=Rua+das+Aroeiras+1557+Sinop+MT&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full min-h-[400px] border-0"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
