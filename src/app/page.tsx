import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { InfiniteTicker } from "@/components/ui/InfiniteTicker";

const tickerItems = [
  "Hausmeisterservice",
  "•",
  "Fußbodenverlegung",
  "•",
  "Netzwerkverlegung",
  "•",
  "Silikonarbeiten",
  "•",
  "3D-Modelle",
  "•",
  "24/7 Notdienst",
  "•",
  "Kostenlose Beratung",
  "•",
];

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <InfiniteTicker items={tickerItems} speed={30} />
      <ServicesSection />
      <AboutSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
