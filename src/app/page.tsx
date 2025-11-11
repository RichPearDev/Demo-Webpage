import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroSection from '@/sections/HeroSection';
import ServicesSection from '@/sections/ServicesSection';
import MaterialsSection from '@/sections/MaterialsSection';
import PrintersSection from '@/sections/PrintersSection';
import ContactSection from '@/sections/ContactSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <MaterialsSection />
      <PrintersSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

