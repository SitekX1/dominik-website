"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaqCard } from "@/components/ui/FaqCard";
import { softInViewSpring } from "@/lib/animations";

const faqs = [
  {
    question: "In welchen Regionen sind Sie tätig?",
    answer:
      "Ich bin hauptsächlich im Raum Donau-Ries tätig — Huisheim, Gosheim, Donauwörth und umliegende Gemeinden. Für größere Projekte bin ich auch in weiteren Regionen verfügbar.",
  },
  {
    question: "Wie schnell kann ich einen Termin bekommen?",
    answer:
      "In der Regel innerhalb weniger Werktage. Für dringende Fälle versuche ich kurzfristig zu helfen — rufen Sie einfach an.",
  },
  {
    question: "Wie werden die Kosten berechnet?",
    answer:
      "Nach einer kostenlosen Erstberatung erhalten Sie ein transparentes Angebot ohne versteckte Kosten. Erst nach Ihrer Zustimmung beginnen wir.",
  },
  {
    question: "Bieten Sie auch gewerbliche Dienstleistungen an?",
    answer:
      "Ja — ich arbeite für Privathaushalte und Unternehmen. Besonders bei Netzwerkverlegung und Hausmeisterservice habe ich umfangreiche gewerbliche Erfahrung.",
  },
  {
    question: "Haben Sie eine Haftpflichtversicherung?",
    answer:
      "Ja, ich bin vollständig haftpflichtversichert. Sie können sich auf qualitativ hochwertige Arbeit mit dem Schutz verlassen, den Sie verdienen.",
  },
  {
    question: "Wie kontaktiere ich Sie am besten?",
    answer:
      "Am schnellsten telefonisch unter +49 179 1611556. Alternativ per E-Mail an lelo.kontakt@gmail.com — ich antworte innerhalb von 24 Stunden.",
  },
];

export function FaqSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="faq" className="bg-[#180A05] py-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={softInViewSpring}
          className="text-center mb-14"
        >
          <p className="text-[#D4A017] font-bold text-xs tracking-[0.3em] uppercase mb-4">
            Häufige Fragen
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white uppercase leading-tight tracking-tight">
            FRAGEN &<br />ANTWORTEN
          </h2>
        </motion.div>

        <div className="flex flex-col gap-2">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ ...softInViewSpring, delay: i * 0.07 }}
            >
              {/* Dark-styled FaqCard */}
              <div className="border border-white/10 bg-[#241208] rounded-none">
                <FaqCard question={faq.question} answer={faq.answer} dark />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
