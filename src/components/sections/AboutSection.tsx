"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Clock, Star } from "lucide-react";
import { softInViewSpring } from "@/lib/animations";

const values = [
  {
    icon: Shield,
    title: "Vertrauen",
    description:
      "Ich arbeite transparent und ehrlich — Sie wissen immer, was getan wird und warum.",
  },
  {
    icon: Clock,
    title: "Zuverlässigkeit",
    description:
      "Termine werden eingehalten. Was ich zusage, setze ich um — pünktlich und sorgfältig.",
  },
  {
    icon: Star,
    title: "Qualität",
    description:
      "Höchste Ansprüche an das Ergebnis. Jede Arbeit wird so ausgeführt, als wäre es mein eigenes Zuhause.",
  },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="ueber-mich" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Text */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={softInViewSpring}
          >
            <span className="inline-block bg-orange-50 text-orange-600 font-semibold text-sm px-4 py-1.5 rounded-full uppercase tracking-wider mb-6">
              Über mich
            </span>
            <h2 className="text-4xl font-bold text-neutral-900 mb-6 leading-tight">
              Dominik Lenz —<br />
              <span className="text-orange-600">Ihr persönlicher</span><br />
              Ansprechpartner
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed mb-6">
              Meine Arbeit basiert auf drei zentralen Werten:{" "}
              <strong className="text-neutral-900">Vertrauen, Zuverlässigkeit und Qualität.</strong>{" "}
              Diese Werte spiegeln sich in jedem Auftrag wider.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-8">
              Ich begleite Sie persönlich von der ersten Beratung bis zur finalen Umsetzung.
              Mit LELO bekommen Sie keinen anonymen Betrieb, sondern einen verlässlichen
              Partner, der für seine Arbeit einsteht.
            </p>
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-7 py-3.5 rounded-xl font-semibold transition-colors"
            >
              Jetzt Kontakt aufnehmen
            </a>
          </motion.div>

          {/* Right: Value Cards */}
          <div className="flex flex-col gap-5">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ ...softInViewSpring, delay: i * 0.15 }}
                  className="flex gap-5 p-6 bg-neutral-50 rounded-2xl border border-neutral-100 hover:border-orange-200 transition-colors"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-neutral-900 mb-1">{value.title}</h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
