import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { InfiniteTicker } from "@/components/ui/InfiniteTicker";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { CtaBannerSection } from "@/components/sections/CtaBannerSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <InfiniteTicker />
      <ServicesSection />
      <AboutSection />
      <CtaBannerSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
