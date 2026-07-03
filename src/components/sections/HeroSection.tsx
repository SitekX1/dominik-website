"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, Mail, ShieldCheck, Clock, Star } from "lucide-react";
import { SpinningBadge } from "@/components/ui/SpinningBadge";
import { heroContainerVariants, heroItemVariants } from "@/lib/animations";

const trustBadges = [
  { icon: ShieldCheck, label: "Versichert & zuverlässig" },
  { icon: Clock, label: "Schnelle Reaktionszeit" },
  { icon: Star, label: "Persönliche Beratung" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16 lg:py-24">

          {/* Left: Text Content */}
          <motion.div
            variants={heroContainerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              variants={heroItemVariants}
              className="inline-block bg-orange-50 text-orange-600 font-semibold text-sm px-4 py-1.5 rounded-full uppercase tracking-wider mb-6"
            >
              Ihr Handwerker vor Ort — Huisheim & Umgebung
            </motion.span>

            <motion.h1
              variants={heroItemVariants}
              className="text-5xl lg:text-6xl font-bold text-neutral-900 leading-[1.1] mb-6"
            >
              Vertrauen.<br />
              Zuverläs&shy;sigkeit.<br />
              <span className="text-orange-600">Qualität.</span>
            </motion.h1>

            <motion.p
              variants={heroItemVariants}
              className="text-lg text-neutral-600 leading-relaxed mb-8 max-w-lg"
            >
              Von der ersten Beratung bis zur finalen Umsetzung —
              ich begleite Sie persönlich. Ob Hausmeisterservice,
              Fußbodenverlegung, Netzwerkverkabelung oder 3D-Planung.
            </motion.p>

            <motion.div
              variants={heroItemVariants}
              className="flex flex-col sm:flex-row gap-3 mb-10"
            >
              <a
                href="tel:+491791611556"
                className="flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-7 py-3.5 rounded-xl font-semibold text-base transition-colors shadow-lg shadow-orange-200"
              >
                <Phone size={17} />
                +49 179 1611556
              </a>
              <a
                href="#kontakt"
                className="flex items-center justify-center gap-2 border-2 border-neutral-200 hover:border-orange-300 text-neutral-700 px-7 py-3.5 rounded-xl font-semibold text-base transition-colors"
              >
                <Mail size={17} />
                Anfrage senden
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              variants={heroItemVariants}
              className="flex flex-wrap gap-4"
            >
              {trustBadges.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-sm text-neutral-600">
                  <Icon size={16} className="text-orange-500" />
                  <span>{label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80"
                alt="Professioneller Handwerker bei der Arbeit"
                fill
                className="object-cover"
                priority
              />
              {/* Overlay gradient at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/30 to-transparent" />
            </div>

            {/* Spinning Badge — floating */}
            <div className="absolute -bottom-6 -left-6 z-10">
              <SpinningBadge
                text="• LELO Dominik Lenz • 24/7 Notdienst •"
                phoneNumber="+491791611556"
              />
            </div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute top-6 -right-4 bg-white rounded-2xl shadow-xl p-4 border border-neutral-100"
            >
              <p className="text-xs text-neutral-500 font-medium">Verfügbar</p>
              <p className="text-2xl font-bold text-neutral-900">24 / 7</p>
              <p className="text-xs text-orange-600 font-medium mt-0.5">Notdienst</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-orange-50 rounded-full -translate-y-1/2 translate-x-1/2 -z-10" />
    </section>
  );
}
