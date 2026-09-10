import { useState, useEffect } from 'react';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface FloatingContactProps {
  onOpenBooking: () => void;
}

export function FloatingContact({ onOpenBooking }: FloatingContactProps) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-white text-slate-700 hover:text-teal-700 shadow-md border border-slate-200 flex items-center justify-center transition-all hover:scale-105 cursor-pointer"
          aria-label="Voltar ao topo"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Floating WhatsApp Action with pulse */}
      <div className="flex items-center gap-2 group">
        <span className="hidden sm:inline-block px-3 py-1.5 rounded-xl bg-slate-900/90 text-white text-xs font-semibold shadow-md pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
          Agendar no WhatsApp
        </span>

        <a
          href={`https://wa.me/${CLINIC_INFO.phoneRaw}?text=${encodeURIComponent('Olá Dra. Katiussya, gostaria de informações sobre agendamento de consulta fonoaudiológica.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
          aria-label="Conversar no WhatsApp"
        >
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-300 rounded-full animate-ping" />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 border-2 border-white rounded-full" />
          <MessageCircle className="w-7 h-7 fill-white text-[#25D366]" />
        </a>
      </div>
    </div>
  );
}
