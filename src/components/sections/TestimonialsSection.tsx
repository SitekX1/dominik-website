"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { softInViewSpring } from "@/lib/animations";

const testimonials = [
  {
    quote: "Dominik hat unsere Fußbodenverlegung schnell und sauber erledigt. Das Ergebnis ist perfekt — wir sind begeistert von der Qualität und Sorgfalt.",
    name: "Familie Schneider",
    location: "Donauwörth",
  },
  {
    quote: "Der Hausmeisterservice ist einfach zuverlässig. Alles wird pünktlich erledigt, die Kommunikation ist einwandfrei. Absolut empfehlenswert.",
    name: "H. Müller",
    location: "Nördlingen",
  },
  {
    quote: "Die Netzwerkverkabelung in unserem Büro wurde professionell und termintreu umgesetzt. Sehr strukturierte Arbeitsweise — top!",
    name: "S. Weber GmbH",
    location: "Huisheim",
  },
];

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-[#F8F4EE] py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={softInViewSpring}
          className="mb-16"
        >
          <p className="text-[#D4A017] font-bold text-xs tracking-[0.3em] uppercase mb-4">
            Kundenstimmen
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-[#180A05] uppercase leading-tight tracking-tight">
            ZUFRIEDENE KUNDEN<br />
            TEILEN IHRE ERFAHRUNGEN
          </h2>
          <p className="text-[#180A05]/50 mt-4 text-sm">
            Unsere Kunden teilen weiterhin positive Erfahrungen über die Qualität.
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="flex flex-col gap-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ ...softInViewSpring, delay: i * 0.15 }}
              className="py-10 border-t border-[#180A05]/10 last:border-b"
            >
              <p className="text-xl sm:text-2xl text-[#180A05] leading-relaxed font-light italic mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="w-8 h-px bg-[#D4A017]" />
                <div className="text-center">
                  <p className="font-black text-[#180A05] text-sm tracking-wide">{t.name}</p>
                  <p className="text-[#D4A017] text-xs font-medium mt-0.5">{t.location}</p>
                </div>
                <div className="w-8 h-px bg-[#D4A017]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
