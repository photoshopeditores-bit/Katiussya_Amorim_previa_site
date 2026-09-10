import { useState } from 'react';
import { Heart, Sparkles, Award, Users, BookOpen, MessageCircle, Eye } from 'lucide-react';
import { CLINIC_INFO, CLINIC_PHOTOS } from '../data/clinicData';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export function AboutSection({ onOpenBooking }: AboutSectionProps) {
  const [activePhotoIdx, setActivePhotoIdx] = useState(1); // 1 = consultorio_interno
  const currentPhoto = CLINIC_PHOTOS[activePhotoIdx];
  const pillars = [
    {
      icon: Heart,
      title: 'Acolhimento Humanizado',
      description: 'Atendimento sem pressa, que respeita o tempo, a sensibilidade e a individualidade de cada paciente e sua família.',
    },
    {
      icon: Award,
      title: 'Ciência e Evidências',
      description: 'Protocolos atualizados e estratégias terapêuticas comprovadas para atrasos de fala, autismo (TEA) e motricidade orofacial.',
    },
    {
      icon: Users,
      title: 'Parceria com a Família e Escola',
      description: 'A terapia não termina na porta do consultório. Os pais recebem orientações práticas e mantemos contato com a equipe pedagógica.',
    },
    {
      icon: BookOpen,
      title: 'Linguagem Funcional e Autonomia',
      description: 'O objetivo principal é proporcionar ferramentas para que a pessoa se expresse com clareza, segurança e alegria em sua vida.',
    },
  ];

  return (
    <section id="sobre" className="py-16 sm:py-24 bg-stone-50 border-t border-stone-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Real Clinic Image & Badges */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-md">
              <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-slate-900 group">
                <img
                  key={currentPhoto.id}
                  src={currentPhoto.src}
                  alt={currentPhoto.alt}
                  className="w-full h-84 sm:h-[400px] object-cover object-center transition-all duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                {/* Badge Overlay */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-teal-800 shadow-sm flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>Foto Real do Consultório</span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white text-xs">
                  <p className="font-bold text-sm text-white drop-shadow-sm">{currentPhoto.title}</p>
                  <p className="text-slate-200 text-xs drop-shadow-sm">{currentPhoto.subtitle}</p>
                </div>
              </div>

              {/* Thumbnails to switch between real photos */}
              <div className="flex items-center gap-2 mt-3 justify-center">
                {CLINIC_PHOTOS.map((p, idx) => (
                  <button
                    key={p.id}
                    onClick={() => setActivePhotoIdx(idx)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
                      activePhotoIdx === idx
                        ? 'bg-teal-700 text-white border-teal-700 shadow-xs'
                        : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    {p.tag}
                  </button>
                ))}
              </div>

              {/* Floating Certification Card */}
              <div className="mt-4 bg-white p-4 rounded-xl shadow-md border border-slate-200">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="w-7 h-7 rounded-lg bg-teal-100 flex items-center justify-center text-teal-800">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-xs text-slate-800">Fonoaudiologia Integrada em Sinop</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Espaço clínico lúdico, planejado com brinquedos direcionados e protocolos neurobiológicos para Autismo, TDAH e atraso de linguagem.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Pillars */}
          <div className="lg:col-span-7 flex flex-col items-start order-1 lg:order-2">
            <span className="text-xs font-bold tracking-wider uppercase text-teal-700 bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-100 mb-3">
              Sobre a Profissional
            </span>

            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-900 tracking-tight mb-4">
              Katiussya Amorim
            </h2>

            <p className="text-sm font-semibold text-teal-700 mb-4">
              Fonoaudióloga Clínica • {CLINIC_INFO.crfa} • Sinop - MT
            </p>

            <div className="space-y-3.5 text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
              <p>
                Atuando com o compromisso de conectar pessoas através da voz, da fala e da linguagem, <strong>Katiussya Amorim</strong> dedica sua prática ao desenvolvimento integral de crianças, adolescentes e adultos em Sinop e região.
              </p>
              <p>
                Especialista nas áreas de comunicação, deglutição, <strong>Transtorno do Espectro Autista (TEA)</strong> e <strong>TDAH</strong>, sua abordagem une o rigor técnico da ciência fonoaudiológica a um olhar profundamente afetuoso e acolhedor.
              </p>
              <p>
                Acreditamos que cada pequeno avanço — o primeiro olhar sustentado, a primeira palavra com sentido, a superação de uma dificuldade alimentar — é uma vitória que transforma a vida de toda a família.
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div key={idx} className="p-3.5 rounded-xl bg-white border border-slate-200">
                    <div className="flex items-center gap-2 mb-1.5">
                      <Icon className="w-4 h-4 text-teal-600 shrink-0" />
                      <h4 className="font-bold text-xs text-slate-900">{pillar.title}</h4>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenBooking}
                className="px-5 py-3 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-semibold text-sm shadow-md shadow-teal-700/20 flex items-center gap-2 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-emerald-300" />
                <span>Agendar com Dra. Katiussya</span>
              </button>

              <a
                href={CLINIC_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 font-medium text-sm transition-colors"
              >
                Ver Perfil no Google Maps
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
