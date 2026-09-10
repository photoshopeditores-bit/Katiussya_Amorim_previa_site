import { MapPin, Phone, MessageCircle, Star, Heart, ExternalLink } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface FooterProps {
  onOpenBooking: () => void;
}

export function Footer({ onOpenBooking }: FooterProps) {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Identity & Description */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center font-bold text-lg">
                KA
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-white leading-tight">
                  {CLINIC_INFO.name}
                </h3>
                <p className="text-xs text-teal-400 font-medium">
                  {CLINIC_INFO.title} • {CLINIC_INFO.crfa}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Atendimento fonoaudiológico humanizado e especializado em Sinop - MT. Cuidado dedicado ao desenvolvimento da fala, linguagem, autismo (TEA), TDAH, motricidade orofacial e deglutição.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={CLINIC_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 text-xs font-semibold transition-colors"
              >
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>5.0 Estrelas no Google Maps</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <a href="#servicos" className="hover:text-teal-400 transition-colors">Especialidades Clínicas</a>
              </li>
              <li>
                <a href="#triagem" className="hover:text-teal-400 transition-colors">Triagem Online de Fala</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-teal-400 transition-colors">Sobre Katiussya Amorim</a>
              </li>
              <li>
                <a href="#avaliacoes" className="hover:text-teal-400 transition-colors">Depoimentos & Avaliações</a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-teal-400 transition-colors">Como Chegar (Sinop MT)</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-teal-400 transition-colors">Perguntas Frequentes</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Address */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Contato & Localização
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">{CLINIC_INFO.clinicName}</p>
                  <p>{CLINIC_INFO.address}</p>
                  <a
                    href={CLINIC_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-400 hover:underline text-xs inline-flex items-center gap-1 mt-1 font-medium"
                  >
                    <span>Ver no Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a href={`tel:${CLINIC_INFO.phoneRaw}`} className="text-white hover:text-teal-400">
                  {CLINIC_INFO.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/${CLINIC_INFO.phoneRaw}?text=${encodeURIComponent('Olá Dra. Katiussya, gostaria de agendar uma consulta.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-300 hover:text-emerald-200 font-semibold"
                >
                  WhatsApp: {CLINIC_INFO.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full py-2.5 px-4 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
              >
                Agendar Horário
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Ethics */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} Katiussya Amorim Fonoaudiologia. Todos os direitos reservados. {CLINIC_INFO.crfa}.
          </p>
          <p className="flex items-center justify-center gap-1">
            <span>Desenvolvido com carinho para Sinop - MT</span>
            <Heart className="w-3 h-3 text-rose-500 fill-rose-500 inline" />
          </p>
        </div>
        
        {/* Ethical Medical Disclaimer */}
        <p className="text-[11px] text-slate-600 text-center mt-4 max-w-2xl mx-auto">
          As informações disponibilizadas neste site possuem caráter puramente informativo e educativo, não substituindo a consulta, anamnese e avaliação fonoaudiológica clínica individual. Em conformidade com as normas do Conselho Federal de Fonoaudiologia (CFFa).
        </p>
      </div>
    </footer>
  );
}
