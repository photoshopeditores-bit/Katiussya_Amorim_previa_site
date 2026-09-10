import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InteractiveScreener } from './components/InteractiveScreener';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { ClinicGallery } from './components/ClinicGallery';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { BookingWizard } from './components/BookingWizard';
import { FloatingContact } from './components/FloatingContact';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const handleOpenBooking = (serviceName?: string) => {
    setSelectedService(serviceName);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedService(undefined);
  };

  const scrollToScreener = () => {
    const el = document.getElementById('triagem');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-slate-800">
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      <main className="flex-1">
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onScrollToScreener={scrollToScreener}
        />

        <InteractiveScreener onOpenBooking={() => handleOpenBooking()} />

        <ServicesSection
          onSelectServiceForBooking={(serviceTitle) => handleOpenBooking(serviceTitle)}
        />

        <AboutSection onOpenBooking={() => handleOpenBooking()} />

        <ClinicGallery onOpenBooking={() => handleOpenBooking()} />

        <ReviewsSection />

        <LocationSection />

        <FaqSection />
      </main>

      <Footer onOpenBooking={() => handleOpenBooking()} />

      <FloatingContact onOpenBooking={() => handleOpenBooking()} />

      <BookingWizard
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        preSelectedService={selectedService}
      />
    </div>
  );
}

