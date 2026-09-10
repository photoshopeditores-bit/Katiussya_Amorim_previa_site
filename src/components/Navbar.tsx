import { useState } from 'react';
import { Phone, MapPin, Star, MessageCircle, Menu, X, Calendar, Clock } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface NavbarProps {
  onOpenBooking: () => void;
}

export function Navbar({ onOpenBooking }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Especialidades', href: '#servicos' },
    { label: 'Triagem Online', href: '#triagem' },
    { label: 'Sobre Katiussya', href: '#sobre' },
    { label: 'O Consultório', href: '#fotos' },
    { label: 'Avaliações', href: '#avaliacoes' },
    { label: 'Como Chegar', href: '#localizacao' },
    { label: 'Dúvidas', href: '#faq' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-emerald-900/10 shadow-xs">
      {/* Top Notification / Quick Contact Bar */}
      <div className="bg-[#134E4A] text-white text-xs py-2 px-4">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <a 
              href={CLINIC_INFO.googleMapsUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-emerald-200 transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>{CLINIC_INFO.shortAddress}</span>
            </a>
            <span className="hidden sm:inline-block opacity-40">|</span>
            <div className="hidden sm:flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
              <span>Seg a Sex: 08h às 18h</span>
            </div>
          </div>

          <div className="flex items-center gap-4 ml-auto sm:ml-0">
            <a 
              href={CLINIC_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-amber-300 hover:text-amber-200 font-medium"
            >
              <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
              <span>5.0 no Google Maps</span>
            </a>
            <span className="opacity-40">|</span>
            <a 
              href={`https://wa.me/${CLINIC_INFO.phoneRaw}?text=${encodeURIComponent('Olá Dra. Katiussya, vi o site no Google Maps e gostaria de informações sobre agendamento de consulta fonoaudiológica.')}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-semibold text-emerald-200 hover:text-white transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>{CLINIC_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-700 to-teal-500 text-white flex items-center justify-center font-bold text-lg shadow-sm shadow-teal-700/20 group-hover:scale-105 transition-transform">
            KA
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-lg text-slate-800 tracking-tight leading-none group-hover:text-teal-700 transition-colors">
              {CLINIC_INFO.name}
            </span>
            <span className="text-xs text-slate-500 font-medium mt-1">
              Fonoaudióloga • {CLINIC_INFO.crfa}
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="hover:text-teal-700 transition-colors py-1 cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`tel:${CLINIC_INFO.phoneRaw}`}
            className="p-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-teal-700 transition-all flex items-center gap-2 text-sm font-medium"
            title="Ligar agora"
          >
            <Phone className="w-4 h-4 text-teal-600" />
            <span className="hidden xl:inline">Ligar</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="px-4 py-2.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-semibold text-sm shadow-md shadow-teal-700/20 hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Agendar Consulta</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Abrir menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-5 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left py-2.5 px-3 rounded-lg text-slate-700 hover:bg-teal-50 hover:text-teal-800 font-medium text-base transition-colors"
              >
                {link.label}
              </button>
            ))}

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-xl bg-teal-700 text-white font-semibold text-center flex items-center justify-center gap-2 shadow-sm"
              >
                <Calendar className="w-5 h-5" />
                <span>Agendar Consulta via WhatsApp</span>
              </button>

              <a
                href={`tel:${CLINIC_INFO.phoneRaw}`}
                className="w-full py-2.5 rounded-xl border border-slate-300 text-slate-700 font-medium text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-teal-600" />
                <span>Ligar para {CLINIC_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
