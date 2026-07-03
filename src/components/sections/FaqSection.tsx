"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaqCard } from "@/components/ui/FaqCard";
import { softInViewSpring } from "@/lib/animations";

const faqs = [
  {
    question: "In welchen Regionen sind Sie tätig?",
    answer:
      "Ich bin hauptsächlich im Raum Donau-Ries und Umgebung tätig — Huisheim, Gosheim, Donauwörth und umliegende Gemeinden. Für größere Projekte bin ich auch in weiteren Regionen verfügbar. Sprechen Sie mich einfach an.",
  },
  {
    question: "Wie schnell kann ich einen Termin bekommen?",
    answer:
      "In der Regel können wir innerhalb weniger Werktage einen Termin vereinbaren. Für dringende Fälle versuche ich eine kurzfristige Lösung zu finden. Rufen Sie mich an — oft klappt es schneller als erwartet.",
  },
  {
    question: "Wie werden die Kosten berechnet?",
    answer:
      "Jedes Projekt ist individuell. Nach einer kostenlosen Erstberatung und bei Bedarf einer Besichtigung erhalten Sie ein transparentes Angebot ohne versteckte Kosten. Erst wenn Sie zustimmen, wird gearbeitet.",
  },
  {
    question: "Bieten Sie auch gewerbliche Dienstleistungen an?",
    answer:
      "Ja, ich arbeite sowohl für Privathaushalte als auch für Unternehmen. Besonders bei der Netzwerkverlegung und Hausmeisterservices habe ich umfangreiche Erfahrung im gewerblichen Bereich.",
  },
  {
    question: "Haben Sie eine Haftpflichtversicherung?",
    answer:
      "Ja, ich bin vollständig haftpflichtversichert. Sie können sich auf qualitativ hochwertige Arbeit verlassen — mit dem Schutz, den Sie und Ihre Immobilie verdienen.",
  },
  {
    question: "Wie kontaktiere ich Sie am besten?",
    answer:
      "Am schnellsten erreichen Sie mich telefonisch unter +49 179 1611556 oder per E-Mail an lelo.kontakt@gmail.com. Alternativ nutzen Sie das Kontaktformular auf dieser Seite — ich melde mich innerhalb von 24 Stunden.",
  },
];

export function FaqSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="faq" className="py-24 bg-[#fafafa]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={softInViewSpring}
          className="text-center mb-12"
        >
          <span className="inline-block bg-orange-50 text-orange-600 font-semibold text-sm px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
            Häufige Fragen
          </span>
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">
            Fragen & Antworten
          </h2>
          <p className="text-neutral-600 text-lg">
            Alles Wichtige auf einen Blick. Nicht dabei? Einfach anrufen oder schreiben.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ ...softInViewSpring, delay: i * 0.08 }}
            >
              <FaqCard question={faq.question} answer={faq.answer} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
