"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Home, Layers, Network, Droplets, Box } from "lucide-react";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { softInViewSpring } from "@/lib/animations";

const services = [
  {
    icon: <Home size={22} />,
    title: "Hausmeisterservice",
    description:
      "Regelmäßige Objektbetreuung, Hausreinigung, Gartenpflege, Reparaturen und Entsorgungsservice — alles aus einer Hand für Ihre Immobilie.",
  },
  {
    icon: <Layers size={22} />,
    title: "Fußbodenverlegung",
    description:
      "Parkett, Laminat, Vinyl und PVC — maßgeschneiderte Lösungen mit präzisen Aufmaßarbeiten, fachgerechter Verlegung und sauberer Endabnahme.",
  },
  {
    icon: <Network size={22} />,
    title: "Netzwerkverlegung",
    description:
      "Strukturierte Verkabelung, Daten- & Telefonkabel, WLAN-Lösungen für Gewerbe und Privat — zukunftsfähig, sauber und stabil.",
  },
  {
    icon: <Droplets size={22} />,
    title: "Silikonarbeiten",
    description:
      "Fachmännische Fugenabdichtungen in Bad, Küche, an Fenstern und Türen — langzeitbeständig, sauber und flexibel ausgeführt.",
  },
  {
    icon: <Box size={22} />,
    title: "3D-Modelle",
    description:
      "Detaillierte CAD-Modelle und Renderings für Architektur, Produktdesign und Prototypen — von der ersten Idee bis zum fertigen Digitalmodell.",
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="leistungen" className="py-24 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={softInViewSpring}
          className="text-center mb-16"
        >
          <span className="inline-block bg-orange-50 text-orange-600 font-semibold text-sm px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
            Was ich anbiete
          </span>
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">
            Meine Leistungen
          </h2>
          <p className="text-lg text-neutral-600 max-w-xl mx-auto">
            Von Reparaturen bis zur Planung — ich decke ein breites Spektrum
            an Handwerks- und Serviceleistungen ab.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ ...softInViewSpring, delay: i * 0.1 }}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
